import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index/index'
import huishou from '@/components/huishou/huishou'
import login from '@/components/login/login'
import nav from '@/components/nav/nav'
import uc from '@/components/uc/uc'
import fix from '@/components/fix/fix'

import gouwu from '@/components/gouwu/gouwu'
import xiangqing from '@/components/xiangqing/xiangqing'
import shangpin from '@/components/shangpin/shangpin'
import waiguan from '@/components/xiangqing/waiguan/waiguan'
import jiance from '@/components/xiangqing/jiance/jiance'
import dianchi from '@/components/xiangqing/dianchi/dianchi'
import pingmu from '@/components/xiangqing/pingmu/pingmu'
import shouhou from '@/components/xiangqing/shouhou/shouhou'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
	    redirect:'/index'
		
    },{
      path: '/index',
      name: 'index',
      component: index
    },{
      path: '/gouwu',
      name: 'gouwu',
	  meta:{isLogin:true,keepAlive:true},
      component: gouwu
    },{
      path: '/shangpin',
      name: 'shangpin',
      component: shangpin
    },{
      path: '/uc',
      name: 'uc',
	  meta:{isLogin:true,keepAlive:true},
      component: uc
    },{
      path: '/fix',
      name: 'fix',
      component: fix
    },{
      path: '/huishou',
      name: 'huishou',
      component: huishou
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/nav',
      name: 'nav',
      component: nav
    },{
      path: '/xiangqing',
      name: 'xiangqing',
      component: xiangqing,
      redirect:'/xiangqing/waiguan',
      children:[
        {path:"waiguan",name:"waiguan",component:waiguan},
        {path:"jiance",name:"jiance",component:jiance},
        {path:"dianchi",name:"dianchi",component:dianchi},
        {path:"pingmu",name:"pingmu",component:pingmu},
        {path:"shouhou",name:"shouhou",component:shouhou},
      ]
    }
  ]
})
