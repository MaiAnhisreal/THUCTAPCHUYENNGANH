const boiSoChung = (a,b,limit) =>{
    let arr = [];
    for(let i=1;i <= limit;i++ ){
        if(i%a===0 && i%b===0){
            arr.push(i)
        }
    }
    return arr;
}
console.log(boiSoChung(3,4,20));
