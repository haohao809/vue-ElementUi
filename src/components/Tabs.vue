<template>
 <el-tabs v-model="activeName2" type="card">
    <el-tab-pane label="用户管理" name="first" :disabled = "boolea1">
     	<span class="date">内容输入</span><el-input v-model="topDate" placeholder="请输入内容"></el-input>
    	<DatePicker></DatePicker>
    	<span class="select">选择</span><el-select v-model="value1" placeholder="请选择">
			    <el-option
			      v-for="item in options1"
			      :key="item.value"
			      :label="item.value"
			      :value="item.value">
			    </el-option>
  		</el-select>
    	<span class="temp">内容输入</span><el-input v-model="input2" placeholder="请输入内容"   ></el-input>
    	<br>
    	<span class="wind">内容输入</span><el-input v-model="input3" placeholder="请输入内容"  ></el-input>
   		<br><br>
   		<!--<p>{{inputValue}}</p>-->
   		<el-button type="button" class='savebtn' @click="switchTab">保 存</el-button>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second" :disabled = "boolea2" ref='config'>
    	<DatePicker></DatePicker>
    	<span class="date1">姓名</span><el-input class="input4"  v-model="input4" placeholder="请输入内容"></el-input>   	
    	<span class="select1">性别</span><el-select v-model="value" placeholder="请选择">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.value"
			      :value="item.value">
			    </el-option>
  		</el-select>
    	<span class="temp1">体重</span><el-input v-model="input5" placeholder="请输入内容"   ></el-input>
    	<br>
    	<span class="wind1">地址</span><el-input v-model="input6" placeholder="请输入内容"  ></el-input>
   		<br><br>
   		<el-button class='savebtn' type="button" @click="save" v-text="text"></el-button>
   		<br><br>
   		 <el-table
    ref="multipleTable"
    :data="tableData3"
    border
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="index"
      label="序号"
      width="80">
    </el-table-column>
    <el-table-column
      label="日期"
      width="120">
      <template scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      width="120">
    </el-table-column>
      <el-table-column
      prop="bmi"
      label="指数"
      width="120">
    </el-table-column>
      <el-table-column
      prop="address"
      label="地址"
      width="120">
    </el-table-column>
     <el-table-column label="操作"
     show-overflow-tooltip>
      <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">修改</el-button>
      </template>
    </el-table-column>
  </el-table>

   		   		
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third"  :disabled = "boolea3" ref='role'>
    	<span class="wind1">内容输入</span><el-input v-model="input7" placeholder="请输入内容"  ></el-input>
    	<DatePicker></DatePicker>
    	<span class="wind2">内容输入</span><el-input v-model="input8" placeholder="请输入内容"  ></el-input>
    	<span class="wind3">内容输入</span><el-input v-model="input9" placeholder="请输入内容"  ></el-input>
    	<br/>
    	<span class="wind4">内容输入</span><el-input v-model="input10" placeholder="请输入内容"  ></el-input>
    	<span class="wind5">内容输入</span><el-input v-model="input11" placeholder="请输入内容"  ></el-input>
    	<el-button class='saveDataBtn' type="button" @click="saveData">保存</el-button>
    </el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth"  :disabled = "boolea4" ref = 'task'>
    	
    	<fieldset id='userManager'>
    		<legend>用户管理</legend>
    			<p class="filed">日期:<span v-text="topDate"></span></p>
    			<DatePicker></DatePicker>
    			<span class="select">选择</span><el-select v-model="value1" placeholder="请选择">
			    <el-option
			      v-for="item in options1"
			      :key="item.value"
			      :label="item.value"
			      :value="item.value">
			    </el-option>
  				</el-select>
		    	<span class="temp">内容输入</span><el-input v-model="input2" placeholder="请输入内容"   ></el-input>
		    	<br>
		    	<span class="wind">内容输入</span><el-input v-model="input3" placeholder="请输入内容"  ></el-input>
		   		<br><br>
    	</fieldset>
    	<fieldset id="configManager">
    		<legend>配置管理</legend>
    			<div id="first">    			
    			<p>——第一天数据——</p>
    			<p class="filed">日期:<span v-text="totalDate1"></span></p>
    			<DatePicker></DatePicker>
    			<span class="name">姓名</span><el-input class="name4"  v-model="totalinput1" placeholder="请输入内容"></el-input> 
    			<span class="select2">选择</span><el-select v-model="valuea" placeholder="请选择">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.value"
			      :value="item.value">
			    </el-option>
  				</el-select>
  				<br>
		  		<span class="temp2">体重</span><el-input v-model="totalinput2" placeholder="请输入内容"   ></el-input>
		    	<span class="address">地址</span><el-input v-model="totalinput3" placeholder="请输入内容"  ></el-input>
		   		<br><br>
		   		</div>
		   		<div id="second">		   		
		   		<p>——第二天数据——</p>
    			<p class="filed">日期:<span v-text="totalDate2"></span></p>
    			<DatePicker></DatePicker>
    			<span class="name">姓名</span><el-input class="name4"  v-model="totalinput4" placeholder="请输入内容"></el-input> 
    			<span class="select2">选择</span><el-select v-model="valueb" placeholder="请选择">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.value"
			      :value="item.value">
			    </el-option>
  				</el-select>
  				<br>
		  		<span class="temp2">体重</span><el-input v-model="totalinput5" placeholder="请输入内容"   ></el-input>
		    	<span class="address">地址</span><el-input v-model="totalinput6" placeholder="请输入内容"  ></el-input>
		   		<br><br>
		   		</div>
		   		<div id="third">
		   		<p>——第三天数据——</p>
    			<p class="filed">日期:<span v-text="totalDate3"></span></p>
    			<DatePicker></DatePicker>
    			<span class="name">姓名</span><el-input class="name4"  v-model="totalinput7" placeholder="请输入内容"></el-input> 
    			<span class="select2">选择</span><el-select v-model="valuec" placeholder="请选择">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.value"
			      :value="item.value">
			    </el-option>
  				</el-select>
  				<br>
		  		<span class="temp2">体重</span><el-input v-model="totalinput8" placeholder="请输入内容"   ></el-input>
		    	<span class="address">地址</span><el-input v-model="totalinput9" placeholder="请输入内容"  ></el-input>
		   		<br><br>
		   		</div>
		   		<div id="four">
		   		<p>——第四天数据——</p>
    			<p class="filed">日期:<span v-text="totalDate4"></span></p>
    			<DatePicker></DatePicker>
    			<span class="name">姓名</span><el-input class="name4"  v-model="totalinput10" placeholder="请输入内容"></el-input> 
    			<span class="select2">选择</span><el-select v-model="valued" placeholder="请选择">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.value"
			      :value="item.value">
			    </el-option>
  				</el-select>
  				<br>
		  		<span class="temp2">体重</span><el-input v-model="totalinput11" placeholder="请输入内容"   ></el-input>
		    	<span class="address">地址</span><el-input v-model="totalinput12" placeholder="请输入内容"  ></el-input>
		   		<br><br>
		   		</div>
		   		<div id="five">
		   		<p>——第五天数据——</p>
    			<p class="filed">日期:<span v-text="totalDate5"></span></p>
    			<DatePicker></DatePicker>
    			<span class="name">姓名</span><el-input class="name4"  v-model="totalinput13" placeholder="请输入内容"></el-input> 
    			<span class="select2">选择</span><el-select v-model="valuee" placeholder="请选择">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.value"
			      :value="item.value">
			    </el-option>
  				</el-select>
  				<br>
		  		<span class="temp2">体重</span><el-input v-model="totalinput14" placeholder="请输入内容"   ></el-input>
		    	<span class="address">地址</span><el-input v-model="totalinput15" placeholder="请输入内容"  ></el-input>
		   		<br><br>
		   		</div>
		   		<div id="six">
		   		<p>——第六天数据——</p>
    			<p class="filed">日期:<span v-text="totalDate6"></span></p>
    			<DatePicker></DatePicker>
    			<span class="name">姓名</span><el-input class="name4"  v-model="totalinput16" placeholder="请输入内容"></el-input> 
    			<span class="select2">选择</span><el-select v-model="valuef" placeholder="请选择">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.value"
			      :value="item.value">
			    </el-option>
  				</el-select>
  				<br>
		  		<span class="temp2">体重</span><el-input v-model="totalinput17" placeholder="请输入内容"   ></el-input>
		    	<span class="address">地址</span><el-input v-model="totalinput18" placeholder="请输入内容"  ></el-input>
		   		<br><br>
		   		</div>
    	</fieldset>
    	<fieldset id="roleManager">
    		<legend>角色管理</legend>
    		<p class="filed">日期:<span v-text="topDate"></span></p>
    		<DatePicker></DatePicker>
    	<span class="wind11">内容输入</span><el-input v-model="input7" placeholder="请输入内容"  ></el-input>
    	<span class="wind12">内容输入</span><el-input v-model="input8" placeholder="请输入内容"  ></el-input>
    	<br/>
    	<span class="wind13">内容输入</span><el-input v-model="input9" placeholder="请输入内容"  ></el-input>    
    	<span class="wind14">内容输入</span><el-input v-model="input10" placeholder="请输入内容"  ></el-input>
    	<br/>
    	<span class="wind15">内容输入</span><el-input v-model="input11" placeholder="请输入内容"  ></el-input>
    	</fieldset>
    	<el-button class='submitBtn' type="button" @click="saveData">提交</el-button>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	import DatePicker from './DatePicker.vue'	
 export default {
   	components:{
   		DatePicker
   	},
   	props:['providerSelect','topDate'],
    data() {
      return {
        activeName2: 'first',
         input2: '',
         input3: '',
         input4: '',
         input5: '',
         input6: '',
         input7: '',
         input8: '',
         input9: '',
         input10: '',
         input11: '',
         options: [{
          value: '男',
          label: '选项1'
        },{
          value: '女',
          label: '选项2'
        }],
         options1: [{
          value: '上海',
          label: '选项1'
        },{
          value: '北京',
          label: '选项2'
        }],
        value: '',
        value1: '',
        label: '',
        boolea1: true,
        boolea2: true,
        boolea3: true,
        boolea4: true,
        tableData3:[],
        tableItem : {},
        saveFlag : false,
        EditIndex : -1,
        text:'保存',
        styleA:1,
        styleB:0,
        totalDate1: '',
        totalDate2: '',
        totalDate3: '',
        totalDate4: '',
        totalDate5: '',
        totalDate6: '',
        totalinput1: '',
        totalinput2: '',
        totalinput3: '',
        totalinput4: '',
        totalinput5: '',
        totalinput6: '',
        totalinput7: '',
        totalinput8: '',
        totalinput9: '',
        totalinput10: '',
        totalinput11: '',
        totalinput12: '',
        totalinput13: '',
        totalinput14: '',
        totalinput15: '',
        totalinput16: '',
        totalinput17: '',
        totalinput18: '',
        valuea: '',
        valueb: '',
        valuec: '',
        valued: '',
        valuee: '',
        valuef: '',
        Index : undefined,
      };
    },
    methods:{
      handleClick(tab, event) {
        console.log(tab, event);     
      },
      
      switchTab(){
      	if(this.value1!=''&&this.input2!=''&&this.input3!=''&& this.inputValue!='' && this.cityData.length==3 && this.topDate!=''
      	 && this.providerSelect!=''){
      		     	
	   		this.boolea2 = false;	
		    this.$nextTick(function(){
		     	let eleNav =  document.getElementsByClassName('el-tabs__nav')[0].children;
	   		    console.log(this.boolea2);
	   		    let index = this.$refs.config.index;
	   		    eleNav[index].click(); 
		    })
			this.$store.dispatch('switchTab');
		}else{
			this.$alert('表格有空缺！','警告',{
					confirmButtonText : '确定',
				})
		}
		$('#userManager #datePicker .el-input__inner').val(this.inputValue);
      },
	 handleEdit(index, row){
	 	console.log(index, row);
	 	this.inputValue = row.date;
	 	this.input4 = row.name;
		this.value = row.sex
		this.input5 = row.bmi;
		this.input6 = row.address;
		this.saveFlag = true,
		this.EditIndex = index;
	 },
	 save(){
	 	if((this.inputValue!=''&&this.input4!=''&&this.value!=''&&this.input5!=''&&this.input6!='')||this.tableData3.length>4){	 		
	 	
		 	if(this.tableData3.length > 5){
		 		this.boolea3 = false;	
				this.$nextTick(function(){
		     	let eleNav =  document.getElementsByClassName('el-tabs__nav')[0].children;
	   		    console.log(this.boolea3);
	   		    let index = this.$refs.role.index;
	   		    console.log(index);
	   		    eleNav[index].click(); 
	   		   this.boolea2 = true;	
	   		   this.$store.dispatch('save');
		   })	 			 	 		
		 }else if(this.tableData3.length > 4 ){
		 	  this.text = '下一步';
		 }
			this.thistableItem = {
					date:this.inputValue,
					name:this.input4,
					sex:this.value,
					bmi:this.input5,
					address:this.input6			
				};
			this.$nextTick(function(){
			if(!this.saveFlag){
				this.tableData3.push(this.thistableItem);
				console.log(this.tableData3);
				this.EditIndex =-1; //恢复index的初始值
			}else{
				console.log(this.tableData3[this.EditIndex]);
				this.tableData3.splice(this.EditIndex,1,this.thistableItem);
				console.log(this.tableData3);
				this.saveFlag = false;
			}
			//添加总的按天数据
			if(this.EditIndex==-1){
				this.Index = undefined;
			}else{
				this.Index = this.EditIndex+1;
			}
			switch (this.Index||this.tableData3.length){
					case 1:					
					this.totalDate1 = this.inputValue;
					this.valuea = this.value;
					this.totalinput1 = this.input4;
					this.totalinput2 = this.input5;
					this.totalinput3 = this.input6;	
					$("#first #datePicker .el-input__inner").val(this.inputValue);
					break;
					case 2:
					this.totalDate2 = this.inputValue;
					this.valueb = this.value;
					this.totalinput4 = this.input4;
					this.totalinput5 = this.input5;
					this.totalinput6 = this.input6;
					$("#second #datePicker .el-input__inner").val(this.inputValue);
					break;
					case 3:
					this.totalDate3 = this.inputValue;
					this.valuec = this.value;
					this.totalinput7 = this.input4;
					this.totalinput8 = this.input5;
					this.totalinput9 = this.input6;
					$("#third #datePicker .el-input__inner").val(this.inputValue);
					break;
					case 4:
					this.totalDate4 = this.inputValue;
					this.valued = this.value;
					this.totalinput10 = this.input4;
					this.totalinput11 = this.input5;
					this.totalinput12 = this.input6;
					$("#four #datePicker .el-input__inner").val(this.inputValue);
					break;
					case 5:
					this.totalDate5= this.inputValue;
					this.valuee = this.value;
					this.totalinput13 = this.input4;
					this.totalinput14 = this.input5;
					this.totalinput15 = this.input6;
					$("#five #datePicker .el-input__inner").val(this.inputValue);
					break;
					case 6:
					this.totalDate6= this.inputValue;
					this.valuef = this.value;
					this.totalinput16 = this.input4;
					this.totalinput17 = this.input5;
					this.totalinput18 = this.input6;
					$("#six #datePicker .el-input__inner").val(this.inputValue);
					break;
					default:
						break;
			}
			this.inputValue = '';
			this.input4 = '';
			this.value = '';
			this.input5 = '';
			this.input6 = '';
			console.log(this.inputValue);
			
			})
			}else{
				this.$alert('表格有空缺！','警告',{
					confirmButtonText : '确定',
				})
			}
		 },
		 saveData(){
		 	if(this.inputValue!=''&&this.input7!=''&&this.input8!=''&&this.input9!=''&&this.input10!=''&&this.input11!='')
		 	{
		 			this.boolea4 = false;
		 		this.$nextTick(function(){
			 		
			 		this.boolea3 = true;	
			 		let eleNav =  document.getElementsByClassName('el-tabs__nav')[0].children;
			 		let index = this.$refs.task.index;
			 		eleNav[index].click(); 
		 		})
		 	}else{
		 		this.$alert('表格有空缺！','警告',{
					confirmButtonText : '确定',
				})
		 	}
		 	$('#roleManager #datePicker .el-input__inner').val(this.inputValue);
		 },
		 handleSelectionChange(val){
		 	 this.multipleSelection = val;
		 }
   },
   	computed:mapGetters([
	 	  'inputValue',
	 	  'cityData',
//	 	  'topDate',
	 	]),

  };
