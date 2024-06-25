/*
 * @desc: 
 * @param: 
 * @return: 
 * @Author: huili.local
 */
import { cloneDeep } from 'lodash';

const a = {
  a: 1,
  b: 1,
  c: [1, 2, 3, 4],
  d: {
    text:'hello world'
  }
}

const b = cloneDeep(a);

export default b;