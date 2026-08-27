import Pricing from '../components/Pricing';
import AdditionalServices from '../components/AdditionalServices';
import SEO from '../components/SEO';

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "name": "Hinton Evolution Tech Website Packages",
  "itemListElement": [
    {
      "@type": "Offer",
      "name": "Starter Website Package",
      "description": "Essential web presence for emerging brands, local businesses, and modern startups. 5 core pages, mobile responsive, standard SEO, contact forms.",
      "price": "24999",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://hintonevolution.com/pricing"
    },
    {
      "@type": "Offer",
      "name": "Business Scale Package",
      "description": "Comprehensive digital solution for growing companies. Up to 12 custom pages, advanced animations, technical SEO, speed optimization, and CMS integration.",
      "price": "44999",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://hintonevolution.com/pricing"
    },
    {
      "@type": "Offer",
      "name": "Enterprise Corporate Package",
      "description": "Custom enterprise-grade architecture with bespoke features, dynamic web applications, e-commerce infrastructure, and priority 24/7 dedicated support.",
      "price": "89999",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://hintonevolution.com/pricing"
    }
  ]
};

export default function PricingPage() {
  return (
    <>
      <SEO 
        title="Transparent Pricing & 0% EMI Packages - Hinton Evolution Tech" 
        description="Affordable and transparent website design and development pricing with 6-month 0% interest EMI options. Starter, Business, and Enterprise tiers."
        url="https://hintonevolution.com/pricing"
        breadcrumbs={[
          { name: "Home", url: "https://hintonevolution.com/" },
          { name: "Pricing", url: "https://hintonevolution.com/pricing" }
        ]}
        schema={pricingSchema}
      />
      <Pricing isPage={true} />
      <AdditionalServices />
    </>
  );
}

