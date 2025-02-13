$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    console.log("the function is working");
    if(winTop >= 30){
      $(".change").css("color", "red");
    }else{
      $(".change").css("color", "black");
    }
  });
});