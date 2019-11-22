function newPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomBoolean = Math.round(Math.random() * 10) % 2 === 0;
      return resolve(randomBoolean);
    }, 1000);
  });
}

const myPromises = Array.from({ length: 10 }).map(newPromise);
Promise.all(myPromises).then((value) => {
  const onlyTrue = value.filter((item) => {
    item === true;

    return item;
  });

  const onlyFalse = value.length - onlyTrue.length;

  const results = {
    response: value,
    _true: onlyTrue.length,
    _false: onlyFalse,
  };

  localStorage.setItem('results', JSON.stringify(results));
});