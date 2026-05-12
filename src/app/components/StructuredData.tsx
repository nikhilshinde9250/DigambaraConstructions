import { Helmet } from "react-helmet-async";

const StructuredData = () => {
  const companyData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Digambara Construction",
    founder: {
      "@type": "Person",
      name: "Baliram Shinde",
      jobTitle: "Founder & CEO, Civil Engineer",
      description: "BE Civil Engineering, Full-time Businessman & Part-time YouTuber",
    },
    foundingDate: "2025-03",
    description:
      "Digambara Construction is a dynamic startup construction company led by Civil Engineer Baliram Shinde. We specialize in comprehensive construction services including residential, commercial, and industrial projects, building planning, architectural designing, cost estimating, building permissions, NA layouts, and contract management. Based in Beed, Maharashtra, we are committed to quality craftsmanship, timely delivery, and customer satisfaction.",
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
      "Building Planning",
      "Architectural Designing",
      "Cost Estimating",
      "Building Permission Services",
      "NA Layout Planning",
      "Construction Contracts",
      "Construction Management",
      "Project Consultation",
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
        content="Digambara Construction - Led by Civil Engineer Baliram Shinde (BE Civil). Comprehensive construction services in Beed, Maharashtra including building planning, designing, estimating, building permissions, NA layouts, and contracts. Established March 2025."
      />
      <meta
        name="keywords"
        content="Digambara Construction, Baliram Shinde, Civil Engineer Beed, BE Civil, construction company Beed, building planning, architectural designing, cost estimating, building permission, NA layout, construction contracts, residential construction, commercial construction, industrial construction, building contractor Beed, construction services Maharashtra, Navgan Rajuri construction, Beed builders, Maharashtra construction company, construction management, project consultation, full-time businessman, YouTuber construction"
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
        content="Led by Civil Engineer Baliram Shinde. Comprehensive construction services including building planning, designing, estimating, permissions, NA layouts, and contracts in Beed, Maharashtra."
      />
      <meta property="og:image" content="https://digambaraconstruction.com/images/youtube_banner.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://digambaraconstruction.com/" />
      <meta property="twitter:title" content="Digambara Construction - Building Dreams with Excellence" />
      <meta
        property="twitter:description"
        content="Led by Civil Engineer Baliram Shinde. Building planning, designing, estimating, permissions, NA layouts & contracts in Beed, Maharashtra."
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
