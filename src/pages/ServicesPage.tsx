import Services from '../components/Services';
import SEO from '../components/SEO';

export default function ServicesPage() {
  return (
    <>
      <SEO 
        title="Our Services - Hinton Evolution Tech" 
        description="Explore our range of premium web design, development, and maintenance services. We help businesses grow and evolve online."
        url="https://www.hintonevolution.com/services"
      />
      <Services isPage={true} />
    </>
  );
}
