const promise = new Promise((resolve,reject) => {
  const timer = setTimeout(() => console.log('hello'), 500);
  reject(new Error());
});

promise.then((value) => console.log(value));