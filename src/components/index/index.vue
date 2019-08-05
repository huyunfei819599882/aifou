<template>
  <div class="index">
    <div class="lbt">
      <mt-swipe :auto="0">
        <mt-swipe-item ><img src="../../assets/imgs/126308ac1c7d8579f23c1c9b9777cb5d.png" alt=""></mt-swipe-item>
        <mt-swipe-item ><img src="../../assets/imgs/5a51a16d799f3b03af36f524f42d6a28.png" alt=""></mt-swipe-item>
        <mt-swipe-item ><img src="../../assets/imgs/2375c6df1331e56be8fb3d75c85500fe.jpg" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="nav2">
      <div class="nav3" @click="sj(1)">
		  <img src="../../assets/imgs/393851782062a15daa2e629d1183c4d1.png" alt="">
		  <p>手机</p>
	  </div>
      <div class="nav3" @click="pb(2)">
		  <img src="../../assets/imgs/552ef1137b7c164a7aea3aa6fb7fa0e6.png" alt="">
		  <p>平板</p>
	  </div>
      <div class="nav3" @click="sj(1)">
		  <img src="../../assets/imgs/4cf36ee45ec549051f996115e81208e0.png" alt="">
		  <p>耳机</p>
	  </div>
      <div class="nav3" @click="pb(2)">
		  <img src="../../assets/imgs/6d251bb293fd01a860069e293739bbcf.png" alt="">
		  <p>笔记本</p>
	  </div>
      <div class="nav3"  @click="sj(1)">
		  <img src="../../assets/imgs/e7791f27a36b248062f5afed77f7a958.png" alt="">
		  <p>智能手表</p>
	  </div>
      <div class="nav3" @click="sj(1)">
		  <img src="../../assets/imgs/peripheral.png" alt="">
		  <p>周边配件</p>
	  </div>
      <div class="nav3" @click="sj(1)">
		  <img src="../../assets/imgs/kw.png" alt="">
		  <p>爱否开物</p>
	  </div>
      
    </div>
	<div class="g"></div>
	<div class="m-indexthree">
		<div class="gg">
			<img src="../../assets/imgs/s1.jpg" alt="">
		</div>
		<div class="gg">
			<img src="../../assets/imgs/kc.jpg" alt="">
		</div>
	</div>
	<div class="g"></div>
	<div class="m-recommend" >
		<dl>
			<dt>
				<div class="topa">
					<div class="zleft">
						<i class="s-point-bg"></i>
						<p>今日推荐</p>
					</div>
					<div class="yright" @click="fn">
						<p>查看更多</p>
						<img src="../../assets/imgs/2019-07-23_091739.png" alt="">
					</div>
				</div>
			</dt>
			<dd v-for="(item,i) in goods" :key="i" @click="add(item.id)">
				<img :src="item.icon" alt="">
				<div class="content">
					<div class="title">
						{{item.name}}
					</div>
					<span class="price">¥{{item.price}}</span>
				</div>
			</dd>
			
		</dl>
	</div>
	<div class="g"></div>
	<div class="m-indexthre">
		<div>
			<img src="../../assets/imgs/51a921ba78e2b76fc4c04a77e54c9a7d.png" alt="">
		</div>
		<div>
			<div class="a0">
				<img src="../../assets/imgs/815bd823bd5dae042a5556b5158178c3.png" alt="">
			</div>
			<div class="a0">
				<img src="../../assets/imgs/b375cb8430b9178924014a9471f7cb00.jpg" alt="">
			</div>
		</div>
		
	</div>
	<div class="g"></div>
	
	<div class="m-components">
		<dl>
			<dt class="m-section-titlel">
				<div class="title">
					<div class="zleft">
						<i class="s-point-bg"></i>
						<p>配件专区</p>
					</div>
					<div class="yright">
						<p>查看更多</p>
						<img src="../../assets/imgs/2019-07-23_091739.png" alt="">
					</div>
				</div>
			</dt>
			<dd class="c">
				<ul class="c x06 xs08">
					<li class="peijian">
							<img src="../../assets/imgs/23503beb9e762752470571c20a84d410.png" alt="">
							<p class="title double">Apple 10W USB 电源适配器</p>
							<p class="price">¥69.00</p>
					</li>
					<li class="peijian">
							<img src="../../assets/imgs/7412a19586c110f83cff402184be040d.jpg" alt="">
							<p class="title double">SONY WH-1000M2（二手）</p>
							<p class="price">¥1199.00</p>
					</li>
					<li class="peijian">
							<img src="../../assets/imgs/83bc5219a79aa6b42f06b0d8d19528fb.jpg" alt="">
							<p class="title double">AirPods</p>
							<p class="price">¥1099.00</p>
					</li>
					<li class="peijian">
							<img src="../../assets/imgs/e718756d2272455d5e25e8fc6c746102.png" alt="">
							<p class="title double">Solo3 Wireless</p>
							<p class="price">¥899.00</p>
					</li>
					<li class="peijian">
							<img src="../../assets/imgs/23503beb9e762752470571c20a84d410.png" alt="">
							<p class="title double">Apple 10W USB 电源适配器</p>
							<p class="price">¥69.00</p>
					</li>
					<li class="peijian">
							<img src="../../assets/imgs/7412a19586c110f83cff402184be040d.jpg" alt="">
							<p class="title double">SONY WH-1000M2（二手）</p>
							<p class="price">¥1199.00</p>
					</li>
					<li class="peijian">
							<img src="../../assets/imgs/83bc5219a79aa6b42f06b0d8d19528fb.jpg" alt="">
							<p class="title double">AirPods</p>
							<p class="price">¥1099.00</p>
					</li>
					<li class="peijian">
							<img src="../../assets/imgs/e718756d2272455d5e25e8fc6c746102.png" alt="">
							<p class="title double">Solo3 Wireless</p>
							<p class="price">¥899.00</p>
					</li>
					<li class="peijian">
							<img src="../../assets/imgs/23503beb9e762752470571c20a84d410.png" alt="">
							<p class="title double">Apple 10W USB 电源适配器</p>
							<p class="price">¥69.00</p>
					</li>
					<li class="peijian">
							<img src="../../assets/imgs/7412a19586c110f83cff402184be040d.jpg" alt="">
							<p class="title double">SONY WH-1000M2（二手）</p>
							<p class="price">¥1199.00</p>
					</li>
					<li class="peijian">
							<img src="../../assets/imgs/83bc5219a79aa6b42f06b0d8d19528fb.jpg" alt="">
							<p class="title double">AirPods</p>
							<p class="price">¥1099.00</p>
					</li>
					<li class="peijian">
							<img src="../../assets/imgs/e718756d2272455d5e25e8fc6c746102.png" alt="">
							<p class="title double">Solo3 Wireless</p>
							<p class="price">¥899.00</p>
					</li>
					
				</ul>
			</dd>
		</dl>
	</div>
	
	
	
	<div class="g"></div>
	<div class="ding"></div>
  </div>
