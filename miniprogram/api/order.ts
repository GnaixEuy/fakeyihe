import {get, post} from './request';

export const getData =  ()=>{
  return get('/orders');
}

export default{
  getData
}