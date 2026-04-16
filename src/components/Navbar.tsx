import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Quién es MissCapriccio', path: '/carla' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const services = [
    { name: 'Organización de Eventos', path: '/eventos' },
    { name: 'Personal Assistance', path: '/concierge' },
    { name: 'Luxury Brand Manager', path: '/marcas' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 nav-blur border-luxury h-[60px] px-10 flex items-center">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Brand Name */}
        <Link 
          to="/" 
          className="text-[10px] font-sans font-light tracking-[0.35em] uppercase hover:text-gold transition-colors duration-300"
        >
          MissCapriccio
        </Link>

        {/* Right: Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div 
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="text-[10px] font-sans font-light tracking-[0.35em] uppercase flex items-center hover:text-gold transition-colors duration-300">
              Servicios <ChevronDown className={`ml-1 w-3 h-3 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full -left-10 mt-4 bg-white border-luxury shadow-sm min-w-[240px]"
                >
                  <div className="flex flex-col py-2">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="px-6 py-3 text-[10px] font-sans font-light tracking-[0.2em] uppercase hover:bg-warm-gray hover:text-gold transition-all duration-300 border-b border-warm-gray last:border-0"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-[10px] font-sans font-light tracking-[0.35em] uppercase hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-luxury-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gold/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] text-muted-text tracking-[0.2em] uppercase">Servicios</span>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-[11px] font-sans tracking-[0.15em] uppercase pl-4"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-4 pt-4 border-t border-warm-gray">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-[11px] font-sans tracking-[0.25em] uppercase hover:text-gold"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
