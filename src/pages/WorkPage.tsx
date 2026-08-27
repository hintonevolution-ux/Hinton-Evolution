import Work from '../components/Work';
import SEO from '../components/SEO';

export default function WorkPage() {
  return (
    <>
      <SEO 
        title="Our Portfolio & Web Design Case Studies - Hinton Evolution Tech" 
        description="Explore our portfolio of high-converting website designs, eCommerce stores, SaaS platforms, and digital solutions."
        url="https://hintonevolution.com/works"
        breadcrumbs={[
          { name: "Home", url: "https://hintonevolution.com/" },
          { name: "Portfolio", url: "https://hintonevolution.com/works" }
        ]}
      />
      <Work isPage={true} />
    </>
  );
}

