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
