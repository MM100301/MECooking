$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    console.log("the function is working");
    if(winTop >= 30){
    $("body").css("color", "red"); // Change text color to red
    console.log("keep header and change text color");
    }else{
    $("body").css("color", ""); // Reset text color
    console.log("remove header and reset text color");
    }
  });
  });