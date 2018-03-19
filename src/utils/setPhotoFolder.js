import _ from 'lodash'

const setPhotoFolder = (band) => {
  return _.snakeCase(band.name)
}

export default setPhotoFolder
