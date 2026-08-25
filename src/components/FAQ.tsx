import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, MessageCircle, MapPin, Mail, Phone, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const faqData = [
  {
    question: "How long does it take to build my website?",
    answer: "Typically, a standard website takes 2-4 weeks from start to finish. More complex projects like e-commerce or custom web applications may take 6-12 weeks depending on the features required."
  },
  {
    question: "Do I need to know coding or tech to work with you?",
    answer: "Not at all! We handle all the technical heavy lifting. We also build our websites on user-friendly platforms and provide training so you can easily manage your content post-launch."
  },
  {
    question: "Will my website show up on Google?",
    answer: "Absolutely. We build all our websites with SEO best practices in mind, including optimized structure, proper tags, and fast loading speeds to give you the best chance of ranking high."
  },
  {
    question: "Can I update my website after it's launched?",
    answer: "Yes! We set you up with an easy-to-use content management system (CMS) so you can update text, images, and add new pages without needing us. We also offer maintenance packages if you'd prefer we handle it."
  },
  {
    question: "What if I'm not happy with the design?",
    answer: "Your satisfaction is our priority. We have revision rounds built into our process, and we won't move forward with development until you're completely thrilled with the design mockups."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we typically structure payments in milestones: a deposit to begin, a midway payment, and the final balance upon launch. We can also discuss custom payment plans to suit your budget."
  }
];

export default function FAQ({ isPage }: { isPage?: boolean }) {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`px-4 md:px-6 bg-[#0B0A10] text-white ${isPage ? 'pt-24 md:pt-28 pb-24 md:pb-32' : 'py-24 md:py-32'}`}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className={isPage ? "max-w-7xl mx-auto" : "max-w-4xl mx-auto"}
      >
        {isPage ? (
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
              <span className="text-white/40">FAQ</span>
            </motion.div>
            <div className="relative z-10">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-center justify-center gap-4 text-[#00e5ff] text-sm font-bold tracking-[0.2em] uppercase mb-6"
              >
                <div className="w-8 h-[1px] bg-[#00e5ff]"></div>
                <span>FAQ</span>
                <div className="w-8 h-[1px] bg-[#00e5ff]"></div>
              </motion.div>
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-[3.5rem] md:text-[6rem] lg:text-[7rem] font-black uppercase tracking-tighter text-white leading-[0.9]"
              >
                Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-blue-500">Questions</span>
              </motion.h2>
            </div>
          </motion.div>
        ) : (
          <div className="text-center mb-16">
            <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-indigo-500 mb-4 block">FAQ</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>
        )}

        <div className={isPage ? "grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12" : ""}>
          <div className={`space-y-4 ${isPage ? "lg:col-span-2" : ""}`}>
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={index} 
                  className={`border ${isPage ? 'border-white/5' : 'border-indigo-500/10'} bg-[#12121D]/80 hover:bg-[#1A1A24] transition-colors rounded-3xl overflow-hidden`}
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full text-left px-6 py-6 md:px-8 md:py-8 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-base md:text-lg font-medium text-white/90">{faq.question}</span>
                    <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${isOpen ? 'border-[#00e5ff]/30 bg-[#00e5ff]/10 text-[#00e5ff]' : 'border-white/10 bg-white/5 text-white/60 hover:text-white group-hover:border-[#00e5ff]/20 group-hover:text-[#00e5ff]'}`}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 md:px-8 md:pb-8 text-white/60 text-sm md:text-base leading-relaxed border-t border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {isPage && (
            <div className="space-y-6">
              {/* Still have questions? card */}
              <div className="border border-[#00e5ff]/10 bg-[#12121D] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00e5ff]/10 blur-[50px] pointer-events-none rounded-full"></div>
                
                <h3 className="text-xl font-bold flex items-center gap-3 mb-4 text-white relative z-10">
                  <MessageCircle className="text-white/80" size={20} />
                  Still have questions?
                </h3>
                <p className="text-white/60 mb-8 text-sm leading-relaxed relative z-10">
                  Don't see your question answered here? Reach out and we'll get back to you within 24 hours.
                </p>
                <a 
                  href="mailto:official@hintonevolution.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[140px] inline-flex items-center justify-center gap-2 bg-[#00e5ff] text-black px-6 py-2.5 rounded-lg font-semibold hover:bg-[#00e5ff]/90 hover:scale-105 active:scale-95 transition-all text-sm relative z-10"
                >
                  <Mail size={16} />
                  Email Us
                </a>
                
                <div className="flex items-center gap-4 my-6 relative z-10">
                  <div className="h-[1px] flex-1 bg-white/10"></div>
                  <span className="text-white/40 text-sm font-mono">– or –</span>
                  <div className="h-[1px] flex-1 bg-white/10"></div>
                </div>

                <a 
                  href="https://wa.me/918001891036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 bg-transparent hover:bg-white/5 text-white px-6 py-3 rounded-xl font-medium transition-all text-sm relative z-10"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Based In card */}
              <div className="border border-white/5 bg-[#12121D] rounded-3xl p-8">
                <h3 className="text-lg font-bold flex items-center gap-3 mb-4 text-[#00e5ff]">
                  <MapPin className="text-[#ff4e83]" size={20} />
                  Based In
                </h3>
                <p className="text-white/80 mb-6 font-normal text-sm">
                  Durgapur, West Bengal, India IN
                </p>
                
                <div className="space-y-4 border-t border-white/5 pt-6">
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-white/40" />
                    <span className="text-white/60 text-sm">Mon–Sat: 9:00 AM – 8:00 PM IST</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-[#ff4e83]" />
                    <span className="text-white/60 text-sm">Response: Within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
