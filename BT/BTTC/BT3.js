/*
split : chuyển chuỗi sang một mảng các kí tự
reverse: đảo mảng trực tiếp
*/

const daoChuoi = (array) =>{
    let chuoi = array.split("").reverse();
    return chuoi;
}

console.log(daoChuoi("lmao"));