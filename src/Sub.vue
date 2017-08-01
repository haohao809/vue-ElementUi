<template>
	<div class="list">
		<div class="tool-bar">
			<div :class="{'pass': normal,'passHover':hover}">
				<span>一键通过</span><i class="el-icon-check"></i>
			</div>
			<div :class="{'delete':normal,'deleteHover':hover}" @click="rowsdelete(multipleSelection)">
				<span>删除</span><i class="el-icon-delete2"></i>
			</div>
			<div :class="{'edit':enable,'editHover':disable}">
				<router-link :to="{name:'edit',params:{cityId:Editcode,dateId:EditDate}}"><span>编辑</span><i class="el-icon-edit"></i></router-link>
			</div>
			
		</div>
		 <el-table
    ref="multipleTable"
    :data="tableData3"
	:height="h"
    border
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="序号"
      type="index"
      width="70">     
    </el-table-column>
        <el-table-column
      prop = "preCity"
      label="上一级城市"
      width="120">
    </el-table-column>
    <el-table-column
	  prop = "city"
      label="城市"
      width="120">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
     width="120">
    </el-table-column>
     <el-table-column
      prop="releaseTime"
      label="发布时间"
      width="180">
    </el-table-column>
      <el-table-column
      prop="provider"
      label="提供商"
      width="120">
    </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
       <router-link :to="{name:'edit',params:{cityId:Editcode,dateId:EditDate}}"><el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button></router-link>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index,tableData3,scope.row)">删除</el-button>
      </template>
    </el-table-column>
  
  </el-table>
   <div class="block">
       <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[10, 20, 30,40]"
      :page-size="pageSize"
      layout="sizes, prev, pager, next"
      :total="100">
    </el-pagination>
  </div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	import mock from './mock/MockData.js'
