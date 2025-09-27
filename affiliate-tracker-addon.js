// Add this script to your existing landing page HTML
// Place before closing </body> tag

(function() {
    'use strict';

    const REFERRAL_KEY = 'neuroquranic_referral';
    const ATTRIBUTION_WINDOW_DAYS = 30;

    // Check for stored referral on page load
    function checkStoredReferral() {
        try {
            const stored = localStorage.getItem(REFERRAL_KEY);
            if (stored) {
                const referralData = JSON.parse(stored);
                const daysSinceReferral = (Date.now() - referralData.timestamp) / (1000 * 60 * 60 * 24);

                if (daysSinceReferral <= ATTRIBUTION_WINDOW_DAYS) {
                    console.log('Active referral found:', referralData.partnerId);

                    // Optional: Show a small indicator that user came via referral
                    showReferralIndicator();
                } else {
                    // Expired, remove it
                    localStorage.removeItem(REFERRAL_KEY);
                }
            }
        } catch (error) {
            console.error('Error checking referral:', error);
        }
    }

    // Show small referral indicator (optional)
    function showReferralIndicator() {
        const indicator = document.createElement('div');
        indicator.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: #22c55e;
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 12px;
            font-family: Arial, sans-serif;
            z-index: 10000;
            opacity: 0.9;
        `;
        indicator.textContent = '✓ Referred visitor';

        document.body.appendChild(indicator);

        // Remove after 5 seconds
        setTimeout(() => {
            if (indicator.parentNode) {
                indicator.parentNode.removeChild(indicator);
            }
        }, 5000);
    }

    // Track conversion function
    function trackConversion(conversionType = 'signup', value = 0) {
        try {
            const stored = localStorage.getItem(REFERRAL_KEY);
            if (!stored) return false;

            const referralData = JSON.parse(stored);
            const daysSinceReferral = (Date.now() - referralData.timestamp) / (1000 * 60 * 60 * 24);

            if (daysSinceReferral > ATTRIBUTION_WINDOW_DAYS) {
                localStorage.removeItem(REFERRAL_KEY);
                return false;
            }

            // Log conversion (you can send this to your backend)
            console.log('Conversion tracked:', {
                partnerId: referralData.partnerId,
                conversionType,
                value,
                timestamp: Date.now(),
                daysSinceReferral: Math.round(daysSinceReferral * 100) / 100
            });

            // Here you would typically send data to your backend:
            /*
            fetch('/api/track-conversion', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    partnerId: referralData.partnerId,
                    conversionType,
                    value,
                    timestamp: Date.now()
                })
            }).catch(error => console.error('Failed to track conversion:', error));
            */

            // Clear referral after successful conversion
            localStorage.removeItem(REFERRAL_KEY);
            return true;

        } catch (error) {
            console.error('Error tracking conversion:', error);
            return false;
        }
    }

    // Get current referral info
    function getCurrentReferral() {
        try {
            const stored = localStorage.getItem(REFERRAL_KEY);
            if (!stored) return null;

            const referralData = JSON.parse(stored);
            const daysSinceReferral = (Date.now() - referralData.timestamp) / (1000 * 60 * 60 * 24);

            if (daysSinceReferral > ATTRIBUTION_WINDOW_DAYS) {
                localStorage.removeItem(REFERRAL_KEY);
                return null;
            }

            return referralData;
        } catch (error) {
            console.error('Error getting referral:', error);
            return null;
        }
    }

    // Expose functions globally
    window.AffiliateTracker = {
        trackConversion,
        getCurrentReferral,
        hasActiveReferral: () => getCurrentReferral() !== null
    };

    // Initialize when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', checkStoredReferral);
    } else {
        checkStoredReferral();
    }

})();

// Example usage in your landing page:
//
// When user signs up:
// AffiliateTracker.trackConversion('signup');
//
// When user makes purchase:
// AffiliateTracker.trackConversion('purchase', 99.99);
//
// Check if user came via affiliate:
// if (AffiliateTracker.hasActiveReferral()) {
//     console.log('This user came via affiliate referral');
// }