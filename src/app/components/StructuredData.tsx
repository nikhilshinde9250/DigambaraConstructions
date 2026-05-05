import { Helmet } from "react-helmet-async";

const StructuredData = () => {
  const companyData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Digambara Construction",
    founder: {
      "@type": "Person",
      name: "Baliram Shinde",
      jobTitle: "Founder & CEO",
    },
    foundingDate: "2025-03",
    description:
      "Digambara Construction is a dynamic startup construction company specializing in residential, commercial, and industrial construction projects. Based in Beed, Maharashtra, we are committed to quality craftsmanship, timely delivery, and customer satisfaction. Established in March 2025, we bring fresh innovation to the construction industry.",
    url: "https://digambaraconstruction.com",
    logo: "https://digambaraconstruction.com/images/Logo.png",
    image: "https://digambaraconstruction.com/images/youtube_banner.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Navgan Rajuri",
      addressLocality: "Beed",
      addressRegion: "Maharashtra",
      postalCode: "431122",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9561231865",
      contactType: "customer service",
      email: "info@digambaraconstruction.com",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
    sameAs: [
      "https://youtube.com/@digambaraconstruction?si=v4dix0hDgAU8DbzZ",
      "https://www.facebook.com/digambaraconstruction",
      "https://www.instagram.com/digambaraconstruction",
      "https://www.linkedin.com/company/digambaraconstruction",
    ],
    areaServed: {
      "@type": "State",
      name: "Maharashtra",
    },
    serviceType: [
      "Residential Construction",
      "Commercial Construction",
      "Industrial Construction",
      "Building Construction",
      "Construction Management",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(companyData)}
      </script>
      <meta charSet="UTF-8" />
      <title>Digambara Construction - Building Dreams with Excellence | Beed, Maharashtra</title>
      <meta
        name="description"
        content="Digambara Construction is a growing construction company in Beed, Maharashtra. Founded by Baliram Shinde in March 2025, we specialize in residential, commercial, and industrial construction with quality craftsmanship and timely delivery."
      />
      <meta
        name="keywords"
        content="Digambara Construction, Baliram Shinde, construction company Beed, construction Maharashtra, residential construction, commercial construction, industrial construction, building contractor Beed, construction services Maharashtra, quality construction, startup construction company, Navgan Rajuri construction, Beed builders, Maharashtra construction company"
      />
      <meta name="author" content="Digambara Construction" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://digambaraconstruction.com/" />
      <meta property="og:title" content="Digambara Construction - Building Dreams with Excellence" />
      <meta
        property="og:description"
        content="Quality construction services in Beed, Maharashtra. Residential, commercial, and industrial projects. Founded by Baliram Shinde."
      />
      <meta property="og:image" content="https://digambaraconstruction.com/images/youtube_banner.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://digambaraconstruction.com/" />
      <meta property="twitter:title" content="Digambara Construction - Building Dreams with Excellence" />
      <meta
        property="twitter:description"
        content="Quality construction services in Beed, Maharashtra. Residential, commercial, and industrial projects."
      />
      <meta property="twitter:image" content="https://digambaraconstruction.com/images/youtube_banner.png" />

      {/* Additional SEO */}
      <link rel="canonical" href="https://digambaraconstruction.com/" />
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Beed" />
      <meta name="geo.position" content="18.9894;75.7585" />
      <meta name="ICBM" content="18.9894, 75.7585" />
    </Helmet>
  );
};

export default StructuredData;
