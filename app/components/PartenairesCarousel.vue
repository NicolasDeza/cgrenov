<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue"
import gsap from "gsap"

const stack = [
  { name: "Nuxt", src: "" },
  { name: "Vue", src: "" },
  { name: "Tailwind", src: "" },
  { name: "Laravel", src: "" },
 
]

const track = ref<HTMLDivElement | null>(null)
let tween: gsap.core.Tween | null = null

const setupMarquee = () => {
  if (!track.value) return

  // kill ancien tween si on rebuild (resize, etc.)
  tween?.kill()
  gsap.set(track.value, { x: 0 })

  // IMPORTANT : on double dans le template => la moitié = une "boucle"
  const loopWidth = track.value.scrollWidth / 2
  if (!loopWidth) return

  const wrapX = gsap.utils.wrap(-loopWidth, 0)
  const wrapXpx = gsap.utils.unitize((v: number) => wrapX(v)) // => "123px"

  tween = gsap.to(track.value, {
    x: -loopWidth,
    duration: 25,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: wrapXpx,
    },
  })
}

onMounted(async () => {
  await nextTick()
  // laisse une frame pour que le layout soit stable (fonts, etc.)
  requestAnimationFrame(setupMarquee)

  window.addEventListener("resize", setupMarquee)
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", setupMarquee)
  tween?.kill()
})
</script>

<template>
  <section class="py-16 md:py-24">
    <header class="mb-12 text-center">
       
        <h2 class="text-3xl md:text-5xl font-extrabold">
          Découvrez nos <span class="text-primary">partenaires</span>
        </h2>
        <p class="mt-4 text-gray-700 max-w-2xl mx-auto text-medium md:text-lg font-semibold">
          Des projets variés témoignant de notre savoir-faire et de notre engagement qualité.
        </p>
        <div class="mx-auto mt-6 h-1 w-32 rounded-full bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
      </header>

    <div class="mx-auto max-w-[850px] px-6">
      <div class="relative overflow-hidden">
        <div
          ref="track"
          class="flex w-max gap-12 will-change-transform"
        >
          <!-- DOUBLE ICI (pas de clone DOM) -->
          <div
            v-for="(item, index) in [...stack, ...stack, ...stack]"
            :key="index"
            class="flex flex-col items-center min-w-[120px] opacity-70 hover:opacity-100 transition"
          >
            <div class="flex items-center justify-center h-24 w-24 rounded-lg bg-gray-100 mb-2">
              <span class="text-2xl font-bold text-gray-400">
                {{ item.name.charAt(0) }}
              </span>
            </div>
            <span class="text-sm text-gray-700">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
