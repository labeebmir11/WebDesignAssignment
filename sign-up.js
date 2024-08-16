document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form');
    
    form.addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();
        
        // Clear previous error messages
        clearErrors();

        // Get form values
        const fullName = form.querySelector('input[placeholder="Enter full name"]').value.trim();
        const email = form.querySelector('input[placeholder="Enter Email Address"]').value.trim();
        const phoneNumber = form.querySelector('input[placeholder="Enter Phone number"]').value.trim();
        const dob = form.querySelector('input[type="date"]').value.trim();
        const gender = form.querySelector('input[name="gender"]:checked');
        const address1 = form.querySelector('input[placeholder="Enter street address"]').value.trim();
        const city = form.querySelector('input[placeholder="Enter your city"]').value.trim();
        const postalCode = form.querySelector('input[placeholder="Enter postal code"]').value.trim();
        
        // Validation flags
        let isValid = true;

        // Validate Full Name
        if (fullName === "") {
            showError('input[placeholder="Enter full name"]', "Full Name is required.");
            isValid = false;
        }

        // Validate Email Address
        if (!validateEmail(email)) {
            showError('input[placeholder="Enter Email Address"]', "Please enter a valid email address.");
            isValid = false;
        }

        // Validate Phone Number
        if (!validatePhoneNumber(phoneNumber)) {
            showError('input[placeholder="Enter Phone number"]', "Please enter a valid phone number.");
            isValid = false;
        }

        // Validate Date of Birth
        if (dob === "") {
            showError('input[type="date"]', "Date of Birth is required.");
            isValid = false;
        }

        // Validate Gender Selection
        // Validate Gender Selection
        if (!gender) {
         showError('.gender-box', "Please select your gender.", true);
         isValid = false;
        }


        // Validate Address
        if (address1 === "" || city === "" || postalCode === "") {
            showError('.address', "Please complete your address.");
            isValid = false;
        }

        // If all fields are valid, submit the form
        if (isValid) {
            form.submit();
        }
    });

    function showError(selector, message) {
        const element = form.querySelector(selector);
        const error = document.createElement('div');
        error.className = 'error-message';
        error.innerText = message;
        element.parentNode.appendChild(error);
        element.classList.add('error');
    }

    function clearErrors() {
        const errors = form.querySelectorAll('.error-message');
        errors.forEach(error => error.remove());

        const fields = form.querySelectorAll('.error');
        fields.forEach(field => field.classList.remove('error'));
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePhoneNumber(phoneNumber) {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
    }
    function showError(selector, message, isGender = false) {
        const element = form.querySelector(selector);
        const error = document.createElement('div');
        error.className = 'error-message';
        error.innerText = message;
    
        if (isGender) {
            // Insert the error message right after the gender options
            const genderContainer = element.querySelector('.gender-option');
            genderContainer.appendChild(error);
        } else {
            // Default behavior: insert error after the selected element
            element.parentNode.appendChild(error);
            element.classList.add('error');
        }
    }
    
    
});
