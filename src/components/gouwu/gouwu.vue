<template>
  <div class="gouwu">
	  <div class="toper">
		  <p>购物车</p>
		  <div>
			  <span @click="fn">编辑</span>
		  </div>
	  </div>
	  <div class="gouwu-time">内完成该产品的支付</div>
	  <div class="gouwu-goods" v-for="(item,i) in getLists" :key="i">
		  <input type="checkbox" checked="item.checked" @click="changeCheck(i)">
		  <div class="main">
			  <img class="thumb" :src="item.icon">
			  <div class="content">
				<p class="title">{{item.name}}</p>
				<p class="info">
					<span>配置:64G;</span><br />
					<span>版本:电信4G/移动4G/联通4G;</span>
				</p>
				<div class="more">
					<span class="count" v-show="b">数量×<em>{{item.number}}</em></span>
					<span class="count2" v-show="!b">
						<p @click="miunst(i)">-</p><input type="number" v-model="item.number" /><p @click="add(i)">+</p>
					</span>
					<span class="price s-hint-color f-fr">￥{{item.price}}.00</span>
				</div>
			 </div>
		  </div>
	  </div>
	  <div class="bottoner" v-show="b">
		  <label>
			  <input type="checkbox" :checked="quanxuan" @change="selAll"> 全选
		  </label>
		  <div class="jiesuan">
			<div class="details">
				<p>合计：<strong class="s-hint-color">￥<span>4695</span></strong></p>
				<small>不含运费</small>
			</div>
			<div class="js-btn">
				结算
			</div>
		  </div>
	  </div>
	  <div class="bottoner2" v-show="!b">
		  <label>
			  <input  type="checkbox" :checked="quanxuan" @change="selAll"> 全选
		  </label>
		  <div class="jiesuan">
			删除
		  </div>
	  </div>
	  <div class="gouwu-nav">
		  <toggleMenu position="LB"
					  menuBg="black"
					  itemBg="black"
							width="50"
					  :menuItems="menuItems"
					  @clickMenu="clickMenu"
					  baseDistance="150"></toggleMenu>
	  </div>
  </div>
</template>

<script>
	import router from '../../router'	
 import toggleMenu from '../toggleMenu'
