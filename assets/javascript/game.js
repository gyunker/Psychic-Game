
    var wins = 0;
    var losses = 0;
    var guessesRemaining = 10;
    var guesses = []; //Arry of letters guessed by user
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    
    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length+1)]; 

        guesses.push(userGuess);
        
        if (userGuess == computerGuess) {
            wins++;
            guessesRemaining = 10; //Restart guesses
            guesses.length = 0; //Remove guessed letters from prior game
        }
        
        else if (guessesRemaining == 0){
            losses++;
            guessesRemaining = 10;
            guesses.length = 0;
        }


        else if (userGuess !== computerGuess){
            guessesRemaining--; //decrease guesses remaining
        }

        // Incrementing totals   
        var html = "<h1>The Psychic Game</h1>" + 
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Total Wins: " + wins + "</p>" +
        "<p>Total Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesRemaining + "</p>" +
        "<p>Your Guesses so far: " + guesses +"</p>";
        document.querySelector('#game').innerHTML = html;
        }
