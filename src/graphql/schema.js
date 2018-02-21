import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools'
// import mocks from './data/mocks'
import resolvers from './data/resolvers'

const typeDefs = `
  type Query {
    band(id: Int): Band
    allBands: [Band]
    getBandBySlug(slug: String): Band
    getFeaturedBands: [Band]
  }

  type Band {
    id: Int
    name: String
    slug: String
    bio: String
    coverImage: String
    featured: Boolean
    photos: [Photo]
    albums: [Album]
  }

  type Photo {
    id: Int
    src: String
    width: Int
    height: Int
  }

  type Album {
    id: Int
    cover: String
    title: String
    year: String
    songs: [Song]
  }

  type Song {
    id: Int
    title: String
    length: String
    audio: String
  }
`

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

// addMockFunctionsToSchema({schema, mocks})

export default schema
