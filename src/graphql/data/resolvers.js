//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import fs from 'fs'
import promisesAll from 'promises-all'
import shortid from 'shortid'
import { GraphQLUpload } from 'apollo-upload-server'

import { Band, Photo, Album, Song } from './connectors'

//------------------------------------------------------------------------------
// Resolvers
//------------------------------------------------------------------------------

const resolvers = {

  Query: {

    band(_, args) {
      return Band.find({ where: args })
    },

    allBands() {
      return Band.findAll()
    },

    getBandBySlug(_, args) {
      return Band.find({where: {slug: args.slug}})
    },

    getFeaturedBands() {
      return Band.findAll({where: {featured: true}})
    }
  },

  Mutation: {

    editBand(_, args) {
      return Band.findById(args.id).then((bandInstance) => {
        return bandInstance.update({
          bio: args.bio
        }).then((band) => {
          return band
        })
      }).catch(e => {
        console.log(e)
      })
    },

    deletePhoto(_, args) {
      return Photo.findById(args.id).then((photo) => {
        const bandId = photo.bandId
        return photo.destroy().then((response) => {
          return Band.findById(bandId)
        })
      }).catch(e => {
        console.log(e)
      })
    },

    singleUpload: (_, { files }) => processUpload(file),

    multipleUpload: async (_, { files }) => {
      const { resolve, reject } = await promisesAll.all(files.map(processUpload))

      if(reject.length) {
        reject.forEach(({ name, message }) =>
        console.error(`${name}: ${message}`)
      )}
      return resolve
    }
  },

  Band: {

    photos(band) {
      return band.getPhotos()
    },

    albums(band) {
      return band.getAlbums()
    }
  },

  Album: {

    songs(album) {
      return album.getSongs()
    }
  },

  Upload: GraphQLUpload
}

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

// Uploading Files

const uploadDir = "/uploads"

const storeFS = ({ stream, filename }) => {
  const id = shortid.generate()
  const path = `${uploadDir}/${id}-${filename}`
  return new Promise((resolve, reject) =>
    stream
      .on('error', error => {
        if (stream.truncated)
          // Delete the truncated file
          fs.unlinkSync(path)
        reject(error)
      })
      .on('end', () => resolve({ id, path }))
      .pipe(fs.createWriteStream(path))
)}

const processUpload = async upload => {
  console.log(upload)
  const { stream, filename, mimetype, encoding } = await upload
  const { id, path } = await storeFS({ stream, filename })
  return Photo.build({
    filename: filename,
    mimetype: mimetype,
    encoding: encoding,
    path: path
  }).save().then((photo) => {
    return photo
  })
}

export default resolvers
