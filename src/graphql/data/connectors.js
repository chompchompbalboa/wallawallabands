import Sequelize from 'sequelize'
import casual from 'casual'
import _ from 'lodash'

import bastille from 'static/img/featured-bands/bastille.jpg'
import blackPistolFire from 'static/img/featured-bands/black-pistol-fire.jpg'
import modestMouse from 'static/img/featured-bands/modest-mouse.jpg'

// Seed casual so it loads the same data every time
casual.seed(213)

casual.define('coverImage', () => {
  const images = [
    bastille,
    blackPistolFire,
    modestMouse
  ]
  return _.sample(images)
})

const db = new Sequelize('wallawallabands', null, null, {
  dialect: 'sqlite',
  storage: './wallawallabands.sqlite'
})

const BandModel = db.define('band', {
  name: {type: Sequelize.STRING},
  slug: {type: Sequelize.STRING},
  bio: {type: Sequelize.STRING(1000)},
  coverImage: {type: Sequelize.STRING},
  featured: {type: Sequelize.BOOLEAN}
})

const mockBands = [
  {name: "A Day To Remember", featured: false},
  {name: "Alkaline Trio", featured: false},
  {name: "Bad Religion", featured: false},
  {name: "Bring Me the Horizon", featured: false},
  {name: "Defeater", featured: false},
  {name: "Dropkick Murphys", featured: false},
  {name: "Escape the Fate", featured: false},
  {name: "Every Time I Die", featured: false},
  {name: "I Killed the Prom Queen", featured: false},
  {name: "Jamie T", featured: false},
  {name: "John K. Samson", featured: true},
  {name: "Letlive.", featured: false},
  {name: "Matchbook Romance", featured: false},
  {name: "Now and On Earth", featured: false},
  {name: "Obey the Brave", featured: false},
  {name: "Off With Their Heads", featured: false},
  {name: "Operation Ivy", featured: true},
  {name: "Parkway Drive", featured: false},
  {name: "Pennywise", featured: false},
  {name: "Pianos Become the Teeth", featured: false},
  {name: "Plague Vendor", featured: false},
  {name: "Quicksand", featured: false},
  {name: "Raised Fist", featured: true},
  {name: "Rancid", featured: false},
  {name: "Refused", featured: false},
  {name: "Weakerthans", featured: false},
  {name: "Weezer", featured: false},
  {name: "Modest Mouse", featured: false},
  {name: "Black Pistol Fire", featured: false}
]

db.sync({ force: true }).then(() => {
  _.forEach(mockBands, (band, index) => {
    return BandModel.create({
      name: band.name,
      slug: casual.word,
      bio: casual.sentences(5),
      coverImage: casual.coverImage,
      featured: band.featured
    })
  })
})

const Band = db.models.band

export { Band }
