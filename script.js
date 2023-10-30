document.body.onmousemove = function(e) {
    const mask = document.querySelector('.mask');
    const x = e.clientX;
    const y = e.clientY;
    
    if (
        x >= mask.offsetLeft && x <= mask.offsetLeft + mask.offsetWidth &&
        y >= mask.offsetTop && y <= mask.offsetTop + mask.offsetHeight
    ) {
        // Mouse is inside the .mask element
        mask.style.setProperty('--x', x + 'px');
        mask.style.setProperty('--y', y + 'px');
    } else {
        // Mouse is outside the .mask element
        mask.style.setProperty('--x', '-10000px'); // Move circle out of bounds
        mask.style.setProperty('--y', '-10000px'); // Move circle out of bounds
    }
  }