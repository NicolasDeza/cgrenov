<script setup lang="ts">

const canonical = useCanonical()

useHead(() => ({
  link: [
    {
      rel: "canonical",
      href: canonical.value,
    },
  ],
  script: [
    {
      src: "https://challenges.cloudflare.com/turnstile/v0/api.js",
      async: true,
      defer: true,
    },
  ],
}));

useSeoMeta({
  title: "Contact",
  description:
    "Contactez CG Renov pour vos travaux de rénovation en Belgique : rénovation intérieure, extérieure, transformation et finitions. Devis gratuit et réponse rapide.",

  robots: "index, follow",

  ogTitle: "Contactez CG Renov – Travaux de rénovation en Belgique",
  ogDescription:
    "Un projet de rénovation ? CG Renov vous accompagne pour vos travaux intérieurs et extérieurs partout en Belgique. Contactez-nous pour un devis gratuit.",
  ogImage: "https://www.cgrenov.be/og-cgrenov.jpg",
  ogUrl: canonical,
  ogType: "website",

  twitterCard: "summary_large_image",
  twitterTitle: "Contact – CG Renov",
  twitterDescription:
    "Entreprise de rénovation en Belgique. Demandez votre devis gratuit avec CG Renov.",
  twitterImage: "https://www.cgrenov.be/og-cgrenov.jpg",
});

</script>
<template>
  <div>
    <ContactForm />
  </div>
</template>