import Sequelize from 'sequelize'
import casual from 'casual'
import _ from 'lodash'

import bastille from 'static/img/featured-bands/bastille.jpg'
import blackPistolFire from 'static/img/featured-bands/black-pistol-fire.jpg'
import modestMouse from 'static/img/featured-bands/modest-mouse.jpg'


//------------------------------------------------------------------------------
// Setup
//------------------------------------------------------------------------------

// Initialize the database
const db = new Sequelize('wallawallabands', null, null, {
  dialect: 'sqlite',
  storage: '../data/wallawallabands.sqlite'
})

const BandModel = db.define('band', {
  name: {type: Sequelize.STRING},
  slug: {type: Sequelize.STRING},
  bio: {type: Sequelize.STRING(1000)},
  coverImage: {type: Sequelize.STRING},
  featured: {type: Sequelize.BOOLEAN}
})

const PhotoModel = db.define('photo', {
  src: {type: Sequelize.STRING},
  width: {type: Sequelize.INTEGER},
  height: {type: Sequelize.INTEGER}
})

BandModel.hasMany(PhotoModel)
PhotoModel.belongsTo(BandModel)

const Band = db.models.band
const Photo = db.models.photo

export { Band, Photo }
