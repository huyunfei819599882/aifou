<template>
  <div class="login">
    <div class="m-bind-phone">
      <form id="form" name="" action="/login/check.html" method="post">
        <div class="formitm">
          <label class="lab">手机号码</label>
          <div class="ipt">
            <input v-model="use" type="text" class="u-ipt" id="phone" name="phone">
          </div>
        </div>
        <div class="formitm">
          <label class="lab">验证码</label>
          <div class="ipt">
            <input v-model="y1" type="text" class="u-ipt2" id="phone" name="phone">
          </div>
          <!-- <p @click="fn">{{msg}}</p> -->
          <div class="ada" @click="refreshCode">
            <identify :identifyCode="identifyCode"></identify>
          </div>
        </div>
        <div class="formitm">
          <label class="lab">手机验证码</label>
          <div class="ipt">
            <input v-model="y2" type="text" class="u-ipt3" id="phone" name="phone">
          </div>
          <p @click="getVerify" class="jslab" >获取验证码</p>
          <p class="jslab1" v-show="disabled" @click="getVerify1">{{count}}</p>
        </div>
        
      </form>

    </div>
    <div class="box">
      <mt-button @click="fn2" type="primary" class="aa">登录</mt-button>
      <mt-button type="default" class="bb">取消</mt-button><br />
      
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
import identify from './identify'	
import { Button } from 'mint-ui';
import { Toast } from 'mint-ui'
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      msg: [],
      use:[],
	    use2:[],
      y1:[],
      y2:[],
      identifyCodes:"123456789",
      identifyCode:"",
      count:30,
      disabled:false,
      menuItems: [
        {name: 'menu1', src: require('../../assets/我的.png')},
        {name: 'menu2', src: require('../../assets/购物车.png')},
        {name: 'menu3', src: require('../../assets/钱.png')},
        {name: 'menu4', src: require('../../assets/首页.png')},
		  ]
    }
  },
  components: {
    identify,
    toggleMenu
  },
  mounted() {
    // 初始化验证码
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  created(){


  },
  methods: {
    clickMenu(item, index) {
      if (index == 3) {this.$router.push({path:'/index'})}
      if (index == 2) {this.$router.push({path:'/huishou'})}
      if (index == 1) {this.$router.push({path:'/gouwu'})}
      if (index == 0) {this.$router.push({path:'/uc'})}
    },
    //验证码部分
    refreshCode() {
      console.log(1)
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    },
    //验证产生的随机数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    getVerify1(){
      const countDown = setInterval(() => {
        if (this.count === 0) {
            this.disabled = false
            clearInterval(countDown)
        } else {
            this.count--
        }
      },1000)
    },
  	getVerify () {
      if (this.y1==this.identifyCode) {
        this.disabled = true
        this.getVerify1()
        let url = "http://127.0.0.1:800/get-img-verify"
          //   axios({
          //   method:"post",
          //   url:url,
          //   data:{
          //     smsMob:this.use,
          //   }
          // }).then(res=>{
          //   // this.goods = JSON.parse(res.data.data).foods
          //   this.msg=res.data.randomNum
          // })
      }else{
        Toast({
            message: '验证码错误',
            position: 'bottom',
            duration: 2000
          });
      }
    },
	postLogin (phone) {
		let url = "http://127.0.0.1:800/postLogin"
  		axios({
			method:"post",
			url:url,
			data:{
				phone:phone,
			}
		}).then(res=>{
      // this.goods = JSON.parse(res.data.data).foods
			console.log("0000000",res.data)
		  })
    },
    fn(){
      this.getVerify ()
    },
    fn2(){
      let tel = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;

      if (!tel.test(this.use)) {
        console.log("手机号格式有误")
      } else {
        let login = true
        if (this.y1==this.identifyCode&&this.y2==this.msg) {
				sessionStorage.use=this.use
				this.$store.commit("login",login);
				this.postLogin(this.use)
				this.$router.push("/index");
          // console.log("成功","this.y1",this.y1,"msg",this.msg)
        }else{
          Toast({
            message: '验证码错误',
            position: 'bottom',
            duration: 2000
          });
        }
      }
    }


  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ada{
  position: absolute;
  top: 60px;
  right: 5px;

}
.jslab1{
  position: absolute;
  top: 80px;
  right: 5px;
  background: rgba(0,0,0,.5);
  color: #fff;
  z-index: 100;
}
	
.gouwu-nav{
	position: fixed;
	bottom: 80px;
	left: 30px;
	width: 3.125rem;
	height: 3.125rem;
}
.jslab{
  position: absolute;
  top: 80px;
  right: 5px;
}
.formitm p {
  position: absolute;
  top: 113px;
  right: 5px;
  width: 70px;
  height: 35px;
  font-size: 13px;
  line-height: 35px;
  text-align: center;
  border: 1px solid rgba(19, 194, 72, 0.973);
}
form{
  background: #fff;
}
.xnav{
	position: relative;
	top: 280px;
	left: 10px;
	width: 50px;
	height: 50px;
}
.zhezhao{
	position: fixed;
	height: 100%;
    background-color: rgba(0,0,0,.5);
}
.xnav img{
	border-radius: 50%;
	width: 100%;
	height: 100%;
}
.login{
	position: relative;
	overflow: hidden;
	min-width: 23.4375rem;
	min-height: 41.6875rem;
	background-color: #efeff4;
    box-shadow: 0 0 5px 0 #efeff4;
	z-index: 10;
}
.lab{
	white-space: nowrap;
	margin: 15px 10px;
}
.formitm{
	color: #999;
	display: flex;
}
.formitm .ipt input{
	height: 2.1875rem;
	width: 14.125rem;
	border: 1px solid orange;
	border-radius: 5px;
	margin: 8px 40px;
}
.formitm .ipt .u-ipt2 {
	height: 2.1875rem;
	width: 10.25rem;
	margin-left: 55px;
}
.formitm .ipt .u-ipt3 {
	height: 2.1875rem;
	width: 10.25rem;
	margin-left: 23px;
}
.box{
	margin: 13px auto;
	width: 90%;
}
.aa {
	width: 95%;
    color: #fff;
    background-color: #23a96f;
}
.button{
	display: none;
}
.bb {
    width: 95%;
    color: #fff;
	background-color: #ccc;
	margin-top: 13px;
}
</style>
