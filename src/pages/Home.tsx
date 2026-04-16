import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Logo Block */}
      <header className="pt-[110px] pb-[60px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="inline-block"
        >
          {/* Logo Placeholder */}
          <div className="mb-[12px]">
            <h1 className="text-[32px] font-sans font-light tracking-[0.5em] text-luxury-black uppercase">
              MissCapriccio
            </h1>
          </div>
          
          <p className="text-[9px] font-sans font-light tracking-[0.35em] text-gold uppercase mb-[20px]">
            EVENTS · PERSONAL ASSISTANCE · LUXURY BRAND MANAGER
          </p>
          
          <div className="w-[60px] h-[1px] bg-gold mx-auto" />
        </motion.div>
      </header>

      {/* 2x2 Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] w-full bg-white">
        {SERVICES.map((service, index) => (
          <Link 
            key={service.id} 
            to={service.path}
            className="group relative h-[448px] md:h-[448px] w-full overflow-hidden bg-[#1a1a1a] block cursor-pointer"
          >
            {/* Grayscale to Color Image */}
            <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-[700ms] ease-in-out">
              <img 
                src={service.imageUrl} 
                alt={service.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 cell-overlay-gradient" />

            {/* Card Label */}
            <div className="absolute inset-0 p-10 flex flex-col justify-end pointer-events-none">
              <motion.span 
                className="block text-[9px] font-sans font-light tracking-[0.35em] text-gold uppercase mb-[10px]"
              >
                {service.number}
              </motion.span>
              <h2 className="text-white group-hover:text-gold transition-colors duration-400 font-serif italic text-[38px] font-light tracking-wide leading-[1.1]">
                {service.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
