<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue"
import gsap from "gsap"

const stack = [
  { name: "Velux", src: "/images/partenaires/velux-2.svg" },
  { name: "Sani Mat Wavre", src: "/images/partenaires/sanimat.svg" },
  { name: "Defrancq", src: "/images/partenaires/defrancq.svg" },
  { name: "Adam Matériaux", src: "/images/partenaires/adam.png" },
  
 
]

const track = ref<HTMLDivElement | null>(null)
let tween: gsap.core.Tween | null = null

const setupMarquee = () => {
  if (!track.value) return

  // kill ancien tween si on rebuild (resize, etc.)
  tween?.kill()
  gsap.set(track.value, { x: 0 })

  // On double dans le template => la moitié = une "boucle"
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
  // Frame pour layout stable
  requestAnimationFrame(setupMarquee)

  window.addEventListener("resize", setupMarquee)
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", setupMarquee)
  tween?.kill()
})
</script>

<template>
  <section class="py-16 md:py-24 px-4">
    <header class="mb-12 text-center">
       
        <h2 class="text-3xl md:text-5xl font-extrabold">
          Découvrez nos <span class="text-primary">partenaires</span>
        </h2>
        <p class="mt-4 text-gray-700 max-w-2xl mx-auto text-medium md:text-lg font-semibold">
          Des partenaires de confiance, reconnus pour leur expertise dans le secteur du bâtiment.
        </p>
        <div class="mx-auto mt-8 h-1 w-32 rounded-full bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
      </header>

    <div class="mx-auto max-w-[850px] px-6 mt-16">
      <div class="relative overflow-hidden">
        <div
          ref="track"
          class="flex w-max gap-12 will-change-transform"
        >
          <!-- Triplage de boucle  -->
          <div
            v-for="(item, index) in [...stack, ...stack, ...stack]"
            :key="index"
            class="flex flex-col items-center min-w-[150px]"
          >
            <div class="flex items-center justify-center h-24 w-30 sm:w-52 rounded-lg mb-2">
              <template v-if="item.src">
                <img :src="item.src" :alt="item.name" class="max-h-20 max-w-40 object-contain" >
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
