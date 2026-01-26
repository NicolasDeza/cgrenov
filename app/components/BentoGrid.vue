<script setup lang="ts">

</script>

<template>
  <section class="w-full px-6 pb-16 md:pb-24">
    <div class="max-w-[1440px] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[200px_100px_200px] gap-4">
    <!-- Card 1: GRANDE (haut gauche, 2 rows) -->
    <div class="rounded-2xl overflow-hidden hover:shadow-md md:row-start-1 md:row-end-3 md:col-start-1 hover:scale-105 hover:brightness-105 transition-all duration-500">
      <NuxtImg src="/images/bentogrid/bento-1.jpg" alt="Image 1" class="w-full h-full object-cover" />
    </div>

    <!-- Card 2: PETITE (haut droite) -->
    <div class="rounded-2xl overflow-hidden hover:shadow-md md:row-start-1 md:row-end-2 md:col-start-2 hover:scale-105 hover:brightness-105 transition-all duration-500">
      <NuxtImg src="/images/bentogrid/bento-2.jpg" alt="Image 2" class="w-full h-full object-cover" />
    </div>

    <!-- Card 3: PETITE (bas gauche) -->
    <div class="rounded-2xl overflow-hidden hover:shadow-md md:row-start-3 md:row-end-4 md:col-start-1 hover:scale-105 hover:brightness-105 transition-all duration-500">
      <NuxtImg src="/images/bentogrid/bento-3.jpg" alt="Image 3" class="w-full h-full object-cover" />
    </div>

    <!-- Card 4: GRANDE (bas droite, 2 rows) -->
    <div class="rounded-2xl overflow-hidden hover:shadow-md md:row-start-2 md:row-end-4 md:col-start-2 hover:scale-105 hover:brightness-105 transition-all duration-500">
      <NuxtImg src="/images/bentogrid/bento-4.jpg" alt="Image 4" class="w-full h-full object-cover" />
    </div>
      </div>
    </div>
  </section>
</template>