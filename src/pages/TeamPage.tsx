import Team from '../components/Team';
import SEO from '../components/SEO';

export default function TeamPage() {
  return (
    <>
      <SEO 
        title="About Us - Hinton Evolution Tech" 
        description="Meet the core team behind Hinton Evolution Tech. We build digital experiences that evolve businesses with innovation, trust, and technology."
        url="https://www.hintonevolution.com/about"
      />
      <Team isPage={true} />
    </>
  );
}
