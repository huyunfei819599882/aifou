<template>
  <div class="uc">
	  <div class="auc">
		  <div class="tu">
		  <img :src="w1" alt="">  
		  </div>
		  <p>{{use2}}</p>
	  </div>
    <img src="./uc.png" alt="">
	<div class="zhuxiao" @click="loginout">注销</div>
	 <toggleMenu position="LB"
	             menuBg="white"
	             itemBg="white"
	             :menuItems="menuItems"
	             @clickMenu="clickMenu"
	             baseDistance="150"></toggleMenu>
	
  </div>
</template>

<script>
import toggleMenu from '../toggleMenu'
import { Button } from 'mint-ui';
import axios from 'axios'
import w1 from '../../assets/imgs/w1.png'
export default {
  name: 'uc',
  data () {
    return {
      msg: "uc",
			w1:w1,
			use2:[],
			menuItems: [
			  {name: 'menu1', src: require('../../assets/logo.png')},
			  {name: 'menu2', src: require('../../assets/cart.png')},
			  {name: 'menu3', src: require('../../assets/folder.png')},
			  {name: 'menu4', src: require('../../assets/home.png')},
			  {name: 'menu5', src: require('../../assets/my.png')},
			]

    }
  },
  components: {
  	toggleMenu
  },
  created(){
	this.use2=sessionStorage.use;
	console.log("use2",sessionStorage.token)

  },
  methods: {
	  clickMenu(item, index) {
	    console.log(item, index)
	  },
  	loginout(){
      sessionStorage.removeItem("use");
      this.$router.push("/login");
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.uc .zhuxiao{
	width: 50px;
	height: 20px;
	border: 1px #666 solid;
	position: absolute;
	right: 20px;
	top: 0;
	text-align: center;
	margin-top: 0.3125rem;
	line-height: 20px;
	color: #666;
}
.auc{
	height: 130px;
	background: url(./ucbg.jpg) no-repeat;
	background-size: 100%;
}
.auc p{
	text-align: center;
	color: #fff;
	line-height: 30px;
}
.tu{
	line-height: 70px;
	width: 70px;
	height: 70px;
	margin: 0px auto;
	padding-top: 30px;
}
.uc .auc img{
	width: 70px;
	height: 70px;
	border-radius: 100%;
}
.uc img{
	
	width: 100%;
}
.uc {
	
	min-width: 23.4375rem;
}
</style>
