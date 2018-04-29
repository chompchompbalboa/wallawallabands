//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import fs from 'fs'
import mkdirp from 'mkdirp'
import promisesAll from 'promises-all'
import shortid from 'shortid'
import { GraphQLUpload } from 'apollo-upload-server'
import _ from 'lodash'

import { Band, SimilarBands, Photo, Album, Song } from './connectors'

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
          bio: args.bio,
          slug: args.slug
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

    multipleUpload: async (_, { bandId, files, uploadFolder, dbModel }) => {
      const { resolve, reject } = await promisesAll.all(files.map(file => processUpload(bandId, file, uploadFolder, dbModel)))

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
    },

    similarBands(band) {
      return band.getSimilarBands()
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

const uploadBaseDir = (dbModel) => {
  const baseDir = (process.env.NODE_ENV==="development" ? "../static/" : "./public/")
  return baseDir + dbModel
}

const storeFS = ({ stream, filename, uploadFolder, dbModel }) => {
  const id = shortid.generate()
  const uploadBase = uploadBaseDir(dbModel)
  mkdirp(`${uploadBase}/${uploadFolder}`)
  const path = `${uploadBase}/${uploadFolder}/${id}-${filename}`
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

const processUpload = async (bandId, file, uploadFolder, dbModel) => {
  const { stream, filename, mimetype, encoding } = await file
  const { id, path } = await storeFS({ stream, filename, uploadFolder, dbModel })
  const src = _.replace(path, "../static/", "")
  return Photo.build({
    src: src,
    width: 1000,
    height: 1000,
    bandId: bandId
  }).save().then((photo) => {
    return photo
  })
}

export default resolvers
