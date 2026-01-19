<script setup lang="ts">
defineProps<{
  image?: string
}>()
</script>

<template>
  <section class="w-full bg-[#11171D]">
    <div class="flex flex-col lg:flex-row">
      <!-- Image -->
      <div class="relative h-[320px] lg:h-[500px] lg:w-1/2">
        <NuxtImg
          :src="image || '/images/cta/split.jpg'"
          alt="Projet de rénovation"
          class="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <!-- léger overlay -->
        <!-- <div class="absolute inset-0 bg-black/20"/> -->
      </div>
     


      <!-- Texte -->
      <div class="flex flex-col justify-center px-6 py-20 lg:px-20  text-white lg:w-1/2">
        <h2 class="text-3xl md:text-4xl font-bold leading-tight">
          Prêt à démarrer
          <span class="text-primary">votre projet</span>
          de rénovation ?
        </h2>

        <p class="mt-6 max-w-xl text-white/80">
          CG Renov vous accompagne de l’analyse à la réalisation de vos
          travaux, avec une approche sérieuse, transparente et orientée
          qualité.
        </p>

        <div class="mt-10">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center rounded-lg bg-primary px-6 py-3
                   font-semibold text-white transition-all
                   hover:bg-primary/90 hover:scale-105 focus-visible:outline-none
                   focus-visible:ring-2 focus-visible:ring-primary
                   focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            Demander un devis
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
