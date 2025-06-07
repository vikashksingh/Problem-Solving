function get(obj, path, defaultVal){
  const keys = path.split('.');
  return solve(obj, keys, 0, defaultVal);
}

function solve(obj, keys, index, defaultValue){
  if(index === keys.length-1) return obj[keys[index]];
  if(!obj || !obj[keys[index]]) return defaultValue;
  return solve(obj[keys[index]], keys, index+1, defaultValue);
}

const obj = {
  a: {
    b: 'hello',
    c: null,
    d: [1,2,'world'],
    e: [
      {name: 'vikas'},
      {work: 'human'}
    ],
    h: {
      i: {
        j: 'iron man',
        k: 'bat man'
      }
    }
  },
  f: {
    g: undefined
  }
};
console.log(get(obj, 'a.h.i.j', 'default')); // hello
console.log(get(obj, 'a.c', 'default'));
console.log(get(obj, 'f.g.h.i', 'default'));
console.log(get(obj, 'a.d', 'default'));