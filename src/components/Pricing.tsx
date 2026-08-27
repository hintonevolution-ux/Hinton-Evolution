import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Calendar, CreditCard, Sparkles, Calculator, X, ShieldCheck, ArrowRight, Percent } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';

export default function Pricing({ isPage }: { isPage?: boolean }) {
  const navigate = useNavigate();
  const [paymentMode, setPaymentMode] = useState<'full' | 'emi'>('full');
  const [activeEmiModal, setActiveEmiModal] = useState<any | null>(null);

  const plans = [
    {
      id: 'starter',
      name: 'Starter Website',
      badge: 'Small Business, Professionals',
      price: '₹24,999',
      numericPrice: 24999,
      emi: {
        advance: '₹9,999',
        advanceNum: 9999,
        monthly: '₹2,500',
        monthlyNum: 2500,
        months: 6,
        total: '₹24,999'
      },
      description: 'Ideal for establishing a professional online presence with essential features.',
      theme: 'cyan-basic',
      features: [
        'Up to 8 Pages',
        'Mobile Responsive Design',
        'Contact Form & WhatsApp Integration',
        'Basic SEO Setup & SSL Installation',
        'Google Maps & Social Integration',
        'Speed Optimization',
        '1 Month Support'
      ],
      btnText: 'Get Started'
    },
    {
      id: 'business',
      name: 'Business Website',
      badge: 'Growing Companies',
      price: '₹44,999',
      numericPrice: 44999,
      emi: {
        advance: '₹17,999',
        advanceNum: 17999,
        monthly: '₹4,500',
        monthlyNum: 4500,
        months: 6,
        total: '₹44,999'
      },
      description: 'Advanced features and dynamic content management for businesses ready to scale.',
      theme: 'cyan-highlight',
      isPopular: true,
      features: [
        'Everything in Starter plus:',
        'Up to 20 Pages & Advanced UI/UX',
        'Blog & Dynamic CMS',
        'Google Analytics & Search Console',
        'Lead Forms & Security Setup',
        'Advanced Speed Optimization',
        '3 Months Support'
      ],
      btnText: 'Get Started'
    },
    {
      id: 'premium',
      name: 'Premium Corporate',
      badge: 'Large Businesses & Brands',
      price: '₹89,999',
      numericPrice: 89999,
      emi: {
        advance: '₹35,999',
        advanceNum: 35999,
        monthly: '₹9,000',
        monthlyNum: 9000,
        months: 6,
        total: '₹89,999'
      },
      description: 'A complete digital growth solution with custom design and corporate portals.',
      theme: 'gold',
      features: [
        'Everything in Business plus:',
        'Unlimited Pages & Custom Design',
        'Distributor/Dealer Portal',
        'Multi-language (Optional)',
        'HR/Career Portal & Corporate Forms',
        'Advanced SEO & Premium Security',
        '6 Months Support'
      ],
      btnText: 'Get Premium'
    }
  ];

  const getPlanTheme = (theme: string) => {
    switch(theme) {
      case 'cyan-highlight': 
        return { 
          card: 'border-[#00e5ff]/50 bg-[#0a0a0f] shadow-[0_0_25px_rgba(0,229,255,0.15)] transform md:-translate-y-2', 
          text: 'text-[#00e5ff]', 
          badge: 'text-[#00e5ff]',
          btn: 'bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-black', 
          check: 'text-[#00e5ff]',
          accentBg: 'bg-[#00e5ff]/10',
          borderAccent: 'border-[#00e5ff]/30'
        };
      case 'gold': 
        return { 
          card: 'border-[#ffc107]/50 bg-[#0a0a0f] shadow-[0_0_25px_rgba(255,193,7,0.15)]', 
          text: 'text-[#ffc107]', 
          badge: 'text-[#ffc107]',
          btn: 'bg-[#ffc107] hover:bg-[#ffc107]/90 text-black', 
          check: 'text-[#ffc107]',
          accentBg: 'bg-[#ffc107]/10',
          borderAccent: 'border-[#ffc107]/30'
        };
      case 'cyan-basic':
      default: 
        return { 
          card: 'border-white/10 bg-[#0a0a0f] hover:border-white/20', 
          text: 'text-[#00e5ff]', 
          badge: 'text-[#00e5ff]',
          btn: 'bg-transparent hover:bg-white/5 text-white border border-white/10 hover:border-white/20', 
          check: 'text-[#00e5ff]',
          accentBg: 'bg-white/5',
          borderAccent: 'border-white/10'
        };
    }
  };

  return (
    <section id="pricing" className={`px-4 md:px-6 bg-[#0B0B14] text-white ${isPage ? 'pt-24 md:pt-28 pb-20 md:pb-32' : 'py-20 md:py-32'}`}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
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
              <span className="text-white/40">Pricing</span>
            </motion.div>

            <div className="flex flex-col items-center text-center mt-4 px-4 relative z-10">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-center justify-center gap-4 text-[#00e5ff] text-[10px] sm:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 sm:mb-6"
              >
                <div className="w-8 h-[1px] bg-[#00e5ff]"></div>
                PRICING PLANS
              </motion.div>
              
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] font-black tracking-widest text-white mb-6 leading-[1.1] w-full"
                style={{ fontFamily: 'Arial Black, Impact, sans-serif' }}
              >
                Website Development <span className="text-[#00e5ff]">Packages</span>
              </motion.h2>

              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-white/60 max-w-2xl text-sm sm:text-base md:text-lg font-light mx-auto"
              >
                Transparent pricing with flexible payment terms. Choose between standard one-time payment or 6-month easy EMI with 40% advance!
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <div className="flex flex-col items-center text-center mb-12 px-4">
            <div className="flex items-center justify-center gap-4 text-[#00e5ff] text-[10px] sm:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 sm:mb-6">
              <div className="w-8 h-[1px] bg-[#00e5ff]"></div>
              PRICING PLANS
            </div>
            
            <h2 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] font-black tracking-widest text-white mb-6 leading-[1.1] w-full" style={{ fontFamily: 'Arial Black, Impact, sans-serif' }}>
              Website Development <span className="text-[#00e5ff]">Packages</span>
            </h2>
            
            <p className="text-white/60 max-w-2xl text-sm sm:text-base md:text-lg font-light">
              Transparent pricing with flexible payment terms. Choose between standard one-time payment or 6-month easy EMI with 40% advance!
            </p>
          </div>
        )}

        {/* Animated EMI & Payment Mode Toggle */}
        <div className="flex flex-col items-center justify-center mb-12 relative z-20">
          <div className="p-1.5 bg-[#12121d] border border-white/10 rounded-full flex items-center relative shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <button
              onClick={() => {
                setPaymentMode('full');
                trackEvent('select_payment_mode', { mode: 'one_time' });
              }}
              className={`relative px-5 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-black transition-colors duration-200 flex items-center gap-2 z-10 ${
                paymentMode === 'full' ? 'text-black' : 'text-white/70 hover:text-white'
              }`}
            >
              {paymentMode === 'full' && (
                <motion.div
                  layoutId="activePaymentTab"
                  className="absolute inset-0 bg-[#00e5ff] rounded-full z-[-1] shadow-[0_0_20px_rgba(0,229,255,0.5)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <CreditCard size={15} />
              <span>One-Time Payment</span>
            </button>

            <button
              onClick={() => {
                setPaymentMode('emi');
                trackEvent('select_payment_mode', { mode: '6_month_emi' });
              }}
              className={`relative px-5 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-black transition-colors duration-200 flex items-center gap-2.5 z-10 ${
                paymentMode === 'emi' ? 'text-black' : 'text-white/70 hover:text-white'
              }`}
            >
              {paymentMode === 'emi' && (
                <motion.div
                  layoutId="activePaymentTab"
                  className="absolute inset-0 bg-[#00e5ff] rounded-full z-[-1] shadow-[0_0_20px_rgba(0,229,255,0.5)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Sparkles size={15} className={paymentMode === 'emi' ? 'text-black' : 'text-[#00e5ff]'} />
              <span>6-Month Easy EMI</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider ${
                paymentMode === 'emi' ? 'bg-black/20 text-black' : 'bg-[#00e5ff]/20 text-[#00e5ff]'
              }`}>
                40% Advance
              </span>
            </button>
          </div>

          <motion.div 
            key={paymentMode}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs sm:text-sm text-white/60 mt-3.5 font-mono text-center flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10"
          >
            {paymentMode === 'emi' ? (
              <>
                <span className="text-[#00e5ff] font-bold">✨ Easy Installment Plan:</span>
                <span>40% Advance to start + 6 Monthly EMIs (0% Interest)</span>
              </>
            ) : (
              <>
                <span className="text-[#00e5ff] font-bold">⚡ One-Time Payment:</span>
                <span>Single invoice payment upon project agreement</span>
              </>
            )}
          </motion.div>
        </div>

        {/* Pricing Cards Grid */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-16"
        >
          {plans.map((plan, i) => {
            const themeColors = getPlanTheme(plan.theme || '');
            
            return (
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              key={i} 
              className={`flex flex-col p-8 rounded-2xl border ${themeColors.card} relative transition-all duration-300 group`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-[#00e5ff] text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(0,229,255,0.5)] z-10 flex items-center gap-1 whitespace-nowrap">
                  <span className="text-sm leading-none">⭐</span> MOST POPULAR
                </div>
              )}
              
              <div className="flex flex-col mb-4 mt-2">
                 <span className={`text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] mb-2 ${themeColors.badge}`}>
                   {plan.badge}
                 </span>
                 <h3 className="text-xl sm:text-2xl font-black tracking-wide text-white">{plan.name}</h3>
              </div>
              
              {/* Dynamic Animated Price Display */}
              <div className="mb-6 pb-6 border-b border-white/10 min-h-[110px] flex flex-col justify-end">
                <AnimatePresence mode="wait">
                  {paymentMode === 'emi' ? (
                    <motion.div
                      key="emi"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="flex items-baseline gap-1.5 flex-wrap">
                        <span className={`text-3xl sm:text-4xl font-black leading-none ${themeColors.text}`}>
                          {plan.emi.monthly}
                        </span>
                        <span className="text-xs font-bold text-white/60 uppercase font-mono">/ mo × 6 months</span>
                      </div>
                      
                      <div className="mt-3 p-2.5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1">
                        <div className="flex items-center justify-between text-xs font-medium">
                          <span className="text-white/70">40% Advance:</span>
                          <span className="font-bold text-white font-mono">{plan.emi.advance}</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-white/50 pt-1 border-t border-white/5">
                          <span>Total Contract Price:</span>
                          <span className="font-mono text-white/80">{plan.price}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveEmiModal(plan)}
                        className="mt-2 text-[11px] text-[#00e5ff] hover:underline font-mono flex items-center gap-1"
                      >
                        <Calculator size={12} />
                        View 6-Month Payment Schedule →
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="full"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className={`text-4xl sm:text-[2.5rem] font-black leading-none ${themeColors.text}`}>
                        {plan.price}
                      </div>
                      <p className="text-xs text-white/50 font-mono mt-2">
                        One-Time Full Payment • No Recurring Fees
                      </p>
                      <p className="text-[11px] text-[#00e5ff]/80 font-mono mt-1">
                        Looking for installments? Switch to 6-Month EMI above!
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <p className="text-sm text-white/60 mb-6 font-light leading-relaxed">
                {plan.description}
              </p>
              
              <div className="flex-grow space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check size={18} className={`${themeColors.check} shrink-0 mt-0.5`} />
                    <span className="text-sm text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => {
                  trackEvent('begin_checkout', {
                    currency: 'INR',
                    value: paymentMode === 'emi' ? plan.emi.advanceNum : plan.numericPrice,
                    payment_mode: paymentMode,
                    items: [{ item_name: plan.name, price: plan.price }]
                  });
                  navigate('/contact', { state: { plan: plan.name, mode: paymentMode } });
                }} 
                className={`w-full py-4 rounded-xl font-bold transition-all mt-auto flex items-center justify-center gap-2 ${themeColors.btn}`}
              >
                {paymentMode === 'emi' ? `Start with ${plan.emi.advance} Advance →` : `${plan.btnText} →`}
              </button>
            </motion.div>
            )})}
        </motion.div>
        
        {/* EMI Advantage Banner */}
        <div className="bg-gradient-to-r from-[#12121D] via-[#161626] to-[#12121D] border border-white/10 rounded-2xl p-6 md:p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff] shrink-0">
                <Percent size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">0% Interest EMI</h4>
                <p className="text-xs text-white/60">No additional interest or financial surcharge added.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff] shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">40% Advance Start</h4>
                <p className="text-xs text-white/60">Pay 40% to initiate design & development immediately.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff] shrink-0">
                <Calendar size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Flexible 6 Months</h4>
                <p className="text-xs text-white/60">6 equal monthly installments with milestone tracking.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Free Call Box */}
        <div className="bg-[#12121D] border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 justify-between items-center relative overflow-hidden text-center md:text-left justify-center md:justify-center w-full max-w-5xl mx-auto">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#00e5ff]/5 blur-[80px] rounded-full pointer-events-none"></div>
           
           <div className="z-10 w-full flex flex-col items-center text-center">
              <p className="text-sm text-white/60 mb-2 flex items-center gap-2 justify-center"><span className="text-xl leading-none">💡</span> Not sure which plan is right for you?</p>
              <h3 className="text-lg md:text-2xl font-bold mb-6 text-white leading-tight">
                Book a <span className="text-[#00e5ff]">free 30-minute consultation</span> and we'll recommend the perfect package.
              </h3>
              
              <button onClick={() => {
                trackEvent('generate_lead', { event_category: 'Consultation', event_label: 'Free Call' });
                navigate('/contact');
              }} className="inline-flex items-center justify-center gap-2 bg-[#00e5ff] text-black px-8 py-3.5 rounded-lg font-bold hover:bg-[#00e5ff]/90 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto">
                 <span>🗓️</span> Book Free Call →
              </button>
           </div>
        </div>
      </motion.div>

      {/* Interactive EMI Schedule Modal */}
      <AnimatePresence>
        {activeEmiModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#12121d] border border-white/20 rounded-2xl max-w-lg w-full p-6 md:p-8 relative shadow-[0_0_50px_rgba(0,229,255,0.2)] text-white overflow-hidden"
            >
              <button
                onClick={() => setActiveEmiModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 text-[#00e5ff] text-xs font-mono font-bold uppercase tracking-widest mb-2">
                <Calculator size={16} />
                6-Month EMI Breakdown
              </div>

              <h3 className="text-2xl font-black mb-1 text-white">{activeEmiModal.name}</h3>
              <p className="text-xs text-white/60 mb-6 font-mono">Total Contract Price: <strong className="text-[#00e5ff]">{activeEmiModal.price}</strong></p>

              <div className="space-y-3 mb-6 max-h-[280px] overflow-y-auto pr-1">
                {/* 40% Advance step */}
                <div className="p-3.5 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#00e5ff] font-bold block">Milestone 1 • Project Kickoff</span>
                    <span className="text-sm font-bold text-white">40% Advance Payment</span>
                  </div>
                  <span className="text-base font-mono font-black text-[#00e5ff]">{activeEmiModal.emi.advance}</span>
                </div>

                {/* 6 Monthly Installments */}
                {[1, 2, 3, 4, 5, 6].map((month) => (
                  <div key={month} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-white/50 font-mono block">Month {month} Installment</span>
                      <span className="font-medium text-white/80">Monthly EMI #{month}</span>
                    </div>
                    <span className="font-mono font-bold text-white">{activeEmiModal.emi.monthly}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 mb-6 text-xs text-white/60 flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#00e5ff] shrink-0" />
                <span>Zero Interest (0% APR). Transparent milestone invoice delivered prior to each monthly EMI.</span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    const selectedModal = activeEmiModal;
                    setActiveEmiModal(null);
                    setPaymentMode('emi');
                    navigate('/contact', { state: { plan: selectedModal.name, mode: 'emi' } });
                  }}
                  className="flex-1 py-3.5 rounded-xl bg-[#00e5ff] text-black font-bold hover:bg-[#00e5ff]/90 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  Proceed with EMI ({activeEmiModal.emi.advance}) <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
