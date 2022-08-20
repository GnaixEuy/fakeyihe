import {get, post} from './request';

export const getData =  ()=>{
  return get('/stores');
}

export default{
  getData
}