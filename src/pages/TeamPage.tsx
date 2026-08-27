import Team from '../components/Team';
import SEO from '../components/SEO';

export default function TeamPage() {
  return (
    <>
      <SEO 
        title="About Us & Leadership Team - Hinton Evolution Tech" 
        description="Meet the core engineering and design team behind Hinton Evolution Tech. Building high-performance digital experiences from Durgapur, West Bengal."
        url="https://hintonevolution.com/about"
        breadcrumbs={[
          { name: "Home", url: "https://hintonevolution.com/" },
          { name: "About Us", url: "https://hintonevolution.com/about" }
        ]}
      />
      <Team isPage={true} />
    </>
  );
}

