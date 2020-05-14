import { Guid } from 'guid-typescript'

export default class EpisodeModel {
    readonly Id: Guid
    readonly EpisodeNumber: number
    readonly Author: string
    readonly Thumbnail: string
    readonly Title: string
    readonly Slug: string
    readonly Progress: number
    readonly ShowGuid: Guid

    constructor (author: string, title: string, episodeNumber: number, slug: string,
      thumbnail: string, progress = 0, showGuid: Guid) {
      this.Id = Guid.create()
      this.Author = author
      this.Thumbnail = thumbnail
      this.Title = title
      this.Slug = slug
      this.Progress = progress
      this.ShowGuid = showGuid
      this.EpisodeNumber = episodeNumber
    }
}
