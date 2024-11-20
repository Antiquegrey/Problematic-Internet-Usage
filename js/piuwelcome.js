// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Dynamic greeting message
    const welcomeMessage = document.querySelector('.welcome-section h1');
    const currentHour = new Date().getHours();
    let greeting = 'Welcome to MyWebsite';

    if (currentHour < 12) {
        greeting = 'Good Morning! 
Welcome to PredictiveNet';
    } else if (currentHour < 18) {
        greeting = 'Good Afternoon! 
Welcome to PredictiveNet';
    } else {
        greeting = 'Good Evening! 
Welcome to PredictiveNet';
    }

    welcomeMessage.textContent = greeting;

    // Button interactions
    const loginButton = document.querySelector('a[href="login.html"]');
    const signupButton = document.querySelector('a[href="signup.html"]');

    if (loginButton) {
        loginButton.addEventListener('mouseover', () => {
            loginButton.style.transform = 'scale(1.1)';
        });

        loginButton.addEventListener('mouseout', () => {
            loginButton.style.transform = 'scale(1)';
        });

        loginButton.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Redirecting to Login...');
            window.location.href = 'login.html';
        });
    }

    if (signupButton) {
        signupButton.addEventListener('mouseover', () => {
            signupButton.style.transform = 'scale(1.1)';
        });

        signupButton.addEventListener('mouseout', () => {
            signupButton.style.transform = 'scale(1)';
        });

        signupButton.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Redirecting to Sign Up...');
            window.location.href = 'signup.html';
        });
    }
});
