const SNT = (n) =>{
    let checkSo = true;
    if(n<2){
        checkSo = false; 
    }else{
        for(let i=2; i < n-1 ; i++){
            if(n%i == 0){
                checkSo = false;
                break;
            }
        }
    }
    if(checkSo === false){
        console.log(n + " không phải là số nguyên tố");
    }else{
        console.log(n + " là số nguyên tố!");
    }
}
SNT(13);