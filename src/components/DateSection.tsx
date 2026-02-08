import { Heart, Calendar, MapPin, Clock } from "lucide-react";

const DateSection = () => {
  return (
    <section className="py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gold mb-2 text-center italic">
        Our Special Date
      </h2>
      <p className="text-muted-foreground text-lg mb-10 text-center" style={{ fontFamily: "var(--font-body)" }}>
        Counting every moment with you
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl w-full">
        <div className="bg-card border border-gold/20 rounded-2xl p-6 text-center shadow-romantic hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
          <Calendar className="w-8 h-8 mx-auto mb-3 text-gold" style={{ color: "hsl(40 70% 55%)" }} />
          <p className="text-muted-foreground text-sm mb-1">Our Anniversary</p>
          <p className="text-foreground text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            February 14
          </p>
        </div>

        <div className="bg-card border border-gold/20 rounded-2xl p-6 text-center shadow-romantic hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
          <Heart className="w-8 h-8 mx-auto mb-3" style={{ color: "hsl(350 80% 55%)" }} />
          <p className="text-muted-foreground text-sm mb-1">Days in Love</p>
          <p className="text-foreground text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            ∞ Forever
          </p>
        </div>

        <div className="bg-card border border-gold/20 rounded-2xl p-6 text-center shadow-romantic hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
          <MapPin className="w-8 h-8 mx-auto mb-3" style={{ color: "hsl(40 70% 55%)" }} />
          <p className="text-muted-foreground text-sm mb-1">Our Place</p>
          <p className="text-foreground text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            In Your Heart
          </p>
        </div>
      </div>
    </section>
  );
};

export default DateSection;
