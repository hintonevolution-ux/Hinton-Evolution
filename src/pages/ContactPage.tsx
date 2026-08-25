import Contact from '../components/Contact';
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact Us - Hinton Evolution Tech" 
        description="Get in touch with Hinton Evolution Tech to discuss your next web project. We build enterprise-grade web solutions for ambitious brands."
        url="https://www.hintonevolution.com/contact"
      />
      <Contact isPage={true} />
    </>
  );
}
