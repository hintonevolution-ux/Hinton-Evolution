import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  googleSiteVerification?: string;
}

export default function SEO({ 
  title = 'Hinton Evolution Tech - Premium Web Design & Development', 
  description = 'Enterprise-Grade Web Solutions for Ambitious Brands. Premium website design, development & management for businesses ready to dominate their market online.', 
  keywords = 'Web Design, Website Development, Website Maintenance, Digital Services, SEO, eCommerce, Tech Agency',
  url = 'https://www.hintonevolution.com',
  image = 'https://www.hintonevolution.com/og-image.jpg',
  googleSiteVerification
}: SEOProps) {
  const siteTitle = title.includes('Hinton Evolution Tech') ? title : `${title} | Hinton Evolution Tech`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {googleSiteVerification && <meta name="google-site-verification" content={googleSiteVerification} />}

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
