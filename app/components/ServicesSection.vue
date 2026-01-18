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
    <section aria-labelledby="services" class="py-20 bg-primary-bg">
  <div class="max-w-[1440px] mx-auto px-4">
    <header class="mb-12 text-center">
      <h2 id="services" class="text-3xl md:text-4xl font-bold">
        Nos services de <span class="text-primary">rénovation</span> & <span class="text-primary">toiture</span>
      </h2>
      <p class="mt-4 text-gray-700 max-w-2xl mx-auto text-medium font-semibold">
        CG Renov propose une gamme complète de services pour vos travaux de rénovation,
        avec une expertise particulière en toiture.
      </p>
    </header>

       <!-- Cards -->
      <div class="pt-6 md:pt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <NuxtLink
          v-for="service in services"
          :key="service.title"
          :to="`/services/${service.slug}`"
          :aria-label="`En savoir plus sur ${service.title}`"
          class="group block overflow-hidden rounded-xl bg-white shadow-sm
                 transition hover:-translate-y-1 hover:shadow-md cursor-pointer
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <!-- Image -->
          <div class="aspect-[4/3] overflow-hidden">
            <NuxtImg
              :src="service.image"
              :alt="service.title"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
          />
          </div>

          <!-- Texte -->
          <div class="p-6">
            <h3 class="text-lg font-semibold">
              {{ service.title }}
            </h3>

            <p class="mt-2 text-sm text-gray-700">
              {{ service.description }}
            </p>
          </div>
        </NuxtLink>
      </div>
  </div>
</section>
</template>
