import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Palette, ShoppingCart, Search, Smartphone, Wrench, Zap, BarChart, Globe, Calendar } from 'lucide-react';

export default function Services({ limit, isPage }: { limit?: number, isPage?: boolean }) {
  const navigate = useNavigate();
  const location = useLocation();
  const allServices = [
    {
      icon: <Palette size={24} className="text-[#ffb347]" />,
      title: "Web Design & Development",
      desc: "Visually stunning, conversion-focused websites custom-built to reflect your brand and engage your audience. From templates to fully custom UI/UX.",
      tags: ["HTML/CSS", "React", "WordPress"]
    },
    {
      icon: <Smartphone size={24} className="text-[#ff3399]" />,
      title: "Mobile-Responsive Design",
      desc: "Every website we build looks and performs flawlessly across all devices — phones, tablets, laptops, and desktops. No compromises.",
      tags: ["Responsive", "Mobile-First"]
    },
    {
      icon: <ShoppingCart size={24} className="text-white/70" />,
      title: "eCommerce Solutions",
      desc: "Full-featured online stores with secure payment gateways, inventory management, and optimized shopping experiences that convert.",
      tags: ["WooCommerce", "Razorpay", "UPI"]
    },
    {
      icon: <Search size={24} className="text-[#00e5ff]" />,
      title: "SEO Optimization",
      desc: "Get found on Google. We implement technical SEO, on-page optimization, and strategic content structure to drive organic traffic.",
      tags: ["On-Page SEO", "Analytics", "Schema"]
    },
    {
      icon: <Wrench size={24} className="text-white/70" />,
      title: "Website Maintenance",
      desc: "Keep your site fast, secure, and up-to-date. We handle everything from plugin updates and backups to content changes and performance monitoring.",
      tags: ["Monthly Plans", "Security", "Speed"]
    },
    {
      icon: <Zap size={24} className="text-[#ffb347]" />,
      title: "Speed & Performance",
      desc: "Slow websites lose customers. We optimize load times, compress assets, leverage caching, and ensure your site scores high on Core Web Vitals.",
      tags: ["PageSpeed", "CDN", "Core Vitals"]
    }
  ];

  const addons = [
    { icon: <Wrench size={28} className="text-[#ffb347]" />, title: "Monthly Maintenance", price: "₹2,000 - ₹5,000/mo", desc: "Plugin updates, backups, uptime monitoring, content updates & security patches." },
    { icon: <BarChart size={28} className="text-[#ff3399]" />, title: "SEO (Monthly)", price: "₹5,000 - ₹15,000/mo", desc: "Keyword research, on-page SEO, backlink building, monthly performance reports." },
    { icon: <Palette size={28} className="text-[#ffb347]" />, title: "Logo Design", price: "₹1,000 - ₹5,000", desc: "Professional logo design with multiple concepts, revisions, and all source files included." },
    { icon: <Globe size={28} className="text-[#00e5ff]" />, title: "Hosting & Domain", price: "₹3,000 - ₹8,000/yr", desc: "Managed hosting setup with SSL, CDN configuration, and domain registration assistance." }
  ];

  const displayServices = limit ? allServices.slice(0, limit) : allServices;

  return (
    <section id="services" className={`px-4 md:px-6 bg-[#0B0A10] ${isPage ? 'pt-24 md:pt-28 pb-20 md:pb-32' : 'py-20 md:py-32'}`}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {limit ? (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-4 text-[#00e5ff] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                <div className="w-12 h-[1px] bg-[#00e5ff]"></div>
                <span>WHAT WE DO</span>
              </div>
              <h2 className="text-4xl sm:text-[3rem] md:text-[5rem] font-black uppercase tracking-tighter text-white leading-none">
                Services That <span className="text-[#00e5ff]">Drive Results</span>
              </h2>
            </div>
            <button 
              onClick={() => {
                navigate('/services');
              }}
              className="border border-white/20 text-white hover:bg-white/5 px-6 py-3 rounded-md text-sm font-medium transition-colors whitespace-nowrap self-start md:self-auto mb-2"
            >
              View All Services &rarr;
            </button>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center gap-6 mb-12 relative"
          >
            <div className="absolute top-0 w-full h-[300px] bg-gradient-to-b from-indigo-500/10 to-transparent blur-[100px] pointer-events-none"></div>
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex gap-4 text-sm font-medium mb-2 font-mono relative z-10"
            >
              <span className="text-[#00e5ff] cursor-pointer hover:underline" onClick={() => navigate('/')}>Home</span>
              <span className="text-white/20">/</span>
              <span className="text-white/40">Services</span>
            </motion.div>
            <div className="relative z-10">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-center justify-center gap-4 text-[#00e5ff] text-sm font-bold tracking-[0.2em] uppercase mb-6"
              >
                <div className="w-8 h-[1px] bg-[#00e5ff]"></div>
                <span>WHAT WE DO</span>
                <div className="w-8 h-[1px] bg-[#00e5ff]"></div>
              </motion.div>
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-5xl sm:text-[3.5rem] md:text-[6rem] lg:text-[7rem] font-black uppercase tracking-tighter text-white leading-[0.9]"
              >
                Services That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-indigo-500">Drive Results</span>
              </motion.h2>
            </div>
            <p className="text-white/60 text-lg md:text-xl font-light mt-4">End-to-end digital solutions — from concept to launch and beyond.</p>
          </motion.div>
        )}
        
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayServices.map((s, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className="group bg-[#121620] border border-white/5 rounded-3xl p-8 flex flex-col hover:border-[#00e5ff]/40 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#1e2532] flex items-center justify-center mb-8 relative">
                {s.icon}
                <div className="absolute inset-0 rounded-2xl bg-[#00e5ff] blur-md opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{s.title}</h3>
              <p className="text-[#94a3b8] text-base leading-relaxed mb-10 flex-grow">
                {s.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {s.tags.map(tag => (
                  <span key={tag} className="bg-[#181f2d] border border-white/10 text-[#00e5ff] text-xs font-medium px-4 py-2 rounded-full group-hover:border-[#00e5ff]/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {!limit ? (
          <>
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               className="mt-32"
            >
              <div className="flex items-center justify-center gap-4 text-[#00e5ff] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                <div className="w-8 h-[1px] bg-[#00e5ff]"></div>
                <span>ADD-ON SERVICES</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-black justify-center items-center flex flex-col lg:flex-row uppercase tracking-tighter text-white leading-none text-center gap-2 lg:gap-4">
                <span>Supercharge Your</span>
                <span className="text-[#00e5ff]">Package</span>
              </h2>
              <p className="text-white/60 text-lg md:text-xl font-light mt-6 text-center mb-16">Optional add-ons available with any plan.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {addons.map((addon, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group bg-[#121620] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-[#00e5ff]/30 transition-all duration-300"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-[#1e2532] flex items-center justify-center mb-6 relative">
                        {addon.icon}
                        <div className="absolute inset-0 rounded-2xl bg-[#00e5ff] blur-md opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">{addon.title}</h4>
                      <p className="text-[#ffb347] font-black text-xl mb-4 tracking-wider">{addon.price}</p>
                      <p className="text-[#94a3b8] text-sm leading-relaxed">{addon.desc}</p>
                    </motion.div>
                 ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[#121620] border border-white/5 rounded-3xl p-12 md:p-16 text-center mt-32 max-w-5xl mx-auto shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00e5ff]/5 to-transparent pointer-events-none"></div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Ready to Get <span className="text-[#00e5ff]">Started?</span></h2>
              <p className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">Tell us about your project and we'll recommend the perfect service package for your needs.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button onClick={() => navigate('/contact')} className="bg-[#00e5ff] text-black px-8 py-4 rounded-md font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all">
                  📅 Book Free Consultation &rarr;
                </button>
                <button onClick={() => { navigate('/pricing'); }} className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-md font-medium flex items-center justify-center gap-2 transition-all">
                  💰 View Pricing
                </button>
              </div>
            </motion.div>

          </>
        ) : null}
      </motion.div>
    </section>
  );
}
