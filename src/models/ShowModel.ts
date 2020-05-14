import { Guid } from "guid-typescript";

export default class ShowModel {
    readonly Id: Guid
    readonly Author: string
    readonly Poster: string
    readonly Title: string
    readonly Slug: string

    constructor (author: string, title: string, slug: string, poster: string) {
      this.Author = author;
      this.Poster = poster;
      this.Title = title;
      this.Slug = slug;
      this.Id = Guid.create();
    }
  }