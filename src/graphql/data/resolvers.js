import { Band, Photo, Album, Song } from './connectors'

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
  }
}

export default resolvers
