// Goals:
// 1. Display all of the letters of the alphabet.
// 2. When a letter is picked if it matches the 
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


// Random Words Array.
  var words 


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

