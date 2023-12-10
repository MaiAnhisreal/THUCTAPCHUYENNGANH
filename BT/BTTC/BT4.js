
let array = [17,10,12,18,6];

//a-b<0 = true => a đứng trước
array.sort((a,b)=> a-b);
console.log(array);

//b-a>0 = true => a đứng sau
array.sort((a,b)=> b-a);
console.log(array);
