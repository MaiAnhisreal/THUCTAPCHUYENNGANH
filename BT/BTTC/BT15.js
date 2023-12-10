const game =[
    {type: "MOBA", name:"League Of Legends", price: 0},
    {type: "FPS", name:"Valorant", price: 900},
    {type: "Indie", name:"Sea of Stars", price: 200}
]
//number
game.sort ((game1,game2) => game1.price - game2.price);

console.log(game)

//string

game.sort((game1, game2)=>{
    const name1 = game1.name.toUpperCase();
    const name2 = game2.name.toUpperCase();
  return name2.localeCompare(name1);
});
console.log(game);
