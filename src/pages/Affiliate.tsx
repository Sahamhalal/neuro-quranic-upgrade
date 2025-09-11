import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const Affiliate = () => {
  const { affiliateId } = useParams();

  useEffect(() => {
    console.log("Affiliate page loaded with ID:", affiliateId);
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
          
          <Button 
            variant="hero"
            className="text-xl py-6 px-12 shadow-glow hover:shadow-neural transform hover:scale-105 transition-all duration-300"
            onClick={() => window.open('https://neuroquranic.app', '_blank')}
          >
            🧠 Download NeuroQuranic App
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;