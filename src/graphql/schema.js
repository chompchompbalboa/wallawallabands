import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools'
import resolvers from './data/resolvers'

const typeDefs = `
  type Query {
    band(id: Int): Band
    allBands: [Band]
    getBandBySlug(slug: String): Band
    getFeaturedBands: [Band]
    uploads: [File]
  }

  type Mutation {
    editBand(id: Int, bio: String, name: String): Band,
    deletePhoto(id: Int): Band
    singleUpload(file: Upload!): File!
    multipleUpload(files: [Upload!]!): [File!]!
  }

  type Band {
    id: Int!
    name: String
    slug: String
    bio: String
    coverImage: String
    featured: Boolean
    photos: [Photo]
    albums: [Album]
  }

  type Photo {
    id: Int!
    src: String
    width: Int
    height: Int
  }

  type Album {
    id: Int!
    cover: String
    title: String
    year: String
    songs: [Song]
  }

  type Song {
    id: Int!
    title: String
    length: String
    audio: String
  }

  scalar Upload

  type File {
    id: Int!
    path: String!
    filename: String!
    mimetype: String!
    encoding: String!
  }
`

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema
