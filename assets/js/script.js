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
  // $("#them").hide();
  // $("#synchro").hide();
  // $("#answers").hide();
  // $("#result").hide();

  $("#end").click(function(){
    $("#home").removeAttr("hide").addAttr("show");
  })
})
