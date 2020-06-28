import Vue from 'vue'
import Vuex from 'vuex'
import { Auth, IUserState } from './modules/auth';
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['auth']
});

const store = new Vuex.Store({
    modules: { auth: Auth },
    plugins: [vuexLocal.plugin],
  });

export default store;