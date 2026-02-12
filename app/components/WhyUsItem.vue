<script setup lang="ts">
import type { Component } from "vue";

defineProps<{
  title: string;
  description: string;
  icon: Component;
}>();
</script>

<template>
  <div
    class="group relative flex flex-col items-center text-center rounded-2xl bg-gradient-to-br from-white via-white to-gray-50/30 px-6 py-8 md:px-8 md:py-7 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08),0_8px_16px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:border-primary/20 overflow-hidden"
  >
    <!-- Effet de brillance au hover -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    
    <!-- Icône avec effet pulse -->
    <div class="relative z-10">
      <div
        class="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 via-primary/15 to-primary/5 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_8px_24px_rgba(251,146,60,0.25)] group-hover:from-primary/20 group-hover:via-primary/25 group-hover:to-primary/10"
      >
        <component :is="icon" class="h-8 w-8 transition-transform duration-500 group-hover:scale-110" />
      </div>
    </div>
    
    <!-- Texte -->
    <div class="mt-4 relative z-10">
      <h3 class="font-bold text-foreground text-lg tracking-tight transition-colors duration-300 group-hover:text-primary">
        {{ title }}
      </h3>
      <div class="mx-auto mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 group-hover:opacity-100 group-hover:w-20 transition-all duration-500"/>
      <p class="mt-3 text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
        {{ description }}
      </p>
    </div>
  </div>
</template>
