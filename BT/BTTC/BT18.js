//Pangram là chuỗi có đày đủ kí tự trong bảng chữ cái

const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");

const checkPangram = string => {
    const str = alphabets.every(x => string.includes(x));
    if(str === true){
        return string + " - là chuỗi Pangram"
    }else{
        return string + " - không là chuỗi Pangram"
    }
}
console.log(checkPangram("abcd efgh ijkl mnop qrst uvwx yz"));
console.log(checkPangram("Killua is my best husband"));
