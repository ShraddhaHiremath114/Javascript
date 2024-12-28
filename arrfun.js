// Higher Order functions
// 1.map
const nums=[1,2,3,4,5];
console.log(nums);

const doubnums=nums.map((num) => num*2);
console.log(doubnums);
// 2.filter
const evennums=nums.filter((num)=>num%2==0);
console.log(evennums);
// 3.reduce
const sum=nums.reduce((accumulator, num)=>accumulator+num, 1);
console.log(sum);