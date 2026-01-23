<script setup lang="ts">
import { onMounted, ref } from "vue"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement[]>([])

const services = [
  {
    title: "Toiture & couverture",
    description: "Pose, rénovation et entretien de toitures durables et étanches.",
    image: "/images/services/toiture.jpg",
  },
  {
    title: "Façades & bardage",
    description: "Rénovation de façades et pose de bardages pour une protection durable.",
    image: "/images/services/bardage.jpg",
  },
  {
    title: "Isolation & étanchéité",
    description: "Amélioration du confort thermique et protection du bâtiment.",
    image: "/images/services/isolation.jpg",
  },
  {
    title: "Ossature & extensions",
    description: "Construction d’annexes, extensions et structures en ossature bois.",
    image: "/images/services/ossature.jpg",
  },
  {
    title: "Maçonnerie générale",
    description: "Maçonnerie pour tous types de projets intérieurs et extérieurs.",
    image: "/images/services/maconnerie.jpg",
  },
  {
    title: "Châssis & menuiseries",
    description: "Pose et remplacement de châssis et menuiseries extérieures.",
    image: "/images/services/chassis.jpg",
  },
  {
    title: "Dépannage",
    description: "Interventions rapides en cas d’urgence, sous 24h si possible.",
    image: "/images/services/depannage.jpg",
  },
  {
    title: "Ramonage & tubage",
    description: "Ramonage et tubage de cheminées pour une installation sûre et conforme.",
    image: "/images/services/ramonage.jpg",
  },
]

onMounted(() => {
  if (!sectionRef.value) return

  const validCards = cardsRef.value.filter(Boolean)

  gsap.from(validCards, {
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top 75%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 32,
    duration: 1,
    ease: "power2.out",
    stagger: 0.22,
  })
})
</script>

<template>
  <section
    id="services"
    ref="sectionRef"
    aria-labelledby="services-title"
    class="py-16 md:py-24 bg-primary-bg"
  >
    <div class="max-w-[1440px] mx-auto px-4">
      <!-- Header -->
      <header class="mb-12 text-center">
        <h2 id="services-title" class="text-3xl md:text-5xl font-extrabold">
          Nos services de
          <span class="text-primary">rénovation</span> &
          <span class="text-primary">toiture</span>
        </h2>

        <p class="mt-6 text-gray-700 max-w-2xl mx-auto text-medium md:text-lg font-semibold">
          CG Renov propose une gamme complète de services pour vos travaux de rénovation,
          avec une expertise particulière en toiture.
        </p>

        <div class="mx-auto mt-8 h-1 w-32 rounded-full bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
      </header>

      <!-- Cards -->
      <div class="pt-4 md:pt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          :ref="el => el && (cardsRef[i] = el as HTMLElement)"
        >
          <div
            class="group relative block overflow-hidden rounded-lg bg-white shadow-md
                   hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <!-- Image -->
            <div class="relative aspect-[4/3] overflow-hidden">
              <img
                :src="service.image"
                :alt="service.title"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              >

              <!-- Overlay visuel uniquement -->
              <div
                class="absolute inset-0 bg-gradient-to-t
                       from-black/70 via-black/20 to-transparent
                       opacity-0 group-hover:opacity-100
                       transition-opacity duration-300"
              />
            </div>

            <!-- Texte -->
            <div class="p-6 bg-white">
              <h3
                class="text-lg font-black text-slate-900 mb-3 uppercase tracking-tight
                       group-hover:text-primary transition-colors"
              >
                {{ service.title }}
              </h3>

              <p class="text-sm text-slate-600 leading-relaxed font-medium mb-4">
                {{ service.description }}
              </p>

              <!-- Badge + Ligne décorative -->
              <div class="flex items-center justify-between">
                <span
                  class="inline-flex items-center px-3 py-1 text-xs font-bold
                         text-primary bg-primary/10 uppercase tracking-wider"
                >
                  Service
                </span>

                <div
                  class="h-1 w-0 bg-primary
                         group-hover:w-16 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
