const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = {
  a: 10,
  b: 20,
};

let theme = false;

const obj = () => {
  if (theme) return obj1;

  return obj2;
};

const r = obj();
console.log(r);
