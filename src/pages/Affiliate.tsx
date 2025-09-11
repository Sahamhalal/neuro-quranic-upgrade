import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const Affiliate = () => {
  const { affiliateId } = useParams();

  useEffect(() => {
    console.log("Affiliate page loaded with ID:", affiliateId);
    
    // Store affiliate ID in localStorage for tracking
    if (affiliateId) {
      localStorage.setItem('affiliateId', affiliateId);
    }
    
    // Redirect to main site with affiliate parameter after 3 seconds
    const timer = setTimeout(() => {
      window.location.href = `https://neuroquranic.com?ref=${affiliateId}`;
    }, 3000);

    return () => clearTimeout(timer);
  }, [affiliateId]);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center bg-card/20 backdrop-blur-md border border-card-glow/20 rounded-2xl p-8">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-neural bg-clip-text text-transparent">
            Welcome to NeuroQuranic
          </h1>
          
          <p className="text-xl text-foreground/80 mb-8">
            You've been referred by affiliate: {affiliateId}
          </p>
          
          <p className="text-lg text-foreground/60 mb-4">
            Redirecting in 3 seconds...
          </p>
          
          <Button 
            variant="hero"
            className="text-xl py-6 px-12 shadow-glow hover:shadow-neural transform hover:scale-105 transition-all duration-300"
            onClick={() => window.location.href = `https://neuroquranic.com?ref=${affiliateId}`}
          >
            🧠 Go to NeuroQuranic Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;