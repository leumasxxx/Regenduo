const dropMenu = document.getElementById("menu");
const HamBurger = document.getElementById("burger");
const readMore = document.querySelectorAll(".readmore")
const contents = document.querySelectorAll(".app")


//Hamburger responsive nav bar
dropMenu.addEventListener('click', () => {
    if (HamBurger.classList.contains("opacity-0")) {
        HamBurger.classList.remove("opacity-0")
    } else {
        HamBurger.classList.add("opacity-0")
    }

}
);


//Readmore toggle function
readMore.forEach(element => {
    element.addEventListener('click', function (click) {
        element.previousElementSibling.querySelector('span').classList.toggle('opacity-0');
        element.previousElementSibling.querySelector('span').classList.toggle('block');
        element.previousElementSibling.querySelector("span").classList.toggle("max-h-0");
    });
});



// Observer Api for implementing lazy loading
const appearOptions = {
    root: null,
    rootmargin: "-300px",
    threshold: 0.3

};

const appearObservers = new IntersectionObserver(function (entries, appearObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            appearObserver.unobserve(entry.target);
        } else {
             return;
        }
    });
}, appearOptions);



contents.forEach(content =>{
    appearObservers.observe(content)

});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(form);
  
      const details = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      };
  
      // Assuming you have a function to send data to the server and email it.
      sendEmail(details);
    });
  
    function sendEmail(details) {
      // You would typically send this data to a server-side script (e.g., Node.js, PHP) to send the email.
      // Here, we'll just log the details to the console.
      console.log('Sending email with the following details:');
      console.log(details);
  
      // You can use an AJAX request or fetch API to send the data to your server.
      // Example using fetch:
      // fetch('your-email-server-endpoint', {
      //   method: 'POST',
      //   body: JSON.stringify(details),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // })
      //   .then(response => response.json())
      //   .then(data => {
      //     console.log('Email sent successfully:', data);
      //   })
      //   .catch(error => {
      //     console.error('Error sending email:', error);
      //   });
    }
  });
  
// load screen from the top
window.scrollTo(0, 0)






