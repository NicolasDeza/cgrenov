<script setup lang="ts">
import { onMounted, ref } from "vue"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

defineProps<{
  image?: string
}>()

const contentRef = ref<HTMLElement | null>(null)
const clientsCount = ref<HTMLElement | null>(null)
const anneesCount = ref<HTMLElement | null>(null)

const stats = [
  { ref: clientsCount, value: 100, suffix: '+', label: 'Clients satisfaits' },
  { ref: anneesCount, value: 8, suffix: '', label: "Années d'expérience" }
]

onMounted(() => {
  if (!contentRef.value) return

  gsap.from(contentRef.value.children, {
    scrollTrigger: {
      trigger: contentRef.value,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: 30,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.15,
  })

  // Animation des compteurs
  stats.forEach(stat => {
    if (!stat.ref.value) return
    
    gsap.to({ val: 0 }, {
      val: stat.value,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: stat.ref.value,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate: function() {
        if (stat.ref.value) {
          stat.ref.value.textContent = Math.floor(this.targets()[0].val).toString()
        }
      }
    })
  })
})
</script>

<template>
  <section class="w-full bg-[#11171D]">
    <div class="flex flex-col lg:flex-row">
      <!-- Image -->
      <div class="relative h-[320px] lg:h-auto lg:w-1/2">
        <NuxtImg
          :src="image || '/images/cta/split.jpg'"
          alt="Projet de rénovation"
          class="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <!-- overlay -->
        <!-- <div class="absolute inset-0 bg-black/20"/> -->
      </div>
     


      <!-- Texte -->
      <div ref="contentRef" class="flex flex-col justify-center px-6 py-16 md:py-20 lg:px-20  text-white lg:w-1/2">
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
        <!-- Stats animées -->
        <div class="mt-10 flex items-center justify-start gap-12 md:gap-16">
          <div v-for="(stat, index) in stats" :key="index" class="text-center">
            <div class="flex items-baseline justify-center gap-1">
              <span 
                :ref="el => el && (stat.ref.value = el as HTMLElement)"
                class="text-4xl md:text-5xl font-bold text-primary"
              >
                0
              </span>
              <span class="text-3xl md:text-4xl font-bold text-primary">{{ stat.suffix }}</span>
            </div>
            <p class="mt-2 text-xs md:text-sm text-white/70 font-medium">{{ stat.label }}</p>
          </div>
        </div>
        <div class="mt-10">
          <NuxtLink
            to="/contact"
            class="group relative inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3
                   font-semibold text-white overflow-hidden transition-all duration-300 ease-out hover:scale-105
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                   focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            <span class="relative z-10">Mon devis gratuit</span>
            <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
