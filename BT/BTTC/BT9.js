// const countChar = (string) =>{

//     let words = string.split('');

//     let count = 0;

//     for(let i = 0; i< words.length;i++){
//         if(words[i] !== ''){
//             count++;
//         }
//     }
//     return count;

// };
// console.log(countChar('Keikyosaki'));
const demTu = (string) =>{

    let words = string.split(' ', string.length);
    return words.length;

};
console.log(demTu('Kei Kyosaki troi oi buon ngu qua ao that day huhu'));
//không tính khoảng trống ở từ đầu tiên