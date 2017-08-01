<template>
<div>	

<el-menu :default-active="index" class="el-menu-demo" mode="horizontal">  
  <dropDown></dropDown>
  <router-link to="/"><el-menu-item index="1">处理中心</el-menu-item></router-link>
  <router-link to="/page1"><el-menu-item index="2">处理中心1</el-menu-item></router-link>
  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>
</div>
</template>

<script>
	import dropDown from './dropdown.vue'
	export default {
		 components:{
		 	dropDown
		 },
		 data(){
		 	 return{
		 	 	 index:'1'
		 	 }
		 	
		 },
		 watch:{
			'$route': 'fetchData',
		 },
		 methods:{
			fetchData:function(){
				var curRouter =  this.$route.path.slice(1);
			 console.log(curRouter);
			 if(curRouter=='home'){
			 		this.index ='1';
			 }else if(curRouter=='page1'){
			 		this.index ='2';
			 }
			}
		},
		mounted(){
			var curRouter =  this.$route.path.slice(1);
			 console.log(curRouter);
			 if(curRouter=='home'){
			 		this.index ='1';
			 }else if(curRouter=='page1'){
			 		this.index ='2';
			 }
		}
	}
</script>

<style scoped>
	.el-menu{
		background-color: #008fD0;
		left:17%;
		width: 83%;
		/*top: 10px;*/
	}
	.el-menu-item{
		height: 41px;
		line-height: 41px;
		font-size: 16px;
		color: #FFFFFF;
	}
	.is-active{
		color: #2C3E50;
		background: #eef1f6;
	}
</style>