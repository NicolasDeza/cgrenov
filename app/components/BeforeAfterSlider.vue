<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const container = ref<HTMLElement | null>(null)
const sliderX = ref(50)
const contentRef = ref<HTMLElement | null>(null)

const updatePosition = (clientX: number) => {
  if (!container.value) return

  const rect = container.value.getBoundingClientRect()
  const x = ((clientX - rect.left) / rect.width) * 100
  sliderX.value = Math.min(100, Math.max(0, x))
}

const startDrag = (e: PointerEvent) => {
  if (!container.value) return

  // Capture du doigt / pointer
  container.value.setPointerCapture(e.pointerId)

  updatePosition(e.clientX)

  const move = (event: PointerEvent) => {
    updatePosition(event.clientX)
  }

  const stop = () => {
    container.value?.releasePointerCapture(e.pointerId)
    window.removeEventListener('pointermove', move)
    window.removeEventListener('pointerup', stop)
  }

  window.addEventListener('pointermove', move)
  window.addEventListener('pointerup', stop)
}

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
})
</script>


<template>
  <section class="w-full px-6 py-16 md:py-24">
    <div class="max-w-[1440px] mx-auto">
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Partie Before/After (gauche) -->
        <div
          ref="container"
          class="relative w-full overflow-hidden rounded-xl shadow-lg select-none cursor-ew-resize touch-none"
          @pointerdown.prevent="startDrag"
        >
          <!-- Badge Chantier Récent -->
          <div class="absolute top-6 left-6 bg-primary text-white text-xs font-bold px-4 py-2 rounded z-20 pointer-events-none uppercase tracking-wide">
            Chantier récent
          </div>

          <!-- AVANT -->
          <NuxtImg
            src="/images/before/before.jpg"
            alt="Avant travaux"
            class="w-full h-auto block pointer-events-none"
            loading="lazy"
          />

          <!-- APRES -->
          <div
            class="absolute inset-0 overflow-hidden pointer-events-none"
            :style="{ width: sliderX + '%' }"
          >
            <NuxtImg
              src="/images/before/after.jpg"
              alt="Après travaux"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <!-- Ligne -->
          <div
            class="absolute top-0 bottom-0 w-1 bg-white shadow pointer-events-none"
            :style="{ left: sliderX + '%' }"
          />

          <!-- Handle -->
          <div
            class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2
                   w-10 h-10 rounded-full bg-white shadow-lg
                   flex items-center justify-center pointer-events-none z-10"
            :style="{ left: sliderX + '%' }"
          >
            <span class="text-lg font-bold">↔</span>
          </div>
        </div>

        <!-- Partie Texte (droite) -->
        <div ref="contentRef" class="flex flex-col gap-6 md:pl-6 lg:pl-10">

  <h2 class="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15]">
    Des rénovations <span class="text-primary">visibles</span>, durables et soignées
  </h2>

  <div class="h-1 w-32 bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-full" />

  <div class="space-y-6">
    <p class="text-lg text-slate-600 leading-relaxed">
      Chaque chantier réalisé par <span class="text-slate-900 font-bold border-b-2 border-primary/30">CG Renov</span> est pensé dans le respect des normes et des attentes de nos clients.
    </p>

    <ul class="grid grid-cols-1 gap-3 py-2">
      <li class="flex items-center gap-3 text-slate-700 font-medium">
        <div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
          <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
        </div>
        Matériaux de haute qualité certifiés
      </li>
      <li class="flex items-center gap-3 text-slate-700 font-medium">
        <div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
          <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
        </div>
        Organisation rigoureuse et propreté
      </li>
    </ul>

  
  </div>

  <div class="pt-3">
    <NuxtLink
      to="/contact"
      class="group relative inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-8 py-3 font-extrabold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
    >
      <span class="relative z-10 uppercase tracking-wider">Discuter de mon projet</span>
      <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
      
    </NuxtLink>
  </div>
</div>
      </div>
    </div>
  </section>
</template>
