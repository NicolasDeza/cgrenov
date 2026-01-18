<script setup lang="ts">
import {
  ShieldCheck,
  Clock,
  Home,

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

          <p class="mt-4 text-gray-700 font-semibold">
            Nous mettons notre savoir-faire au service de vos projets,
            avec une approche sérieuse, transparente et orientée qualité.
          </p>
        </div>

        <div class="text-right shrink-0">
          <p class="text-2xl md:text-3xl font-bold text-primary">+32 493 32 97 94</p>
          <p class="mt-1 text-sm text-gray-600 italic">Cyril Grand Henry - Patron</p>
        </div>
      </header>

      <!-- Grille -->
      <div class="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
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
