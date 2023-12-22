let array = [12,100,18,2,1,8];

const bigestNumber = (array) =>{
    let max = array[0];
    for( let i = 0; i < array.length; i++){
        if(max < array[i]){ 
            max = array[i];
        }
    }
    console.log(max + " là số lớn nhất trong mảng")
}
bigestNumber(array);

console.log(Math.max(...array))