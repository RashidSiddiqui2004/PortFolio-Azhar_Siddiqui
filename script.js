
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  });
  
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(element => {
    observer.observe(element);
  });
  