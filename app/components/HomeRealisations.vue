<script setup lang="ts">
import { ref } from 'vue'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-vue-next'

const currentIndex = ref(0)

const realisations = [
  {
    id: 1,
    title: "Rénovation toiture complète",
    location: "Wavre, Brabant wallon",
    description: "Réfection complète de la toiture avec isolation renforcée et pose de nouvelles tuiles.",
    image: "/images/realisations/maison-2.jpg",
    date: "Décembre 2025"
  },
  {
    id: 2,
    title: "Extension de maison",
    location: "Louvain-la-Neuve",
    description: "Extension moderne avec grande baie vitrée et toiture plate étanche.",
    image: "/images/realisations/maison-3.jpg",
    date: "Novembre 2025"
  },
  {
    id: 3,
    title: "Isolation façade",
    location: "Ottignies",
    description: "Isolation thermique par l'extérieur avec finition crépi moderne.",
    image: "/images/realisations/maison-4.jpg",
    date: "Octobre 2025"
  },
  {
    id: 4,
    title: "Couverture zinc",
    location: "Braine-l'Alleud",
    description: "Pose de couverture en zinc avec chéneau intégré et finitions soignées.",
    image: "/images/realisations/maison-1.jpg",
    date: "Septembre 2025"
  },
]

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % realisations.length
}

const prev = () => {
  currentIndex.value = currentIndex.value === 0 ? realisations.length - 1 : currentIndex.value - 1
}

const goTo = (index: number) => {
  currentIndex.value = index
}
</script>

<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="max-w-[1440px] mx-auto px-6">
      <!-- Header -->
      <header class="mb-12 text-center">
        <p class="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
          + Nos dernières réalisations
        </p>
        <h2 class="text-3xl md:text-4xl font-bold">
          Découvrez nos <span class="text-primary">projets récents</span>
        </h2>
        <p class="mt-4 text-gray-700 max-w-2xl mx-auto font-semibold">
          Des projets variés témoignant de notre savoir-faire et de notre engagement qualité.
        </p>
        <div class="mx-auto mt-6 h-1 w-32 rounded-full bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
      </header>

      <!-- Carousel -->
      <div class="relative max-w-4xl mx-auto" role="region" aria-label="Carousel de nos réalisations">
        <!-- Card Container -->
        <div class="overflow-hidden" aria-live="polite">
          <div 
            class="flex transition-transform duration-500 ease-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="realisation in realisations"
              :key="realisation.id"
              class="min-w-full"
            >
              <!-- Screen reader announcement -->
              <span class="sr-only">Projet {{ currentIndex + 1 }} sur {{ realisations.length }}</span>
              
              <!-- Card -->
              <div class="bg-white rounded-xl shadow-lg overflow-hidden mx-2 flex flex-col md:flex-row max-h-none md:max-h-[400px]">
                <!-- Image -->
                <div class="relative md:w-2/5 h-64 md:h-auto">
                  <NuxtImg
                    :src="realisation.image"
                    :alt="realisation.title"
                    class="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <!-- Content -->
                <div class="p-8 md:w-3/5 flex flex-col justify-center">
                  <span class="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-3">
                    {{ realisation.date }}
                  </span>
                  
                  <h3 class="text-2xl font-bold text-gray-900 mb-3">
                    {{ realisation.title }}
                  </h3>
                  
                  <div class="flex items-center gap-2 text-gray-600 text-sm mb-4">
                    <MapPin :size="16" class="text-primary" aria-hidden="true" />
                    {{ realisation.location }}
                  </div>
                  
                  <p class="text-gray-700 leading-relaxed">
                    {{ realisation.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <button
          class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-primary text-gray-800 hover:text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Projet précédent"
          @click="prev"
        >
          <ChevronLeft :size="24" aria-hidden="true" />
        </button>
        
        <button
          class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-primary text-gray-800 hover:text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Projet suivant"
          @click="next"
        >
          <ChevronRight :size="24" aria-hidden="true" />
        </button>

        <!-- Indicators -->
        <div class="flex justify-center gap-2 mt-8">
          <button
            v-for="(_, index) in realisations"
            :key="index"
            class="w-2 h-2 rounded-full transition-all duration-300"
            :class="currentIndex === index ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'"
            :aria-label="`Aller au projet ${index + 1}`"
            @click="goTo(index)"
          />
        </div>
      </div>

      <!-- CTA Button -->
      <div class="flex justify-center mt-12">
        <NuxtLink
          to="/realisations"
          class="inline-flex items-center rounded-lg bg-primary px-8 py-4
                 font-bold text-white transition-all
                 hover:bg-primary/90 hover:scale-105 focus-visible:outline-none
                 focus-visible:ring-2 focus-visible:ring-primary
                 focus-visible:ring-offset-2"
        >
          Découvrir nos réalisations
        </NuxtLink>
      </div>
    </div>
  </section>
</template>