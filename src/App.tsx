import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Home from './pages/Home';
import Carla from './pages/Carla';
import Contact from './pages/Contact';
import ServicePage from './components/ServicePage';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { SERVICES } from './constants';

function AnimatedRoutes() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location}>
          <Route 
            path="/" 
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Home />
              </motion.div>
            } 
          />
          <Route 
            path="/eventos" 
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <ServicePage service={SERVICES[0]} />
              </motion.div>
            } 
          />
          <Route 
            path="/concierge" 
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <ServicePage service={SERVICES[1]} />
              </motion.div>
            } 
          />
          <Route 
            path="/marcas" 
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <ServicePage service={SERVICES[2]} />
              </motion.div>
            } 
          />
          <Route 
            path="/carla" 
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Carla />
              </motion.div>
            } 
          />
          <Route 
            path="/contacto" 
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Contact />
              </motion.div>
            } 
          />
        </Routes>
      </AnimatePresence>
      {!isHome && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
