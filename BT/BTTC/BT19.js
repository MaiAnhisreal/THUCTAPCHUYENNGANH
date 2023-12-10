const replaceChar = string =>{
    const replaced = string.replace(/[^a-z0-9]/gi, '-');
    return "Chuỗi sau khi được thay thế là : " + replaced;
}
console.log(replaceChar("Killua is my best husband!"));