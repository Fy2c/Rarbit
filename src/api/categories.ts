import { Database } from '@/utils/database';

class CategoriesApi {
    getList() {
        return Database.collection('categories').get();
    }
};

export default new CategoriesApi();