</script>

<style scoped>
	.el-tabs{
		margin-top: 20px;
		margin-left: 241px;
		width: 83%;
	}
	.el-input,.el-select {
		width:200px;
		padding: 10px 20px;
	}
	.date,.select,.wind{
		margin-left: 10px;
	}
	.block{
		margin-top: -56px;
    	margin-left: 433px;
    	width: 20%;
    	height: 36px;
    	padding: 10px 20px;
	}
	.select{
		margin-right: 33px;
	}
	.select2{
		margin-right: 33px;
		margin-left: 90px;
	}
	.temp{
		margin-left:80px;
	}
	.temp2{
		margin-left:10px;
		margin-right: 26px;
	}
	.savebtn,.saveDataBtn,.submitBtn{
		margin-left:600px;
	}
	.saveDataBtn{
		margin-top: 20px;
	}
	.submitBtn{
	margin-top: 10px;
	margin-bottom: 20px;
	}
	.date1{
		margin-left: 402px;
		margin-top: -42px;
		float: left;
	}
	.input4{
		float: left;
		margin-left: 466px;
		margin-top: -56px;
	}
	.select1{
		margin-left: 36px;
	}
	.temp1{
		margin-left: 90px;
		margin-right: 32px;
	}
	.wind1,.wind2,.wind4{
		margin-left: 36px;
	}
	.wind3,.wind5{
		margin-left: 60px;
	}
	.wind11,.wind13,.wind15{
		margin-left: 4px;
	}
	.wind12,.wind14{
		margin-left: 93px;
	}
	.address{
		margin-left: 84px;
		margin-right: 36px;
	}
	fieldset{
		border-radius: 5px;
		margin: 5px 20px 5px 10px;
	}
	.filed{
		margin-left: 10px;
	}
	.filed span{
		padding-left: 50px;
	}
	.name{
		margin-left: 12px;
	    margin-top: 16px;
	    float: left;
	}
	.name4{
		float: left;
    	margin-left: 25px;
    	margin-top: 0px;
	}
</style>