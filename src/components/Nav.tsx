import { useState } from 'react';
import { useLocation, useNavigate, Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Wrench, ChevronRight, Menu, X } from 'lucide-react';
import type { User } from 'firebase/auth';

export default function Nav({ user, isAdmin, onLogin, onLogout, onOpenAdmin }: { 
  user: User | null, 
  isAdmin: boolean,
  onLogin: () => void,
  onLogout: () => void,
  onOpenAdmin: () => void
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activePath = location.pathname;

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Works', href: '/works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#0B0A10]/90 backdrop-blur-md border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative z-50">
        <div className="flex items-center gap-2">
          <RouterLink to="/" className="font-sans uppercase tracking-[0.2em] font-black text-xl text-white md:text-2xl">HINTON EVOLUTION <span className="text-indigo-500">TECH</span></RouterLink>
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
          {isAdmin && (
            <button 
              onClick={onOpenAdmin}
              className="text-sm font-medium text-rose-500 hover:text-rose-400 transition-colors flex items-center gap-2 group"
            >
              <Wrench size={14} className="group-hover:rotate-45 transition-transform" /> Admin
            </button>
          )}
          {navItems.map((item) => (
            <RouterLink 
              key={item.label} 
              to={item.href} 
              className={`text-sm font-medium transition-colors ${activePath === item.href ? 'text-white' : 'text-white/70 hover:text-white'}`}
            >
              {item.label}
            </RouterLink>
          ))}
          
          <div className="h-4 w-[1px] bg-white/10 mx-2" />

          {user ? (
             <div className="flex items-center gap-4">
              <span className="text-[10px] font-mono uppercase text-indigo-400/60">{user.email?.split('@')[0]}</span>
              <button 
                onClick={onLogout}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                Logout
              </button>
             </div>
          ) : (
            <button 
                onClick={onLogin}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Login
             </button>
          )}

          <button 
            onClick={() => navigate('/contact')}
            className="bg-indigo-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-600 transition-colors" 
          >
            Get Started
          </button>
        </div>

        <button aria-label="Toggle menu" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 w-full bg-gradient-to-b from-[#0B0A10] to-[#120F1C] border-t border-white/10 md:hidden z-50 overflow-y-auto"
            style={{ height: 'calc(100vh - 72px)' }}
          >
            <div className="flex flex-col p-6 max-w-7xl mx-auto gap-1 pb-32">
              {isAdmin && (
                <motion.button 
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
                  onClick={() => { setIsMenuOpen(false); onOpenAdmin(); }}
                  className="text-sm uppercase tracking-widest font-black text-rose-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl px-4 py-4 text-left border-b border-white/5 flex items-center justify-between transition-colors mt-2"
                >
                  <span>Admin Access</span>
                  <Wrench size={16} />
                </motion.button>
              )}
              {navItems.map((item, i) => {
                const isActive = activePath === item.href;
                return (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                    key={item.label}
                  >
                    <RouterLink 
                      to={item.href} 
                      onClick={() => setIsMenuOpen(false)}
                      className={`block w-full text-xl font-bold py-4 px-4 rounded-2xl transition-all flex items-center justify-between group ${isActive ? 'bg-indigo-500/10 text-indigo-400' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
                    >
                      <div className="flex items-center gap-4">
                        {isActive ? (
                          <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-transparent" />
                        )}
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight size={18} className={`transition-transform ${isActive ? 'text-indigo-400 translate-x-1' : 'text-white/20 group-hover:text-white/50 group-hover:translate-x-1'}`} />
                    </RouterLink>
                  </motion.div>
                );
              })}
              
              <div className="my-2 border-t border-white/5" />
              
              {user ? (
                <motion.button 
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                  onClick={() => { setIsMenuOpen(false); onLogout(); }}
                  className="text-lg font-bold text-white/70 hover:text-white hover:bg-white/5 px-4 py-4 rounded-2xl text-left transition-colors"
                >
                  Logout <span className="text-sm font-normal text-indigo-400 ml-2">({user.email?.split('@')[0]})</span>
                </motion.button>
              ) : (
                <motion.button 
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                  onClick={() => { setIsMenuOpen(false); onLogin(); }}
                  className="text-lg font-bold text-white/70 hover:text-white hover:bg-white/5 px-4 py-4 rounded-2xl text-left transition-colors"
                >
                  Login
                </motion.button>
              )}
              <motion.button 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/contact');
                }}
                className="bg-indigo-500 text-white px-6 py-4 rounded-xl text-base font-semibold mt-4 shadow-lg shadow-indigo-500/20 active:scale-95 transition-transform"
              >
                Get Started Today
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
