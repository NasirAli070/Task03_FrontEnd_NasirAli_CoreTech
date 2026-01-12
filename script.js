// Hero button interaction
document.getElementById("heroBtn").addEventListener("click", function () {
    alert("Thank you for your interest! CoreTech will contact you soon.");
  });
  
  // Contact form submission
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
    this.reset();
  });
  