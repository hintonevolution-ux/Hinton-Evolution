import { motion } from 'motion/react';

export default function Policy() {
  return (
    <section className="px-6 md:px-12 bg-[#0B0A10] text-white pt-32 pb-24 md:pb-32 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto flex flex-col gap-8"
      >
        <div className="flex flex-col items-start gap-4 mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/10 px-4 py-1.5 mix-blend-screen relative z-10">
            <span className="h-2 w-2 rounded-full bg-[#00e5ff]" />
            <span className="text-xs font-bold tracking-widest text-[#00e5ff] uppercase">Hinton Evolution Tech</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            Company Policy <span className="text-[#00e5ff]">&amp;</span> Professional Standards
          </h1>
          <div className="flex gap-4 items-center">
            <p className="text-sm font-light text-white/50 tracking-wide uppercase">Effective Date: May 9, 2026</p>
          </div>
          <p className="text-sm font-light text-white/50 tracking-wide uppercase">Industry: Web Design, Website Development, Website Maintenance &amp; Digital Services</p>
        </div>

        <div className="prose prose-invert prose-p:text-white/70 prose-a:text-[#00e5ff] prose-headings:text-white max-w-none">
          <h2 className="text-2xl font-bold mt-12 mb-4 text-[#00e5ff]">1. Introduction</h2>
          <p className="mb-4 text-white/70">
            Welcome to Hinton Evolution Tech.
          </p>
          <p className="mb-4 text-white/70">
            We are committed to delivering modern, secure, creative, and high-performing digital solutions for businesses, startups, organizations, and individuals. This policy establishes the professional standards, operational rules, ethical responsibilities, and service commitments followed by our company.
          </p>
          <p className="mb-4 font-semibold text-white">
            Our mission is simple:<br/>
            To build digital experiences that evolve businesses with innovation, trust, and technology.
          </p>
          <p className="mb-4 text-white/50 italic">
            Because apparently the internet still needs functional websites instead of blinking disaster pages from 2007.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-[#00e5ff]">2. Company Values</h2>
          <p className="mb-4 text-white/70">At Hinton Evolution Tech, we operate based on the following core values:</p>
          <ul className="list-none space-y-4 mb-8 text-white/70 border-l border-[#00e5ff]/20 pl-6">
            <li><strong className="text-white block mb-1">Innovation</strong> We continuously adapt to modern technologies and creative solutions.</li>
            <li><strong className="text-white block mb-1">Professionalism</strong> We maintain respectful communication, transparency, and accountability in all client interactions.</li>
            <li><strong className="text-white block mb-1">Reliability</strong> We deliver projects responsibly and provide dependable support services.</li>
            <li><strong className="text-white block mb-1">Security</strong> We prioritize website security, data protection, and safe digital practices.</li>
            <li><strong className="text-white block mb-1">Client Satisfaction</strong> Client success is considered a key measure of our success.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-[#00e5ff]">3. Services Covered Under This Policy</h2>
          <p className="mb-4 text-white/70">Hinton Evolution Tech provides services including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-white/70 marker:text-[#00e5ff]">
            <li>Website Design</li>
            <li>Website Development</li>
            <li>Website Redesign</li>
            <li>E-commerce Website Solutions</li>
            <li>Landing Page Creation</li>
            <li>Website Maintenance</li>
            <li>Website Security Monitoring</li>
            <li>Hosting &amp; Domain Assistance</li>
            <li>SEO Optimization</li>
            <li>UI/UX Improvements</li>
            <li>Technical Support &amp; Troubleshooting</li>
            <li>Digital Consultation</li>
          </ul>
          <p className="mb-4 text-white/70">Additional services may be introduced as the company evolves.</p>
          <p className="mb-4 text-white/50 italic">Human civilization keeps inventing new ways to break websites, so naturally the service list grows.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-[#00e5ff]">4. Client Engagement Policy</h2>
          
          <h3 className="text-xl font-bold mt-8 mb-3 text-white">4.1 Project Agreement</h3>
          <p className="mb-3 text-white/70">All projects must include:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4 text-white/70 marker:text-[#00e5ff]">
            <li>Scope of work</li>
            <li>Estimated delivery timeline</li>
            <li>Pricing and payment terms</li>
            <li>Revision limits</li>
            <li>Deliverables</li>
            <li>Support duration</li>
          </ul>
          <p className="mb-6 text-white/70 border-l border-[#00e5ff]/50 pl-4">Work will officially begin only after agreement approval and initial payment confirmation.</p>

          <h3 className="text-xl font-bold mt-8 mb-3 text-white">4.2 Communication</h3>
          <p className="mb-3 text-white/70">Clients are expected to maintain respectful and professional communication.</p>
          <p className="mb-3 text-white/70">Hinton Evolution Tech reserves the right to pause or terminate projects involving:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6 text-white/70 marker:text-[#00e5ff]">
            <li>Abuse or harassment</li>
            <li>Fraudulent activity</li>
            <li>Illegal content requests</li>
            <li>Repeated violation of agreed terms</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-3 text-white">4.3 Project Delays</h3>
          <p className="mb-3 text-white/70">Project timelines may be affected if clients fail to provide:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4 text-white/70 marker:text-[#00e5ff]">
            <li>Required content</li>
            <li>Images or branding assets</li>
            <li>Feedback or approvals</li>
            <li>Hosting or domain access</li>
          </ul>
          <p className="mb-6 text-white/70">The company will not be responsible for delays caused by missing client-side requirements.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-[#00e5ff]">5. Payment Policy</h2>
          
          <h3 className="text-xl font-bold mt-8 mb-3 text-white">5.1 Advance Payments</h3>
          <p className="mb-6 text-white/70">A minimum advance payment may be required before project initiation.</p>

          <h3 className="text-xl font-bold mt-8 mb-3 text-white">5.2 Outstanding Payments</h3>
          <p className="mb-6 text-white/70">Final files, deployment, or ownership transfer may be withheld until all dues are cleared.</p>

          <h3 className="text-xl font-bold mt-8 mb-3 text-white">5.3 Refund Policy</h3>
          <p className="mb-3 text-white/70">Refunds are subject to project progress and resource usage. Refunds will not be provided for:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4 text-white/70 marker:text-[#00e5ff]">
            <li>Completed work</li>
            <li>Approved designs</li>
            <li>Third-party service purchases</li>
            <li>Domain or hosting charges</li>
          </ul>
          <p className="mb-4 text-white/70">Partial refunds may be considered in exceptional cases.</p>
          <p className="mb-6 text-white/50 italic">Because developers still need food, electricity, and functioning nervous systems.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-[#00e5ff]">6. Website Maintenance Policy</h2>
          
          <h3 className="text-xl font-bold mt-8 mb-3 text-white">6.1 Maintenance Scope</h3>
          <p className="mb-3 text-white/70">Maintenance services may include:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6 text-white/70 marker:text-[#00e5ff]">
            <li>Plugin updates</li>
            <li>Security monitoring</li>
            <li>Backup management</li>
            <li>Bug fixes</li>
            <li>Performance optimization</li>
            <li>Content updates</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-3 text-white">6.2 Emergency Support</h3>
          <p className="mb-6 text-white/70">Emergency support availability depends on service agreements and support plans.</p>

          <h3 className="text-xl font-bold mt-8 mb-3 text-white">6.3 Third-Party Failures</h3>
          <p className="mb-3 text-white/70">Hinton Evolution Tech is not responsible for outages caused by:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4 text-white/70 marker:text-[#00e5ff]">
            <li>Hosting providers</li>
            <li>Domain registrars</li>
            <li>Third-party APIs</li>
            <li>External plugins or software</li>
          </ul>
          <p className="mb-6 text-white/50 italic">The internet is held together with deadlines, caffeine, and suspicious server rooms. Sometimes things explode.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-[#00e5ff]">7. Security &amp; Data Protection Policy</h2>
          <p className="mb-4 text-white/70">Hinton Evolution Tech takes reasonable measures to protect client information and website assets.</p>
          <p className="mb-3 text-white/70">Security Measures Include:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4 text-white/70 marker:text-[#00e5ff]">
            <li>Secure credential handling</li>
            <li>Regular backups</li>
            <li>Malware monitoring</li>
            <li>Access control practices</li>
            <li>Software update management</li>
          </ul>
          <p className="mb-4 text-white/70 font-semibold">However, no digital platform can guarantee 100% security against cyber threats.</p>
          <p className="mb-3 text-white/70">Clients are encouraged to:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6 text-white/70 marker:text-[#00e5ff]">
            <li>Use strong passwords</li>
            <li>Enable two-factor authentication</li>
            <li>Maintain secure hosting environments</li>
            <li>Avoid unauthorized software installations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-[#00e5ff]">8. Intellectual Property Policy</h2>
          
          <h3 className="text-xl font-bold mt-8 mb-3 text-white">8.1 Ownership</h3>
          <p className="mb-6 text-white/70">Clients will receive ownership of completed project deliverables after full payment completion.</p>

          <h3 className="text-xl font-bold mt-8 mb-3 text-white">8.2 Portfolio Rights</h3>
          <p className="mb-3 text-white/70">Hinton Evolution Tech reserves the right to display completed projects in:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4 text-white/70 marker:text-[#00e5ff]">
            <li>Company portfolio</li>
            <li>Marketing materials</li>
            <li>Social media showcases</li>
          </ul>
          <p className="mb-6 text-white/70">Unless otherwise agreed in writing.</p>

          <h3 className="text-xl font-bold mt-8 mb-3 text-white">8.3 Third-Party Materials</h3>
          <p className="mb-3 text-white/70">The company is not responsible for copyright issues involving materials supplied by clients. Clients must ensure they have legal rights to use:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6 text-white/70 marker:text-[#00e5ff]">
            <li>Images</li>
            <li>Videos</li>
            <li>Logos</li>
            <li>Text content</li>
            <li>Music or downloadable resources</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-[#00e5ff]">9. Acceptable Use Policy</h2>
          <p className="mb-3 text-white/70">Hinton Evolution Tech will not knowingly develop or support websites involving:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4 text-white/70 marker:text-[#00e5ff]">
            <li>Illegal activities</li>
            <li>Fraudulent schemes</li>
            <li>Hate speech</li>
            <li>Malware distribution</li>
            <li>Piracy or copyright violations</li>
            <li>Adult or exploitative illegal content</li>
            <li>Phishing or scam operations</li>
          </ul>
          <p className="mb-4 text-white/70 border-l border-[#00e5ff]/50 pl-4">The company reserves the right to refuse projects that conflict with ethical or legal standards.</p>
          <p className="mb-6 text-white/50 italic">Even machines have limits. Humanity keeps testing them anyway.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-[#00e5ff]">10. Confidentiality Policy</h2>
          <p className="mb-3 text-white/70">All sensitive business information shared by clients will be treated confidentially. Confidential data may include:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4 text-white/70 marker:text-[#00e5ff]">
            <li>Business documents</li>
            <li>Login credentials</li>
            <li>Customer information</li>
            <li>Financial details</li>
            <li>Proprietary business strategies</li>
          </ul>
          <p className="mb-6 text-white/70">Such information will not be intentionally disclosed to unauthorized parties except where legally required.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-[#00e5ff]">11. Employee &amp; Team Conduct Policy</h2>
          <p className="mb-3 text-white/70">All team members and collaborators representing Hinton Evolution Tech are expected to:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4 text-white/70 marker:text-[#00e5ff]">
            <li>Maintain professionalism</li>
            <li>Respect client confidentiality</li>
            <li>Follow ethical business practices</li>
            <li>Deliver quality work responsibly</li>
            <li>Avoid discrimination or harassment</li>
            <li>Protect company reputation</li>
          </ul>
          <p className="mb-6 text-white/70 border-l border-rose-500/50 pl-4">Failure to comply may result in disciplinary action or termination of collaboration.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-[#00e5ff]">12. Limitation of Liability</h2>
          <p className="mb-3 text-white/70">Hinton Evolution Tech shall not be held liable for:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4 text-white/70 marker:text-[#00e5ff]">
            <li>Business losses caused by downtime</li>
            <li>Third-party software failures</li>
            <li>Search engine ranking changes</li>
            <li>Cyberattacks beyond reasonable control</li>
            <li>Data loss caused by client negligence</li>
            <li>Revenue loss from external technical failures</li>
          </ul>
          <p className="mb-6 text-white/70 border-l border-[#00e5ff]/50 pl-4">Clients are encouraged to maintain independent backups and operational safeguards.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-[#00e5ff]">13. Policy Updates</h2>
          <p className="mb-3 text-white/70">Hinton Evolution Tech reserves the right to modify or update this policy at any time. Updated versions may be shared through:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4 text-white/70 marker:text-[#00e5ff]">
            <li>Official website</li>
            <li>Email communication</li>
            <li>Company documentation</li>
          </ul>
          <p className="mb-6 text-white/70">Continued use of company services after updates implies acceptance of revised policies.</p>

          <h2 className="text-2xl font-bold mt-12 mb-8 text-[#00e5ff] pb-4 border-b border-white/10">14. Contact Information</h2>
          <div className="bg-white/5 rounded-2xl p-8 mb-12 border border-white/10 hover:border-[#00e5ff]/30 transition-colors">
            <h3 className="text-2xl font-bold mb-6 text-white tracking-widest uppercase">Hinton Evolution Tech</h3>
            <div className="space-y-4 text-white/70">
              <p className="flex flex-col md:flex-row gap-2"><strong className="text-white min-w-[120px]">Business Type:</strong> Web Design &amp; Digital Technology Services</p>
              <p className="flex flex-col md:flex-row gap-2"><strong className="text-white min-w-[120px]">Services:</strong> Website Design, Development, Maintenance &amp; Digital Solutions</p>
              <p className="flex flex-col md:flex-row gap-2"><strong className="text-white min-w-[120px]">Email:</strong> <a href="mailto:official@hintonevolution.com" className="hover:text-[#00e5ff] transition-colors">official@hintonevolution.com</a></p>
              <p className="flex flex-col md:flex-row gap-2"><strong className="text-white min-w-[120px]">Website:</strong> <a href="https://www.hintonevolution.com" className="hover:text-[#00e5ff] transition-colors">www.hintonevolution.com</a></p>
            </div>
          </div>

          <div className="text-center mt-16 pt-16 border-t border-white/10">
            <h3 className="text-3xl font-black uppercase tracking-widest text-white mb-6">Final Statement</h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed">
              Hinton Evolution Tech is dedicated to building reliable, modern, and impactful digital solutions while maintaining integrity, transparency, and innovation.
            </p>
            <p className="text-white max-w-2xl mx-auto mb-8 font-medium">
              We believe technology should help businesses evolve, grow, and compete effectively in the digital world.
            </p>
            <p className="text-white/50 italic max-w-xl mx-auto mb-16">
              Which is a polite way of saying every business now needs a website or the internet collectively pretends it does not exist.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
