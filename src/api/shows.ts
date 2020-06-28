import { Database } from '@/utils/database';
import { firestore } from 'firebase/app'

class ShowApi{
    private get _showCollection() : firestore.Query<firestore.DocumentData> {
        return Database.collection('shows');
    }

    getShowList(categoryId: any = null, sorting: any = null, pagination: any = {}){
        return [
            {
              author: 'Anais Fleming', 
              title: 'My Life is a Journey - Love and Piece',
              slug:'my_life_is_a_journey', 
              poster:'/assets/movies/movie-02.png'
            },
            { 
              auth: 'Leandro Beasley', 
              title: 'Soul Food - Eat with your healthy habits',
              slug: 'soul_food', 
              poster: '/assets/movies/movie-03.png'
            },
            {
              auth: 'Adem Croft', 
              title: 'Gem of California',
              slug: 'gem_of_california', 
              poster: '/assets/movies/movie-04.png'
            }
          ]
    }
 
    // async getShowList(categoryId: any = null, sorting: any = null, pagination: any = {}) {
        // const limit = pagination.limit || 20;
        // const page = (pagination.page || 0) * limit;
        // const hasCategory = !!categoryId && typeof categoryId === 'number';

        // const query = hasCategory
        //       ? this._showCollection.where('categoryId', '==', categoryId)
        //       : this._showCollection;

        // var showSnaps = await query.limit(limit)
        //                            .orderBy(sorting || 'createdAt', 'desc')
        //                            .startAfter(page)
        //                            .get();

        // const userIds = showSnaps.docs.map((x: any) => x.userId);
        // const userSnaps = await Database.collection('users').where('uid', 'in', userIds).get();

        // return showSnaps.docs.map((show: any) =>
        //             Object.assign(
        //                     {}, 
        //                     show, 
        //                     userSnaps.docs.find((user:any) => user.uid == show.uid) || {}
        //             ));
    // }
} 

export default new ShowApi();