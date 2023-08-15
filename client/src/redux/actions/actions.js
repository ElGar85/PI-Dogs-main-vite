import { GET_DOGS,ORDER,FILTER, GET_DETAIL, GET_DOGS_NAME } from "./types";
import axios from "axios";
const URL = 'http://localhost:3001/dogs';

export const getDogs = () => {
       return async (dispatch) => {
          try{
             const resp = await axios(`${URL}`);
             return dispatch({
                type: GET_DOGS,
                payload: resp.data,
             });
          }catch(error){
             alert(error.message)
          }
       };
    
  };

  export const getDogsId = (id) => {
   return async (dispatch) => {
      try{
         const resp = await axios(`${URL}/${id}`);
         return dispatch({
            type: GET_DETAIL,
            payload: resp.data,
         });
      }catch(error){
         alert(error.message)
      }
   };

};

export const getDogName = (name) => {
   return async (dispatch) => {
      try{
         const resp = await axios(`${URL}/search/name?${name}`);
         return dispatch({
            type: GET_DOGS_NAME,
            payload: resp.data,
         });
      }catch(error){
         alert(error.message)
      }
   };

};

 // async function onSearch(name) {
    //     // let existe = true;
    //     try{
    //        const resp = await  axios(`http://localhost:3001/character/${id}`);
    //        const {data} = resp;
    //        if(data.name){
    //           setCharacters((oldChars) => [...oldChars, data]);
    //        }
    //     }catch(error){ 
    //        alert(error.message);
    //     }
    // }
  
//   export function filterDogsId(id){
//    return {type: GET_DETAIL, payload:id }
// }
 
 export function filterCards(temperaments){
    return {type: FILTER, payload:temperaments }
 }
 
 export function orderCards(order){
    return {type: ORDER, payload:order }
 }
 