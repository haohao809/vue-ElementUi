export default{
	switchTab: ({
		commit
	}) => {
		commit('SWITCHTAB');
	},
	router1:({
		commit
	}) => {
		commit('ROUTER1');
	},
	inputDate: ({
		commit
	},val) =>{
		commit('INPUTDATE',val);
	},
	cityData : ({
		commit
	},val) =>{
		commit('CITYDATA',val);
	},
//	topDate :({
//		commit
//	},val) =>{
//		commit('TOPDATE',val);
//	}
	save :({
		commit
	},val) =>{
		commit('SAVE');
	},

}
