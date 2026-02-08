import mainCouple from "@/assets/main-couple.jpg";

const MainPhoto = () => {
  return (
    <section className="py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gold mb-2 text-center italic">
        My Everything
      </h2>
      <p className="text-muted-foreground text-lg mb-8 text-center" style={{ fontFamily: "var(--font-body)" }}>
        The one who holds my heart
      </p>

      <div className="relative max-w-md w-full">
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 rounded-3xl blur-xl opacity-60" />
        <div className="relative overflow-hidden rounded-2xl border-4 border-gold/30 shadow-romantic animate-pulse-glow">
          <img
            src={mainCouple}
            alt="Us together"
            className="w-full aspect-square object-cover"
          />
        </div>
        <div className="mt-6 text-center">
          <h3 className="text-gold text-2xl font-bold italic mb-2" style={{ fontFamily: "var(--font-display)", color: "hsl(40 70% 55%)" }}>
            You & Me
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            In a world full of people, my heart chose you. You are my favorite hello and my hardest goodbye. ♥
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainPhoto;
