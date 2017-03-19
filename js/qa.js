$( document ).ready(function() {
    console.log( "ready!" );

  //   var $comedy = $("#comedy");
  //
  //   $comedy.on('click', function() {
  //   alert( "comedy!" );
  // });


class Question {
constructor(text, answers) {
  this.text = text
  this.answers = answers
}
}

class Answer {
  constructor(text, linked) {
    this.text = text
    this.linked = linked
  }
}

var question1 = 'How are you feeling?';
var question2 = "I'm a ________ .";
var question3 = new Question('My super power would be...', [ new Answer('Time travel') , new Answer('Super-human strength')]);
var question4 = new Question('My super power would be...', [ new Answer('Time travel') , new Answer('Super-human strength')]);

var q = new Question( question1 , [new Answer('Cheerful', new Question( question2 , [new Answer('Lover', question3 ), new Answer('Hater', question3 )])),
                                    new Answer('Gassy', new Question( question2 , [new Answer('Lover', question3 ), new Answer('Hater', question3 )]))
]);



var app = new Vue({
  el: '#app',
  data: {
    questions: q,

    didclick: function(k) {
      this.questions = this.questions.answers[k].linked
    }
  }
});

$( ".answer" ).click(function() {
  var htmlString = $( this.text ).html();
  if (htmlString === 'Lover') {
  alert('You have a match!');
} else {
  console.log('nope');
}
});

});
