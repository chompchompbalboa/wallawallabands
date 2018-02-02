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
  }

  type Photo {
    src: String
    width: Int
    height: Int
  }
`

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

// addMockFunctionsToSchema({schema, mocks})

export default schema
