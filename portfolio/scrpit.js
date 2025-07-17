
AOS.init({
    duration: 800,
    offset: 150,
    easing: 'ease-in-out',
    once: false,
    mirror: true
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
 
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
 
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
  
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    alert(`Thank you for contacting me, ${name}! I'll get back to you soon.`);
    
   
    this.reset();
    

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); 


document.addEventListener('DOMContentLoaded', function() {
 
  const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Frontend Developer', 'Backend Developer', 'AIML Student'],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    contentType: 'text'
  });


  document.querySelector('.btn[href="#contact"]')?.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

