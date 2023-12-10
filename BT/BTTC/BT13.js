const fibonaci = n =>{
    const arr = [0,1];
    for(let i=0; i<n ; i++){
        const nextItem = arr[arr.length -1] +arr[arr.length-2];
        if(nextItem >50) return arr;
        else arr.push(nextItem);
    }
}
console.log(fibonaci(50))