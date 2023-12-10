//Tìm số lớn thứ hai trong mảng số nguyên

function secondLargest(arr) {
    let max1st = arr[0];
    let max2nd = 0;
    
    for(let i=0; i<arr.length; i++) {
      if(arr[i] > max1st) {
        max2nd = max1st;
        max1st = arr[i];
      }
      else if(arr[i] > max2nd && arr[i] != max1st) {
        max2nd = arr[i];
      }
    }
    return max2nd;
  }
  console.log(" Số lớn thứ 2 là : "+ secondLargest([1,2,3,4,5]));