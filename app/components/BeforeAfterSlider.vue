<script setup lang="ts">
import { ref } from 'vue'

const container = ref<HTMLElement | null>(null)
const sliderX = ref(50)

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
</script>

<template>
  <section class="w-full px-6 py-16 md:py-24">
    <div class="max-w-7xl mx-auto">
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
        <div class="space-y-6">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Des rénovations visibles, durables et soignées
          </h2>

          <div class="space-y-4 text-gray-700">
            <p>
              Chaque chantier réalisé par <span class="text-orange-500 font-semibold">CG Renov</span> est pensé dans le respect des normes, des délais et des attentes du client. Nous accordons une attention particulière aux finitions et à la qualité des matériaux utilisés.
            </p>

            <p>
              Grâce à notre expérience terrain et à une organisation rigoureuse, nous garantissons des rénovations durables, esthétiques et fonctionnelles, adaptées à votre mode de vie.
            </p>
          </div>

          <div>
            <NuxtLink
              to="/realisations"
              class="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-hover hover:scale-105 transition-all duration-200"
            >
              Voir nos réalisations
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
