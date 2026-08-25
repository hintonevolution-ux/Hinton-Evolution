import Pricing from '../components/Pricing';
import AdditionalServices from '../components/AdditionalServices';
import SEO from '../components/SEO';

export default function PricingPage() {
  return (
    <>
      <SEO 
        title="Pricing Plans - Hinton Evolution Tech" 
        description="Transparent pricing for website development, digital marketing, and branding services."
      />
      <Pricing isPage={true} />
      <AdditionalServices />
    </>
  );
}
