const input = $0.textContent;

const elfPairs = input
    .trim()
    .split('\n')
    .map(pair => {
        return pair
            .split(',')
            .map(sections => {
                return sections.split('-').map(Number);
            });
    });

const answerOne = elfPairs.filter(elfPair => {
    const one = {
        low: Math.min(...elfPair[0]),
        high: Math.max(...elfPair[0])
    };
    const two = {
        low: Math.min(...elfPair[1]),
        high: Math.max(...elfPair[1])
    };
    if(one.low <= two.low && one.high >= two.high) return true; //one contains two
    if(one.low >= two.low && one.high <= two.high) return true; //two contains one
    return false;
}).length;

const answerTwo = elfPairs.filter(elfPair => {
    const one = {
        low: Math.min(...elfPair[0]),
        high: Math.max(...elfPair[0])
    };
    const two = {
        low: Math.min(...elfPair[1]),
        high: Math.max(...elfPair[1])
    };
    if(one.low > two.high || one.high < two.low) return false;
    return true;
}).length;

console.log({answerOne, answerTwo});