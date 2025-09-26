import { useEffect, useState } from 'react';

export const useAffiliate = () => {
  const [affiliateId, setAffiliateId] = useState<string | null>(null);

  useEffect(() => {
    // Check URL params first (for fresh redirects from affiliate page)
    const urlParams = new URLSearchParams(window.location.search);
    const refParam = urlParams.get('ref');
    
    // Check localStorage (for returning visitors)
    const storedAffiliate = localStorage.getItem('affiliateId');
    
    const finalAffiliateId = refParam || storedAffiliate;
    
    if (finalAffiliateId) {
      setAffiliateId(finalAffiliateId);
      // Store in localStorage for future visits
      localStorage.setItem('affiliateId', finalAffiliateId);
    }
  }, []);

  const getAffiliateUrl = (baseUrl: string) => {
    if (affiliateId) {
      return `${baseUrl}?ref=${affiliateId}`;
    }
    return baseUrl;
  };

  return {
    affiliateId,
    getAffiliateUrl
  };
};