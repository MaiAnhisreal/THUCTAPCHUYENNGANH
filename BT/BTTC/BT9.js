const countChar = (string) =>{

    let words = string.split('');

    let count = 0;

    for(let i = 0; i< words.length;i++){
        if(words[i] !== ''){
            count++;
        }
    }
    return count;

};
console.log(countChar('KeiKyosaki'));