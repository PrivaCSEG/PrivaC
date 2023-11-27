
/* FAQ show and hide */
$(document).ready(function() {
    $("#container li").click(function() {
      $('#container li div').slideUp();
      $('#container li span').text('+');
      $(this).find('.panel').slideToggle();
      $(this).find('span').text('-');
    });
  });

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  window.addEventListener("load", reveal); // Trigger the reveal function on page load
  
  