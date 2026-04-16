import { motion } from 'motion/react';

export default function Carla() {
  return (
    <div className="flex flex-col min-h-screen pt-[60px]">

      {/* Hero Portrait */}
      <section className="relative h-[80vh] w-full overflow-hidden group">
        <div 
          className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-[1000ms] ease-in-out"
        >
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974" 
            alt="Carla Solà" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute bottom-12 left-12 md:bottom-20 md:left-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span className="text-[9px] font-sans font-light tracking-[0.35em] text-gold uppercase mb-[10px] block">
              Fundadora
            </span>
            <h1 className="text-white font-serif italic text-4xl md:text-[64px] font-light leading-[1.1]">
              Carla Solà
            </h1>
          </motion.div>
        </div>
      </section>

      {/* content bio */}
      <section className="max-w-[900px] mx-auto py-24 md:py-32 px-6 md:px-10">
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-sans font-light tracking-[0.35em] text-muted-text uppercase block mb-6">
              Quién hay detrás
            </span>
            <h2 className="text-luxury-black font-serif text-4xl md:text-[48px] font-light italic leading-[1.2]">
              "Una mirada estratégica, creativa y profundamente orientada al detalle."
            </h2>
            <div className="w-[60px] h-[1px] bg-gold mt-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-muted-text font-serif font-light text-[1.1rem] leading-[1.9]"
          >
            <p>
              Carla Solà es la fundadora y alma creativa de MissCapriccio. Con más de 17 
              años de experiencia en el sector de la hospitalidad, la gestión de proyectos y 
              la atención al cliente, ha desarrollado una visión única que combina sensibilidad 
              estética, estrategia y excelencia operativa.
            </p>
            <p>
              A lo largo de su trayectoria, ha trabajado en la optimización de restaurantes, 
              la gestión de espacios y la creación de experiencias personalizadas, entendiendo 
              que cada detalle influye directamente en la percepción y el éxito de un proyecto.
            </p>
            <p>
              Su enfoque va más allá de la organización o la gestión: Carla concibe cada 
              marca, espacio o evento como una experiencia global que debe emocionar, funcionar 
              y perdurar en el recuerdo.
            </p>
            <p>
              Hoy, a través de MissCapriccio, canaliza su experiencia para acompañar a 
              clientes y marcas en el desarrollo de proyectos únicos, aportando una mirada 
              estratégica, creativa y profundamente orientada al detalle.
            </p>
          </motion.div>

          {/* Stat Block */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-luxury">
            <div className="flex flex-col space-y-4">
              <span className="text-3xl font-serif text-gold font-light">17+ años</span>
              <span className="text-[9px] font-sans text-muted-text uppercase tracking-widest font-light">Hospitalidad y gestión de lujo</span>
            </div>
            <div className="flex flex-col space-y-4">
              <span className="text-3xl font-serif text-gold font-light">Nacional e internacional</span>
              <span className="text-[9px] font-sans text-muted-text uppercase tracking-widest font-light">Presencia de marca</span>
            </div>
            <div className="flex flex-col space-y-4">
              <span className="text-3xl font-serif text-gold font-light">Cada detalle</span>
              <span className="text-[9px] font-sans text-muted-text uppercase tracking-widest font-light">Desde la idea hasta la ejecución</span>
            </div>
          </div>
        </div>
      </section>

      {/* Backdrop Manifesto */}
      <section className="bg-luxury-black py-32 px-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-[1000px] text-center"
        >
          <p className="text-white font-serif italic text-3xl md:text-4xl font-light leading-relaxed">
            "En MissCapriccio entendemos las marcas, las experiencias y las personas como un todo.<br />
            Diseñamos. Conectamos. Acompañamos."
          </p>
        </motion.div>
      </section>

    </div>
  );
}
