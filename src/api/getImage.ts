import { ImageType } from '../types/types'

const USER_KEY = ''
const URL = `https://api.unsplash.com/photos/random?client_id=${USER_KEY}`

const getImage = (): Promise<ImageType> =>
  fetch(URL).then((res) => {
    if (res.ok) {
      return res.json()
    }
    throw new Error(`Ошибка ${res.status}`)
  })

export default getImage
