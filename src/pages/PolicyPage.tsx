import Policy from '../components/Policy';
import SEO from '../components/SEO';

export default function PolicyPage() {
  return (
    <>
      <SEO 
        title="Company Policy, Privacy & Standards - Hinton Evolution Tech" 
        description="Review Hinton Evolution Tech company policies, service delivery standards, privacy policy, refund, and cancellation terms."
        url="https://hintonevolution.com/policy"
        breadcrumbs={[
          { name: "Home", url: "https://hintonevolution.com/" },
          { name: "Company Policy", url: "https://hintonevolution.com/policy" }
        ]}
      />
      <Policy />
    </>
  );
}

