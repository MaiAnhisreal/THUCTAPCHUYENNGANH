const createRandomNumber = (min,max) => {
    return Math.round(Math.random()*(max - min) + min);
};
console.log(createRandomNumber(-100,-20))