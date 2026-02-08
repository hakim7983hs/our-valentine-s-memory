import couplePlaceholder from "@/assets/couple-placeholder.jpg";

const PhotoSection = () => {
  return (
    <section className="py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gold mb-2 text-center italic">
        Us Together
      </h2>
      <p className="text-muted-foreground text-lg mb-10 text-center" style={{ fontFamily: "var(--font-body)" }}>
        Every picture tells our love story
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl border-2 border-gold/20 shadow-romantic hover:shadow-gold transition-all duration-500 hover:scale-[1.03] aspect-square"
          >
            <img
              src={couplePlaceholder}
              alt={`Our memory ${i}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
              <span className="text-foreground text-sm font-medium" style={{ fontFamily: "var(--font-display)" }}>
                ♥ Our Memory
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-muted-foreground text-sm mt-6 italic">
        Replace these with your own photos ♥
      </p>
    </section>
  );
};

export default PhotoSection;
