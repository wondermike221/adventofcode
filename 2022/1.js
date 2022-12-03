const input = $0.textContent;

const sorted = input
    .split('\n\n')
    .map(elf=>{
    return elf
        .split('\n')
        .map(i=>Number(i))
        .reduce((a,v)=>a+v,0)
    })
    .sort((a,b)=>b-a)

const answerOne = sorted[0];
const answerTwo = sorted[0] + sorted[1] + sorted[2];
console.log({answerOne, answerTwo});