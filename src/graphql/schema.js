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
    editBand(id: Int, bio: String, name: String, slug: String, photos: [PhotoInput], albums: [AlbumInput], similarBands: [SimilarBandsInput]): Band
    deleteAlbum(id: Int): Band
    deletePhoto(id: Int): Band
    deleteSong(id: Int): Band
    singleUpload(file: Upload!): File!
    multipleUpload(bandId: Int!, files: [Upload!]!, uploadFolder: String!, dbModel: String!): [File!]!
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
    similarBands: [Band]
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
    trackNumber: Int
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

  input PhotoInput {
    id: Int!
    src: String
    width: Int
    height: Int
  }

  input AlbumInput {
    id: Int!
    cover: String
    title: String
    year: String
    songs: [SongInput]
  }

  input SimilarBandsInput {
    similarBandId: Int!
  }

  input SongInput {
    id: Int!
    trackNumber: Int
    title: String
    length: String
    audio: String
  }
`

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema
