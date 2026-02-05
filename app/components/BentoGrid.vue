<script setup lang="ts">
import { ref, onMounted } from "vue"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const container = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!container.value) return

  const cards = container.value.querySelectorAll('.bento-card')

  gsap.from(cards, {
    clipPath: "inset(100% 0% 0% 0%)",
    duration: 1,
    ease: "power3.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: container.value,
      start: "top 80%",
      toggleActions: "play none none none",
    }
  })
})
</script>

<template>
  <section class="w-full px-6 pb-16 md:pb-24">
    <div class="max-w-[1440px] mx-auto">
      <!-- Grid avec hauteurs personnalisées : petite + grande -->
      <div ref="container" class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[260px_330px] gap-4">
        <!-- Card 1: GRANDE (gauche, 2 rows) -->
        <div class="bento-card relative rounded-2xl overflow-hidden group md:row-span-2 shadow-md hover:shadow-2xl transition-shadow duration-500">
          <NuxtImg src="/images/bentogrid/bento-1.jpg" alt="Image 1" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"/>
        </div>

        <!-- Card 2: PETITE (haut droite) - Plus petite -->
        <div class="bento-card relative rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition-shadow duration-500">
          <NuxtImg src="/images/bentogrid/bento-3.jpg" alt="Image 2" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"/>
        </div>

        <!-- Card 3: commentée -->
        <!-- <div class="relative rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition-shadow duration-500">
          <NuxtImg src="/images/bentogrid/bento-3.jpg" alt="Image 3" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"/>
        </div> -->

        <!-- Card 4: GRANDE (bas droite) - Plus grande en hauteur -->
        <div class="bento-card relative rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition-shadow duration-500">
          <NuxtImg src="/images/bentogrid/bento-2.jpg" alt="Image 4" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"/>
        </div>
      </div>
    </div>
  </section>
</template>