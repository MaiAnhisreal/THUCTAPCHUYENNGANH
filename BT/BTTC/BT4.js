
let array = [17,10,12,18,6];

//a-b<0 = true => a đứng trước - Khi a < b => a – b < 0 => a sẽ đứng trước b
array.sort((a,b)=> a-b);
console.log(array);

//b-a>0 = true => a đứng sau - Khi a < b => b – a > 0 => a sẽ đứng sau b
array.sort((a,b)=> b-a);
console.log(array);
