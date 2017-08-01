import Vue from 'vue'
import VueRouter from 'vue-router'

import Homed from '../src/Homed.vue'
import Sub from '../src/Sub.vue'
import Edit from '../src/Edit.vue'
import HomePage from '../src/HomePage.vue'
import Page1 from '../src/Page1.vue'

Vue.use(VueRouter)

export default
	
	 [

	
	  {
	  	path:   '/',	  	
	    component: HomePage, 
	  	children:[
	  		  { path: 'home', component: Homed },
			  { path: 'sub', component: Sub},
			  { path: 'edit/:cityId/:dateId',component:Edit,name:'edit'},
	  	
	  	],
	  	redirect:'/home',
	  
	  },
	  {path:   '*', redirect:'/home'},
	  {path: '/page1',component:Page1 }
	 ]
