import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        login:false,
		lists:[]
    },
    getters:{
        getLogin(state){
            return state.login;
        }, 
		getLists(state){
            return state.lists;
        }
    },
	plugins: [createPersistedState({
        storage: window.localStorage
    })],
    mutations:{
        login(state,login){
            state.login=login
			console.log("登录状态",state.login)
        },
        addToCart(state,payload){
            console.log("payload:",payload);
			let flag = false
			payload.checked=true
			state.lists.some(item=>{
				if (item.price==payload.price) {
					item.number += parseInt(payload.number)
					flag = true
					return true
				}
			})
			if (!flag) {
				payload.moRen =false;
				state.lists.push(payload)
			}
        },
        miunst(state,number,id){
            let arr=state.lists;
            // arr[id].number = number
			console.log(id)
        },
		add(state,number,id){
            let arr=state.lists;
            // arr[id].number = number
			console.log(number)
        },
        upDateCheck(state,payload){
            state.lists.some(item=>{
				if(item.checked == payload.checked){
					item.checked == !payload.checked
				}
			})
        },
		selAll(state,payload){
           state.lists.map(item=>{
				// item.checked = payload
				console.log("01110",item.checked )
			})
			
        }
    },
    actions:{
        add22(state,payload){
            state.commit("add11",payload);
        }
    }
})