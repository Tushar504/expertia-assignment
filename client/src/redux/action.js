

export const ADD_USER="ADD_USER"
export const ADD_JOBS="ADD_JOBS"
export const ADD_CART="ADD_CART"
export const ADD_SEARCH="ADD_SEARCH"
export const REMOVE="REMOVE"
const addUser=(data)=>{
    return {
        type:ADD_USER,
        payload:data
    }
}
 
const addJobs=(data)=>{
    return {
        type:ADD_JOBS,
        payload:data
    }
}

const addCart=(data)=>{
    return {
        type:ADD_CART,
        payload:data
    }
}

const addSearch=(data)=>{
    return {
         type:ADD_SEARCH,
         payload:data
    }
}

export const remove=(data)=>{
    return {
        type:REMOVE,
        payload:data
    }
}


export const login=(data)=>{
       return async(dispatch,getState,api)=>{
           try {
               const res=await fetch("https://expertia-assignment.herokuapp.com/login",{
                   method:"POST",
                   body:JSON.stringify(data),
                   headers: {
                    'Content-Type': 'application/json'
                   
                  },
               })
                  const received=await res.json()
                  
                
                
                
                  dispatch(addUser(received.user))
                
          
                  }
                
                  
                  
              
           catch (error) {
               console.log(error)
           }
       }
           
    
  
}

export const getJobs=({page,pagesize})=>{
    return async(dispatch,getState,api)=>{
        try {
            const res=await fetch(`https://expertia-assignment.herokuapp.com/getjobs/jobs?pagesize=${pagesize}&page=${page}`)
               const received=await res.json()
               dispatch(addJobs(received))
              }
             catch (error) {
            console.log(error)
        }
    }
        
}

export const getCart=({page,pagesize,id})=>{
    return async(dispatch,getState,api)=>{
        try {
            const res=await fetch(`https://expertia-assignment.herokuapp.com/getcart/carts/${id}?pagesize=${pagesize}&page=${page}`)
               const received=await res.json()
               dispatch(addCart(received))
              }
             catch (error) {
            console.log(error)
        }
    }
}
              
export const searched=({page,pagesize,text})=>{
    return async(dispatch,getState,api)=>{
        try {
            const res=await fetch(`https://expertia-assignment.herokuapp.com/getjobs/jobs/${text}?pagesize=${pagesize}&page=${page}`)
               const received=await res.json()
               dispatch(addSearch(received))
              }
             catch (error) {
            console.log(error)
        }
    }
}
        