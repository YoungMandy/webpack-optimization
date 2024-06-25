
import { cloneDeep } from 'lodash';

const a = {
  a: 1,
  b: 1,
  c: [1, 2, 3, 4]
}

const b = cloneDeep(a);
console.log(b);

export default b;

