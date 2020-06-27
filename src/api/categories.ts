import { Database } from '@/utils/database';

export default {
    getList() {
        return Database.collection('categories').get();
    }
};