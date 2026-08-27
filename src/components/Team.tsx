import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function Team({ isPage }: { isPage?: boolean }) {
  const navigate = useNavigate();
  const team = [
    { initials: 'TB', name: 'Tamajit Banerjee', role: 'Founder', bio: 'Visionary leader with a passion for web technologies and design, creating enterprise solutions for businesses worldwide.' },
    { initials: 'DK', name: 'Debashis Khan', role: 'Lead Developer', bio: 'Expert frontend/backend engineer crafting robust, high-performance web applications using modern tech stacks.' }
  ];

  return (
    <section id="team" className={`px-4 md:px-6 bg-[#0B0A10] text-white ${isPage ? 'pt-24 md:pt-28 pb-20 md:pb-32' : 'py-20 md:py-32'}`}>
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
            className="flex flex-col items-center justify-center text-center gap-6 mb-20 relative"
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
              <span className="text-white/40">About</span>
            </motion.div>
            <div className="relative z-10">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-center justify-center gap-4 text-[#00e5ff] text-sm font-bold tracking-[0.2em] uppercase mb-6"
              >
                <div className="w-8 h-[1px] bg-[#00e5ff]"></div>
                <span>WHO WE ARE</span>
                <div className="w-8 h-[1px] bg-[#00e5ff]"></div>
              </motion.div>
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-[3rem] md:text-[5rem] lg:text-[6rem] font-black uppercase tracking-tighter text-white leading-[1.1] mb-8"
              >
                The Team Behind Your <span className="text-[#00e5ff]">Digital Growth</span>
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto"
              >
                Founded in Durgapur with a mission to make premium web presence accessible to every business.
              </motion.p>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {!isPage && <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold text-[#00e5ff] mb-6 block">Who We Are</span>}
            <h2 className="uppercase tracking-tighter mb-8 leading-[1.05]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              <span className="font-black block text-white">The Team</span>
              <span className="font-black block text-white">Behind Your</span>
              <span className="font-black text-[#00e5ff] block">Digital Growth</span>
            </h2>
          <p className="text-white/80 mb-6 leading-relaxed text-lg">
            Hinton Evolution Tech is a results-driven web design and digital maintenance agency based in Durgapur, West Bengal. We were founded with a single mission: <strong className="text-white">to make premium web presence accessible to every business</strong> — from local startups to growing enterprises.
          </p>
          <p className="text-white/60 mb-6 leading-relaxed">
            We don't just build websites. We craft <span className="text-[#00e5ff] font-bold">digital experiences</span> that convert visitors into customers, reflect your brand identity, and grow with your business over time.
          </p>
          <p className="text-white/60 mb-6 leading-relaxed">
            With a passion for clean code, thoughtful design, and measurable results, our team stays ahead of every trend — so your business stays ahead of the competition.
          </p>
          </motion.div>

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
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 md:mt-0 lg:mt-24"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="bg-[#12111A] border border-white/5 rounded-2xl p-6 hover:border-[#00e5ff]/20 transition-all group">
            <div className="mb-4 text-3xl">🎯</div>
            <h4 className="font-bold text-white text-lg mb-2 group-hover:text-[#00e5ff] transition-colors">Mission</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Empower businesses with world-class digital tools
            </p>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="bg-[#12111A] border border-white/5 rounded-2xl p-6 hover:border-[#00e5ff]/20 transition-all group">
            <div className="mb-4 text-3xl">🔭</div>
            <h4 className="font-bold text-white text-lg mb-2 group-hover:text-[#00e5ff] transition-colors">Vision</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Be India's most trusted web agency for growing brands
            </p>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="bg-[#12111A] border border-white/5 rounded-2xl p-6 hover:border-[#00e5ff]/20 transition-all group">
            <div className="mb-4 text-3xl">💡</div>
            <h4 className="font-bold text-white text-lg mb-2 group-hover:text-[#00e5ff] transition-colors">Innovation</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Always evolving with the latest tech and design trends
            </p>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="bg-[#12111A] border border-white/5 rounded-2xl p-6 hover:border-[#00e5ff]/20 transition-all group">
            <div className="mb-4 text-3xl">🤝</div>
            <h4 className="font-bold text-white text-lg mb-2 group-hover:text-[#00e5ff] transition-colors">Integrity</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Transparent pricing, honest timelines, real results
            </p>
          </motion.div>
        </motion.div>
        </div>

        {isPage && (
          <>
            {/* Core Team Section */}
            <div className="mt-32 max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold text-[#00e5ff] mb-4 block">THE LEADERSHIP</span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">Meet the <span className="text-[#00e5ff]">Core Team</span></h2>
                <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
                  The people who make the magic happen.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {team.map((member, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="bg-[#12111A] border border-white/5 rounded-2xl p-8 hover:border-[#00e5ff]/30 transition-all group flex flex-col items-center text-center relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00e5ff]/5 rounded-bl-[100px] pointer-events-none group-hover:bg-[#00e5ff]/10 transition-colors"></div>
                    <div className="w-24 h-24 rounded-full bg-[#1a1825] border-2 border-[#00e5ff]/30 flex items-center justify-center text-3xl font-black text-white/80 mb-6 group-hover:scale-110 group-hover:border-[#00e5ff] transition-all shadow-[0_0_15px_rgba(0,229,255,0.1)] group-hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]">
                      {member.initials}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-[#00e5ff] font-medium tracking-wide uppercase text-sm mb-4">{member.role}</p>
                    <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">{member.bio}</p>
                    <div className="w-12 h-1 bg-white/10 rounded-full mt-auto group-hover:bg-[#00e5ff]/50 transition-colors"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* How We Work */}
            <div className="mt-32 max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold text-[#00e5ff] mb-4 block">OUR PROCESS</span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Work</span></h2>
                <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
                  A streamlined 5-step process designed to deliver your project on time, every time.
                </p>
              </div>
              
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
                className="relative"
              >
                <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00e5ff]/50 to-transparent"></div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  {/* Step 1 */}
                  <motion.div variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }} className="relative text-center">
                    <div className="w-24 h-24 mx-auto bg-[#12111A] border-2 border-[#00e5ff]/30 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-[0_0_15px_rgba(0,229,255,0.1)]">
                      <span className="text-2xl font-black text-[#00e5ff]">01</span>
                    </div>
                    <h4 className="text-white font-bold mb-3">Discovery Call</h4>
                    <p className="text-white/60 text-sm">We understand your goals, target audience, and vision through a free consultation.</p>
                  </motion.div>
                  {/* Step 2 */}
                  <motion.div variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }} className="relative text-center">
                    <div className="w-24 h-24 mx-auto bg-[#12111A] border-2 border-[#00e5ff]/30 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-[0_0_15px_rgba(0,229,255,0.1)]">
                      <span className="text-2xl font-black text-[#00e5ff]">02</span>
                    </div>
                    <h4 className="text-white font-bold mb-3">Planning & Proposal</h4>
                    <p className="text-white/60 text-sm">We create a detailed roadmap with timeline, pricing, and deliverables. You approve, we start.</p>
                  </motion.div>
                  {/* Step 3 */}
                  <motion.div variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }} className="relative text-center">
                    <div className="w-24 h-24 mx-auto bg-[#12111A] border-2 border-[#00e5ff]/30 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-[0_0_15px_rgba(0,229,255,0.1)]">
                      <span className="text-2xl font-black text-[#00e5ff]">03</span>
                    </div>
                    <h4 className="text-white font-bold mb-3">Design & Build</h4>
                    <p className="text-white/60 text-sm">Our team crafts your website with meticulous attention to design and functionality.</p>
                  </motion.div>
                  {/* Step 4 */}
                  <motion.div variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }} className="relative text-center">
                    <div className="w-24 h-24 mx-auto bg-[#12111A] border-2 border-[#00e5ff]/30 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-[0_0_15px_rgba(0,229,255,0.1)]">
                      <span className="text-2xl font-black text-[#00e5ff]">04</span>
                    </div>
                    <h4 className="text-white font-bold mb-3">Review & Revise</h4>
                    <p className="text-white/60 text-sm">You review the work, we incorporate feedback through defined revision rounds.</p>
                  </motion.div>
                  {/* Step 5 */}
                  <motion.div variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }} className="relative text-center">
                    <div className="w-24 h-24 mx-auto bg-[#12111A] border-2 border-[#00e5ff]/30 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-[0_0_15px_rgba(0,229,255,0.1)]">
                      <span className="text-2xl font-black text-[#00e5ff]">05</span>
                    </div>
                    <h4 className="text-white font-bold mb-3">Launch & Support</h4>
                    <p className="text-white/60 text-sm">We go live! Then provide dedicated support to ensure everything runs perfectly.</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Why Choose Us */}
            <div className="mt-32 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold text-[#00e5ff] mb-6 block">WHY CHOOSE US</span>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-12 leading-[1.1]">
                  Why Clients<br/>Choose<br/><span className="text-[#00e5ff]">Hinton Evolution Tech</span>
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#12111A] border border-[#00e5ff]/30 flex items-center justify-center shrink-0">
                      <span className="text-[#00e5ff] font-bold text-sm">01</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Transparent & Honest</h4>
                      <p className="text-white/60 text-sm">No hidden fees, no jargon. Clear timelines, real deliverables, honest communication from day one.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#12111A] border border-[#00e5ff]/30 flex items-center justify-center shrink-0">
                      <span className="text-[#00e5ff] font-bold text-sm">02</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Local + Global Expertise</h4>
                      <p className="text-white/60 text-sm">Based in Durgapur, serving clients across India and internationally with world-class standards.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#12111A] border border-[#00e5ff]/30 flex items-center justify-center shrink-0">
                      <span className="text-[#00e5ff] font-bold text-sm">03</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Fast Turnaround</h4>
                      <p className="text-white/60 text-sm">We respect your timeline. Basic sites in 5-7 days, complex projects delivered on schedule.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#12111A] border border-[#00e5ff]/30 flex items-center justify-center shrink-0">
                      <span className="text-[#00e5ff] font-bold text-sm">04</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Post-Launch Support</h4>
                      <p className="text-white/60 text-sm">We don't disappear after delivery. Every plan includes dedicated support and maintenance options.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
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
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                {[
                  { icon: '⚡', label: 'Fast Delivery' },
                  { icon: '🔒', label: 'Secure Code' },
                  { icon: '📱', label: 'Mobile First' },
                  { icon: '🎯', label: 'Result Driven' },
                  { icon: '💬', label: '24hr Support' },
                  { icon: '🌍', label: 'Global Standards' },
                  { icon: '💡', label: 'Creative Team' },
                  { icon: '📈', label: 'Growth Focus' },
                  { icon: '🏆', label: 'Award Quality' }
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
                    className="bg-[#12111A] border border-white/5 rounded-2xl p-6 text-center hover:border-[#00e5ff]/20 transition-all"
                  >
                    <div className="text-2xl mb-3">{feature.icon}</div>
                    <div className="text-white/80 text-xs font-medium">{feature.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Technologies */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-32 max-w-7xl mx-auto text-center"
            >
              <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold text-[#00e5ff] mb-4 block">TECH STACK</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">Technologies We <span className="text-[#00e5ff]">Master</span></h2>
              <p className="text-white/60 text-lg font-light max-w-2xl mx-auto mb-16">
                We work with industry-leading tools and frameworks to deliver outstanding results.
              </p>
              <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
                <motion.div
                  className="flex gap-4 w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                >
                  {[
                    'HTML5 / CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 
                    'Tailwind CSS', 'PHP', 'WordPress', 'WooCommerce', 'Figma', 
                    'Node.js', 'Express', 'MySQL', 'MongoDB', 'Cloudflare', 
                    'AWS', 'Google Analytics', 'Search Console',
                    'HTML5 / CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 
                    'Tailwind CSS', 'PHP', 'WordPress', 'WooCommerce', 'Figma', 
                    'Node.js', 'Express', 'MySQL', 'MongoDB', 'Cloudflare', 
                    'AWS', 'Google Analytics', 'Search Console'
                  ].map((tech, i) => (
                    <div key={i} className="bg-[#12111A] border border-white/5 rounded-xl px-8 py-4 flex items-center gap-3 hover:border-[#00e5ff]/30 transition-colors shrink-0">
                      <span className="text-[#00e5ff] text-xl">•</span>
                      <span className="text-white font-medium">{tech}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </motion.div>
    </section>
  );
}
