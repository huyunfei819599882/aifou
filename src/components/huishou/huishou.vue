<template>
  <div class="huishou">
	  <img src="../../assets/imgs/2019-07-24_091143.png" alt="">
	  <div class="g"></div>
  </div>
</template>

<script>
export default {
  name: 'huishou',
  data () {
    return {
      msg: '../../assets/imgs/2019-07-24_091143.png'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.huishou{
	overflow: hidden;
	width: 23.4375rem;
	height: 605px;
	background-color: #efeff4;
    box-shadow: 0 0 5px 0 #efeff4
}
.huishou img{
	width: 100%;
	height: 100%;
}
.g{
	width: 100%;
	height: 10px;
	background-color: #efeff4;
    box-shadow: 0 0 5px 0 #efeff4
}
</style>
