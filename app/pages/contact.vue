<script setup lang="ts">

useHead({
  link: [
    {
      rel: "canonical",
      href: useRequestURL().href,
    },
  ],
});

useSeoMeta({
  title: "Contact",
  description:
    "Contactez CG Renov pour vos travaux de rénovation en Belgique : rénovation intérieure, extérieure, transformation et finitions. Devis gratuit et réponse rapide.",

  robots: "index, follow",

  ogTitle: "Contactez CG Renov – Travaux de rénovation en Belgique",
  ogDescription:
    "Un projet de rénovation ? CG Renov vous accompagne pour vos travaux intérieurs et extérieurs partout en Belgique. Contactez-nous pour un devis gratuit.",
  ogImage: "https://cgrenov.be/og-cgrenov.jpg",
  ogUrl: useRequestURL().href,
  ogType: "website",

  twitterCard: "summary_large_image",
  twitterTitle: "Contact – CG Renov",
  twitterDescription:
    "Entreprise de rénovation en Belgique. Demandez votre devis gratuit avec CG Renov.",
  twitterImage: "https://cgrenov.be/og-cgrenov.jpg",
});

</script>
<template>
  <div>
   

    <ContactForm />
  </div>
</template>