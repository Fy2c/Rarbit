import Vue from 'vue'
import Vuex from 'vuex'
import { Auth, IUserState } from './modules/auth';
import VuexPersistence from 'vuex-persist'
import Catergory from './modules/catergory';

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['auth', 'catergory']
});

const store = new Vuex.Store({
    modules: { auth: Auth, catergory: Catergory },
    plugins: [vuexLocal.plugin],
  });

export default store;