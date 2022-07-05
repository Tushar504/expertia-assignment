import {ADD_USER,ADD_JOBS,ADD_CART,ADD_SEARCH} from "./action"

export const reducer=(store={user:{},jobs:[],cart:[],search:[]},{type,payload})=>{
             switch(type){
               case ADD_USER:
                     return {...store,user:payload}
               case ADD_JOBS:
                     return {...store,jobs:payload}
               case ADD_CART:
                     return {...store,cart:payload}
               case ADD_SEARCH:
                     return {...store,search:payload}
                 default:
                     return store
             }
}