</template>

<script>
import router from '../../router'	
import { Swipe, SwipeItem } from 'mint-ui'
import axios from 'axios'

export default {
  name: 'index',
  component:{
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem
  },
  data () {
    return {
      msg: '../../assets/imgs/23503beb9e762752470571c20a84d410.png',
	    goods:[]
    }
  },
  created(){
	this.getGoods () 
	// console.log(this.goods)
  },
  methods: {
  	getGoods () {
		let url = "http://127.0.0.1:800/getData"
  		axios.get(url).then(res=>{
			this.goods = JSON.parse(res.data.data).foods
			// console.log("0000000",JSON.parse(res.data.data))
		})
  	},
	fn(){
		router.push({name:'shangpin',params:{id:1}})
	},
    add(id){
      console.log("详情id",id);
      router.push({path: '/xiangqing',query:{id:id}})
    },
	sj(id){
		router.push({name:'shangpin',params:{id:id}})
	},
	pb(id){
		router.push({name:'shangpin',params:{id:id}})
	}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.peijian{
	width: 50%;
	height: 237px;
}	
.peijian img{
	border: 0;
	width: 171px;
	height: 171px;
	margin: 5px 10px;
}	
.peijian p{
	line-height: 18px;
    font-size: 12px;
    text-align: center;
	margin-top: 5px;
}	
.m-components dd ul{
    display: flex;
	flex-wrap: wrap;
}	
.m-components dd .price {
    margin-bottom: 6px;
    color: #ff9900;
}	
	
	
.xs08 {
    margin-right: -4px;
    margin-left: -4px;
}
.c, .w {
    zoom: 1;
}
.xs8, .xs8>.g, .xs08>.g {
    padding-right: 4px;
    padding-left: 4px;
}
.m-components dt {
    border-bottom: 1px solid #e5e5e5;
    height: 43px;
    line-height: 42px;
}
.m-components .zleft{
    display: inline-block;
    position: relative;
    font-size: 15px;
}
.m-components .zleft i{
    position: absolute;
    top: 50%;
    left: 7px;
    height: 15px;
    width: 3px;
    margin-top: -7px;
    background-color: #23a96f;
}
.m-components .zleft p{
    margin-left: 15px;
}
.m-components .yright{
    float: right;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 12px;
    color: #999;
    cursor: pointer;
}
.m-components .yright p {
    vertical-align: middle;
}
.m-components .yright img {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 7px;
    margin-top: 10px;
    vertical-align: middle;
    background-position: -47px -348px;
}
.m-indexthre {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: 225px;
}
.m-indexthre div:nth-child(1){
	width: 50%;
	height: 100%;
}
.m-indexthre div:nth-child(2){
	width: 50%;
	height: 100%;

}
.m-indexthre div img{
	width: 100%;
	height: 100%;
}
.m-indexthre div .a0:nth-child(1){
	width: 100%;
	height: 50%;
}
.m-indexthre div .a0:nth-child(2){
	width: 100%;
	height: 50%;
	background-color: salmon;
}


.m-recommend dd {
    padding: 10px 0;
    margin-right: 7px;
    border-bottom: 1px solid #e5e5e5;
	height: 121px;
}
.m-recommend dd img {
    float: left;
    height: 100px;
    width: 100px;
}
.m-recommend dd .content {
    margin-left: 120px;
    color: #666;
}
.m-recommend dd .price {
    display: inline-block;
    vertical-align: middle;
    line-height: 20px;
    color: #ff9900;
}
.m-recommend{
	background-color: #fff;
}
.m-recommend dt {
    border-bottom: 1px solid #e5e5e5;
    height: 43px;
    line-height: 42px;
}
.m-recommend .zleft {
	display: inline-block;
    position: relative;
    font-size: 15px;
}
.m-recommend .zleft p{
	margin-left: 15px;
}
.m-recommend .zleft i{
    position: absolute;
    top: 50%;
    left: 7px;
    height: 15px;
    width: 3px;
    margin-top: -7px;
    background-color: #23a96f;
}
.m-recommend .yright {
    float: right;
	display: flex;
    font-size: 12px;
    color: #999;
    cursor: pointer;
}
.m-recommend .yright p{
	vertical-align: middle;
}
.m-recommend .yright img{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 7px;
    margin-top: 10px;
    vertical-align: middle;
    background-position: -47px -348px;
}
.m-indexthree{
	width: 100%;
	height: 112px;
	display: flex;
	
}
.m-indexthree .gg{
	width: 100%;
	height: 112px;
}
.m-indexthree .gg img{
	width: 100%;
	height: 112px;
}
.nav2{
	width: 100%;
	height: 176px;
	display: flex;
	flex-wrap:wrap;
	margin-top: -15px;
	/* justify-content: space-around; */
}
.nav3{
	width: 90px;
    height: 76px;
	text-align: center;
}
.nav3 img{
	width: 45px;
    height: 45px;
	margin-top: 5px;
}
.nav3 p{
	font-size: 12px;
	line-height: 30px;
}
/* .index{
  width: 100%;
  height: 180px;
} */
.mint-swipe{
    height: 180px;
    color: #fff;
    font-size: 30px;
    /* text-align: center; */
    margin-bottom: 20px;
}

.mint-swipe-items-wrap{
    overflow: hidden;
    position: relative;
    height: 100%;
}
.mint-swipe-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}

.mint-swipe-indicator {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: .2;
    margin: 0 3px;
}
.mint-swipe-indicator.is-active {
  background: #fff;
  opacity: 1;
}
.mint-swipe-item img{
  width: 100%;
  height: 100%;
}
.g{
	width: 100%;
	height: 10px;
	background-color: #efeff4;
    box-shadow: 0 0 5px 0 #efeff4
}
.ding{
	width: 100%;
	height: 51px;
}
body{
	overflow-x: hidden;
}
</style>
