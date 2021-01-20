import * as actions from "./actionTypes"

// All the actions we need to perform on particular data show have function here as action Creator



export function newsLiked(id){
    return {
        type:actions.LIKED,
        payload:{
            id
        }
    }
}

export function setData(data){
    return {
        type:actions.SETDATA,
        payload:{
            data
        }
    }
}