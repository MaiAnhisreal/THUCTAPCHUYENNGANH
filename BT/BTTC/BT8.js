//Vòng lặp
const factorialCal = n =>{
    if(n<0){
        console.log("Không thể tính giai thừa số nhỏ hơn 0");
    }else if(n === 0 || n === 1 ){
        console.log(`Giai thừa của ${n} là 1.`);
    }else{
        let result = 1 ;
        for( let i = 1 ;i<=n;i++){
            result *= i;
        }
        console.log(`Giai thừa của ${n} là ${result}`);
    }
}
factorialCal(4);

//Đệ quy

const factorialCal1 = n =>{
    if (n === 0 || n === 1) {
        return 1;
      } else {
        return n * factorialCal1(n - 1);
      }
}
console.log(factorialCal1(5));

