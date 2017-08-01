<template>

		<div class="block">
		  <span class="demonstration">选择城市</span>
		  <el-cascader
		    :options="options"
		    v-model="selectedOptions"
		    @change="handleChange">
		  </el-cascader>
		</div>


</template>

<script>
	import mock from '../mock/MockData.js'
	export default {
    data() {
      return {
		options: [],
        selectedOptions: [],
        selectedOptions2: []
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
        if(value.length==3){
        	this.$store.dispatch('cityData',value);
        }
      },
      getData(){
      		var option = [];
			var obj = {};
			var child = [];
			
			this.$http.get('/getProvince').then((response)=>{
				var provinArr = response.data.RECORDS;
				provinArr.forEach(function(item){					
					obj.value = item.province_id;
					obj.label = item.province_name;
					option.push(obj);
					obj = {};
				})
				
			}).catch(function(response){
				console.log('error');
			})
			
			this.$http.get('/getCity').then(function(_data){
				var cityArr =_data.data.RECORDS ;
				option.forEach(function(o){
					cityArr.forEach(function(item){				    
						if(o.value == item.province_id){
							obj.value = item.city_id;
							obj.label = item.city_name;
							child.push(obj);
							o.children = child;
							obj={};
						}
							
					})
					
					child = [];	
				})
			}).catch(function(_data){
				console.log('error');
			})
			this.$http.get('/getArea').then(function(_data){
				var that = this;
				var areaArr = _data.data.RECORDS;
				option.forEach(function(f){
					var firstChild = f.children;
					if(firstChild){
						firstChild.forEach(function(s){
							areaArr.forEach(function(item){
								if(s.value == item.city_id){
									obj.value = item.area_id;
									obj.label = item.area_name;
									child.push(obj);
									s.children = child;
									obj={};
								}
							})
							child = [];		
						})						
					}
									
				})	
				that.$data.options = option;
			}.bind(this)).catch(function(_data){
				console.log('error');
			})  		
      }
    },
    mounted(){     
    	this.getData();
    },
  };
</script>

<style scoped>
	.block{
		width: 400px;
		height: 100px;
		margin: 66px 0 0 250px;
		padding-top: 12px;
	}
</style>