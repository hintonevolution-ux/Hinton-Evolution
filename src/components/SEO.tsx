import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  googleSiteVerification?: string;
  breadcrumbs?: BreadcrumbItem[];
  schema?: Record<string, any> | Array<Record<string, any>>;
  type?: 'website' | 'article' | 'service';
}

export default function SEO({ 
  title = 'Hinton Evolution Tech - Premium Web Design & Development Agency', 
  description = 'Enterprise-Grade Web Solutions for Ambitious Brands. Premium website design, development & management for businesses ready to dominate their market online in India and worldwide.', 
  keywords = 'Web Design, Website Development, Website Maintenance, Digital Services, SEO, Generative Engine Optimization, GEO, eCommerce, Tech Agency, Durgapur, West Bengal, India',
  url = 'https://hintonevolution.com',
  image = 'https://i.pinimg.com/736x/7c/7b/fb/7c7bfb1dc1c95813b82a78fdc12c9e26.jpg',
  googleSiteVerification,
  breadcrumbs,
  schema,
  type = 'website'
}: SEOProps) {
  const siteTitle = title.includes('Hinton Evolution Tech') ? title : `${title} | Hinton Evolution Tech`;
  const canonicalUrl = url.replace('www.', '');

  // Default Organization & LocalBusiness GEO Schema
  const defaultBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://hintonevolution.com/#organization",
    "name": "Hinton Evolution Tech",
    "alternateName": "Hinton Evolution",
    "legalName": "Hinton Evolution Tech",
    "url": "https://hintonevolution.com",
    "logo": "https://hintonevolution.com/favicon-48x48.png",
    "image": image,
    "description": description,
    "telephone": "+919832727520",
    "email": "hintonevolution@gmail.com",
    "priceRange": "₹₹",
    "currenciesAccepted": "INR, USD",
    "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Net Banking, EMI",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Durgapur",
      "addressRegion": "West Bengal",
      "addressCountry": "IN",
      "postalCode": "713216"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.5204,
      "longitude": 87.3119
    },
    "areaServed": [
      { "@type": "City", "name": "Durgapur" },
      { "@type": "City", "name": "Kolkata" },
      { "@type": "State", "name": "West Bengal" },
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Global" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "21:00"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+919832727520",
        "contactType": "customer service",
        "email": "hintonevolution@gmail.com",
        "availableLanguage": ["English", "Hindi", "Bengali"],
        "areaServed": ["IN", "US", "GB", "Worldwide"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+918001891036",
        "contactType": "sales",
        "contactOption": "WhatsApp",
        "availableLanguage": ["English", "Hindi", "Bengali"]
      }
    ],
    "sameAs": [
      "https://www.hintonevolution.com"
    ],
    "knowsAbout": [
      "Website Design",
      "Custom Web Development",
      "Full-Stack Web Engineering",
      "React.js & Next.js Development",
      "Search Engine Optimization (SEO)",
      "Generative Engine Optimization (GEO)",
      "E-Commerce Solutions",
      "Website Speed Optimization",
      "UI/UX Design",
      "Digital Marketing & Brand Strategy"
    ]
  };

  // Breadcrumbs Schema if provided
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  } : null;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      {googleSiteVerification && <meta name="google-site-verification" content={googleSiteVerification} />}

      {/* Geographical & Local SEO Meta Tags */}
      <meta name="geo.region" content="IN-WB" />
      <meta name="geo.placename" content="Durgapur, West Bengal, India" />
      <meta name="geo.position" content="23.5204;87.3119" />
      <meta name="ICBM" content="23.5204, 87.3119" />
      <meta name="location" content="Durgapur, West Bengal, India" />

      {/* Generative AI & Bot instructions */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* OpenGraph tags */}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Hinton Evolution Tech" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data: Default LocalBusiness & Organization */}
      <script type="application/ld+json">
        {JSON.stringify(defaultBusinessSchema)}
      </script>

      {/* Breadcrumb Structured Data */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* Custom Page Schema (FAQ, Services, Products, etc.) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

