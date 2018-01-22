import Sequelize from 'sequelize'
import casual from 'casual'
import _ from 'lodash'

// Seed casual so it loads the same data every time
casual.seed(123)

const db = new Sequelize('wallawallabands', null, null, {
  dialect: 'sqlite',
  storage: './wallawallabands.sqlite'
})

const BandModel = db.define('band', {
  name: {type: Sequelize.STRING},
  slug: {type: Sequelize.STRING},
  bio: {type: Sequelize.STRING(1000)}
})

const mockBands = [
  {name: "A Day To Remember"},
  {name: "Alkaline Trio"},
  {name: "Bad Religion"},
  {name: "Bring Me the Horizon"},
  {name: "Defeater"},
  {name: "Dropkick Murphys"},
  {name: "Escape the Fate"},
  {name: "Every Time I Die"},
  {name: "I Killed the Prom Queen"},
  {name: "Jamie T"},
  {name: "John K. Samson"},
  {name: "Letlive."},
  {name: "Matchbook Romance"},
  {name: "Now and On Earth"},
  {name: "Obey the Brave"},
  {name: "Off With Their Heads"},
  {name: "Operation Ivy"},
  {name: "Parkway Drive"},
  {name: "Pennywise"},
  {name: "Pianos Become the Teeth"},
  {name: "Plague Vendor"},
  {name: "Quicksand"},
  {name: "Raised Fist"},
  {name: "Rancid"},
  {name: "Refused"},
  {name: "Weakerthans"},
  {name: "Weezer"},
  {name: "Modest Mouse"},
  {name: "Black Pistol Fire"}
]

db.sync({ force: true }).then(() => {
  _.forEach(mockBands, (band, index) => {
    return BandModel.create({
      name: band.name,
      slug: casual.word,
      bio: casual.sentences(5)
    })
  })
})

const Band = db.models.band

export { Band }
