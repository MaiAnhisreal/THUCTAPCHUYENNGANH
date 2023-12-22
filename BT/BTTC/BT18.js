//Pangram là chuỗi có đày đủ kí tự trong bảng chữ cái
const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");

const checkPangram = string => {
    let r = true;
    const arr = string.split("");
    for (let index = 0; index < arr.length; index++) {
        const checks = check(arr[index])
        if(!checks){
            r = false;
    }}
    return r;
}

const check = character =>{
    let r = false
    for (let index = 0; index < alphabets.length; index++) {
        if(alphabets[index] === character){
            r = true;
        }
    }
    return r;
}

console.log(checkPangram("abcdefghijklmnopqrstuvwxyz"));
console.log(checkPangram("1Killua is my best husband lmao"));




