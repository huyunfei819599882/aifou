// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/normalize.css'
import './assets/css/reset.css'
import MintUI from 'mint-ui'
import { Toast } from 'mint-ui'
import 'mint-ui/lib/style.css'
import quickMenu from 'vue-quick-menu'

Vue.use(MintUI)
Vue.use(quickMenu)
// Vue.prototype.$store = store
Vue.config.productionTip = false
//路由全局前置守卫

router.beforeEach((to,from,next)=>{
  // console.log('to:',to,to.meta.isLogin);
  if(to.meta.isLogin){
    if(sessionStorage.use){
      next();
    }else{
      Toast({
        message: '请先登录',
        position: 'bottom',
        duration: 1000
      });
      setTimeout(()=>{
        next('/login');
      },1100)
    }
  }else{
    next();
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
