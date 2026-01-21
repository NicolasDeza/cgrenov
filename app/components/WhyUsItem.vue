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
    class="group flex flex-col items-center text-center rounded-lg bg-white px-6 py-6 md:px-8 md:py-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg "
  >
    <!-- Icône -->
    <div
      class="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20"
    >
      <component :is="icon" class="h-7 w-7" />
    </div>
    <!-- Texte -->
    <div class="mt-4 px-6">
      <h3 class="font-bold text-foreground text-lg">
        {{ title }}
      </h3>
      <div class="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-primary/60 via-primary to-primary/60"/>
      <p class="mt-4 text-gray-700">
        {{ description }}
      </p>
    </div>
  </div>
</template>
