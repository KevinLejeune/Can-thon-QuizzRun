//JSON
var app = angular.module("quizz", []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("assets/js/question.json")
    .then(function(res) {
        $scope.text = res.data;
    });
});

// TIMER
var countdownNumberEl = document.getElementById('countdown-number');
var countdown = 15;

countdownNumberEl.textContent = countdown;

setInterval(function() {
  countdown = --countdown <= 0 ? 15 : countdown;

  countdownNumberEl.textContent = countdown;
}, 1000);

$(function(){
  $("#them").hide();
  $("#answers").hide();
  $("#result").hide();

  $("#check").click(function(){
    $("#home").hide();
    $("#them").show();
  });

  $("#category").click(function(){
    $("#them").hide();
    $("#answers").show();
  });

  $(".buton").click(function(){
    $("#answers").hide();
    $("#result").show();
  });

  $("#end").click(function(){
    $("#result").hide();
    $("#home").show();
  });
})
