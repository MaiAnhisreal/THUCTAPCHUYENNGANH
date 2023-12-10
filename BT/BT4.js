//Loại bỏ phần tử trùng lặp từ mảng 

const array= [1,1,10,3,5,2,3,4,5,10,15];


for(let i = 0; i< array.length; i++){
    var duplication = false;
    
   for(let j = i+1; j<array.length; j++){
    if(array[i] === array[j]){
        duplication = true;
        break;
    }
   }
   if(!duplication)
   console.log(array[i]);
}
