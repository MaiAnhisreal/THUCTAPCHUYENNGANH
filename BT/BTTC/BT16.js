
const arr = ["siuuuuuuuuu","lmao","hihi"];

arr.sort((a,b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a == b) return 0;
    if (a > b) return 1;
    return -1;
});
console.log(arr);