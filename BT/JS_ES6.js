// /*1. Có bao nhiêu cách để khai báo 1 biến trong JS? Dùng những cách đó khai bảo ra những dữ liệu có giá trị là ‘Hello World’? Phân biệt các cách đó.*/ 
// /* Có 3 cách để khai báo một biến : let, var, const
//     var: có phạm vi trong hàm hoặc toàn cục
//     let: có thể gán lại giá trị nhưng không được khai báo lại - chỉ có thể truy cập 
//     trong cùng khối mã lệnh
//     const: không cho phép việc gán lại giá trị mới khi đã được khởi tạo
// */
let a = "Hello World"
console.log(a);

var b = "Hello World"
console.log(b);

const c = "Hello World"
console.log(c);

// //2. Có bao nhiêu kiểu dữ liệu trong JS? Tạo các biến dữ liệu đó.
// /* Các kiểu dữ liệu bao gồm : string, number, boolean, undefined, object, array
// */
let name = "Kei";
let age = 20;
let isStudent = true;
let undefinedvalue; //khai báo 1 biến trống
let person1 ={
    name: "Kei",
    age: 20,
    isStudent : true
};
let array = [1,2,3]

//3. Có bao nhiêu cách khai báo 1 function trong JS? Dùng những cách đó để khai báo 1 function log ra ‘Hello World’
/*
    Có 3 cách khai báo 1 function là : Declarations function, Expressions function, Arrow function . 
*/

function print(){
    console.log('Hello World');
}
print();

const printHii = function(){
    console.log('Hello World');
}
printHi();

const printHi = a => 'Hello World'
console.log(printHi());

//4. Khai báo 1 function có nhận vào 1 string ,return về string đó nếu trong truyền tham số vào thì trả về  ‘Hello World’.

const printHello = (input = 'Hello World') => input

console.log(printHello());

// /*5. Tạo 2 biến firstName và lastName. Tạo 1 object person từ 2 biến đó. Tìm hiểu về Shorthand Properties Object in ES6. 
// Thực hiện sửa firstName, xoá firstName, thêm lại firstName. */
// // Shorthand Properties để tạo đối tượng bằng cách sử dụng tên biến trực tiếp làm tên thuộc tính trong đối tượng,

let firstName = 'Kei'
let lastName = 'Kyosaki'

let person ={
    firstName,
    lastName
}
console.log(person);

person.firstName = 'Yun';
console.log(person);

delete person.firstName;

person.firstName = 'Kei';
console.log(person);

// /*6. Cho 1 object o = { p1: "v1", p2: "v2", p3: "v3", p4: "v4" }  tạo 4 biến p1 ,p2, p3, p4 có giá trị tương ứng trong object o. 
// Tìm hiểu Destructuring Assignment và thực hiện lại việc tạo 4 biến đó.*/

let o ={
    p1: "v1", 
    p2: "v2", 
    p3: "v3", 
    p4: "v4"
}
// Destructuring Assignment - gán các thuộc tính vào 1  object
// let {p1, p2, p3, p4} = o; 
// let p1 = "v1";
// console.log(p1);

// /*7. Cho 1 mảng a =[1,2,3] sử dụng spead operator để tạo 1 mảng tương tự  */
 
a = [1,2,3]
a1 = [...a]
console.log(a1);

// /*8. Sử dụng template literals để in ra chuỗi có biến bên trong đó. Ví dụ Log ra 1 chuỗi “Thức tới 1h đêm để code” trong đó ‘1h’ là biến. */
// //Template Literals có thể sử dụng biến, biểu thuwdc, hàm bên trong string mà không phải thông qua phép cộng string 
let gio = `1h`;
let chuoi = `Thức đến ${gio} đêm để code =.=`;
console.log(chuoi);

// /*10. Tìm hiểu về  ES6 Rest Parameters. Tạo 1 function có 10 tham số log ra 9 tham số sau * trừ tham số đầu tiên). 
// Cho 1 object o = { p1: "v1", p2: "v2", p3: "v3", p4: "v4" }. Tạo ra 1 object mới = { p2: "v2", p3: "v3", p4: "v4" }. 
// Cho 1 mảng số từ 1 đến 10 tạo sao 1 mảng từ 2-10 từ mảng đó. */

function logParams(firstParam, ...restParams) {
    console.log(restParams);
  }
  logParams(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  
//
let o1 = { p1: "v1", p2: "v2", p3: "v3", p4: "v4" };
let { p1, ...restProps } = o1;
console.log(restProps);
 /*11. 
Tìm hiểu về promise trong ES6 (cách sử dụng then, catch, finally với promise).
Tạo 1 promise return (resolve) về ‘Hello world’ sau 2s (dùng new Promise & setTimeOut). 
Tạo 1 promise return về lỗi (reject) ‘Error’ sau 2s. 
Tạo 1 promise sẽ return về ‘Hello world’ hoặc lỗi  ‘Error’ (sử dụng Math.random).
Log ra success nếu resolve, log ra fail nếu reject.  Log ra ‘End’ sau cùng ( sử dụng finally).
// Một hàm trả về một Promise
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}*/

const myPromise = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve('Hello World');
    },2000);
})
myPromise.then((value)=>
    console.log(value)
)

const myPromise1 = new Promise((resolve, reject)=>
{
    setTimeout(() => {
        reject('Err');
    }, 2000);
})
myPromise1.catch(err =>{
    console.error(err);
})

const myPromise2 = new Promise((resolve,reject) => {
    const number = Math.random();
    setTimeout(()=> {
        if(number < 5){
            resolve('Hello World');
        }else {
            reject('Error');
        }
    }, 1000);
});

myPromise2.then((success)=> 
    console.log(success)
)
.catch(error =>{
    console.error(error)
})
.finally(() => {
    console.log('End')
})

/*12. Tìm hiểu về async, await. Làm bài tập tương tự trên nhưng ko sử dụng (các method của promise then, catch, finally). 
Gợi ý keyword: async function, try catch finally*/


async function mybruh(){
    const myPromise3 = () => new Promise((resolve,reject)=>{
        const number = Math.random()
        setTimeout(() =>{
            if(number > 0.5) {
                resolve('Lmao');
            }else{
                reject('Error');
            }
        }, 2000);
    });
    try{
        const a= await myPromise3();
        console.log(a);
    }catch(error){
        console.log(error)
    }finally{
        console.log('End');
    }
}

mybruh();