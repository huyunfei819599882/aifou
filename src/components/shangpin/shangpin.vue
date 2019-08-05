<template>
  <div class="shangpin" v-if="msg.length==a">
	<div class="m-listorder">
		<nav>
			<div class="g price">
				<span>当前价格</span>
				<i class="i-icon"></i>
			</div>
			<div class="g select">
				<span>筛选</span>
				<i class="i-icon"></i>
			</div>
		</nav>
	</div>
	<div class="shangpin">
		<div class="m-list f-pt">
			<ul id="list" >
				<li v-for="(m,i) in msg" @click="fn(m.jiage,m.id)">
					<p class="thumb">
						<img :src="m.img" alt="">
					</p>
					<p class="title double">
						{{m.name}}
					</p>
					<p class="price s-hint-color">{{m.jiage}}</p>
					<img class="level" :src="m.B" alt="">
				</li>
				
			</ul>
		</div>
		<div class="m-list f-pt">
			<ul id="list" >
				<li v-for="(m,i) in msg">
					<p class="thumb">
						<img :src="m.img" alt="">
					</p>
					<p class="title double">
						{{m.name}}
					</p>
					<p class="price s-hint-color">{{m.jiage}}</p>
					<img class="level" :src="m.B" alt="">
				</li>
				
			</ul>
		</div>
		<div class="m-list f-pt">
			<ul id="list" >
				<li v-for="(m,i) in msg">
					<p class="thumb">
						<img :src="m.img" alt="">
					</p>
					<p class="title double">
						{{m.name}}
					</p>
					<p class="price s-hint-color">{{m.jiage}}</p>
					<img class="level" :src="m.B" alt="">
				</li>
				
			</ul>
		</div>
		
	</div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../../router'	
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  name: 'shangpin',
  data () {
    return {
      msg: [],
	  a:[]
    }
  },
  methods: {
  	upData() {
  		let id = this.$route.params.id
		let url = "http://127.0.0.1:800/upData2"
		console.log("商品id",id)
		axios({
			method:"post",
			url:url,
			data:{
				id:id
			}
		}).then(res=>{
			console.log("addPost res:",res);
			this.msg = res.data
			this.a = res.data.length
		},err=>{
			console.log("err:",err);
		})
  	},
	fn(id){
		router.push({path: '/xiangqing',query:{id:id}})
	}
  },
  created(){
	  this.upData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#list{
	flex-wrap:wrap;
	display: flex;
	justify-content:space-around;
}

#list li{
	
	height: 240px;
	width: 48%;
}
#list li .level{
	position: relative;
    top: -225px;
    right: -108px;
}
#list li .s-hint-color{
	color: #ff9900;
}
#list li p{
	line-height: 18px;
    font-size: 12px;
    text-align: center;
}
#list li .thumb {
	width: 100%;
}
#list li .thumb img{
	height: 100%;
	width: 100%;
}


.m-listorder {
 
	width: 23.4375rem;
	height: 45px;
}
.m-listorder .g{
    width: 50%;
}
.m-listorder nav {
	text-align: -moz-center;
	text-align: center;
	line-height: 45px;
	display: flex;
    width: 23.4375rem;
	height: 45px;
}
</style>
