<template>
  <div class="xiangqing" v-if="a!=0" >
	<div class="xq" v-for="(item , i) in msg" :key="i">
		<div class="lbt">
		  <mt-swipe :auto="0">
			<mt-swipe-item ><img :src="item.image1" alt=""></mt-swipe-item>
			<mt-swipe-item ><img :src="item.image2" alt=""></mt-swipe-item>
			<mt-swipe-item ><img :src="item.image3" alt=""></mt-swipe-item>
		  </mt-swipe>
		</div>
		<div class="name">
			<p>{{item.name}}</p>
			<div class="sj">
				<p>售价：</p>
				<p>¥{{item.price}}</p>	
				<p>（原价：</p>	
				<p>¥{{item.oldPrice}}</p>）	
			</div>
		</div>
		<div class="g"></div>
		<div class="m-product-details">
			<dl>
				<dt>
					<div class="title">
						<div class="zleft">
							<i class="s-point-bg"></i>
							<p>配置参数</p>
						</div>
						<div class="yright" @click="b=true">
							<p>查看详细配置参数</p>
							<img src="../../assets/imgs/2019-07-23_091739.png" alt="">
						</div>
					</div>
				</dt>
				<dd>
					<strong>配置</strong>
					<p>{{item.deploy[0].memory}}</p>
                </dd>
				<dd>
					<strong>版本</strong>
					<p>{{item.deploy[0].area}}</p>
                </dd>
				<dd>
					<strong>颜色</strong>
					<p>{{item.deploy[0].colcr}}</p>
                </dd>
				<dd>
					<strong>产品编号</strong>
					<p>{{item.deploy[0].number}}</p>
                </dd>
			</dl>
		</div>
		<div class="g"></div>
		<div class="m-product-level">
			<dl>
				<dt>
					<div class="title">
						<div class="zleft">
							<i class="s-point-bg"></i>
							<p>产品评级</p>
						</div>
						<div class="yright">
							<p>查看评级标准</p>
							<img src="../../assets/imgs/2019-07-23_091739.png" alt="">
						</div>
					</div>
				</dt>
				<dd>
          <img src="./C.png" alt="" class="level">
          <div class="info">
              <h4 class="author">
                  <span>工程师点评</span>
              </h4>
              <p>{{item.comment}}</p>
          </div>
        </dd>
        <div class="g"></div>
			</dl>
		</div>
		<div class="g"></div>
	</div>
  <div class="m-product-info">
    <nav class="tab ">
      <p class="slider">
        <router-link to="/xiangqing/waiguan">外观</router-link>
        <router-link to="/xiangqing/jiance">检测</router-link>
        <router-link to="/xiangqing/dianchi">电池</router-link>
        <router-link to="/xiangqing/pingmu">屏幕</router-link>
        <router-link to="/xiangqing/shouhou">售后</router-link>
      </p>
    </nav>
    
    <div class="content">
      <router-view></router-view>
    </div>

  </div>
	
	<div class="ding"></div> 
		<div class="xiangxi" v-show="b" @click="b=false">
			<div class="inner-container">
				<div class="content">
					<ul v-for="(item , i) in deploy" :key="i">
						<li><p>{{item.subject}}</p></li>
						<li>
							<p>型号</p>
							<p>{{item.model}}</p>
						</li>
						<li>
							<p>销售地区</p>
							<p>{{item.area}}</p>
						</li>
						<li>
							<p>支持网络</p>
							<p>{{item.网络}}</p>
						</li>
						<li>
							<p>颜色</p>
							<p>{{item.color}}</p>
						</li>
						<li>
							<p>系统版本</p>
							<p>{{item.release}}</p>
						</li>
						<li>
							<p>内存</p>
							<p>{{item.memory}}</p>
						</li>
						<li>
							<p>{{item.screen}}</p>
						</li>
						<li>
							<p>屏幕尺寸</p>
							<p>{{item.size}}</p>
						</li>
						<li>
							<p>分辨率</p>
							<p>{{item.dpi}}</p>
						</li>
						<li>
							<p>ppi</p>
							<p>{{item.ppi}}</p>
						</li>
						<li>
							<p>{{item.guise}}</p>
						</li>
						<li>
							<p>手机尺寸</p>
							<p>{{item.sjsize}}</p>
						</li>
						<li>
							<p>重量</p>
							<p>{{item.weight}}</p>
						</li>
						<li>
							<p>SIM 卡规格</p>
							<p>{{item.sim}}</p>
						</li>
						<li>
							<p>{{item.camera}}</p>
						</li>
						<li>
							<p>后置摄像头</p>
							<p>{{item.qcamera}}</p>
						</li>
						<li>
							<p>前置摄像头</p>
							<p>{{item.hcamera}}</p>
						</li>
						<li>
							<p>光圈</p>
							<p>{{item.halo}}</p>
						</li>
						<li>
							<p>闪光灯</p>
							<p>{{item.flashlight}}</p>
						</li>
						<li>
							<p>{{item.hardware}}</p>
						</li>
						<li>
							<p>CPU</p>
							<p>{{item.cpu}}</p>
						</li>
						<li>
							<p>核心数</p>
							<p>{{item.core}}</p>
						</li>
						<li>
							<p>RAM容量</p>
							<p>{{item.ram}}</p>
						</li>
						<li>
							<p>包装清单</p>
						</li>
						<li>
							<p>包装清单</p>
							<p>{{item.wrap}}</p>
						</li>
						
					</ul>
				</div>
			</div>
		</div>
	<div class="shop">
		<div class="box1">
			<div>
				<p class="iconfont">&#xe60d;</p>
				<p >客服</p>
			</div>
			<div @click="toShop">
				<p class="iconfont">&#xe899;</p>
				<p >购物车</p>
			</div>
		</div>
		<div class="box2" @click="add">立即购买</div>
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
import toggleMenu from '../toggleMenu'
import router from '../../router'	
import axios from 'axios'
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  name: 'xiangqing',
  data () {
    return {
      msg: [],
	  a:[],
	  deploy:[],
	  b:false,
	  name:[],
	  price:[],
    icon:"",
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
  methods: {
    clickMenu(item, index) {
      if (index == 3) {this.$router.push({path:'/index'})}
      if (index == 2) {this.$router.push({path:'/huishou'})}
      if (index == 1) {this.$router.push({path:'/gouwu'})}
      if (index == 0) {this.$router.push({path:'/uc'})}
    },
  	upData() {
  		let id = this.$route.query.id
		let url;
		console.log("id:",id)
		if (id<100) {
			url = "http://127.0.0.1:800/upData"
		} else{
			url = "http://127.0.0.1:800/upData1"
		}
		console.log("url:",url)
		
		axios({
			method:"post",
			url:url,
			data:{
				id:id,
			}
		}).then(res=>{
			console.log("addPost res:",res.data[0].name);
			this.msg = res.data
			this.deploy =  res.data[0].deploy
			this.a = res.data.length
			this.name = res.data[0].name
			this.price = res.data[0].price
			this.icon = res.data[0].icon
			
		},err=>{
			console.log("err:",err);
		})
  	},
	add(){
		if (sessionStorage.use) {
			let shopObj = {
				name:this.name,
				price:this.price,
				icon:this.icon,
				number:1
			}
			this.$store.commit("addToCart",shopObj)
		} else{
			this.$router.push("/login")
		}
	},
	toShop(){
		if (sessionStorage.use) {
			this.$router.push("/gouwu");
		} else{
			this.$router.push("/login")
		}
		
	}
  }, 
  created(){
	  this.upData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: 'iconfont';  /* project id 1323058 */
  src: url('//at.alicdn.com/t/font_1323058_axi7pijzgdj.eot');
  src: url('//at.alicdn.com/t/font_1323058_axi7pijzgdj.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1323058_axi7pijzgdj.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1323058_axi7pijzgdj.woff') format('woff'),
  url('//at.alicdn.com/t/font_1323058_axi7pijzgdj.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1323058_axi7pijzgdj.svg#iconfont') format('svg');
}

.gouwu-nav{
	position: fixed;
	bottom: 80px;
	left: 30px;
	width: 3.125rem;
	height: 3.125rem;
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:25px;
	font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
.shop{
	display: flex;
	width: 100%;
	height: 55px;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 100;
}
.shop .box1{
	display: flex;
	flex: 1.25;
	background: #fff;
}
.shop .box1 p{
	text-align: center;
	margin: 5px 12px;
}.shop .box1 p:nth-child(2){
	font-size: 12px;
	color: #666;
}	
.shop .box2{
	flex: 3;
	background:  #ff9900;
	color: #fff;
	text-align: center;
	line-height: 55px;

}	
	
	
.outer-container {
	position: relative;
	overflow: hidden;
}
.inner-container {
	position: absolute; 
	overflow-x: hidden;
	overflow-y: scroll;

	top: 5%;
	left: 5%;
	/* transform: translate(-50% -50%); */
	width: 90%;
	height: 80%;
	background: #fff;
}

 /* for Chrome */
.inner-container::-webkit-scrollbar {
	display: none;
}
	
	
.content ul li p:nth-child(1){
	color: #999;
}
.content ul li p:nth-child(2){
	position: absolute;
	right: 0;
}
.content ul li p{
	padding: 15px 10px;
}
.content ul li{
	display: flex;
	border-bottom:1px solid #e5e5e5 ;
}
.content ul{
}
.inner-container {
    position: absolute; 
    overflow-x: hidden;
    overflow-y: scroll;
}

 /* for Chrome */
.inner-container::-webkit-scrollbar {
    display: none;
}
.xiangxi .canshu{
	overflow: hidden;
	position: relative;
	top: 10%;
	left: 5%;
	/* transform: translate(-50% -50%); */
	width: 90%;
	height: 80%;
	background: #fff;
	
}

.xiangxi{
	overflow: hidden;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 41.6875rem;
	background: rgba(0,0,0,0.7);
	z-index: 20;
}
.m-product-info .tab p a[data-v-00cad505] .router-link-active{
      color: #23a96f;
}
.m-product-info .tab a {
    display: table-cell;
    text-align: center;
    cursor: pointer;
    color: #000;
}
.m-product-info .tab .slider {
    display: table;
    width: 100%;
    height: 45px;
    line-height: 44px;
    border-bottom: 1px solid #e5e5e5;
    background-color: #fff;
}
.m-product-info{
  
}
.m-product-level dd {
    display: flex;
    height: 185px;
}
.m-product-level dd .info p {
    margin-top: 5px;
    color: #666;
}
.m-product-level dd .level{
    margin-top: 15px;
    width: 90px;
    height: 90px;
}
.m-product-level dd .info {
    margin-left: 15px;
    margin-top: 25px;
    min-height: 98px;
}
.m-product-level dd .author {
    height: 30px;
}
.m-product-level dt .title .zleft {
	display: inline-block;
    font-size: 15px;
}
.m-product-level dt .title .zleft p{
	margin-left: 15px;
}
.m-product-level dt .title .zleft i{
    position: absolute;
    top: 50%;
    left: 7px;
    height: 15px;
    width: 3px;
    margin-top: -7px;
    background-color: #23a96f;
}
.m-product-level dt .title .yright img{
	display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 7px;
    margin-top: 10px;
    vertical-align: middle;
    background-position: -47px -348px;
}
.m-product-level dt .title .yright p{
	vertical-align: middle;
}
.m-product-level dt .title .yright{
    float: right;
	display: flex;
    font-size: 12px;
    color: #999;
    cursor: pointer;
}
.m-product-level dt{
    border-bottom: 1px solid #e5e5e5;
    height: 43px;
    line-height: 42px;
}
.m-product-level dl{
	padding-left: 12px;
}
.m-product-level{
	height: 165px;
	background-color: #fff;
}	
	
	
	
	
	
	
.m-product-details dl dd:nth-child(5) p{
	margin: 0px 50px;
}
.m-product-details dd p{
	color: #666;
    margin: 0px 85px;
}
.m-product-details dd strong{
	white-space:nowrap;
	color: #999;
}
.m-product-details dd {
    margin: 10px 0px;
	display: flex;

}
.m-product-details dt .title .zleft {
	display: inline-block;
    position: relative;
    font-size: 15px;
}
.m-product-details dt .title .zleft p{
	margin-left: 15px;
}
.m-product-details dt .title .zleft i{
    position: absolute;
    top: 50%;
    left: 7px;
    height: 15px;
    width: 3px;
    margin-top: -7px;
    background-color: #23a96f;
}
.m-product-details dt .title .yright img{
	display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 7px;
    margin-top: 10px;
    vertical-align: middle;
    background-position: -47px -348px;
}
.m-product-details dt .title .yright p{
	vertical-align: middle;
}
.m-product-details dt .title .yright{
    float: right;
	display: flex;
    font-size: 12px;
    color: #999;
    cursor: pointer;
}
.m-product-details dt{
    border-bottom: 1px solid #e5e5e5;
    height: 43px;
    line-height: 42px;
}
.m-product-details dl{
	padding-left: 12px;
}
.m-product-details{
	background-color: #fff;
}
.name p {
	margin-left: 15px;
}
.name .sj p:nth-child(2) {
	color: #ff9900;
	line-height: 15px;
	font-size: 22px;
    vertical-align: middle;
}
.name .sj {
	margin: 20px 0px;
	display: flex;
	color: #999;
}
.name .sj p{
	margin: 0px 0px;
	color: #999;
}
.name .sj p:nth-child(1){
	margin-left: 15px;
	
}
.name .sj p:nth-child(4){
	text-decoration: line-through;
	
}
.xiangqing{
	width: 23.4375rem;
	height: 667px;
}
.xq{
	width: 23.4375rem;
}
.mint-swipe{
    height: 370px;
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
</style>
