import Hero from '../components/Hero';
import Services from '../components/Services';
import CTA from '../components/CTA';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <Services limit={3} />
      <CTA />
    </>
  );
}
