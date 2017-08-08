<template>
 <div class="nav-menu">	

<el-menu :default-active="index" class="el-menu-demo" mode="horizontal">  
  <dropDown></dropDown>
  <router-link to="/"><el-menu-item index="1">处理中心</el-menu-item></router-link>
  <router-link to="/page1"><el-menu-item index="2">处理中心1</el-menu-item></router-link>
  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
	<el-button  v-if="confirmLogin" type="text" @click="dialogFormVisible">登录</el-button>
	<span class="username" v-else>张三<img src="../assets/login.jpg"></span>
</el-menu>

</div>
</template>

<script>
	import dropDown from './dropdown.vue'
	export default {
		 components:{
		 	dropDown
		 },
		 props:['message'],
		 data(){
		 	 return{
		 	 	 index:'1',
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
			},
			dialogFormVisible(){
				this.$emit('open-login');
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
		},
		computed:{
			confirmLogin (){
				if(this.message){
					return this.confirmLogin = false;
				}else{
					return this.confirmLogin = true;
				}
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
	.el-button--text,.username{
		color: #FFFFFF;
		font-size: 14px;
		float: right;
		margin-right: 50px;
		margin-top: 5px;
	}
	.username{
		margin-top: 12px;
		display: inline-block;
	}
	.username img{
		width: 30px;
		height: 30px;
		border-radius: 20px;
		float: right;
		margin: -5px 10px 3px 10px;
	}
</style>