export default function Footer() {
  return (
    <footer className="w-full bg-white py-12 px-6 md:px-10 border-t border-gold/20 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] font-sans font-medium tracking-[0.35em] uppercase text-luxury-black">
          MissCapriccio
        </div>
        <div className="text-[9px] font-sans font-normal tracking-[0.1em] text-muted-text uppercase">
          © 2025 MissCapriccio · Carla Solà
        </div>
      </div>
    </footer>
  );
}
