import valentineBg from "@/assets/valentine-bg.jpg";
import FloatingHearts from "@/components/FloatingHearts";
import MainPhoto from "@/components/MainPhoto";
import PhotoSection from "@/components/PhotoSection";
import DateSection from "@/components/DateSection";
import HiddenLetter from "@/components/HiddenLetter";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fixed Rose Background */}
      <div 
        className="fixed inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${valentineBg})` }}
      />
      <div className="fixed inset-0 -z-10 bg-background/70" />

      <FloatingHearts />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="relative z-20 text-center px-4 max-w-2xl">
          <p className="text-gold text-lg mb-2 tracking-widest uppercase" style={{ fontFamily: "var(--font-body)", color: "hsl(40 70% 55%)" }}>
            Happy Valentine's Day
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            You Are My <span className="text-primary italic">Forever</span>
          </h1>
          <p className="text-muted-foreground text-xl md:text-2xl mb-8" style={{ fontFamily: "var(--font-body)" }}>
            Every love story is beautiful, but ours is my favorite ♥
          </p>
          <a
            href="#letter"
            className="inline-block bg-gradient-gold text-secondary-foreground font-semibold px-8 py-3 rounded-full shadow-gold hover:scale-105 transition-transform duration-300"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Read My Letter 💌
          </a>
        </div>
      </section>

      {/* Main Couple Photo */}
      <MainPhoto />

      {/* Photo Gallery */}
      <PhotoSection />

      {/* Date Info */}
      <DateSection />

      {/* Hidden Love Letter */}
      <div id="letter">
        <HiddenLetter />
      </div>

      {/* Footer */}
      <footer className="py-10 text-center">
        <p className="text-gold text-2xl italic" style={{ fontFamily: "var(--font-display)", color: "hsl(40 70% 55%)" }}>
          Made with ♥ just for you
        </p>
      </footer>
    </div>
  );
};

export default Index;
