const input = $0.textContent;

const prioritiesStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let priorities = new Map();
Array.from(prioritiesStr).map((value, index) => {
    priorities.set(value, index+1);
});

const rucksacks = input.trim().split('\n');

const answerOne = rucksacks
    .map((sack) => {
        let left, right;
        left = sack.slice(0, sack.length/2);
        right = sack.slice(sack.length/2);
        return {
            left: new Set(Array.from(left)),
            right: new Set(Array.from(right))
        }
    })
    .map(sack => {
        return [...sack.left].filter(item => sack.right.has(item))[0]
    })
    .map(duplicate => {
        return priorities.get(duplicate)
    })
    .reduce((accumulator,priority) => {
        return accumulator+priority;
    }, 0);

const groups = [...Array(Math.ceil(rucksacks.length / 3))]
    .map((el, i) => rucksacks.slice(i * 3, (i + 1) * 3));

const answerTwo = groups
    .map(group => {
        let [one,two,three] = [
            new Set([...group[0]]),
            new Set([...group[1]]), 
            new Set([...group[2]])
        ];
        return [...one].filter(i => two.has(i) && three.has(i))[0]
    })
    .map(duplicate => {
        return priorities.get(duplicate);
    })
    .reduce((accumulator, priority) => {
        return accumulator+priority;
    }, 0)

console.log({answerOne, answerTwo});