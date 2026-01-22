<script setup lang="ts"></script>

<template>
  <section
    class="relative w-full flex justify-center items-center bg-[#0F172B] bg-[url('/images/hero.jpg')] bg-cover bg-center py-20 md:py-40 lg:py-[190px] "
    aria-label="Section d'accueil"
  >
    <!-- Overlay sombre -->
    <div class="absolute inset-0 bg-black/65"/>
    
    <!-- Wrapper 1440px pour le contenu -->
    <div
      class="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-left flex flex-col items-start gap-6"
    >
      <!-- Titre principal -->
      <h1
        class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white"
      >
        <span class="block text-primary text-6xl sm:text-7xl lg:text-8xl mb-2">CG RENOV</span>
        <span class="block">Entreprise de rénovation</span>
      </h1>

      <!-- Sous-titre -->
      <p class="max-w-2xl text-lg sm:text-xl text-white/90 font-semibold">
        Nous accompagnons les particuliers et professionnels dans leurs projets de rénovation,
        avec une expertise reconnue en toiture, couverture et travaux extérieurs.
      </p>

      <!-- Actions -->
      <div class="mt-6 flex flex-wrap items-center justify-start gap-4">
        <NuxtLink
          to="/contact"

          class="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2 md:py-3 text-lg font-bold text-white hover:bg-primary-hover hover:scale-105 transition-transform"
        >
          Demander un devis
          
        </NuxtLink>

       
      </div>
    </div>
  </section>
</template>
