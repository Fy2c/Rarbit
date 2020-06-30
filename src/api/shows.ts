import { Database } from '@/utils/database';
import Settings from '@/settings';
import firebase from 'firebase/app';

const COLLECTION = 'shows';
const USER_LIST_COLLECTION = 'users';

class ShowApi{

  createShow(payload: any) {
    const currentUser = Database.app.auth().currentUser;

    if(!currentUser) return;

    payload.uid = currentUser.uid;

    return Database.collection(COLLECTION)
                   .add(payload);
  }

  getShowList(categoryId: any = null, sorting: any = null, pagination: any = {}){
    return new Promise(
      (reslove) => reslove(
        [
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
    ));
  }
 
  async getShowListV2(categoryId: any = null, sorting: any = null, pagination: any = {}) {
   
  }
} 

export default new ShowApi();