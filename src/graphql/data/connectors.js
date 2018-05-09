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

const SimilarBandsModel = db.define('similar_bands', { 
  bandId: {type: Sequelize.INTEGER},
  similarBandId: {type: Sequelize.INTEGER}
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
  trackNumber: {type: Sequelize.INTEGER},
  length: {type: Sequelize.STRING},
  audio: {type: Sequelize.STRING}
})

BandModel.hasMany(PhotoModel, {onDelete: 'cascade'})
BandModel.hasMany(AlbumModel, {onDelete: 'cascade'})
BandModel.belongsToMany(BandModel, {as: "SimilarBands", through: SimilarBandsModel})
PhotoModel.belongsTo(BandModel)
AlbumModel.belongsTo(BandModel)
AlbumModel.hasMany(SongModel, {onDelete: 'cascade'})
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
  {title: "I Like My Heart Broken", trackNumber: 1, length: "3:13", audio: "https://soundcloud.com/famous_dex1/japan"},
  {title: "Drink Me Beautiful", trackNumber: 2, length: "3:33", audio: "https://soundcloud.com/rich-the-kid/plug-walk-1"},
  {title: "Back Into The Woods", trackNumber: 3, length: "2:58", audio: "https://soundcloud.com/nba-youngboy/through-the-storm"},
  {title: "Little Lover", trackNumber: 4, length: "3:36", audio: "https://soundcloud.com/uiceheidd/lucid-dreams-forget-me"},
  {title: "My Apologies", trackNumber: 5, length: "2:17", audio: "https://soundcloud.com/wavey-hefner/esskeetit"},
  {title: "Acid Queen", trackNumber: 6, length: "3:09", audio: "https://soundcloud.com/wnhhlmao/juice-wrld-lucid-dreams-6ix9ine-gummo-billy-rondo-gotti-keke-drake-nice-for-what-famous-dex-japan-lil-uzi-vert-rich-forever-leak-lil-pump-esskeetit-nba-young-boy-diamond-teeth-samurai-through-the-storm-young-thug-anybody-now-up-lil-dicky-freaky-friday"},
  {title: "Lock Down Lights Out", trackNumber: 7, length: "3:29", audio: "https://soundcloud.com/octobersveryown/blocboy-jb-look-alive-ft-drake"},
  {title: "Trouble", trackNumber: 8, length: "2:51", audio: "ahttps://soundcloud.com/uiceheidd/all-girls-are-same-999-prod-nick-mira"},
  {title: "Jam On District", trackNumber: 9, length: "3:47", audio: "https://soundcloud.com/scumgang6ix9ine/billy"},
  {title: "Rocky Bottom", trackNumber: 10, length: "2:11", audio: "https://soundcloud.com/lil-dicky/freaky-friday-feat-chris-brown"},
  {title: "New Orleans", trackNumber: 11, length: "3:23", audio: "https://soundcloud.com/jahseh-onfroy/fuck-love-feat-trippie-redd"},
  {title: "Sex Kitten", trackNumber: 12, length: "3:04", audio: "https://soundcloud.com/hamzanamira/hamza-namira-dari-ya-alby"},
  {title: "Dubbs", trackNumber: 13, length: "3:27", audio: "https://soundcloud.com/rich-the-kid/new-freezer-feat-kendrick"},
  {title: "Love You Til You Bleed", trackNumber: 14, length: "8:26", audio: "https://soundcloud.com/landoncube/lil-skies-ft-landon-cube-red-roses-prod-menoh-beats"}
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
              trackNumber: song.trackNumber,
              length: song.length,
              audio: song.audio
})})})})})})})
*/

const Band = db.models.band
const SimilarBands = db.models.similar_bands
const Photo = db.models.photo
const Album = db.models.album
const Song = db.models.song

export { Band, SimilarBands, Photo, Album, Song }
