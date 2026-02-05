<script setup lang="ts">
</script>

<template>
  <section
    class="relative w-full flex items-center py-14 sm:py-28 lg:py-[150px]"
    aria-label="Section d'accueil"
  >
    <!-- Image de fond optimisée -->
    <NuxtImg
      src="/images/hero.jpg"
      alt="CG Renov - Entreprise de rénovation et toiture"
      class="absolute inset-0 w-full h-full object-cover"
      preload
      fetchpriority="high"
      loading="eager"
      quality="80"
      format="webp"
    />

    <!-- Overlay sombre -->
    <div class="absolute inset-0 bg-black/55" />

    <!-- Wrapper 1440px pour le contenu -->
    <div
      class="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-left flex flex-col items-start gap-4"
    >
      <!-- Titre principal -->
      <h1
        class="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white
               animate-[fadeInUp_0.6s_ease-out]"
      >
        <span class="block text-primary font-extrabold text-5xl sm:text-7xl mb-2">CG RENOV</span>
        <span class="block">Entreprise de rénovation et Toiture</span>
      </h1>

      <h2
class="mt-2 md:mt-4 text-2xl sm:text-4xl font-bold text-white
                 animate-[fadeInUp_0.6s_ease-out_0.15s_both]">
        La passion dans chacune de nos réalisations
      </h2>

      <!-- Sous-titre -->
      <p
class="max-w-2xl text-base sm:text-xl text-white/90 font-semibold
                animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
        Nous accompagnons particuliers et professionnels
        dans leurs projets de rénovation et de toiture.

      </p>

      <!-- Actions -->
      <div
class="mt-6 flex flex-wrap items-center justify-start gap-4
                  animate-[fadeInUp_0.6s_ease-out_0.45s_both]">
        <NuxtLink
          to="/contact"
          class="group relative inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2 md:py-3 text-lg font-bold text-white overflow-hidden
                 transition-all duration-300 ease-out hover:scale-105"
        >
          <span class="relative z-10">Demander un devis</span>
          <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>