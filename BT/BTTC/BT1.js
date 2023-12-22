const arr = [1,9,20,100]

const sumArr = arr =>{
    let sum =0;
    for (let index = 0; index < arr.length; index++) {
        sum +=arr[index]
    }
    return sum;
}
console.log(sumArr(arr));