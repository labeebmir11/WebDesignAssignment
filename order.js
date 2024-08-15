document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validateForm()) {
            // If the form is valid, you can submit it
            form.submit();
        }
    });

    function validateForm() {
        const name = document.querySelector('input[name="Name"]');
        const email = document.querySelector('input[name="Email"]');
        const address = document.querySelector('input[name="Address"]');
        const message = document.querySelector('textarea[name="message"]');
        
        let isValid = true;

        // Validate Name
        if (name.value === '' || name.value === 'Name') {
            alert('Please enter your name');
            isValid = false;
        }

        // Validate Email
        if (email.value === '' || email.value === 'Email' || !isValidEmail(email.value)) {
            alert('Please enter a valid email address');
            isValid = false;
        }

        // Validate Address
        if (address.value === '' || address.value === 'Address') {
            alert('Please enter your address');
            isValid = false;
        }

        // Validate Message
        

        return isValid;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
  
    
  
