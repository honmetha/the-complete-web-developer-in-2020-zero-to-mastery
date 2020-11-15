//#1 change this function into a ternary and assign it to variable called experiencePoints
let experiencePoints = function(winBattle) {
    return (winBattle ? 10 : 1);
}

//Using this function, answer the questions below:
function moveCommand(direction) {
    let whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");

//#3 return value when moveCommand("back");

//#4 return value when moveCommand("right");

//#5 return value when moveCommand("left");

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!
function guessMyNumber(number) {
    let theAnswerIs;
    switch (number) {
        case 1:
            theAnswerIs = "You are wrong.";
            break;
        case 2:
            theAnswerIs = "You are wrong.";
            break;
        case 3:
            theAnswerIs = "You are right!!";
            break;
        case 4:
            theAnswerIs = "You are wrong.";
            break;
        case 5:
            theAnswerIs = "You are wrong.";
            break;
        default:
            theAnswerIs = "Please enter a valid number."
    }
    return theAnswerIs;
}