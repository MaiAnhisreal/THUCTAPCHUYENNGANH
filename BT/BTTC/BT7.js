const arr1 = [1,3,4,5,7,9,10,11,12,13,14];
const arr2 = [1,2,4,6,8,10,11,12,13,14];

//1
const checkDuplicateArr = (arr1, arr2) => {
  let a = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        a.push(arr1[i]);
        break; 
      }
    }
  }
  return "Các số trùng nhau trong 2 mảng là: " + a.join(", ");
};
console.log(checkDuplicateArr(arr1, arr2));
