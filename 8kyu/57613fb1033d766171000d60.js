// UEFA EURO 2016

// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

function uefaEuro2016(teams, scores){

    let firstMessage = `At match ${teams[0]} - ${teams[1]}, `

    let secondMessage;

    if (scores[0] > scores[1]) {
        secondMessage = `${teams[0]} won!`
    } else if (scores[0] < scores[1]) {
        secondMessage = `${teams[1]} won!`
    } else if (scores[0] === scores[1]) {
        secondMessage = 'teams played draw.'
    }

    finalMessage = firstMessage + secondMessage;
    
    return finalMessage;

}

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) 
// "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) 
// "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) 
// "At match Portugal - Iceland, teams played draw."


// Solution 1
function uefaEuro2016(commands, scores){
    // your code...
    if (scores[0] == scores[1])
      return `At match ${commands[0]} - ${commands[1]}, commands played draw.`;
    if (scores[0] < scores[1])
      return `At match ${commands[0]} - ${commands[1]}, ${commands[1]} won!`;
    return `At match ${commands[0]} - ${commands[1]}, ${commands[0]} won!`;
}

// Solution 2
const uefaEuro2016 = (c, s) => `At match ${c[0]} - ${c[1]}, ${s[0] == s[1] ? "commands played draw." : (s[0] > s[1] ? c[0] : c[1]) + ' won!'}`;

// Solution 3
function uefaEuro2016(teams, scores){
    var winner = scores[0] > scores[1] ? teams[0] : (scores[1] > scores[0] ? teams[1] : null);
    return "At match " + teams[0] + " - " + teams[1] + ", " + (winner ? winner + " won!" : "teams played draw.");
}

// Solution 4
function uefaEuro2016(teams, scores) {
    const [team1, team2] = teams
    const [score1, score2] = scores
    const winner = score1 > score2 ? team1 : team2

    return score1 === score2
        ? `At match ${team1} - ${team2}, teams played draw.`
        : `At match ${team1} - ${team2}, ${winner} won!`
}

// Solution 5
function uefaEuro2016(teams, scores){
    const winner = scores[0] > scores[1] ? teams[0] : (scores[0] === scores[1] ? null : teams[1]);
    const result = `At match ${teams[0]} - ${teams[1]}`;
    if( winner ) {
      return `${result}, ${winner} won!`;
    }
    return `${result}, teams played draw.`
}

// Solution 6
function uefaEuro2016(teams, scores){
    return "At match " + teams[0] + " - " + teams[1] + ", " + ((scores[0] > scores[1]) ? teams[0] + " won!" : (scores[0] < scores[1]) ? teams[1] +" won!":  "teams played draw.");
};