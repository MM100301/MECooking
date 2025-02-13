$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    console.log("the function is working");
    if(winTop >= 30){
      $("body").addClass("sticky-header");
      console.log("keep header");
    }else{
      $("body").removeClass("sticky-header");
      console.log("remove header");
    }
  });
});