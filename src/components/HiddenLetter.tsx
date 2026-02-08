import { useState } from "react";
import loveLetter from "@/assets/love-letter.jpg";

const HiddenLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative py-20 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4 text-center italic">
        A Secret For You...
      </h2>
      <p className="text-muted-foreground text-lg mb-8 text-center" style={{ fontFamily: "var(--font-body)" }}>
        Tap the envelope to reveal my heart
      </p>

      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group cursor-pointer transition-transform duration-300 hover:scale-105 animate-pulse-glow rounded-2xl overflow-hidden"
        >
          <img
            src={loveLetter}
            alt="Love letter envelope"
            className="w-64 h-64 object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl flex items-end justify-center pb-4">
            <span className="text-foreground text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              💌 Tap to open
            </span>
          </div>
        </button>
      ) : (
        <div className="animate-letter-reveal max-w-lg w-full bg-card border border-gold/30 rounded-2xl p-8 shadow-romantic text-center">
          <div className="text-5xl mb-4">💕</div>
          <h3 className="text-2xl text-gold font-bold mb-4 italic" style={{ fontFamily: "var(--font-display)" }}>
            My Dearest Love,
          </h3>
          <p className="text-foreground/90 text-lg leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
            Every moment with you feels like a beautiful dream I never want to wake up from. 
            You are my sunshine on cloudy days, my calm in every storm, and the reason my heart 
            beats with joy every single day.
          </p>
          <p className="text-foreground/90 text-lg leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
            Thank you for being you — for your laughter, your kindness, and the way you make 
            everything feel magical. I fall more in love with you with every passing moment.
          </p>
          <p className="text-gold text-xl font-semibold italic mt-6" style={{ fontFamily: "var(--font-display)" }}>
            Forever & Always Yours ♥
          </p>
          <button
            onClick={() => setIsOpen(false)}
            className="mt-6 text-muted-foreground text-sm hover:text-foreground transition-colors"
          >
            Close letter
          </button>
        </div>
      )}
    </section>
  );
};

export default HiddenLetter;
