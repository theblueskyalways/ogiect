/**
 * Created by dell on 2018/10/30.
 */
$(document).ready(function(){
   $(".navmenu>li").hover(function(){
      $(".select").slideUp().eq($(this).index()).slideDown()
   },
   function(){
      $(".select").slideUp()
   });
   $(".select").mouseleave(function(){
      $(this).slideUp()
   });
//   $(document).on("mousemove",function(event){
//      var mx = event.pageX-$("#mouse").width()/2;
//var my = event.pageY-$(document).scrollTop()-$("#mouse").height()/2;
//      if(mx>$(document).width()-$("#mouse").width()){
//         mx = $(document).width()-$("#mouse").width();
//      }
//      $("#mouse").offset({
//         left:mx,
//         top:my
//      });
//
//   });
//   $(".select li").mouseenter(function(){
//      $(".select li a")
//   })
});