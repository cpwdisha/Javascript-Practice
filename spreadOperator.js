// used in combination with destructuring

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1 , ...arr2];
console.log(arr3)

const [one, two, ...rest] = arr3;
console.log(one);
console.log(two);
console.log(rest);