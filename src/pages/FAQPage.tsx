import FAQ from '../components/FAQ';
import SEO from '../components/SEO';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to build my website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typically, a standard website takes 2-4 weeks from start to finish. More complex projects like e-commerce or custom web applications may take 6-12 weeks depending on the features required."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to know coding or tech to work with you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not at all! We handle all the technical heavy lifting. We also build our websites on user-friendly platforms and provide training so you can easily manage your content post-launch."
      }
    },
    {
      "@type": "Question",
      "name": "Will my website show up on Google?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We build all our websites with SEO and Generative Engine Optimization (GEO) best practices in mind, including optimized semantic structure, proper schema tags, fast loading speeds, and mobile responsiveness."
      }
    },
    {
      "@type": "Question",
      "name": "Can I update my website after it's launched?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We set you up with an easy-to-use content management system (CMS) so you can update text, images, and add new pages without needing technical assistance. We also offer ongoing maintenance packages."
      }
    },
    {
      "@type": "Question",
      "name": "What if I'm not happy with the design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your satisfaction is our priority. We have revision rounds built into our process, and we won't move forward with final development until you're completely thrilled with the design mockups."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer payment plans?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide flexible payment terms including a 6-month 0% interest EMI option (40% advance + 6 easy monthly payments) as well as milestone-based payment schedules."
      }
    }
  ]
};

export default function FAQPage() {
  return (
    <>
      <SEO 
        title="FAQ - Frequently Asked Questions - Hinton Evolution Tech" 
        description="Get clear answers on web design timelines, pricing, SEO, CMS management, payment plans, and development workflows from Hinton Evolution Tech."
        url="https://hintonevolution.com/faq"
        breadcrumbs={[
          { name: "Home", url: "https://hintonevolution.com/" },
          { name: "FAQ", url: "https://hintonevolution.com/faq" }
        ]}
        schema={faqSchema}
      />
      <FAQ isPage={true} />
    </>
  );
}

