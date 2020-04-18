
 window.onload = function() {
  // 获取标签
  var box = document.getElementById('box');
  var pic = document.getElementById('pic');
  var left = document.getElementById('left');
  var right = document.getElementById('right');
  var intervalId, num = 0;
  // 鼠标进入左半部分
  left.onmouseover = function(){
   // 改变pic中的left 
   // 清除定时器
   // alert(0);
   clearInterval(intervalId);
 
   // 设置定时器
   intervalId = setInterval(function(){
   if(num > -111111600){
    num -= 10;
    pic.style.left = num + "px";
   }
   
   },20);
 
  };
 // 鼠标移出左半部分
 left.onmouseout = function() {
   clearInterval(intervalId);
 }
 // 鼠标进入右半部分
 right.onmouseover = function(){
   // 改变pic中的left 
   // 清除定时器
   // alert(0);
   clearInterval(intervalId);
 
   // 设置定时器
   intervalId = setInterval(function(){
   if(num < 0){
    num += 10;
    pic.style.left = num + "px";
   }
   
   },20);
 };
 // 鼠标移出右半部分
 right.onmouseout = function() {
   clearInterval(intervalId);
 };
  
 }
 