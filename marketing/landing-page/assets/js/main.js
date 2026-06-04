// main.js - Interactivity for Mexico Legal Guide

document.addEventListener('DOMContentLoaded', () => {
    console.log('Mexico Legal Guide landing page loaded.');

    // Simple Form Submission Handler
    const newsletterForm = document.querySelector('#newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input').value;
            
            // Analytics tracking placeholder
            if (window.gtag) {
                gtag('event', 'generate_lead', {
                    'email': email
                });
            }

            alert('Thank you for subscribing! Check your inbox for the residency checklist.');
            newsletterForm.reset();
        });
    }

    // Purchase tracking placeholder
    const buyButtons = document.querySelectorAll('a[href*="gumroad.com"]');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('div').querySelector('h3').innerText;
            if (window.gtag) {
                gtag('event', 'begin_checkout', {
                    'items': [{
                        'item_name': product
                    }]
                });
            }
        });
    });
});
