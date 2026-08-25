import FAQ from '../components/FAQ';
import SEO from '../components/SEO';

export default function FAQPage() {
  return (
    <>
      <SEO 
        title="FAQ - Hinton Evolution Tech" 
        description="Frequently asked questions about our web design and development services, project timelines, and process."
        url="https://www.hintonevolution.com/faq"
      />
      <FAQ isPage={true} />
    </>
  );
}
