import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Clock, MapPin, ArrowRight } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getFirebaseDb } from '../lib/firebase';
import confetti from 'canvas-confetti';
import { useNavigate } from 'react-router-dom';
import { trackEvent, setUserData } from '../utils/analytics';

export default function Contact({ isPage }: { isPage?: boolean }) {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    budget: '',
    description: ''
  });

  const triggerConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#6366f1', '#4f46e5', '#818cf8']
      }));
      confetti(Object.assign({}, defaults, { particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#6366f1', '#4f46e5', '#818cf8']
      }));
    }, 250);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await addDoc(collection(getFirebaseDb(), 'inquiries'), {
        ...formData,
        projectType: formData.service || 'Other',
        createdAt: serverTimestamp(),
      });
      
      setUserData(formData.email, formData.phone, formData.name);
      trackEvent('generate_lead', {
        event_category: 'Contact',
        event_label: formData.service || 'Other'
      });
      
      setIsSubmitted(true);
      triggerConfetti();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className={`px-4 md:px-6 bg-[#040406] text-white ${isPage ? 'pt-24 pb-24 md:pb-32' : 'py-24 md:py-32'}`}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {isPage && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center gap-6 mb-12 relative"
          >
            <div className="absolute top-0 w-full h-[300px] bg-gradient-to-b from-[#00e5ff]/10 to-transparent blur-[100px] pointer-events-none"></div>
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex gap-4 text-sm font-medium mb-2 font-mono relative z-10"
            >
              <span className="text-[#00e5ff] cursor-pointer hover:underline" onClick={() => navigate('/')}>Home</span>
              <span className="text-white/20">/</span>
              <span className="text-white/40">Contact</span>
            </motion.div>
            <div className="relative z-10">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-center justify-center gap-4 text-[#00e5ff] text-sm font-bold tracking-[0.2em] uppercase mb-6"
              >
                <div className="w-8 h-[1px] bg-[#00e5ff]"></div>
                <span>GET IN TOUCH</span>
                <div className="w-8 h-[1px] bg-[#00e5ff]"></div>
              </motion.div>
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-[3.5rem] md:text-[6rem] lg:text-[7rem] font-black uppercase tracking-tighter text-white leading-[0.9]"
              >
                Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-blue-500">Us</span>
              </motion.h2>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side: Info */}
          <div>
            {!isPage && <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold text-indigo-500 mb-6 block">Get In Touch</span>}
            <h2 className="uppercase tracking-tighter mb-8 leading-[1.05]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            <span className="font-black block text-white">LET'S BUILD YOUR</span>
            <span className="font-black text-white block">WEBSITE TOGETHER</span>
          </h2>
          <p className="text-white/60 mb-12 leading-relaxed text-lg max-w-md">
            Fill in the form and we'll respond within 24 hours with a free quote and project plan. No obligation, no pressure — just a clear plan forward.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-[#12121D] border border-white/5 flex items-center justify-center text-indigo-400 shrink-0 group-hover:border-indigo-500/30 transition-all duration-300">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-indigo-400/60 mb-1">EMAIL US</p>
                <p className="font-medium text-white text-sm md:text-base">official@hintonevolution.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-[#12121D] border border-white/5 flex items-center justify-center text-indigo-400 shrink-0 group-hover:border-indigo-500/30 transition-all duration-300">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-indigo-400/60 mb-1">PHONE / WHATSAPP</p>
                <div className="font-medium text-white text-sm md:text-base flex flex-col sm:flex-row gap-x-3 gap-y-1">
                  <span className="whitespace-nowrap">📞 +91 98327 27520</span>
                  <span className="whitespace-nowrap hidden sm:inline text-white/20">|</span>
                  <span className="whitespace-nowrap text-[#25D366]">💬 +91 80018 91036</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-[#12121D] border border-white/5 flex items-center justify-center text-indigo-400 shrink-0 group-hover:border-indigo-500/30 transition-all duration-300">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-indigo-400/60 mb-1">RESPONSE TIME</p>
                <p className="font-medium text-white text-sm md:text-base">Within 24 hours</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-[#12121D] border border-white/5 flex items-center justify-center text-indigo-400 shrink-0 group-hover:border-indigo-500/30 transition-all duration-300">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-indigo-400/60 mb-1">OFFICE</p>
                <p className="font-medium text-white text-sm md:text-base">Durgapur, WB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-[#12121D] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
             {/* Glow */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
             
             {!isSubmitted ? (
               <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="group">
                     <label className="block text-[10px] font-mono uppercase tracking-widest mb-2 text-white/40 group-focus-within:text-indigo-400 transition-colors">YOUR NAME *</label>
                     <input 
                       required
                       type="text"
                       className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-indigo-500 transition-colors text-sm font-medium text-white placeholder:text-white/20"
                       placeholder="Rahul Sharma"
                       value={formData.name}
                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                     />
                   </div>
                   <div className="group">
                     <label className="block text-[10px] font-mono uppercase tracking-widest mb-2 text-white/40 group-focus-within:text-indigo-400 transition-colors">PHONE / WHATSAPP *</label>
                     <input 
                       required
                       type="tel"
                       className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-indigo-500 transition-colors text-sm font-medium text-white placeholder:text-white/20"
                       placeholder="+91 98327 27520"
                       value={formData.phone}
                       onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                     />
                   </div>
                 </div>

                 <div className="group">
                   <label className="block text-[10px] font-mono uppercase tracking-widest mb-2 text-white/40 group-focus-within:text-indigo-400 transition-colors">EMAIL ADDRESS *</label>
                   <input 
                     required
                     type="email"
                     className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-indigo-500 transition-colors text-sm font-medium text-white placeholder:text-white/20"
                     placeholder="rahul@yourbusiness.com"
                     value={formData.email}
                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                   />
                 </div>

                 <div className="group">
                   <label className="block text-[10px] font-mono uppercase tracking-widest mb-2 text-white/40 group-focus-within:text-indigo-400 transition-colors">SERVICE NEEDED *</label>
                   <select 
                     required
                     className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-indigo-500 transition-colors text-sm font-medium text-white appearance-none cursor-pointer"
                     value={formData.service}
                     onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                   >
                     <option value="" disabled>Select a service</option>
                     <option value="Landing Page">Landing Page</option>
                     <option value="Corporate Website">Corporate Website</option>
                     <option value="E-Commerce">E-Commerce</option>
                     <option value="Web Application">Web Application</option>
                     <option value="UI/UX Design">UI/UX Design</option>
                     <option value="Other">Other</option>
                   </select>
                 </div>

                 <div className="group">
                   <label className="block text-[10px] font-mono uppercase tracking-widest mb-2 text-white/40 group-focus-within:text-indigo-400 transition-colors">BUDGET RANGE *</label>
                   <select 
                     required
                     className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-indigo-500 transition-colors text-sm font-medium text-white appearance-none cursor-pointer"
                     value={formData.budget}
                     onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                   >
                     <option value="" disabled>Select your budget</option>
                     <option value="&lt;$1K">Less than ₹50k</option>
                     <option value="$1K-$5K">₹50k - ₹2L</option>
                     <option value="$5K-$10K">₹2L - ₹5L</option>
                     <option value="$10K+">More than ₹5L</option>
                   </select>
                 </div>

                 <div className="group">
                   <label className="block text-[10px] font-mono uppercase tracking-widest mb-2 text-white/40 group-focus-within:text-indigo-400 transition-colors">TELL US ABOUT YOUR PROJECT</label>
                   <textarea 
                     maxLength={500}
                     rows={4}
                     placeholder="Describe your business, what you need, and any ideas or goals you have for your website..."
                     className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-indigo-500 transition-colors text-sm font-medium text-white placeholder:text-white/20 resize-none"
                     value={formData.description}
                     onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                   />
                 </div>

                 <motion.button 
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   disabled={isLoading}
                   type="submit"
                   className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-4 mt-6 rounded-xl text-sm font-bold shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all flex items-center justify-center gap-2 group"
                 >
                   <span>{isLoading ? 'PROCESSING...' : 'Send My Request'}</span>
                   {!isLoading && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                 </motion.button>
               </form>
             ) : (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="flex flex-col items-center justify-center py-20 text-center relative z-10"
               >
                 <motion.div 
                   initial={{ scale: 0 }}
                   animate={{ scale: 1 }}
                   transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.1 }}
                   className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 relative"
                 >
                   <motion.div 
                     initial={{ scale: 0 }}
                     animate={{ scale: 1 }}
                     transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                     className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white"
                   >
                     <motion.svg 
                       width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                     >
                       <motion.polyline 
                         initial={{ pathLength: 0 }}
                         animate={{ pathLength: 1 }}
                         transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                         points="20 6 9 17 4 12" 
                       />
                     </motion.svg>
                   </motion.div>
                 </motion.div>
                 <motion.h3 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3 }}
                   className="text-2xl font-black text-white mb-4 uppercase tracking-tight"
                 >
                   Request Received!
                 </motion.h3>
                 <motion.p 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.4 }}
                   className="text-white/60 mb-8 max-w-sm"
                 >
                   Thank you for reaching out. Our team will review your project details and get back to you within 24 hours.
                 </motion.p>
                 <motion.button 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.5 }}
                   onClick={() => {
                     setIsSubmitted(false);
                     setFormData({ name: '', phone: '', email: '', service: '', budget: '', description: '' });
                   }}
                   className="text-sm font-medium text-indigo-400 hover:text-indigo-300 uppercase tracking-widest border-b border-indigo-400/30 pb-1 transition-colors"
                 >
                   Send another request
                 </motion.button>
               </motion.div>
             )}
        </div>
        </div>
      </motion.div>
    </section>
  );
}
