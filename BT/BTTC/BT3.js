/*
split : chuyển chuỗi sang một mảng các kí tự
reverse: đảo mảng trực tiếp
*/

const daoChuoi = (array) =>array.split("").reverse().join('');

console.log(daoChuoi("lmao"));