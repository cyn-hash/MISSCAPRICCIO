import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Service, SERVICES } from '../constants';

interface ServicePageProps {
  service: Service;
}

export default function ServicePage({ service }: ServicePageProps) {
  const currentIndex = SERVICES.indexOf(service);
  const nextService = SERVICES[(currentIndex + 1) % SERVICES.length];

  return (
    <div className="flex flex-col min-h-screen pt-[60px]">
      
      {/* Hero Header */}
      <section className="relative h-[70vh] w-full overflow-hidden group">
        <div 
          className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-[700ms] ease-in-out"
        >
          <img 
            src={service.imageUrl} 
            alt={service.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-white font-serif italic text-5xl md:text-[64px] font-light text-center leading-[1.1]"
          >
            {service.name}
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-[1100px] mx-auto py-24 md:py-32 px-6 md:px-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-serif italic text-3xl md:text-[38px] text-luxury-black font-light leading-[1.2]">
              {service.pullQuote}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="font-serif font-light text-[1.1rem] leading-[1.9] text-muted-text">
              {service.body}
            </p>
          </motion.div>
        </div>
        
        <div className="w-[60px] h-[1px] bg-gold mt-24" />
      </section>

      {/* Next Service Link */}
      <section className="px-6 md:px-10 py-12 border-t border-luxury">
        <div className="max-w-[1100px] mx-auto flex justify-end">
          <Link 
            to={nextService.path}
            className="group flex items-center space-x-4 text-[10px] font-sans font-light tracking-[0.35em] text-gold uppercase"
          >
            <span>Siguiente servicio</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="bg-luxury-black py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white font-serif italic text-4xl mb-10 font-light tracking-wide">
            ¿Hablamos?
          </h2>
          <Link 
            to="/contacto"
            className="inline-block bg-gold py-5 px-10 text-white font-sans text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-gold transition-colors duration-400"
          >
            Contacto
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
