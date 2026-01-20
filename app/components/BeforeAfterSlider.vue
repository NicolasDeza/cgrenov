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
  updatePosition(e.clientX)

  const move = (event: PointerEvent) => {
    updatePosition(event.clientX)
  }

  const stop = () => {
    window.removeEventListener('pointermove', move)
    window.removeEventListener('pointerup', stop)
  }

  window.addEventListener('pointermove', move)
  window.addEventListener('pointerup', stop)
}
</script>

<template>
  <section class="w-full max-w-[1000px] mx-auto py-24">
    <div
      ref="container"
      class="relative w-full overflow-hidden rounded-xl shadow-lg select-none cursor-ew-resize"
      @pointerdown.prevent="startDrag"
    >
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

      <!-- Labels -->
      <div class="absolute top-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded pointer-events-none">
        Avant
      </div>
      <div class="absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded pointer-events-none">
        Après
      </div>
    </div>
  </section>
</template>
