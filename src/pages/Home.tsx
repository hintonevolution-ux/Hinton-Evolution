import Hero from '../components/Hero';
import Services from '../components/Services';
import CTA from '../components/CTA';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO 
        title="Hinton Evolution Tech - Premium Website Design & Development Agency"
        description="Enterprise-Grade Web Solutions for Ambitious Brands. We craft high-converting, lightning-fast digital experiences in Durgapur, West Bengal, India & worldwide."
        url="https://hintonevolution.com/"
      />
      <Hero />
      <Services limit={3} />
      <CTA />
    </>
  );
}

