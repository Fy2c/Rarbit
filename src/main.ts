import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'


Vue.config.productionTip = false

const ignoreWarnMessage = 'The .native modifier for v-on is only valid on components but it was used on <div>.';
Vue.config.warnHandler = function(msg: string, vm: Vue, trace: string) {
  if (msg === ignoreWarnMessage) {
    (msg as any) = null;
    (vm as any) = null;
    (trace as any) = null;
  }
}

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

