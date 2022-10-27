type Urls = {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

type Links = {
  self: string
  html: string
  download: string
  download_location: string
}

export type ImageType = {
  id: string
  created_at: string
  updated_at: string
  promoted_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  description: null | string
  alt_description: null | string
  urls: Urls
  links: Links
  categories: unknown[]
  likes: number
  liked_by_user: boolean
  current_user_collections: unknown[]
  sponsorship: null | string
  topic_submissions: object
  user: object
  exif: object
  location: object
  views: number
  downloads: number
}

export type ImageInfo = {
  url: string
  description: string | null
  color: string
}

export type TOptin = {
    value: string
  }
