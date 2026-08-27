import Contact from '../components/Contact';
import SEO from '../components/SEO';

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Hinton Evolution Tech",
  "description": "Get in touch with Hinton Evolution Tech for custom web design, development, and digital technology services in Durgapur, Kolkata, and worldwide.",
  "mainEntity": {
    "@type": "ProfessionalService",
    "name": "Hinton Evolution Tech",
    "telephone": "+919832727520",
    "email": "hintonevolution@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Durgapur",
      "addressRegion": "West Bengal",
      "addressCountry": "IN",
      "postalCode": "713216"
    }
  }
};

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact Us & Book Free Consultation - Hinton Evolution Tech" 
        description="Get in touch with Hinton Evolution Tech to discuss your website project. Reach us via WhatsApp (+91 80018 91036), phone (+91 98327 27520), or email."
        url="https://hintonevolution.com/contact"
        breadcrumbs={[
          { name: "Home", url: "https://hintonevolution.com/" },
          { name: "Contact", url: "https://hintonevolution.com/contact" }
        ]}
        schema={contactSchema}
      />
      <Contact isPage={true} />
    </>
  );
}

