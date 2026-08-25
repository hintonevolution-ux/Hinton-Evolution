import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className="bg-[#050508] text-white pt-32 pb-12 px-6 md:px-12 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Background elements */}
      <div aria-hidden="true" className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00e5ff]/5 rounded-full blur-[120px] pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24 border-t border-white/10 pt-16">
          <div className="lg:col-span-5 lg:pr-8">
            <div className="flex items-center gap-2 mb-6 text-2xl font-black uppercase tracking-widest">
              <span>HINTON <span className="text-[#00e5ff]">EVOLUTION</span></span>
            </div>
            <p className="text-sm font-light leading-relaxed text-white/50 max-w-sm mb-8">
              Premium website design, development & management. Based in India, serving clients worldwide with excellence.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-8">Company</h3>
            <ul className="space-y-4">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Work', path: '/works' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.path} className="text-[15px] font-light text-white/70 hover:text-[#00e5ff] transition-colors py-1 flex items-center gap-2 group">
                    <span className="w-0 h-[2px] bg-[#00e5ff] group-hover:w-4 transition-all duration-300"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-8">Contact</h3>
            <ul className="space-y-5">
              <li>
                <a href="mailto:official@hintonevolution.com" className="text-[15px] font-light text-white/70 hover:text-[#00e5ff] transition-colors py-1 inline-block">
                  official@hintonevolution.com
                </a>
              </li>
              <li className="flex flex-col gap-2">
                <a href="tel:+919832727520" className="text-[15px] font-light text-white/70 hover:text-[#00e5ff] transition-colors py-1 inline-block flex items-center gap-2">
                  <span className="text-white/40">📞</span> +91 98327 27520
                </a>
                <a href="https://wa.me/918001891036" target="_blank" rel="noopener noreferrer" className="text-[15px] font-light text-[#25D366] hover:text-white transition-colors py-1 inline-block flex items-center gap-2">
                  <span>💬</span> +91 80018 91036
                </a>
              </li>
              <li>
                <p className="text-[15px] font-light text-white/70 py-1">Durgapur, West Bengal</p>
              </li>
              <li>
                <p className="text-[15px] font-light text-white/70 py-1 flex items-center group cursor-default">
                  India <span className="text-[10px] uppercase font-bold tracking-widest text-[#00e5ff] ml-2">IN</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 mt-12 md:mt-0">
          <p className="text-[13px] font-light text-white/50 text-center md:text-left">
            © {new Date().getFullYear()} Hinton Evolution. All rights reserved. Built with passion in India.
          </p>
          <div className="flex gap-8">
            <a href="/policy" className="text-[13px] font-light text-white/50 hover:text-[#00e5ff] transition-colors py-1">Company Policy &amp; Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
