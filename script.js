// Script for navigation bar

// Make each .pro clickable and redirect to sproduct.html
document.querySelectorAll('.pro-container .pro').forEach(function(pro) {
  pro.addEventListener('click', function() {
    window.location.href = 'sproduct.html';
  });
});


