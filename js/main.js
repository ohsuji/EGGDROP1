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