<template>
	<div class="home">
		<el-col :span="12" class="grid-content sideBar">
	  		<my-sideBar></my-sideBar>
	  	</el-col>	
	  		<transition name='fade' mode="out-in">
	  		<router-view></router-view>
	  		</transition>
	</div>
</template>

<script>
	import sideBar from '../src/components/sideBar.vue'
	
	export default{
		components:{
			'my-sideBar':sideBar,
		},
				
	}
	
</script>

<style scoped>
 .sideBar{
 	position: fixed;
	z-index: 100;
 }
 .home{
 	margin-top: 66px;
 }
 .fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease-out
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>