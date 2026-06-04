/**
 * Mexico Legal Guide - Interactive Landing Page Script
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. PRESERVE UTM PARAMETERS ---
    const preserveUtms = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
        
        const currentUtms = {};
        utmParams.forEach(param => {
            if (urlParams.has(param)) {
                currentUtms[param] = urlParams.get(param);
            }
        });

        if (Object.keys(currentUtms).length > 0) {
            const links = document.querySelectorAll('a[href*="gumroad.com"]');
            links.forEach(link => {
                const url = new URL(link.href);
                for (const [key, value] of Object.entries(currentUtms)) {
                    url.searchParams.set(key, value);
                }
                link.href = url.toString();
            });
        }
    };
    preserveUtms();

    // --- 2. BACK TO TOP BUTTON ---
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- 3. GOOGLE ANALYTICS TRACKING ---
    // Helper function for custom events
    const trackEvent = (eventName, params = {}) => {
        if (typeof gtag === 'function') {
            gtag('event', eventName, params);
        }
        console.log(`GA Event: ${eventName}`, params);
    };

    // Track clicks on Buy Now buttons
    const buyButtons = document.querySelectorAll('a[href*="gumroad.com"]');
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productTitle = button.closest('.guide-card')?.querySelector('h3')?.innerText || 
                                button.closest('div')?.querySelector('h3')?.innerText || 'Unknown Product';
            
            trackEvent('begin_checkout', {
                'items': [{
                    'item_name': productTitle,
                    'affiliation': 'Mexico Legal Guide'
                }]
            });
        });
    });

    // --- 4. EMAIL CAPTURE FORM ---
    const subscribeForm = document.getElementById('subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('email');
            const email = emailInput.value;
            const submitBtn = subscribeForm.querySelector('button');

            // UI Feedback
            const originalText = submitBtn.innerText;
            submitBtn.disabled = true;
            submitBtn.innerText = 'PROCESSING...';

            try {
                // Tracking lead generation
                trackEvent('generate_lead', {
                    'email_captured': true
                });

                // Placeholder for real API call
                // Example: await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) });
                
                // Simulate success
                setTimeout(() => {
                    alert('Success! Check your inbox for the 2024 Mexico Residency Checklist.');
                    emailInput.value = '';
                    submitBtn.disabled = false;
                    submitBtn.innerText = originalText;
                }, 1000);

            } catch (err) {
                console.error('Subscription error:', err);
                alert('Oops! Something went wrong. Please try again or contact us.');
                submitBtn.disabled = false;
                submitBtn.innerText = originalText;
            }
        });
    }

    // --- 5. REVEAL ANIMATIONS (Simple Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        // observer.observe(section);
    });
});
