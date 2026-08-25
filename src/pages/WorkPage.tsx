import Work from '../components/Work';
import SEO from '../components/SEO';

export default function WorkPage() {
  return (
    <>
      <SEO 
        title="Our Work & Portfolio - Hinton Evolution Tech" 
        description="View our portfolio of premium website designs, eCommerce stores, and enterprise web solutions."
        url="https://www.hintonevolution.com/works"
      />
      <Work isPage={true} />
    </>
  );
}
