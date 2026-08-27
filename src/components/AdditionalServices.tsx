import { motion } from 'motion/react';
import { Globe, PenTool, Code2, MessageCircle, Target, TrendingUp, Search, Briefcase, FileCode, MonitorSmartphone, LayoutTemplate } from 'lucide-react';

type ServiceItem = {
  name: string;
  price: string;
};

type ServiceCategory = {
  title: string;
  icon: React.ReactNode;
  color: string;
  items: ServiceItem[];
};

export default function AdditionalServices() {
  const categories: ServiceCategory[] = [
    {
      title: "ADDITIONAL WEB SERVICES",
      icon: <Globe size={18} />,
      color: "blue",
      items: [
        { name: "Landing Page Design", price: "₹8,000" },
        { name: "Website Redesign", price: "₹15,000" },
        { name: "Website Speed Optimization", price: "₹7,500" },
        { name: "WordPress Website Dev", price: "₹20,000" },
        { name: "E-commerce Development", price: "₹45,000" },
        { name: "Shopify Development", price: "₹35,000" }
      ]
    },
    {
      title: "BRANDING & CREATIVE",
      icon: <PenTool size={18} />,
      color: "purple",
      items: [
        { name: "Logo Design", price: "₹5,000" },
        { name: "Brand Identity Design", price: "₹20,000" },
        { name: "Business Card Design", price: "₹2,000" },
        { name: "Brochure Design", price: "₹8,000" },
        { name: "Graphic Design", price: "₹2,500 onwards" }
      ]
    },
    {
      title: "DEVELOPMENT & TECHNICAL",
      icon: <Code2 size={18} />,
      color: "green",
      items: [
        { name: "Custom Web Development", price: "₹60,000" },
        { name: "Application Development", price: "₹1,20,000" },
        { name: "Mobile App Development", price: "₹1,80,000" },
        { name: "UI/UX Design", price: "₹20,000" },
        { name: "Payment Gateway Integration", price: "₹8,000" },
        { name: "Content Management Setup", price: "₹10,000" },
        { name: "Domain Registration & Setup", price: "₹2,000/year" },
        { name: "Web Hosting", price: "₹4,000/year" },
        { name: "Site Maintenance", price: "₹3,000/month" }
      ]
    },
    {
      title: "SOCIAL MEDIA & CONTENT",
      icon: <MessageCircle size={18} />,
      color: "orange",
      items: [
        { name: "Social Media Post Design", price: "₹500/post" }
      ]
    },
    {
      title: "ADVERTISING",
      icon: <Target size={18} />,
      color: "red",
      items: [
        { name: "Google Ads Management", price: "₹15,000/month" },
        { name: "Meta Ads Management", price: "₹15,000/month" },
        { name: "Meta Campaign Management", price: "₹20,000/month" },
        { name: "Meta Business Suite Setup", price: "₹5,000" }
      ]
    },
    {
      title: "DIGITAL MARKETING",
      icon: <TrendingUp size={18} />,
      color: "teal",
      items: [
        { name: "Digital Marketing", price: "₹20,000/month" },
        { name: "Social Media Marketing", price: "₹15,000/month" },
        { name: "Email Marketing", price: "₹10,000/month" },
        { name: "Marketing Automation", price: "₹25,000" },
        { name: "Lead Generation", price: "₹20,000/month" },
        { name: "Online Reputation Mgmt", price: "₹15,000/month" },
        { name: "Digital Marketing Consulting", price: "₹10,000/session" }
      ]
    },
    {
      title: "SEO & ANALYTICS",
      icon: <Search size={18} />,
      color: "blue-dark",
      items: [
        { name: "SEO Audit", price: "₹8,000" },
        { name: "Website Audit", price: "₹5,000" },
        { name: "Local Search Analysis", price: "₹5,000" },
        { name: "Search Engine Optimization", price: "₹15,000/month" },
        { name: "Google Business Profile Setup", price: "₹5,000" },
        { name: "Search Console Setup", price: "₹3,000" },
        { name: "Google Analytics Setup", price: "₹3,500" },
        { name: "Google Tag Manager Setup", price: "₹3,500" },
        { name: "Conversion Rate Optimization", price: "₹15,000" }
      ]
    },
    {
      title: "B2B BUSINESS SERVICES",
      icon: <Briefcase size={18} />,
      color: "indigo",
      items: [
        { name: "Business-to-Business Service", price: "Custom Quote" },
        { name: "Telemarketing", price: "₹25,000/month" },
        { name: "E-commerce Consulting", price: "₹20,000" },
        { name: "Corporate Website Consultation", price: "₹10,000" }
      ]
    }
  ];

  const getCardColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      'blue': 'border-blue-500/30 bg-blue-500/5',
      'purple': 'border-purple-500/30 bg-purple-500/5',
      'green': 'border-green-500/30 bg-green-500/5',
      'orange': 'border-orange-500/30 bg-orange-500/5',
      'red': 'border-red-500/30 bg-red-500/5',
      'teal': 'border-teal-500/30 bg-teal-500/5',
      'blue-dark': 'border-blue-700/40 bg-blue-700/5',
      'indigo': 'border-indigo-500/30 bg-indigo-500/5',
    };
    return colorMap[color] || colorMap['blue'];
  };

  const getHeaderColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      'blue': 'text-blue-400 border-blue-500/30',
      'purple': 'text-purple-400 border-purple-500/30',
      'green': 'text-green-400 border-green-500/30',
      'orange': 'text-orange-400 border-orange-500/30',
      'red': 'text-red-400 border-red-500/30',
      'teal': 'text-teal-400 border-teal-500/30',
      'blue-dark': 'text-blue-500 border-blue-700/40',
      'indigo': 'text-indigo-400 border-indigo-500/30',
    };
    return colorMap[color] || colorMap['blue'];
  };

  return (
    <section className="px-4 md:px-6 bg-[#0B0B14] text-white pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 text-[#00e5ff] text-[10px] sm:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6"
          >
            <div className="w-8 h-[1px] bg-[#00e5ff]"></div>
            COMPREHENSIVE DIGITAL SOLUTIONS
          </motion.div>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-black tracking-widest text-white mb-6 leading-[1.1]"
            style={{ fontFamily: 'Arial Black, Impact, sans-serif' }}
          >
            Additional <span className="text-[#00e5ff]">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl text-sm sm:text-base font-light mx-auto"
          >
            Enhance and customize your digital presence with our extensive range of specialized services. All prices are starting prices and may vary based on project requirements.
          </motion.p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {categories.map((category, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05 }}
              key={idx} 
              className={`break-inside-avoid rounded-2xl border overflow-hidden group hover:border-white/20 transition-colors ${getCardColorClasses(category.color)}`}
            >
              <div className={`px-4 py-3 border-b flex items-center justify-between ${getHeaderColorClasses(category.color)}`}>
                <div className="flex items-center gap-2">
                  {category.icon}
                  <h3 className="font-bold text-sm tracking-wide uppercase">{category.title}</h3>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider opacity-70">Starting Price</span>
              </div>
              <div className="p-1">
                {category.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-3 text-sm border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                    <span className="text-white/80">{item.name}</span>
                    <span className="font-semibold text-[#00e5ff] whitespace-nowrap ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-white/40 text-xs uppercase tracking-widest">GST extra as applicable.</p>
        </div>

      </div>
    </section>
  );
}
