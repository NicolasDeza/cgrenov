<script setup lang="ts">
const services = [
  {
    title: "Toiture & couverture",
    description:
      "Rénovation, pose et entretien de toitures durables et étanches.",
    image: "/images/services/toiture.jpg",
    slug: "toiture-couverture",
  },
  {
    title: "Rénovation générale",
    description:
      "Travaux intérieurs et extérieurs pour valoriser votre habitation.",
    image: "/images/services/renovation.jpg",
    slug: "renovation-generale",
  },
  {
    title: "Isolation & étanchéité",
    description:
      "Amélioration du confort thermique et protection durable du bâtiment.",
    image: "/images/services/isolation.jpg",
    slug: "isolation-etancheite",
  },
  {
    title: "Travaux extérieurs",
    description:
      "Façades, corniches et finitions extérieures soignées.",
    image: "/images/services/exterieur.jpg",
    slug: "travaux-exterieurs",
  },
  
];
</script>

<template>
    <section aria-labelledby="services" class="py-16 md:py-24 bg-primary-bg">
  <div class="max-w-[1440px] mx-auto px-4">
    <header class="mb-12 text-center">
      <h2 id="services" class="text-3xl md:text-4xl font-bold">
        Nos services de <span class="text-primary">rénovation</span> & <span class="text-primary">toiture</span>
      </h2>
      

      <p class="mt-6 text-gray-700 max-w-2xl mx-auto text-medium font-semibold">
        CG Renov propose une gamme complète de services pour vos travaux de rénovation,
        avec une expertise particulière en toiture.
      </p>
      <div class="mx-auto mt-8 h-1 w-32 rounded-full bg-gradient-to-r from-primary/60 via-primary to-primary/60"/>
    </header>

       <!-- Cards -->
      <div class="pt-4 md:pt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <NuxtLink
          v-for="service in services"
          :key="service.title"
          :to="`/services/${service.slug}`"
          :aria-label="`En savoir plus sur ${service.title}`"
          class="group block overflow-hidden rounded-xl bg-white shadow-sm
                 transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer">
          <!-- Image -->
        <!-- Image -->
<div class="relative aspect-[4/3] overflow-hidden ">
  <img
    :src="service.image"
    :alt="service.title"
    class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
    loading="lazy"
  >

  <!-- Overlay hover -->
  <div
    class="absolute inset-0 flex items-center justify-center
           bg-black/40 opacity-0 transition-opacity duration-300
           group-hover:opacity-100"
  >
    <span
  class="text-white font-semibold tracking-wide
         translate-y-2 opacity-0 transition-all duration-300
         group-hover:translate-y-0 group-hover:opacity-100"
>
  Découvrir le service 
</span>

  </div>
</div>

          <!-- Texte -->
          <div class="p-6">
            <h3 class="text-lg font-semibold mb-2">
              {{ service.title }}
            </h3>

            <p class="text-sm text-gray-700 mb-3">
              {{ service.description }}
            </p>

            <span class="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              Service
            </span>
          </div>
        </NuxtLink>
      </div>
  </div>
</section>
</template>
