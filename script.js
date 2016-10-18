$(document).ready(function(){
  console.log("hello");
  //Hangman word = "Jquery"
var hangmanWord = { //global variable for word inputs, showing, and hiding
  inputWord: [],
  underscoreWord: [],
  wordArray: [] //letters seperated in array
};

var marshmallow = { //global variable, for showing/hiding body parts
  bodyParts: ["#head", "#mallowBody", "#leftstick", "#rightstick", "#leftfoot1", "#rightfoot1"],
  counter: -1 //-1 means it starts below 0 (the head)...adding 1 will show the first body part
}

hideAll(); // not invoking, but referencing a function. at beginning, body is already hidden
//this function is for player1's word input
  $("#submitword").on("submit", function(evt){ //an event: something happens when you click
      evt.preventDefault();
      resets();
      hangmanWord.inputWord =$("#wordField").val(); //wordField box collects userInput
      hangmanWord.wordArray = hangmanWord.inputWord.split(''); //the userInput word is split (spaced out by letter)
      console.log(hangmanWord.wordArray); //
      for(i=0; i<hangmanWord.wordArray.length; i++){ //use for loop for the split word
        hangmanWord.underscoreWord[i]=" _ "; //create a name for the word and spaces (var above) called hangmanWord. the underscoreWord is new
        console.log(hangmanWord.underscoreWord); //this for will show up in console.log
        $("#showWord").html(hangmanWord.underscoreWord); //this will show the spaces in the html
      }
      $("#wordField").val(""); //this clears the input box (always goes last)

  });

//function for player2's letter input
 $("#submitletter").on("submit", function(evt){ //changed "click" to submit (add form in html) so it submits on *enter
      evt.preventDefault();
      var userInput = $("#letterField").val();
      $("#showGuesses").append("<b> "+ userInput + "</b>");
      //condition before the for loop...
      if (hangmanWord.wordArray.includes(userInput)){ //compare word array (letters) to the input letter
        for (i=0; i<hangmanWord.wordArray.length; i++){ //loop goes through the wordArray (all letters)
          if(hangmanWord.wordArray[i] === userInput){// is the letter equal to index (how many letters are the same)
            hangmanWord.underscoreWord[i] = userInput;
            console.log(hangmanWord.underscoreWord);
            $("#showWord").html(hangmanWord.underscoreWord);
          }
        }
      } else {
        marshmallow.counter += 1 //adds 1 when guess is wrong
        console.log(marshmallow.counter)
        $(marshmallow.bodyParts[marshmallow.counter]).show();
      }

    $("#letterField").val("");
});

function resets(){ //function to reset body/wordlength when inputing new word
  $("#showWord").html(null);
  hangmanWord.inputWord = [];
  hangmanWord.underscoreWord = [];
  hangmanWord.wordArray = [];
  marshmallow.counter = -1
}

function hideAll (){
  $("#head").hide();
  $("#mallowBody").hide();
  $("#leftstick").hide();
  $("#rightstick").hide();
  $("#leftfoot1").hide();
  $("#rightfoot1").hide();
}


});//document.ready ending



//color code:
  //blue=Method()
  //red=
//need to store letters into an array
//need to create a function that shows the word/with empty underlines
//need to create a if/else statement for letters
  //if the letters right it stays
  //if it's wrong it returns to blank, and you add a lose function
  // how many loses can you have? (body parts = 7)
