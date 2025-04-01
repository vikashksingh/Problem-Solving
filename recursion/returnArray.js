function returnArray(n){
  if(n == 1) return [n];
  return [n, ...returnArray(n-1)];
}

function returnArray1(n){
  const result = [];
  for(let i = 10; i >= 1; i--){
    result.push(i);
  }
  return result;
}

console.log(returnArray(10));
console.log(returnArray1(10));