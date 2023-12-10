let array = [3,44,5,8,11,21,25,23,29,31]

const SNT = (n) =>{
    if(n<2){
         return false; 
    }else{
        for(let i=2; i < n-1 ; i++){
            if(n%i == 0){
                return false;
            }
        }
        return true;
    }
}
const findSNT = array =>{
    let a = [];
    for(let i = 0; i < array.length ; i++)
    {
        if(SNT(array[i])){
            a.push(array[i]);
        }
    }
    return "Các số nguyên tố có trong mảng là: " + a;
}
console.log(findSNT(array));