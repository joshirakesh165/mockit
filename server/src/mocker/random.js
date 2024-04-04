let getRandomIntegerOfSize = (size) => {
    let mutiplier = size * 10;
    return Math.floor(Math.random() * mutiplier);
}

let getRandomIntegerUpto = (max) => {
    return Math.floor(Math.random() * max);
}

let getRandomBoolean = (max) => {
    let digit =  Math.floor(Math.random() * 2);
    return (digit == 0 || digit == 1 )
}

export { getRandomIntegerOfSize ,getRandomIntegerUpto ,getRandomBoolean}