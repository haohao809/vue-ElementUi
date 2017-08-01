<template>
	<el-row class="tac">
		<el-col :span="18">
				<el-menu :default-active="navIndex" class="el-menu-vertical-demo">
				<router-link to="/home" tag="li"><el-menu-item index="1">导航一</el-menu-item></router-link>
				<router-link to="/sub" tag="li"><el-menu-item index="2">导航二</el-menu-item></router-link>
				<el-menu-item index="3">导航三</el-menu-item>
				</el-menu>
		</el-col>
  	</el-row>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	console.log(this.router);
	export default {
		mounted(){
			var curRouter =  this.$route.path.slice(1);
			console.log(curRouter);
			if(curRouter=='home'){
				this.navIndex ='1';
			}
			if(curRouter=='sub'||curRouter=='edit'){
				this.navIndex ='2';
			}
		
		},
	data(){
		return {
			navIndex:"1",
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
				this.navIndex ='1';
				this.$store.dispatch('router1');	
			}
			if(curRouter=='sub'||curRouter=='edit'){
				this.navIndex ='2';
			}
		}
	},
}

</script>

<style scoped>
  .el-menu{
  	 width:100%;
  	 min-height: 685px;
  	 max-height: 1000px;
  }
  .el-menu-item{
  	width:100%;
  	border-bottom: 1px solid #DCDCDC;
  	text-align: center;
  }
 .el-col-18 {
 	width:100%
 }
</style>