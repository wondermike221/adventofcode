const input = $0.textContent

const type_scores = {
    'X': 1, //rock
    'Y': 2, //paper
    'Z': 3,  //scissors    
}

const outcome_scores = {
    loss: 0,
    draw: 3,
    win: 6
}

const match_one = {
    // X == rock
    // Y == paper
    // Z == scissors
    // x vs rock
    'A X': type_scores.X + outcome_scores.draw, // 4
    'B X': type_scores.X + outcome_scores.loss, // 1
    'C X': type_scores.X + outcome_scores.win,  // 7
    // x vs paper
    'A Y': type_scores.Y + outcome_scores.win,  // 8,
    'B Y': type_scores.Y + outcome_scores.draw,  // 5,
    'C Y': type_scores.Y + outcome_scores.loss,  // 2,
    // x vs scissors
    'A Z': type_scores.Z + outcome_scores.loss, // 3,
    'B Z': type_scores.Z + outcome_scores.win, // 9,
    'C Z': type_scores.Z + outcome_scores.draw,  // 6,
}

const match_two = {
    // X == Loss
    // Y == Draw
    // Z == Win
    // need to lose
    'A X': outcome_scores.loss + type_scores.Z, // 0+3,
    'B X': outcome_scores.loss + type_scores.X, // 0+1,
    'C X': outcome_scores.loss + type_scores.Y, // 0+2,
    // need to draw
    'A Y': outcome_scores.draw + type_scores.X, //3+1,
    'B Y': outcome_scores.draw + type_scores.Y, //3+2,
    'C Y': outcome_scores.draw + type_scores.Z, //3+3,
    // need to win
    'A Z': outcome_scores.win + type_scores.Y, // 6+2,
    'B Z': outcome_scores.win + type_scores.Z, // 6+3,
    'C Z': outcome_scores.win + type_scores.X, // 6+1,
}

let rounds = input.trim().split('\n');

const answerOne = rounds.reduce((score_sum, round) => {
    return score_sum + match_one[round];
}, 0);

const answerTwo = rounds.reduce((score_sum, round) => {
    return score_sum + match_two[round];
}, 0);

console.log({answerOne, answerTwo});
