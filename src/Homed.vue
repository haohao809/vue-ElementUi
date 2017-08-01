<template>
	<div>	
	  	<my-cascader></my-cascader>
  		<div class="block">
		    <span class="demonstration">默认</span>
		    <el-date-picker
		      v-model="value1"
		      type="date"
		      placeholder="选择日期"
		      :picker-options="pickerOptions0"
		      @change='topDateValue'>
		    </el-date-picker>
		  </div>
  		<div class="sele">
  		<span class="select">选择</span><el-select v-model="value" placeholder="请选择">
			<el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.value"
			      :value="item.value">
			</el-option>
  		</el-select>
  		</div>
  		<Tabs :provider-select = 'value' :top-date = 'value1'></Tabs>
  	</div>
</template>

<script>
	import cascader from '../src/components/cascader.vue'
//	import DatePicker from '../src/components/DatePicker.vue'
	import Tabs from '../src/components/Tabs.vue'
	export default {
		components:{
			'my-cascader':cascader,
			Tabs
		},
		data(){			
		 return{	 
			options: [{
	          value: '个人',
	          label: '选项1'
	        }, {
	          value: '墨迹天气',
	          label: '选项2'
	        }],
	         value: '',
	      pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          		}
        	},
	        pickerOptions1: {
	          shortcuts: [{
	            text: '今天',
	            onClick(picker) {
	              picker.$emit('pick', new Date());
	            }
	          }, {
	            text: '昨天',
	            onClick(picker) {
	              const date = new Date();
	              date.setTime(date.getTime() - 3600 * 1000 * 24);
	              picker.$emit('pick', date);
	            }
	          }, {
	            text: '一周前',
	            onClick(picker) {
	              const date = new Date();
	              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
	              picker.$emit('pick', date);
	            }
	          }]
	        },
	        value1: '',
        	value2: '',
		 }
		},
		methods:{
			topDateValue(value){
				console.log(value);
				this.value1 = value;
//				this.$store.dispatch('topDate',value);
			}
		}
	}
</script>

<style scoped>
.sele{
	margin-left: 1000px;
    margin-top: -160px;	
}
.select{
	padding: 0 5px;
}
.block{
		width: 300px;
		height: 160px;
		margin-left: 700px;
		margin-top: -100px;
	}	
</style>