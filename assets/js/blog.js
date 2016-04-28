$(document).ready(function() {

  // Show/Hide Sidebar
  $("#sidebar-button").click(function() {
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
    }
    else {
      $("#sidebar-button").addClass("button-active");
      $(".sidebar-container").addClass("sidebar-active");
      $(".page-wrapper").addClass("wrapper-active");
      setTimeout(function() {
        $('body').addClass('no-scroll');
      }, 300);
    }
  });

  //Hide Sidebar
  $(".page-wrapper").click(function(){
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
    }
  });


  // "SHOW MODAL" WHEN "CLICK ON WRITE BUTTON FROM MAIN PAGE"
  $("#write-link").click(function(){
      $("div#modal-container").show();
  });
  // "HIDE MODAL" WHEN "CLICK ON MODAL OVERLAY"
  $("#modal-overlay").click(function(){
      $("div#modal-container").hide();
  });


  // REDIRECT WHEN RIGHT PASSCODE IS ENTERED
  $("#modal-footer").click(
    function validate(){
      var input = $(".input").val()
      console.log(input)
      var passwords=['UiC','Ephesians4:29'];
      for(var i=0;i<passwords.length;i++) {
          if(input==passwords[i]){
              window.location.href = "write.html";
              return true;
          }
      }
      alert("Incorrect Password. Try again.");
      return false;
    });

  
//
});