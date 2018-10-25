//JSON

var app = angular.module('quizz', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("questions.json")
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
  $("#home").hide();
  $("#them").hide();
  $("#synchro").hide();
  $("#question").hide();
  // $("#result").hide();

  $("#end").click(function(){
    $("#home").removeAttr("hide").addAttr("show");
  })
})
