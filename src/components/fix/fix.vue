<template>
  <div class="fix">
	 
    <img src="./fix.png" alt="">
	<div class="box0"></div>
  </div>
</template>

<script>
import { Button } from 'mint-ui';
import axios from 'axios'
import w1 from '../../assets/imgs/w1.png'
export default {
  name: 'fix',
  data () {
    return {
      msg: "uc",
	  w1:w1

    }
  },
  components: {
  	
  },
  created(){


  },
  methods: {
  
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fix img{
	width: 102%;
}
.fix{
	width: 100%;
}
.fix .box0{
	position: absolute;
	top: 469px;
	left: 0;
	z-index: 100;
	height: 50px;
	width: 100%;
}

</style>