//	Vue.prototype.$http = axios
	var resArr = [];
	function utcTocom(timestamp){
		var time =new Date(timestamp*1000);
		time = time.toLocaleString();
		return time;
	}
	var  contentH = document.documentElement.clientHeight-193;
	 export default {
		    data() {		      
		      return {
				h:contentH,
				tableData3:resArr,
		        multipleSelection: [],		
			    currentPage2: 1,
			    pageSize:10,
			    normal : true,
			    hover : false,
			    enable : true,
			    disable : false,
			    Editcode:0,
			    EditDate:'d',
		      }
		     
		    },
		    methods: {
		     handleAxios(url){
				axios.post(url
				).then((response)=>{
				console.log(response);
				var result = response.data.list;
				console.log(result);
				resArr = [];
						var list = result;
						for(var i=0;i<this.pageSize;i++){
						var itemData = {
							preCity : list[i].city_pname,
							city: list[i].city_name,
							status :list[i].status,	
							releaseTime : utcTocom(list[i].update_time),
							provider:list[i].provider,	
							code:list[i].code
							};
								resArr.push(itemData);
						}
						this.tableData3 = resArr;
						
						console.log(this.tableData3);
					}).catch((response)=>{
								console.log(response);
				 }) 
				},  
			handleTime(value){
				let time = value.split(' ')[0].replace(/\//g,'-');
					if(time.split('-')[1].length==1){
						var month = '0'+time.split('-')[1];
					}else{
						var month = time.split('-')[1];
					}
					if(time.split('-')[2].length==1){
						var day = '0'+time.split('-')[2];
					}else{
						var day = time.split('-')[2];
					}
					time = time.split('-')[0]+'-'+month+'-'+day;
					return time;
			},
		     toggleSelection(rows) {
		        if (rows) {
		          rows.forEach(row => {
		            this.$refs.multipleTable.toggleRowSelection(row);
		          });
		        } else {
		          this.$refs.multipleTable.clearSelection();
		        }
		      },		      
		      handleSelectionChange(val) {
		        this.multipleSelection = val;
		        console.log(val.length);
		        if(val.length==1){
		        	this.normal = false;
		        	this.hover = true;
		        	this.enable = false;
		        	this.disable = true;
		        }else if(val.length>1){
		        	this.normal = false;
		        	this.hover = true;
		        	this.enable = true;
		        	this.disable = false;
		        }
				else{
					this.normal = true;
		        	this.hover = false;
		        	this.enable = true;
		        	this.disable = false;
		        }
		      },
		      handleEdit(index, row) {
			        console.log(index, row);
			        this.Editcode = row.code;
			        this.EditDate = row.releaseTime.split(' ')[0];
			        console.log(this.EditDate);
			      },
			  handleDelete(index,rows,row) {
			        console.log(index, row);
			        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {			         
			          confirmButtonText: '确定',
			          cancelButtonText: '取消',
			          type: 'warning'
			        }).then(() => {
//					  row.splice(index,1);
					let time =this.handleTime(row.releaseTime);
					
					this.$http.post('http://getList').then((response) =>
					  	{
					  		var _that = this;
					  		var result = response.data.list;
							result.filter(function(item,index){
								if(item.code == row.code){
									console.log(index);
									result.splice(index,1);
									mock.handlers.post[0][3].list.splice(index,1);
								}
								return result;
							})
					  		console.log(result);
					  		
					  		resArr = [];
					  		if(this.currentPage2==1){
								var homePage = 0;
								if(result.length>10)
									var len = 10;
								else
									len = result.length;
							}else{
								homePage = 10*(this.currentPage2-1);
								if(result.length > (10*this.currentPage2))
									len = 10*(this.currentPage2);
								else
									len = result.length;
							}
							
					  		for(var i = homePage;i<len;i++){
								var itemData = {
									preCity : result[i].city_pname,
									city: result[i].city_name,
									status :result[i].status,	
									releaseTime : utcTocom(result[i].update_time),
									provider:result[i].provider,	
									code:result[i].code
									};
								resArr.push(itemData);
						  }
								_that.tableData3 = resArr;
								console.log(_that.tableData3);
					  			this.$message({
						            type: 'success',
						            message: '删除成功!'
						    });					  		
					  	}).catch((response) => {
					  	console.log(response);
					  })			     
			        }).catch(() => {
			          this.$message({
			            type: 'info',
			            message: '已取消删除'
			          });          
			        });	
			      },
			      handleSizeChange(val) {
				        console.log(`每页 ${val} 条`);
				      },
				   handleCurrentChange(val) {
				        console.log(`当前页: ${val}`);	
				        this.currentPage2 = val;
						this.$http.post('http://getList',).then((response)=>{
							let that = this;
							console.log(response);
							var result = response.data,
								resArr = [];
							var list = result.list;	
							if(this.currentPage2==1){
									var homePage = 0;
								if(list.length>10)
									var len = 10;
								else
									len = list.length;
							}else{
								homePage = 10*(this.currentPage2-1);
								if(list.length > (10*this.currentPage2))
									len = 10*(this.currentPage2);
								else
									len = list.length;
							}
							console.log(homePage);
								for(var i = homePage;i < len;i++){
									var itemData = {
										preCity : list[i].city_pname,
										city: list[i].city_name,
										status :list[i].status,	
										releaseTime : utcTocom(list[i].update_time),
										provider:list[i].provider,
									};
									resArr.push(itemData);
								}
								console.log(resArr);
								that.tableData3 = resArr;
								console.log(that.tableData3);
	
						}).catch((response)=>{
							console.log(response);
						})    
				     },
				     rowsdelete(val){
				     	console.log(Object.prototype.toString.apply(val));
				     	if(val.length>0){
					     this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {			         
				          confirmButtonText: '确定',
				          cancelButtonText: '取消',
				          type: 'warning'
				        }).then(() => {
				     		
				     			this.$http.post('http://getList').then((response)=>
				     			{
					     			for(var item of val){
					     			console.log(item);
					     			let code = item.code;
					     				var _that = this;
								  		var result = response.data.list;
										result.filter(function(item,index){
											if(item.code == code){
												console.log(index);
												result.splice(index,1);
												mock.handlers.post[0][3].list.splice(index,1);
											}
											return result;
										})
								  		console.log(result);
								  		
								  		resArr = [];
								  		if(this.currentPage2==1){
											var homePage = 0;
											if(result.length>10)
												var len = 10;
											else
												len = result.length;
										}else{
											homePage = 10*(this.currentPage2-1);
											if(result.length > (10*this.currentPage2))
												len = 10*(this.currentPage2);
											else
												len = result.length;
										}
										
								  		for(var i = homePage;i<len;i++){
											var itemData = {
												preCity : result[i].city_pname,
												city: result[i].city_name,
												status :result[i].status,	
												releaseTime : utcTocom(result[i].update_time),
												provider:result[i].provider,	
												code:result[i].code
												};
											resArr.push(itemData);
									  }
										_that.tableData3 = resArr;
								   }
							  			  this.$message({
								            type: 'success',
								            message: '删除成功!'
								         });
										 console.log('ok');

							  		}).catch((response) => {
										  	console.log(response);
									})
					
				     			}).catch(()=>{
				     				 this.$message({
							            type: 'info',
							            message: '已取消删除'
							          });          
							     });				     						     							     							     		
				     		}
				     	},
		 },
		mounted(){
//					var data= {"accesstoken":this.token,"pageidx":1,"pagenum":this.pageSize,"status":"65002"};
					var param = JSON.stringify(this.data);
					this.handleAxios('http://getList');
			},
//		beforeDestory(){
//					  mock.restore();
//				}
    	}
	 
</script>

<style scoped>
  .list{
	 width: 83%;
	 margin-left: 17%;
	 	
	}
  .tool-bar{
  	margin-top: 66px;
  	height: 56px;
  	line-height: 56px;
  }
  span{
  	padding: 20px 5px 20px 25px
  }
.block{
	text-align:center;
}
.pass,.delete,.edit,.edit a{
	display:inline-block;
	padding-right: 10px;
	color: #DCDCDC;
}
.passHover,.deleteHover,.editHover,.editHover a{
	color: #000000;
	display:inline-block;
	padding-right: 10px;
}
.passHover:hover,.deleteHover:hover,.editHover:hover,.editHover a:hover{
	color: #FFFFFF;
	background-color: #008FD0;
	cursor: pointer;
}
</style>