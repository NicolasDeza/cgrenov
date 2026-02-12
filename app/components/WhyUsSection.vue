<script setup lang="ts">
import { onMounted, ref } from "vue"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import {
  ShieldCheck,
  Clock,
  Home,
  Wrench,
} from "lucide-vue-next";

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement[]>([])

const reasons = [
  {
    title: "Travail soigné",
    description:
      "Des finitions propres et durables, réalisées dans le respect des normes du bâtiment.",
    icon: ShieldCheck,
  },
  {
    title: "Respect des délais",
    description:
      "Une organisation rigoureuse pour des chantiers livrés dans les délais annoncés.",
    icon: Clock,
  },
  {
    title: "Expertise toiture",
    description:
      "Une spécialisation en toiture et couverture pour des travaux fiables et durables.",
    icon: Home,
  },
  {
    title: "Équipement professionnel",
    description:
      "Du matériel de qualité professionnelle pour garantir des résultats optimaux.",
    icon: Wrench,
  },
];

onMounted(() => {
  if (!sectionRef.value) return

  // Nettoyer les refs undefined/null
  const validCards = cardsRef.value.filter(Boolean)

  gsap.from(validCards, {
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top 75%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 32,
    duration: 0.9,
    ease: "power2.out",
    stagger: 0.24,
  })
})

</script>

<template>
  <section ref="sectionRef" class="w-full bg-[#F5F5F5] px-6 py-16 md:py-24">
    <div class="mx-auto max-w-[1440px]">
      <header class="flex flex-col items-center text-center mb-12"> <p class="text-sm font-semibold text-primary uppercase tracking-widest mb-3">+ Pourquoi nous choisir</p>
        
        <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Pourquoi choisir <span class="text-primary">CG Renov</span>
        </h2>
        
        <div class="mt-6 h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:row-span-2 bg-primary rounded-2xl p-8 flex flex-col justify-center items-center text-center text-white shadow-xl shadow-primary/20 relative overflow-hidden group">
            <div class="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-all duration-500 group-hover:bg-white/20" />
            
            <div class="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 mb-6 backdrop-blur-sm border border-white/30">
                <component :is="ShieldCheck" class="h-10 w-10 text-white" />
            </div>
          
            <h3 class="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Nous nous soucions de <br> votre projet !
            </h3>
          
            <div class="h-1 w-20 bg-white/40 rounded-full mb-6" />
          
            <p class="text-white/90 mb-8 max-w-sm leading-relaxed">
                Vous souhaitez obtenir une source d'énergie fiable et contribuer à la préservation de la Terre ? 
            </p>
          
            <a href="tel:+32493329794" class="inline-flex flex-col items-center px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-gray-100 transition-transform active:scale-95 shadow-lg">
                <span class="text-xs uppercase tracking-widest opacity-70">Appelez-nous</span>
                <span class="text-xl">+32 493 32 97 94</span>
            </a>
        </div>

        <div
          v-for="(reason, i) in reasons"
          :key="reason.title"
          :ref="el => el && (cardsRef[i] = el as HTMLElement)"
          :class="{ 'lg:row-span-2': i === 3 }"
        >
          <WhyUsItem
            :title="reason.title"
            :description="reason.description"
            :icon="reason.icon"
          />
        </div>
      </div>
    </div>
  </section>
</template>