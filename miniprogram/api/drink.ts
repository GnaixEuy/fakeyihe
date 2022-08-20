import {get, post} from './request';

export const getData =  ()=>{
  return get('/drinks');
}

export default{
  getData
}