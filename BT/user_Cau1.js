const users = [
    { id: 'john', name: "John Doe", age: 25 },
    { id: 'jane', name: "Jane Smith", age: 28 },
    { id: 'susan', name: "Susan Johnson", age: 22 },
    { id: 'michael', name: "Michael Brown", age: 30 },
    { id: 'emily', name: "Emily Davis", age: 35 },
    { id: 'david', name: "David Wilson", age: 29 },
    { id: 'sarah', name: "Sarah Martinez", age: 27 },
    { id: 'robert', name: "Robert Taylor", age: 26 },
    { id: 'linda', name: "Linda Anderson", age: 32 },
    { id: 'william', name: "William Thomas", age: 21 }
  ];
  
  users.sort((user1,user2) => {
    const name1 = user1.name.toUpperCase();
    const name2 = user2.name.toUpperCase();
  return name1.localeCompare(name2);
});
console.log(users);

function sortName(users=[]){
    users.sort((user1,user2)=>{
        const name1 = user1.name.toUpperCase();
        const name2 = user2.name.toUpperCase();
        return name1.localeCompare(name2);
    });
    return users;
}

function sortAge(users=[]) {
    users.sort((user1, user2) => 
    user1.age - user2.age  
    );
    return users; 
  }

function sortID(users=[]){
    users.sort((user1,user2)=>{
        const id1 = user1.id.toUpperCase();
        const id2 = user2.id.toUpperCase();
        return id1.localeCompare(id2);
    });
    return users;
}
console.log(sortID(users));

//FOR

function ForAge(users){
    let sum =0; 

    for(let i = 0; i < users.length; i ++){
        sum += users[i].age;
    }
    return sum/users.length;
}
console.log(ForAge(users));


// //MAP
let sum =0;
const MapAge = users.map((users) => {
    sum += users.age;
})
console.log(sum/users.length);


// //FILTER 

const FilterAge = users.filter((users) => {
    sum += users.age;
})
console.log(sum/users.length);

