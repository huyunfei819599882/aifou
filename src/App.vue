<template>
  <div id="app">
	  <div class="inner-container">
		<div class="button">
			<div class="nav" v-for="(item,i) in footNav" @click="selectMapNav(item.title)" :key="i">
				<img :src="isSelect === item.title ? item.url1 : item.url" alt="">	
				<p>{{item.title}}</p>
			</div>
		</div>
		<div class="bodyer" >
			<router-view></router-view>
		</div>
	  </div>	
  </div>
</template>

<script>
import router from './router'	
import Vue from 'vue'

import z1 from './assets/imgs/z1.png'
import z2 from './assets/imgs/z2.png'
import x1 from './assets/imgs/x1.png'
import x2 from './assets/imgs/x2.png'
import g1 from './assets/imgs/g1.png'
import g2 from './assets/imgs/g2.png'
import w1 from './assets/imgs/w1.png'
import w2 from './assets/imgs/w2.png'
import h1 from './assets/imgs/h1.png'
import h2 from './assets/imgs/h2.png'
export default {
	data() {
		return {
			selected: 1,
			login:[],
			isSelect: '我要购买',
			footNav: [
				{title: '我要购买', url: z1, url1: z2},
				{title: '回收服务', url: h1, url1: h2},
				{title: '手机维修', url: x1, url1: x2},
				{title: '购物车', url: g1, url1: g2},
				{title: '我的', url: w1, url1: w2}
			]
		}
	},
	created(){
		console.log(this.arr)
	},
	methods: {
		selectMapNav (title) {
		  this.isSelect = title 
		  if (title=='我要购买') {router.push({path: '/index',props:"id"})} 
		  if (title=='回收服务') {router.push({path: '/huishou'})} 
		  if (title=='手机维修') {router.push({path: '/fix'})} 
		  if (title=='购物车') {router.push({path: '/gouwu'})}
		  if (title=='我的') {router.push({path: '/uc'})}
		}
	},
	computed: {
		arr(){
		  return this.$store.getters.getLogin
		}
	},
	
}

</script>

<style>
.bodyer{
	width: 100%;
}
.inner-container {
	width: 100%;
  position: absolute;
  left: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}
.inner-container::-webkit-scrollbar {
  display: none;
}
#app{
	overflow: hidden;
}	
.button {
	font-size: 12px;
	display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
	  height: 50px;
    border-top: 1px solid #ccc;
    background-color: #fff;
  	justify-content:space-around;
	  color: #999999;
}
.nav{
	display: flex;
	width: 50px;
	height: 100%;
	justify-content:center;
	flex-wrap:wrap;
}
.nav img{
	width: 30px;
	height: 30px;
}

</style>
