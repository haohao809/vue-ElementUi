import getters from './getters'
const  state = {
	style1:true,
	style2:false,
	inputValue:'',
	cityData:'',
	topDate:'',
}
const mutations = {
	['SWITCHTAB'](state){
		state.style1=false;
		state.style2=true;
		
	},
	['ROUTER1'](state){
		state.style1=true;
		state.style2=false;
	},
	['INPUTDATE'](state,val){
		state.inputValue = val;
	},
	['CITYDATA'](state,val){
		state.cityData = val;
	},
//	['TOPDATE'](state,val){
//		state.topDate = val;
//	}
	['SAVE'](state){
		state.style1 = true;
		state.style2 = false;
	},

}
export default{
	state,
	mutations,
	getters
}
