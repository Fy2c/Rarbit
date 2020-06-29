import { Database } from '@/utils/database';
import Settings from '@/settings';
class ShowApi{

  getShowList(categoryId: any = null, sorting: any = null, pagination: any = {}){
        return [
            {
              author: 'Anais Fleming', 
              title: 'My Life is a Journey - Love and Piece',
              slug:'my_life_is_a_journey', 
              poster:'/assets/movies/movie-02.png'
            },
            { 
              author: 'Leandro Beasley', 
              title: 'Soul Food - Eat with your healthy habits',
              slug: 'soul_food', 
              poster: '/assets/movies/movie-03.png'
            },
            {
              author: 'Adem Croft', 
              title: 'Gem of California',
              slug: 'gem_of_california', 
              poster: '/assets/movies/movie-04.png'
            }
          ]
    }
 
  async getShowListV2(categoryId: any = null, sorting: any = null, pagination: any = {}) {
    const limit = pagination.limit || Settings.Rarbit.showPerPage;
    const page = (pagination.page || 0) * limit;
    const showCollection = Database.collection('shows');

    const query = categoryId == 0 //show Evertything
                ? showCollection
                : showCollection.where('categoryId', '==', categoryId);
        
    let showSnaps = await query.limit(limit).orderBy('createdAt', 'desc')
                               .startAfter(page).get();

    const userIds = [...new Set(showSnaps.docs.map((x: any) => x.userId))];
    const userSnaps = userIds.length == 0
                    ? { docs: [] }
                    : await Database.collection('users').where('uid', 'in', userIds).get();

    return showSnaps.docs.map((show: any) =>
      {
        let user: any = userSnaps.docs.find((user:any) => user.uid == show.uid) || {};

        return {
          title: show.title,
          poster: show.poster,
          author: user.displayName
        };
      });
  }
} 

export default new ShowApi();