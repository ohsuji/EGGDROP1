var index = 0;   //이미지에 접근하는 인덱스
  window.onload = function(){
    slideShow();
  }
  
  function slideShow() {
  var i;
  var x = document.getElementsByClassName("slide");  
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";   
  }
  index++;
  if (index > x.length) {
      index = 1;  
  }   
  x[index-1].style.display = "block";
  setTimeout(slideShow, 4000);  
}

AOS.init();

// gnb에서 서브메뉴 슬라이드
$('.btn_sub').click(function(){
  $(this).siblings('.sub_menu_list').slideToggle();
});

// gnb 왼쪽에서 슬라이드
$('.ham_btn_open').click(function(){
  $('#gnb').animate({right:0},300,'swing');
});
// gnb 사라짐
$('.ham_btn_close').click(function(){
  $('#gnb').animate({right:-1280},300);
});