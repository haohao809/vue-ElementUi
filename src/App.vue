<template>
  <div id="app">
  	<el-row>
  		<el-col :span="24" class="topNav"><div class="grid-content bg-purple">
  		<my-menu></my-menu>
  		</div></el-col>
			<el-col :span="24" class="secNav"><div class="grid-content1 bg-purple-dark">
				<span class="navTitle">>当前位置: <span class="nav">{{navMsg}}</span></span>
			</div></el-col>
			
  		<router-view></router-view>
  		<el-col :span="24"><div class="grid-content bg-bottom"></div></el-col>
  		
  	
  	</el-row>

  </div>
</template>

<script>
//	import sideBar from '../src/components/sideBar.vue'
	import menu from '../src/components/menu.vue'
export default {
  name: 'app',
  components:{
//	'my-sideBar':sideBar,
  	'my-menu':menu,		
  },
 	watch:{
		'$route': 'fetchData',
	},
	methods:{
		fetchData:function(){
			let curRouter =  this.$route.path.slice(1);
			if(curRouter=='home'){
				this.navMsg = '系统管理/导航1';
			}else if(curRouter=='sub'){
				this.navMsg = '系统管理/导航2';
			}else if(curRouter=='page1'){
				this.navMsg = '处理中心1';
			}
		}
	},
	mounted () {
		let curRouter =  this.$route.path.slice(1);
			if(curRouter=='home'){
				this.navMsg = '系统管理/导航1';
			}else if(curRouter=='sub'){
				this.navMsg = '系统管理/导航2';
			}else if(curRouter=='page1'){
				this.navMsg = '处理中心1';
			}
	},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      navMsg: ''
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
/*  margin-top: 60px;*/
}

h1, h2 {
  font-weight: normal;
}

 ul {
  list-style-type: none;
  padding: 0;
}

 li {
  /*display: inline-block;*/
 
}

a {
  /*color: #42b983;*/
  text-decoration:none;
}
body,html{
	padding: 0;
	margin: 0;
	margin-bottom: 18px;
}
.topNav,.secNav{
	position: fixed;
	z-index: 100;
}
.secNav{
	margin-top: 41px;
}
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .el-col-12{
  	width: 17%;
  }
  .bg-purple-dark {
    background: #3E6C99;
  }
  .bg-purple {
    background: #008fD0;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    /*border-radius: 4px;*/
    min-height: 41px;
  }
  .grid-content1{
  	min-height: 25px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  /*.sideBar{
  	background-color: #F0F0F0;
  	min-height: 700px;
  	max-height: 1000px;
  	width: 240px;
  }*/
  .grid-content .bg-purple-light{
  	width: 100%;
  }
  .bg-bottom{
  	position: fixed;
  	bottom: 0px;
  	 background: #FFFFFF;
  	 border-top: 1px solid #DCDCDC;
  	 width: 100%;
  }
  .navTitle{
  	color: #9FBBD7;
  	font-size: 12px;
  	margin-left: 80px;
  	margin-top: 3px;
  	position: absolute;
  }
</style>
