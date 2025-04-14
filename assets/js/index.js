document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('site-header');
    let lastScrollTop = 0;
    const eightyvh = window.innerHeight * 0.8;
  
    window.addEventListener('scroll', function () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      // Determine scroll direction
      const isScrollingDown = scrollTop > lastScrollTop;
  
      // If we're above 80vh and scrolling down, hide the header
      if (scrollTop < eightyvh && isScrollingDown) {
        header.classList.add('header-hidden');
        header.classList.remove('header-visible');
      } 
      // Show the header if we scroll beyond 80vh or reach the top
      else if (scrollTop >= eightyvh || scrollTop === 0) {
        header.classList.remove('header-hidden');
        header.classList.add('header-visible');
      }
  
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  });
  