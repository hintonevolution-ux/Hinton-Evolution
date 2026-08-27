import Services from '../components/Services';
import SEO from '../components/SEO';

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Web Design & Digital Services Offered by Hinton Evolution Tech",
  "itemListElement": [
    {
      "@type": "Service",
      "position": 1,
      "name": "Custom Website Design & Development",
      "description": "Bespoke high-performance websites tailored to your brand identity, built with modern frameworks like React and Next.js.",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Hinton Evolution Tech"
      },
      "areaServed": "Worldwide"
    },
    {
      "@type": "Service",
      "position": 2,
      "name": "E-Commerce Development",
      "description": "High-converting online stores with custom product showcases, cart systems, payment gateways, and inventory sync.",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Hinton Evolution Tech"
      }
    },
    {
      "@type": "Service",
      "position": 3,
      "name": "Search & Generative Engine Optimization (SEO & GEO)",
      "description": "Advanced on-page, technical, local SEO, and AI search optimization to rank on Google and AI platforms.",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Hinton Evolution Tech"
      }
    },
    {
      "@type": "Service",
      "position": 4,
      "name": "Website Maintenance & Support",
      "description": "Continuous cloud backups, performance tuning, uptime monitoring, security audits, and content updates.",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Hinton Evolution Tech"
      }
    }
  ]
};

export default function ServicesPage() {
  return (
    <>
      <SEO 
        title="Web Design & Digital Services - Hinton Evolution Tech" 
        description="Explore our range of premium web design, full-stack development, speed optimization, and maintenance services for ambitious businesses."
        url="https://hintonevolution.com/services"
        breadcrumbs={[
          { name: "Home", url: "https://hintonevolution.com/" },
          { name: "Services", url: "https://hintonevolution.com/services" }
        ]}
        schema={servicesSchema}
      />
      <Services isPage={true} />
    </>
  );
}

