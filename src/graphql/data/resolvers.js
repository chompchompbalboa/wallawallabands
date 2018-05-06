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
      //-- Albums --
      args.albums.map(album => {
        // Add new album
        if(album.id >= 1000000) {
          Album.create({
            bandId: args.id,
            cover: album.cover,
            title: album.title,
            year: album.year
          }).then(albumInstance => {
            album.songs.map(song => {
              Song.create({
                albumId: albumInstance.id,
                title: song.title,
                trackNumber: song.trackNumber,
                length: song.length,
                audio: song.audio
              })
            })
          })
        }
        // Update existing albums
        else {
          Album.findById(album.id).then(albumInstance => {
            albumInstance.update({
              cover: album.cover,
              title: album.title,
              year: album.year
            }).then(() => {
              album.songs.map(song => {
                // Add new songs
                if(song.id >= 1000000) {
                  Song.create({
                    albumId: album.id,
                    title: song.title,
                    trackNumber: song.trackNumber,
                    length: song.length,
                    audio: song.audio
                  })
                }
                // Update existing songs
                else {
                  Song.findById(song.id).then(songInstance => {
                    songInstance.update({
                      title: song.title,
                      trackNumber: song.trackNumber,
                      length: song.length,
                      audio: song.audio
                    })
                  })
                }
              })
            })
          })
        }
      })

      //-- Photos --
      args.photos.map(photo => {
        // Save new photos
        if(photo.id >= 1000000) {
          Photo.create({
            bandId: args.id,
            src: photo.src,
            height: photo.height,
            width: photo.width
          })
        }
        // Update existing photos
        else {
        Photo.findById(photo.id).then(photoInstance => {
          photoInstance.update({
            src: photo.src,
            height: photo.height,
            width: photo.width
          })
        })
      }})

      //-- Similar Bands --
      // Delete existing similar bands
      SimilarBands.destroy({
        where: {
          bandId: args.id
        }
      })
      // Add updated similar bands
      args.similarBands.map(similarBand => {
        SimilarBands.create({
            bandId: args.id,
            similarBandId: Number(similarBand.similarBandId)
        })
      })

      //-- Band --
      return Band.findById(args.id).then(bandInstance => {
        // Update band
        return bandInstance.update({
          bio: args.bio,
          slug: args.slug,
          photos: args.photos
        }).then(band => {
          return band
        })
      }).catch(e => {
        console.log(e)
      })
    },

    deleteAlbum(_, args) {
      Song.destroy({
        where: {
          albumId: args.id
        }
      })
      return Album.findById(args.id).then(album => {
        const bandId = album.bandId
        return album.destroy().then(response => {
          return Band.findById(bandId)
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

    deleteSong(_, args) {
      return Song.findById(args.id).then((song) => {
        return Album.findById(song.albumId).then(albumInstance => {
          return song.destroy().then((response) => {
            return Band.findById(albumInstance.bandId)
          })
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
