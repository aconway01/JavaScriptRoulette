var pot = 100;
function get_and_report_winnings(num,x,num_bet,choice_input1,choice_input2,choice_input3,pot) {
    
    document.getElementById("try").style.display = "none";
    document.getElementById("playAgain").innerHTML = "Play Again?";
    document.getElementById("play_again1").style.display = "initial";
    document.getElementById("play_again2").style.display = "initial";
    document.getElementById("potTotal").innerHTML = "";
    document.getElementById("print24").innerHTML = "";
    document.getElementById("betnumber").style.display = "none";
    document.getElementById("bet_amount").innerHTML = "";
    document.getElementById("betamount").style.display = "none";
    document.getElementById("print21").innerHTML = "";
    document.getElementById("choice1").style.display = "none";
    document.getElementById("print25").innerHTML = "";
    document.getElementById("choice2").style.display = "none";
    document.getElementById("print26").innerHTML = "";
    document.getElementById("choice3").style.display = "none";
    // Number Bet
    if (num == x) {
        pot += 5*num_bet;
        document.getElementById("NumberHit").innerHTML = "You win 5 times your bet! You hit the number! $" + 5*num_bet;
    }
    else if (num != x) {
        pot -= 1*num_bet;
        document.getElementById("NumberHit").innerHTML = "You lost your bet on the number! $" + 1*num_bet;
    }
    // Even/Odd bet    
    if ((x%2 == 1) && (choice_input1 == "O")) {
        pot += 2*num_bet;
        document.getElementById("evenOddOutcome").innerHTML = "You win two times your bet on odd/even! $" + 2*num_bet;
    }
    else if ((x%2 == 0) && (choice_input1 == "E")) {
        pot += 2*num_bet;
        document.getElementById("evenOddOutcome").innerHTML = "You win two times your bet on odd/even! $" + 2*num_bet;
    }
        
    else if ((x%2 == 1) && (choice_input1 == "E")) {
        pot -= 1*num_bet;
        document.getElementById("evenOddOutcome").innerHTML = "You lost your bet on even/odd! $" + 1*num_bet;
    }
    
    else if ((x%2 == 0) && (choice_input1 == "O")) {
        pot -= 1*num_bet;
        document.getElementById("evenOddOutcome").innerHTML = "You lost your bet on even/odd! $" + 1*num_bet;
    }
    // Red/Black bet    
    if ((x%3 == 0) && (choice_input2 == "R")) {
        pot += 3*num_bet;
        document.getElementById("redBlackOutcome").innerHTML = "You won three times your bet on red/black! $" + 3*num_bet;
    }
    
    else if ((x%3 == 1) && (choice_input2 == "B")) {
        pot += 3*num_bet;
        document.getElementById("redBlackOutcome").innerHTML = "You won three times your bet on red/black! $" + 3*num_bet;
    }
        
    else if ((x%3 == 2) && (choice_input2 == "B")) {
        pot += 3*num_bet;
        document.getElementById("redBlackOutcome").innerHTML = "You won three times your bet on red/black! $" + 3*num_bet;
    }
        
    else if ((x%3 == 0) && (choice_input2 == "B")) {
        pot -= 2*num_bet;
        document.getElementById("redBlackOutcome").innerHTML = "You lost two times your bet on red/black! $" + 2*num_bet;
    }
    
    else if ((x%3 == 1) && (choice_input2 == "R")) {
        pot -= 2*num_bet;
        document.getElementById("redBlackOutcome").innerHTML = "You lost two times your bet on red/black! $" + 2*num_bet;
    }
        
    else if ((x%3 == 2) && (choice_input2 == "R")) {
        pot -= 2*num_bet;
        document.getElementById("redBlackOutcome").innerHTML = "You lost two times your bet on red/black! $" + 2*num_bet;
    }
        
    // High/Low bet
    if ((x >= 18) && (choice_input3 == "H")) {
        pot += 1*num_bet;
        document.getElementById("highLowOutcome").innerHTML = "You won your bet on high/low! $" + 1*num_bet;
    }
    else if ((x < 18) && (choice_input3 == "L")) {
        pot += 1*num_bet;
        document.getElementById("highLowOutcome").innerHTML = "You won your bet on high/low! $" + 1*num_bet;
    }
    else if ((x >= 18) && (choice_input3 == "L")) {
        pot -= 1*num_bet;
        document.getElementById("highLowOutcome").innerHTML = "You lost your bet on high/low! $" + 1*num_bet;
    }
    else if ((x < 18) && (choice_input3 == "H")) {
        pot -= 1*num_bet;
        document.getElementById("highLowOutcome").innerHTML = "You lost your bet on high/low! $" + 1*num_bet;
    }
    
    return pot;
}
function immed() {
    var num = document.getElementById("betnumber").value;
    var num_bet = document.getElementById("betamount").value;
    if ((num_bet > pot) || (num_bet < 1) || (num_bet*0 != 0)) {
        num_bet = 0;
        document.getElementById("pot_result").innerHTML = "*Invalid bet!";
    }
    else {
        var choice_input1 = document.getElementById("choice1").value;
        var choice_input2 = document.getElementById("choice2").value;
        var choice_input3 = document.getElementById("choice3").value;
        var max = 36;
        var min = 0;
        var x = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById("displaySpin").innerHTML = "Spinning ... . 1. 2. 3. 4... And the number is " + x;
        pot = get_and_report_winnings(num,x,num_bet,choice_input1,choice_input2,choice_input3,pot);
    
        document.getElementById("pot_result").innerHTML = "Now you have $" + pot;
    }
    if (pot < 1) {
        document.getElementById("playAgain").innerHTML = "";
        document.getElementById("play_again1").style.display = "none";
        document.getElementById("play_again2").style.display = "none";
        document.getElementById("finalMessage").innerHTML = "You lost all your money! Thanks for playing!"
        document.getElementById("restart").style.display = "initial";
    }
}
function playAgain(play) {
    
    if ((pot > 0) && (play == "Yes")) {
        main();
    }
    if (play == "No") {
        document.getElementById("playAgain").innerHTML = "";
        document.getElementById("play_again1").style.display = "none";
        document.getElementById("play_again2").style.display = "none";
        document.getElementById("print24").innerHTML = "";
        document.getElementById("betnumber").style.display = "none";
        document.getElementById("bet_amount").innerHTML = "";
        document.getElementById("betamount").style.display = "none";
        document.getElementById("print21").innerHTML = "";
        document.getElementById("choice1").style.display = "none";
        document.getElementById("print25").innerHTML = "";
        document.getElementById("choice2").style.display = "none";
        document.getElementById("print26").innerHTML = "";
        document.getElementById("choice3").style.display = "none";
        document.getElementById("NumberHit").innerHTML = "";
        document.getElementById("pot_result").innerHTML = "";
        document.getElementById("evenOddOutcome").innerHTML = "";
        document.getElementById("redBlackOutcome").innerHTML = "";
        document.getElementById("highLowOutcome").innerHTML = "";
        document.getElementById("displaySpin").innerHTML = "";
        document.getElementById("title").innerHTML = "Spin and Win!!! Big Blue Roulette!!!";
        document.getElementById("potTotal").innerHTML = "";
        document.getElementById("finalMessage").innerHTML = "You left the game with $" + pot + " because you quit";
        document.getElementById("restart").style.display = "initial";
    }
}
function main() {
    document.body.style.background = "#0000ff";
    document.body.style.color = "#fff";
    document.getElementById("play").style.display = "none";
    document.getElementById("playAgain").innerHTML = "";
    document.getElementById("play_again1").style.display = "none";
    document.getElementById("play_again2").style.display = "none";
    document.getElementById("NumberHit").innerHTML = "";
    document.getElementById("pot_result").innerHTML = "";
    document.getElementById("evenOddOutcome").innerHTML = "";
    document.getElementById("redBlackOutcome").innerHTML = "";
    document.getElementById("highLowOutcome").innerHTML = "";
    document.getElementById("displaySpin").innerHTML = "";
    document.getElementById("title").innerHTML = "Spin and Win!!! Big Blue Roulette!!!";
    document.getElementById("potTotal").innerHTML = "Your pot is $" + pot;
        
    document.getElementById("print24").innerHTML = "What number do you want to bet on? (0-36) ";
    document.getElementById("betnumber").style.display = "initial";
    document.getElementById("bet_amount").innerHTML = "How much do you want to bet?";
    document.getElementById("betamount").style.display = "initial";
    document.getElementById("print21").innerHTML = "Do you want to bet on even/odd/no bet?";
    document.getElementById("choice1").style.display = "initial";
    document.getElementById("print25").innerHTML = "Do you want to bet on red/black/no bet?";
    document.getElementById("choice2").style.display = "initial";
    document.getElementById("print26").innerHTML = "Do you want to bet on high/low/no bet?";
    document.getElementById("choice3").style.display = "initial";
    document.getElementById("try").style.visibility = "visible";
    document.getElementById("try").style.display = "initial";
}