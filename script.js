const mask = document.querySelector('.mask');

document.addEventListener('mousemove', (e) => {
  // Retrives coordinates of mouse (x and y)
  const x = e.clientX;
  const y = e.clientY;

  // Get the position and dimensions of the "mask" div
  const maskRect = mask.getBoundingClientRect();

  // Check if the mouse is within the boundaries of the "mask" div
  if (
    x >= maskRect.left &&
    x <= maskRect.right &&
    y >= maskRect.top &&
    y <= maskRect.bottom
  ) {
    // Actions if mouse is inside the "mask" div
    mask.style.setProperty('--x', x + 'px');
    mask.style.setProperty('--y', y + 'px');
  } else {
    // Actions is mouse is outside the "mask" div
    mask.style.setProperty('--x', '-10000px'); // Move element out of bounds
    mask.style.setProperty('--y', '-10000px'); // Move element out of bounds
  }
});

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
  
  