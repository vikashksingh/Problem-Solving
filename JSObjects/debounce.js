// function customDebounce(fn, delay){
//   let start = Date.now();
//   let timer = null;
//   return function(){
//     let now = Date.now();
//     if(now - start < delay){
//       clearTimeout(timer);
//       timer = setTimeout(() => {
//         timer = null
//         fn();
//       }, delay);
//     }
//   }
// };

function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}


debounce(() => console.log('A'), 250)();
debounce(() => console.log('B'), 500)();
debounce(() => console.log('C'), 1000)();

