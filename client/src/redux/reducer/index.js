import { GET_DOGS,ORDER,FILTER,GET_DETAIL,GET_DOGS_NAME } from "../actions/types";

const GlobalState = {
    dogs:[],
    copyDogs: [],
    detail:[]
}

export default function rootReducer (state = GlobalState, action){

    switch(action.type){
        case GET_DOGS:
            return {
                ...state, 
                dogs: action.payload,
                copyDogs: action.payload
            };
        case GET_DETAIL:
            return {
                ...state, 
                dogs: action.payload
            };
        case GET_DOGS_NAME:
            return {
                ...state, 
                dogs: action.payload
            };
        case FILTER:
            return {...state, dogs: state.dogs.filter((dog)=> dog.temperaments === action.payload)};
        case ORDER:
            const copyDogs = state.dogs.sort((a,b)=>{
                if(action.payload==='A'){
                    if(a.id > b.id) return 1
                    if(a.id < b.id) return -1
                    return 0
                }else{
                    if(a.id > b.id) return -1
                    if(a.id < b.id) return 1
                    return 0
                }
            })
            return {...state, dogs:copyDogs}
        default: 
            return {...state}
     }
}
