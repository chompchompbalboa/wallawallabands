import casual from 'casual'

casual.define('slug', () => {
  return (casual.word + '-' + casual.word)
})

const mocks = {
  String: () => 'It works!',
  Query: () => ({
    band: (root, args) => {
      return {id: args.id}
    }
  }),
  Band: () => ({
    name: () => casual.title,
    slug: () => casual.slug
  })
}

export default mocks
