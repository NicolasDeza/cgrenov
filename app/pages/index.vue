<script setup lang="ts">

const canonical = useCanonical()

useHead(() => ({
  link: [
    {
      rel: "canonical",
      href: canonical.value, 
    },
  ],
}));

useSeoMeta({
  title:
    "Entreprise de rénovation et toiture en Belgique",
  description:
    "CG Renov est une entreprise de rénovation en Belgique spécialisée en rénovation intérieure et extérieure, transformations et finitions. Devis gratuit et accompagnement personnalisé.",

  robots: "index, follow",

  ogTitle:
    "CG Renov – Travaux de rénovation intérieure et extérieure en Belgique",
  ogDescription:
    "Vous avez un projet de rénovation ? CG Renov vous accompagne pour vos travaux intérieurs et extérieurs partout en Belgique. Contactez-nous pour un devis gratuit.",
  ogImage: "https://cgrenov.be/og-cgrenov.jpg",
  ogUrl: canonical,
  ogType: "website",

  twitterCard: "summary_large_image",
  twitterTitle: "CG Renov – Entreprise de rénovation",
  twitterDescription:
    "Entreprise de rénovation en Belgique. Rénovation intérieure, extérieure et transformations. Devis gratuit.",
  twitterImage: "https://cgrenov.be/og-cgrenov.jpg",
});

</script>


<template>

  <div>
    <HeroSection />
    <HeroContactBar/>
    <ServicesSection/>
    <WhyUsSection />
    <BeforeAfterSlider/>
    <BentoGrid/>
    <SplitSection/>
    <PartenairesCarousel/>
  </div>
  
  </template>
