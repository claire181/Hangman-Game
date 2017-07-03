// 1. Display all letters of the alphabet.
// 2. Make letters clickable so that you can select them to build the mystery word.
// 3. Have an array of mystery words that will be generated randomly.
// 4. Display dashes that span the length of the mystery word. 
// 5. Make it so that the dashes will disappear when a letter in the word is guessed.
// 6. Lose a life if the incorrect letter is guessed. 
// 7. Reset the game if the correct word is guessed or the user runs out of guesses. 






$(document).ready(function() {

// Letters to be selected as guesses.
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (var i =0; i < alphabet.length; i ++) {
      console.log(alphabet.length)
      var alphabetBtn = $("<button>");
      alphabetBtn.addClass("alphabet-button alphabet alphabet-button-color");
      alphabetBtn.attr("data-alphabet", alphabet[i]);
      alphabetBtn.text(alphabet[i]);
      $("#buttons").append(alphabetBtn);
    }


// Mystery Words Array.
  var words = []


  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById("buttons");
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }


});