import { Button } from 'mint-ui';
import axios from 'axios'
import {mapGetters,mapMutations,mapActions,mapState} from 'vuex'//1
import w1 from '../../assets/imgs/w1.png'
export default {
  name: 'gouwu',
  data () {
    return {
		msg: "gouwu",
		w1:w1,
		use2:[],
		b:true,
		menuItems: [
		  {name: 'menu1', src: require('../../assets/我的.png')},
		  {name: 'menu2', src: require('../../assets/购物车.png')},
		  {name: 'menu3', src: require('../../assets/钱.png')},
		  {name: 'menu4', src: require('../../assets/首页.png')},
		]
    }
  },
  components: {
  	toggleMenu
  },
  computed: {
  	 ...mapGetters(['getLists']),
	 totalPrice(){
		 
	 },
	 quanxuan(){
		 for(let i in this.getLists){
			 if (!this.getLists[i].checked) {
			 	return false
			 }
		 }
		 return true
	 }
  },
  created(){


  },
  methods: {
	clickMenu(item, index) {
	  if (index == 3) {router.push({path:'/index'})}
	  if (index == 2) {router.push({path:'/huishou'})}
	  if (index == 1) {router.push({path:'/gouwu'})}
	  if (index == 0) {router.push({path:'/uc'})}
	},
  	fn() {
  		this.b = !this.b
  	},
	miunst(i){
		if (this.getLists[i].number == 1) {
			return
		}
		let a = this.getLists[i].number--
		this.$store.commit("miunst",a,i)
		
	},
	add(i){
		
		let b = this.getLists[i].number++
		this.$store.commit("add",b,i)
	},
	selAll(){
		if (this.quanxuan) {
			this.getLists.forEach(item=>(item.checked = false))
			console.log("1",this.quanxuan)
		}else{
			this.getLists.forEach(item=>(item.checked = true))
			console.log("2",this.quanxuan)
		}
		
	},
	changeCheck(i){
		this.getLists[i].checked = !this.getLists[i].checked
		this.$store.commit("upDateCheck",this.getLists[i])
	}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	
	
.gouwu-nav{
	position: fixed;
	bottom: 80px;
	left: 30px;
	width: 3.125rem;
	height: 3.125rem;
}
.count2 input[type="number"]{
	margin: 5px 0px;
	width: 4.25rem;
	height: 1.25rem;
	color: #23a96f;
	border: 1px solid #999;
	text-align: center;
}
.count2 p{
	background: #999;
	color: #fff;
	width: 1.25rem;
	height: 1.25rem;
	text-align: center;
}
.count2 {
	display: flex;
}
.bottoner2 .jiesuan{
	flex: 1;
	background: #ccc;
	text-align: center;
	line-height: 3.125rem;
	color: #fff;
}
.bottoner2 label{
	flex: 3;
	
}
.bottoner2 label input[type="checkbox"]{
	margin-top: 7%;
	margin-left: 0.9375rem;
	
}
.bottoner2{
	display: flex;
	position: fixed;
	bottom: 0;
	left: 0;
	border-top: 1px solid #999;
	width: 100%;
	height: 3.125rem;
	background: #fff;
}
	
	
.bottoner .jiesuan small{
	float: right;
	margin-top: 5px;
	color: #999;
	font-size: 12px;
}
.bottoner .jiesuan .details strong{
	color: #ff9900;
}
.bottoner .jiesuan .details p{
	display: flex;
	white-space: nowrap;
	margin-top: 9px;
}
.bottoner .jiesuan .details{
	flex: 1;
	padding-right: 5px;
}
.bottoner .jiesuan .js-btn{
	flex: 1;
	color: #fff;
    background-color: #23a96f;
	text-align: center;
	line-height: 3.125rem;
}
.bottoner .jiesuan{
	flex: 1;
	display: flex;
}
.bottoner label{
	flex: 1;
	
}
.bottoner label input{
	margin-top: 9%;
	margin-left: 0.9375rem;
	
}
.bottoner{
	display: flex;
	position: fixed;
	bottom: 0;
	left: 0;
	border-top: 1px solid #999;
	width: 100%;
	height: 3.125rem;
	background: #fff;
}
.more{
	margin-top: 0.6125rem;
	display: flex;
	justify-content:space-between
}
.gouwu .gouwu-goods .main .content .more span:nth-child(2){
	padding-right: 10px;
	color: #ff9900;
}
.gouwu .gouwu-goods .main .content .info span{
	color: #666;
	font-size: 0.75rem;
}
.gouwu .gouwu-goods .main .content p{
	margin-top: 0.3125rem;
	margin-bottom: 0.3125rem;
}
.gouwu .gouwu-goods .main .content{
	margin-left: 0.625rem;
	padding-top: 0.9rem;
}
.gouwu .gouwu-goods .main{
	flex: 7;
	display: flex;
	
}
.gouwu .gouwu-goods img{
	padding-top: 0.5rem;
	width: 6.875rem;
	height: 6.875rem;
}
.gouwu .gouwu-goods input[type="checkbox"]{
	line-height: 6.875rem;
	flex: 1;
	margin-top: 15%;
}
.gouwu .gouwu-goods{
	margin-bottom: 15px;
	display: flex;
	margin-button: 0.625rem;
	background: #fff;
	width: 100%;
	height: 7.875rem;
	
}
.gouwu .gouwu-time{
	margin-top: 0.625rem;
	background: #fff;
	height: 2.8125rem;
	/* text-align: -moz-center; */
	text-align: center;
	line-height: 2.8125rem;
	border-bottom: 1px solid #ccc;
}
.gouwu .toper{
	width: 100%;
	height: 2.8125rem;
	display: flex;
	background: #fff;
	text-align: center;
	line-height: 2.8125rem;
}
.gouwu .toper p{
	flex: 5;
}
.gouwu .toper div{
	flex: 1.125;
	line-height: 2.8125rem;
}
.gouwu .toper div span{
	padding: 0.1875rem 0.625rem;
	border-radius: 0.1875rem;
	border: 1px solid #ccc;
}
.gouwu{
	min-height: 667px;
	background-color: #efeff4;
    box-shadow: 0 0 5px 0 #efeff4;
}
</style>
