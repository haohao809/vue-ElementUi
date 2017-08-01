<template>
  <div :class="{'block': style1,'block1':style2}" id='datePicker'>
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions0"
      @change="dateValue">
    </el-date-picker>
    <!--<p>{{styleDate}}</p>-->
  </div>
</template>

<script>
	 import {mapGetters, mapActions} from 'vuex'
	 
	 export default {
    data() {
      return {
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
//      style1:false,
//      style2:true
      };
    },
	 	computed: mapGetters([
	 	  'style1',
	 	  'style2',
	 	]),	
	 	methods:{
	 		dateValue(val){
	 			console.log(val);
	 			this.$store.dispatch('inputDate',val);
	 		}
	 	},
  };
</script>

<style scoped>
	.block{    
		   width: 300px;
	    height: 35px;
	    margin-left: 434px;
	    margin-top: -56px;
    }
	.block1{
		width: 20%;
    height: 36px;
    padding: 10px 20px;
		margin-left: 38px;
		/*margin-top: -100px;*/
	}
</style>