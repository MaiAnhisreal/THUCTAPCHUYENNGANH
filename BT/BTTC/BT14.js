//Số hoàn hảo là số có tổng các ước số của nó bằng chính nó

const perfectNumber = n =>{
    let temp = 0;
    for(let i=0;i<=n/2;i++){
        if(n%i === 0){
            temp +=i;
        }
    }
    if(temp === n && temp !==0){
        console.log(n + " là số hoàn hảo")
    }else{
        console.log( n + " không phải là số hoàn hảo");
    }
}
perfectNumber(8128);