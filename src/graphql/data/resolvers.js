import { Band } from './connectors'

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
    }
  }
}

export default resolvers
