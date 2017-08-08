<template>
  <div id="app">
  	<el-row>
  		<el-col :span="24" class="topNav"><div class="grid-content bg-purple">
  		<my-menu @open-login="openDialog('dialogFormVisible')" :message="loginsuccess"></my-menu>
  		</div></el-col>
			<el-col :span="24" class="secNav"><div class="grid-content1 bg-purple-dark">
				<span class="navTitle">>当前位置: <span class="nav">{{navMsg}}</span></span>
			</div></el-col>
			<el-dialog title="登录" :visible.sync="dialogFormVisible"  >
		  <el-form :model="form">
		    <el-form-item label="用户名" :label-width="formLabelWidth">
		      <el-input v-model="form.name" class="login" auto-complete="off"></el-input>
		    </el-form-item>
		 <el-form-item label="密码" :label-width="formLabelWidth">
		      <el-input v-model="form.password" type="password" class="login" auto-complete="off"></el-input>
		    </el-form-item>
		  </el-form>
		  <span class="errorText">{{errorMessage.text}}</span>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="loginin">确 定</el-button>
		  </div>
		 </el-dialog>
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
		},
		openDialog(attr){
			this[attr] = true;
			this.form.name ='zhangsan';
			this.form.password =123456;
			this.errorMessage.text = '';
		},
		loginin(){
			if(this.form.name==''&&this.form.password ==''){
					this.errorMessage.status=false;
					this.errorMessage.text = '选项不能为空';
			}else{
				this.$http.get('./userMessage')
				.then((res)=>{
						console.log(res.data);
						let ueserMessage = res.data.user;
						if(ueserMessage.name == this.form.name && ueserMessage.password == this.form.password){
						  this.loginsuccess = true;
							this.dialogFormVisible = false;
						}else{
							this.errorMessage.status=false;
							this.errorMessage.text = '用户名或密码错误！';
						}
				},(error)=>{
					console.log("error"); 
				
				})
				
				
				
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
      navMsg: '',
      dialogFormVisible: false,
         form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          password: ''
        },
				 formLabelWidth: '80px',
				 errorMessage:{
				 	 status:'',
				 	 text: '',
				 },
				 loginsuccess:false,
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
	top: 0;
	left: 0;
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
  .el-dialog--small{
  	width:35%
  }
  .el-dialog__header{
  	text-align: center;
  }
  .login{
  	width: 300px;
  }
  .errorText{
  	color:red;
  }
</style>
