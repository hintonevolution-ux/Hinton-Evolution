import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="pt-32 pb-20 px-4 md:px-6 overflow-hidden relative w-full min-h-screen flex items-center bg-[#0B0A10]">
      {/* Background Aesthetic */}
      <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none opacity-50">
        <div className="absolute top-[-20%] left-1/4 w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 mb-8 mx-auto"
            >
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-xs font-medium text-indigo-300">Accepting new projects now</span>
            </motion.div>
            
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.1
                  }
                }
              }}
              className="text-5xl sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-black uppercase tracking-[-0.04em] leading-[0.85] text-white mb-8"
            >
               <motion.span 
                 variants={{
                   hidden: { opacity: 0, y: 20 },
                   visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
                 }}
                 className="block hover:text-indigo-100 transition-colors"
               >
                 WE BUILD
               </motion.span>
               <motion.span 
                 variants={{
                   hidden: { opacity: 0, y: 20 },
                   visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
                 }}
                 className="block bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent transform"
               >
                 DIGITAL
               </motion.span>
               <motion.span 
                 variants={{
                   hidden: { opacity: 0, y: 20 },
                   visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
                 }}
                 className="block mb-6 hover:text-indigo-100 transition-colors"
               >
                 EMPIRES
               </motion.span>
            </motion.h1>

            <h2 
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white/90 mb-4 tracking-tight max-w-2xl mx-auto"
            >
              Enterprise-Grade Web Solutions for Ambitious Brands
            </h2>

            <p 
              className="text-white/60 text-base sm:text-lg md:text-xl max-w-lg mb-10 font-light leading-relaxed mx-auto"
            >
              Premium website design, development & management for businesses ready to dominate their market online. From concept to conversion — we handle everything.
            </p>
            
            <motion.div 
               initial="hidden"
               animate="visible"
               variants={{
                 hidden: {},
                 visible: {
                   transition: {
                     delayChildren: 0.7,
                     staggerChildren: 0.15
                   }
                 }
               }}
               className="flex flex-wrap items-center justify-center gap-4 mt-8"
            >
              <motion.button 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  trackEvent('generate_lead', { event_category: 'Hero', event_label: 'Get Started' });
                  navigate('/contact');
                }}
                className="bg-[#00e5ff] text-black px-6 py-3 rounded-md font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] w-full sm:w-auto" 
              >
                🚀 Get Started
              </motion.button>
              <motion.button 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  trackEvent('view_item_list', { item_list_id: 'works', item_list_name: 'Works Portfolio' });
                  navigate('/works');
                }}
                className="border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-6 py-3 rounded-md font-medium transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                📁 View Our Works
              </motion.button>
            </motion.div>
          </div>
      </div>
    </section>
  );
}
