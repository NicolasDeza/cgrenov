<script setup lang="ts">
import {
  ShieldCheck,
  Clock,
  Home,
  Wrench,
} from "lucide-vue-next";

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
      "Du matériel de qualité pour garantir des résultats optimaux.",
    icon: Wrench,
  },
];

</script>

<template>
  <section
  class="w-full bg-[#F5F5F5] py-16 md:py-24 "
  aria-label="Pourquoi choisir CG Renov"
>
    <div class="mx-auto max-w-[1440px] px-6">
      <!-- Titre -->
      <header class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div class="max-w-2xl">
          <p class="text-sm font-semibold text-primary uppercase tracking-wide mb-2">+ Pourquoi nous choisir</p>
          <h2
            class="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
          >
            Pourquoi choisir CG Renov
          </h2>

         
        </div>

        <div class="text-right shrink-0">
          <p class="text-2xl md:text-3xl font-bold text-primary">+32 493 32 97 94</p>
          <p class="mt-1 text-sm text-gray-600 italic">Cyril Grand Henry - Patron</p>
        </div>
      </header>

      <!-- Grille avec grande card à gauche -->
      <div class="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Grande carte à gauche -->
        <div class="lg:row-span-2 bg-primary rounded-lg p-8 flex flex-col justify-center items-center text-center text-white">
          <div class="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 mb-6">
            <component :is="ShieldCheck" class="h-10 w-10" />
          </div>
          
          <h3 class="text-2xl md:text-3xl font-bold mb-4">
            Nous nous soucions de votre projet !
          </h3>
          
          <div class="h-1 w-24 bg-white/50 rounded-full mb-6" />
          
          <p class="text-white/90 mb-8 max-w-sm">
            Vous souhaitez obtenir une source d'énergie fiable et contribuer à la préservation de la Terre ? Contactez-nous pour les meilleures solutions !
          </p>
          
          <a href="tel:+32493329794" class="text-2xl font-bold hover:text-white/90 transition">
            +32 493 32 97 94
          </a>
        </div>

        <!-- Petites cartes à droite -->
        <WhyUsItem
          v-for="reason in reasons"
          :key="reason.title"
          :title="reason.title"
          :description="reason.description"
          :icon="reason.icon"
        />
      </div>
    </div>
  </section>
</template>