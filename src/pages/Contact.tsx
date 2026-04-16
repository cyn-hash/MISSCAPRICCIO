import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen pt-[60px]">

      <main className="flex-grow bg-white py-32 px-6 md:px-10">
        <div className="max-w-[700px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] font-sans font-light tracking-[0.35em] text-muted-text uppercase block mb-6">
              Hablemos
            </span>
            <h1 className="text-luxury-black font-serif italic text-4xl md:text-[48px] font-light mb-4 leading-[1.2]">
              Cada gran experiencia empieza con una conversación.
            </h1>
            <p className="text-muted-text font-serif italic text-xl font-light">
              Cuéntanos tu proyecto. Nos encargamos del resto.
            </p>
            <div className="w-[60px] h-[1px] bg-gold my-12" />
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-12"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="group flex flex-col space-y-2">
              <label className="text-[9px] font-sans font-light text-muted-text uppercase tracking-widest pl-1">Nombre</label>
              <input 
                type="text" 
                className="bg-transparent border-b border-gold/40 focus:border-gold outline-none py-3 px-1 font-serif text-lg text-luxury-black transition-colors" 
              />
            </div>

            <div className="group flex flex-col space-y-2">
              <label className="text-[9px] font-sans font-light text-muted-text uppercase tracking-widest pl-1">Email</label>
              <input 
                type="email" 
                className="bg-transparent border-b border-gold/40 focus:border-gold outline-none py-3 px-1 font-serif text-lg text-luxury-black transition-colors" 
              />
            </div>

            <div className="group flex flex-col space-y-2">
              <label className="text-[9px] font-sans font-light text-muted-text uppercase tracking-widest pl-1">Mensaje</label>
              <textarea 
                rows={4}
                className="bg-transparent border-b border-gold/40 focus:border-gold outline-none py-3 px-1 font-serif text-lg text-luxury-black transition-colors resize-none" 
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-luxury-black py-6 text-white font-sans text-[10px] font-light tracking-[0.4em] uppercase hover:bg-gold transition-all duration-500 group relative overflow-hidden"
            >
              <span className="relative z-10 transition-colors group-hover:text-white">Enviar</span>
            </button>
          </motion.form>

          <div className="mt-20 flex space-x-8">
            <a href="#" className="text-[9px] font-sans font-light text-muted-text uppercase tracking-[0.2em] hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="text-[9px] font-sans font-light text-muted-text uppercase tracking-[0.2em] hover:text-gold transition-colors">LinkedIn</a>
          </div>
        </div>
      </main>

    </div>
  );
}
