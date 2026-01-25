<script setup lang="ts">
import { onMounted, ref } from "vue"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement[]>([])

const services = [
  {
    title: "Toiture - Tuiles & Ardoises",
    description: "Travaux de toiture en tuiles et ardoises, adaptés à tous types de bâtiments et d’inclinaisons.",
    image: "/images/services/toiture.jpg",
  },
  {
    title: "Isolation",
    description: "Optimisez votre consommation d’énergie grâce à des solutions d’isolation adaptées à votre budget et à vos besoins.",
    image: "/images/services/isolation.jpg",
  },
  {
    title: "Toiture plate",
    description: "Spécialistes des toitures plates résidentielles et industrielles, avec des solutions durables et étanches.",
    image: "/images/services/toit-plat.jpg",
  },
  {
    title: "Ossature bois & Charpente",
    description: "Passionnés par le travail du bois, nous réalisons charpentes et structures en ossature bois pour maisons et annexes.",
    image: "/images/services/ossature-bois.jpg",
  },
  {
    title: "Zinguerie",
    description: "Réalisation et rénovation de zinguerie : corniches, gouttières, joints debout et finitions pour une étanchéité optimale.",
    image: "/images/services/zinguerie.jpg",
  },
  {
    title: "Ramonage & Tubage cheminée",
    description: "Raminage et tubage de cheminée avec attestation assurance.",
    image: "/images/services/cheminee.jpg",
  },
  {
    title: "Maçonnerie & béton",
    description: "Maçonnerie : blocs, briques, dalles de béton et autres travaux structurels.",
    image: "/images/services/maçonnerie.jpg",
  },
  {
    title: "Crépis sur isolant",
    description: "Réalisation de crépis sur isolant et pose de briquettes de façade.",
    image: "/images/services/crepis.jpg",
  },
  {
    title: "Panneaux Photovoltaïques",
    description: "Gagnez sur votre consommation d'énérgie en faisant appel à nous pour la pose de panneaux photovoltaïques.",
    image: "/images/services/panneaux.jpg",
  },
  {
    title: "Rénovation intérieure",
    description: "Carrelage, parquet et plafonnage pour une rénovation intérieure complète.",
    image: "/images/services/renovation.jpg",
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
    <div class="max-w-[1240px] mx-auto px-4">
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
      <div class="pt-4 md:pt-6 grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          :ref="el => el && (cardsRef[i] = el as HTMLElement)"
          :class="{
            'lg:col-start-2': services.length % 3 === 1 && i === services.length - 1
          }"
        >
          <div
            class="group relative block overflow-hidden rounded-lg bg-white shadow-md
                   hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <!-- Image -->
            <div class="relative aspect-video overflow-hidden">
              <img
                :src="service.image"
                :alt="service.title"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              >

              <div
                class="absolute inset-0 bg-gradient-to-t
                       from-black/70 via-black/20 to-transparent
                       opacity-0 group-hover:opacity-100
                       transition-opacity duration-300"
              />
            </div>

            <!-- Texte (même “feeling” qu’avant) -->
            <div class="p-6 bg-white">
              <h3
                class="text-lg font-black text-slate-900 mb-3 uppercase tracking-tight
                       group-hover:text-primary transition-colors"
              >
                {{ service.title }}
              </h3>

              <!-- 🔧 Hauteur contrôlée pour éviter les cards “plus grandes” -->
              <p class="text-sm text-slate-600 leading-relaxed font-medium mb-4 min-h-[72px]">
                {{ service.description }}
              </p>

              <!-- Badge + Ligne décorative (comme avant) -->
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

