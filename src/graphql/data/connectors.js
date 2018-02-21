import path from 'path'
import Sequelize from 'sequelize'
import _ from 'lodash'

import casual from 'casual'

//------------------------------------------------------------------------------
// Setup
//------------------------------------------------------------------------------

// Initialize the database
const db = new Sequelize('wallawallabands', null, null, {
  dialect: 'sqlite',
  storage: path.resolve(__dirname, '..', 'data/wallawallabands.sqlite')
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

const AlbumModel = db.define('album', {
  cover: {type: Sequelize.STRING},
  title: {type: Sequelize.STRING},
  year: {type: Sequelize.STRING}
})

const SongModel = db.define('song', {
  title: {type: Sequelize.STRING},
  length: {type: Sequelize.STRING},
  audio: {type: Sequelize.STRING}
})

BandModel.hasMany(PhotoModel)
BandModel.hasMany(AlbumModel)
PhotoModel.belongsTo(BandModel)
AlbumModel.belongsTo(BandModel)
AlbumModel.hasMany(SongModel)
SongModel.belongsTo(AlbumModel)

const images = [
  {src: "img/featured-bands/modest-mouse.jpg", width: 1200, height: 1200},
  {src: "img/featured-bands/black-pistol-fire.jpg", width: 1920, height: 1080},
  {src: "img/featured-bands/bastille.jpg", width: 1023 , height: 1073}
]

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

const mockAlbums = [
  {cover: "img/album-covers/theBlast_lockDownLightsOut.jpg", title: "Lock Down Lights Out", year: "2007"}
]

const mockSongs = [
  {title: "I Like My Heart Broken", length: "3:13", audio: "audio/the-blast/lock-down-lights-out/01 I Like My Heart Broken.mp3"},
  {title: "Drink Me Beautiful", length: "3:33", audio: "audio/the-blast/lock-down-lights-out/02 Drink Me Beautiful.mp3"},
  {title: "Back Into The Woods", length: "2:58", audio: "audio/the-blast/lock-down-lights-out/03 Back Into The Woods.mp3"},
  {title: "Little Lover", length: "3:36", audio: "audio/the-blast/lock-down-lights-out/04 Little Lover.mp3"},
  {title: "My Apologies", length: "2:17", audio: "audio/the-blast/lock-down-lights-out/05 My Apologies.mp3"},
  {title: "Acid Queen", length: "3:09", audio: "audio/the-blast/lock-down-lights-out/06 Acid Queen.mp3"},
  {title: "Lock Down Lights Out", length: "3:29", audio: "audio/the-blast/lock-down-lights-out/07 Lock Down Lights Out.mp3"},
  {title: "Trouble", length: "2:51", audio: "audio/the-blast/lock-down-lights-out/08 Trouble.mp3"},
  {title: "Jam On District", length: "3:47", audio: "audio/the-blast/lock-down-lights-out/09 Jam On District.mp3"},
  {title: "Rocky Bottom", length: "2:11", audio: "audio/the-blast/lock-down-lights-out/10 Rock Bottom.mp3"},
  {title: "New Orleans", length: "3:23", audio: "audio/the-blast/lock-down-lights-out/11 New Orleans.mp3"},
  {title: "Sex Kitten", length: "3:04", audio: "audio/the-blast/lock-down-lights-out/12 Sex Kitten.mp3"},
  {title: "Dubbs", length: "3:27", audio: "audio/the-blast/lock-down-lights-out/13 Dubbs.mp3"},
  {title: "Love You Til You Bleed", length: "8:26", audio: "audio/the-blast/lock-down-lights-out/14 Love You Til You Bleed.mp3"}
]
/*
db.sync({ force: true }).then(() => {
  _.forEach(mockBands, (band, index) => {
    return BandModel.create({
      name: band.name,
      slug: casual.word,
      bio: casual.sentences(5),
      coverImage: _.sample(images)['src'],
      featured: band.featured
    }).then((model) => {
      _.times(_.random(1,3), () => {
        let image = _.sample(images)
        model.createPhoto({
          src: image.src,
          width: image.width,
          height: image.height
        })
        let album = _.sample(mockAlbums)
        return model.createAlbum({
          cover: album.cover,
          title: album.title,
          year: album.year
        }).then((model) => {
          _.forEach(mockSongs, (song, index) => {
            return model.createSong({
              title: song.title,
              length: song.length,
              audio: song.audio
})})})})})})})
*/

const Band = db.models.band
const Photo = db.models.photo
const Album = db.models.album
const Song = db.models.song

export { Band, Photo, Album, Song }
