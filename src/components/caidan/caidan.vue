<template>
  <div class="caidan">
    <div class="toggle_menu_container">
		<toggle-menu position="LT"
					menuBg="white"
					itemBg="white"
					:menuItems="menuItems"
					@clickMenu="clickMenu"
					baseDistance="150"></toggle-menu>
	</div>
  </div>
</template>

<script>
import toggleMenu from './toggleMenu'
export default {
  name: 'caidan',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
