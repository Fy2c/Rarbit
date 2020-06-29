import firebase from "firebase";

class CategoryApi {
  public getCategory(): Promise<{id:number, name:string, slug:string}[]> {
    return new Promise(
          (resolve) => resolve([
            { id: 0, name: "Everything", slug: "everything" },
            { id: 1, name: "Documentary", slug: "documentary" },
            { id: 2, name: "Comedy", slug: "comedy" },
            { id: 3, name: "News", slug: "news" },
            { id: 4, name: "Music", slug: "music" },
            { id: 5, name: "Drama", slug: "drama" },
            { id: 6, name: "Cooking", slug: "cooking" },
            { id: 7, name: "History", slug: "history" }
        ])
      );
  }

  public getSorting(): Promise<{id:number, name:string, slug:string}[]> {
    return new Promise(
        (resolve) => resolve([
            { id: 0, name: "Popular", slug: "popular" },
            { id: 1, name: "Recently", slug: "recently" }
        ])
    );
  }
}

export default new CategoryApi();
