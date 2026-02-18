<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute } from "vue-router";


const route = useRoute();

// Détecte si on est sur une section spécifique
const currentHash = computed(() => route.hash);

// Menu mobile gestion état
const isMenuOpen = ref(false);

// Dropdown services mobile
// const isServicesMobileOpen = ref(false);

// Dropdown services desktop
// const isServicesDropdownOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};


// Fermer le menu avec la touche Escape ( accèssibilité)
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape" && isMenuOpen.value) {
    closeMenu();
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <header
    class="top-0 z-50 sticky w-full bg-white backdrop-blur-lg border-b border-gray-200/60 transition-all duration-300"
  >
    <nav
      class="max-w-[1440px] mx-auto px-6 lg:px-4 h-20 flex items-center justify-between"
      aria-label="Navigation principale"
    >
      <NuxtLink to="/" class="flex items-center" @click="closeMenu">
        <NuxtImg
          src="/images/logo/logo-cg-renov.png"
          alt="Logo CG Renov"
          class="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105" 
          loading="eager"
        />
      </NuxtLink>

      <div class="hidden md:flex items-center gap-12">
        <ul class="flex items-center gap-8 text-[15.5px] font-semibold tracking-wider">
          <li
v-for="link in [
            { name: 'Accueil', to: '/', active: route.path === '/' && !currentHash },
            { name: 'Services', to: '/#services', active: currentHash === '#services' },
            { name: 'Contact', to: '/contact', active: route.path === '/contact' }
          ]" :key="link.name">
             <NuxtLink
  :to="link.to"
  class="relative inline-block px-2 py-2 text-gray-700 font-semibold transition-colors duration-300 group"
  :class="link.active ? 'text-primary' : 'hover:text-primary'"
>
  {{ link.name }}

  <!-- underline -->
  <span
    class="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] bg-primary transition-transform duration-300 origin-center"
    :class="link.active ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'"
  />
</NuxtLink>


          </li>
        </ul>

        <NuxtLink
          to="/contact"
          class="group relative inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white  transition-all duration-300 hover:shadow-xl  hover:scale-105 overflow-hidden"
        >
          <span class="relative z-10 tracking-wide">Mon devis gratuit</span>
          <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-700" />
        </NuxtLink>
      </div>

      <button
        type="button"
        class="md:hidden p-2 flex flex-col justify-center items-center gap-1.5 w-10 h-10"
        aria-label="Menu"
        @click="toggleMenu"
      >
        <span 
          class="w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300"
          :class="{ 'rotate-45 translate-y-2': isMenuOpen }"
        />
        <span 
          class="w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300"
          :class="{ 'opacity-0': isMenuOpen }"
        />
        <span 
          class="w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"
        />
      </button>
    </nav>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div v-if="isMenuOpen" class="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl">
        <nav class="max-w-7xl mx-auto px-6 py-6">
          <ul class="flex flex-col gap-3 ">
            <li
v-for="link in [
              { name: 'Accueil', to: '/', active: route.path === '/' && !currentHash },
              { name: 'Services', to: '/#services', active: currentHash === '#services' },
              { name: 'Contact', to: '/contact', active: route.path === '/contact' }
            ]" :key="link.name">
              <NuxtLink 
                :to="link.to" 
                class="block px-4 py-3 rounded-lg font-semibold transition-all duration-200"
                :class="link.active ? 'text-primary' : 'text-gray-700 hover:text-primary'"
                @click="closeMenu"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
            <li class="mt-2">
              <NuxtLink 
                to="/contact" 
                class="group relative flex items-center justify-center px-4 py-3.5 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/25 overflow-hidden"
                @click="closeMenu"
              >
                <span class="relative z-10">Mon devis gratuit</span>
                <div class="absolute inset-0 bg-white/10 opacity-0 group-active:opacity-100 transition-opacity duration-200" />
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </Transition>
  </header>
</template>