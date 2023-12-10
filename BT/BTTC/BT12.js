//sử dụng obj
const countChar = (string) => {
    let result = {};
    for(let i = 0;i< string.length;i++){
        let ch = string.charAt(i)
        if(!result[ch]){
            result[ch] =1;
        }else{
            result[ch]+=1
        }
    }
    console.log( "Số lần các kí tự trong chuỗi xuất hiện là: ",result)
}
countChar('popipopipopipopipopipo')



