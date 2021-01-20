import * as actions from "./actionTypes"

// The reducer help in performing the required action based on actionType

function reducer(state=[],action){
    switch(action.type){
        case actions.LIKED:
            return state.map(news => news.id === action.payload.id ? {...news,liked:news.liked+1} : news )
        case actions.SETDATA:
            state=action.payload.data;
            return state
        default:
            return state
    }
}

export default reducer;