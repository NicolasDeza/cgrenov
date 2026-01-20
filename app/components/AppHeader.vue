<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute } from "vue-router";


const route = useRoute();

// Détecte si on est sur une section spécifique
const currentHash = computed(() => route.hash);

// Menu mobile gestion état
const isMenuOpen = ref(false);

// Dropdown services mobile
const isServicesMobileOpen = ref(false);

// Dropdown services desktop
const isServicesDropdownOpen = ref(false);

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
    class="sticky top-0 z-50 w-full bg-primary-bg text-foreground border-b border-gray-200 transition-colors"
  >
    <nav
      class="max-w-[1440px] mx-auto px-4 flex items-center justify-between"
      aria-label="Navigation principale"
    >
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex items-center gap-2"
        aria-label="Retour à l'accueil"
        @click="closeMenu"
      >
        <NuxtImg
             src="/images/logo/logo-cg-renov.png"
             alt="Logo CG Renov"
             class="h-20 w-auto"
             loading="eager"
             decoding="async"
            />
      </NuxtLink>

      <!-- Navigation desktop -->
      <ul class="hidden ml-12 md:flex items-center gap-8 font-semibold">
        <li>
          <NuxtLink
            to="/"
            class="inline-flex items-center h-[24px] leading-[24px] hover:text-primary transition-colors pb-1 border-b-2 border-transparent"
            :class="{ '!border-primary !text-primary': route.path === '/' && !currentHash }"
          >
            Accueil
          </NuxtLink>
        </li>
        
        <li class="relative group">
  <button
    type="button"
    class="inline-flex items-center gap-2 h-[24px] leading-[24px]
           hover:text-primary transition-colors
           pb-1 border-b-2 border-transparent font-semibold"
    :class="{ '!border-primary !text-primary': currentHash === '#services' }"
    :aria-expanded="isServicesDropdownOpen"
    aria-haspopup="true"
    aria-label="Menu Services"
    @mouseenter="isServicesDropdownOpen = true"
    @mouseleave="isServicesDropdownOpen = false"
    @focus="isServicesDropdownOpen = true"
    @blur="isServicesDropdownOpen = false"
    @click="$router.push('/#services')"
  >
    Services
    <!-- Chevron CSS -->
    <span
      class="inline-block w-2 h-2 border-r-2 border-b-2 border-current
             rotate-45"
      aria-hidden="true"
    />
  </button>

  <!-- Dropdown -->
  <div
    class="absolute left-0 top-full mt-3 w-64
           bg-white dark:bg-slate-800
           rounded-lg shadow-xl border border-gray-200 dark:border-gray-700
           py-2
           transition-all duration-150 z-50"
    :class="{
      'opacity-100 visible': isServicesDropdownOpen,
      'opacity-0 invisible': !isServicesDropdownOpen
    }"
    role="menu"
    aria-label="Sous-menu Services"
    @mouseenter="isServicesDropdownOpen = true"
    @mouseleave="isServicesDropdownOpen = false"
  >
    <NuxtLink
      to="/#services"
      class="block px-4 py-2.5 text-sm hover:bg-primary/10 hover:text-primary transition"
      role="menuitem"
      tabindex="0"
    >
      Tous nos services
    </NuxtLink>

    <div class="h-px bg-gray-200 dark:bg-gray-700 my-1" role="separator" />

    <NuxtLink
      to="/services/toiture"
      class="block px-4 py-2.5 text-sm hover:bg-primary/10 hover:text-primary transition"
      role="menuitem"
      tabindex="0"
    >
      Toiture & couverture
    </NuxtLink>

    <NuxtLink
      to="/services/renovation"
      class="block px-4 py-2.5 text-sm hover:bg-primary/10 hover:text-primary transition"
      role="menuitem"
      tabindex="0"
    >
      Rénovation générale
    </NuxtLink>

    <NuxtLink
      to="/services/isolation"
      class="block px-4 py-2.5 text-sm hover:bg-primary/10 hover:text-primary transition"
      role="menuitem"
      tabindex="0"
    >
      Isolation & étanchéité
    </NuxtLink>

    <NuxtLink
      to="/services/exterieur"
      class="block px-4 py-2.5 text-sm hover:bg-primary/10 hover:text-primary transition"
      role="menuitem"
      tabindex="0"
    >
      Travaux extérieurs
    </NuxtLink>
  </div>
</li>


         <li>
          <NuxtLink
            to="/realisations"
            class="inline-flex items-center h-[24px] leading-[24px] hover:text-primary transition-colors pb-1 border-b-2 border-transparent"
            active-class="!border-primary !text-primary"
          >
            Réalisations
          </NuxtLink>
        </li>
     
       
        <li>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center h-[24px] leading-[24px] hover:text-primary transition-colors pb-1 border-b-2 border-transparent"
            active-class="!border-primary !text-primary"
          >
            Contact
          </NuxtLink>
        </li>

        
      </ul>

      <!-- Actions -->
      <div class="flex items-center gap-3">
       

        <!-- CTA desktop -->
        <NuxtLink
          to="/contact"
          class="hidden sm:inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover hover:scale-105 transition-transform"
        >
          Contact
        </NuxtLink>

        <!-- Hamburger mobile -->
        <button
          type="button"
          class="md:hidden h-9 w-9 rounded-md hover:bg-gray-100 flex items-center justify-center transition-colors"
          :aria-label="isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          @click="toggleMenu"
        >
          <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-700 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-700 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Menu mobile -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMenuOpen"
        id="mobile-menu"
        class="md:hidden bg-primary-bg border-t border-gray-200 "
        role="region"
        aria-label="Menu de navigation mobile"
      >
        <ul class="flex flex-col px-4 py-4 gap-1 text-sm font-medium">
          <li>
            <NuxtLink to="/" class="block py-2" @click="closeMenu">
              Accueil
            </NuxtLink>
          </li>

          <!-- Services mobile avec accordéon -->
          <li>
            <button
              type="button"
              class="flex items-center justify-between w-full py-2 text-left text-foreground"
              :aria-expanded="isServicesMobileOpen"
              aria-controls="services-submenu"
              aria-label="Afficher le sous-menu Services"
              @click="isServicesMobileOpen = !isServicesMobileOpen"
            >
              <span>Services</span>
              <span
                class="inline-block w-2 h-2 border-r-2 border-b-2 border-current rotate-45 transition-transform"
                :class="{ 'rotate-[225deg]': isServicesMobileOpen }"
                aria-hidden="true"
              />
            </button>
            
            <!-- Sous-menu Services -->
            <Transition
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-96 opacity-100"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="max-h-96 opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <ul v-if="isServicesMobileOpen" id="services-submenu" class="ml-4 mt-1 space-y-1 overflow-hidden">
                <li>
                  <NuxtLink to="/#services" class="block py-2 text-sm text-primary font-semibold" @click="closeMenu">
                    Tous nos services
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/toiture" class="block py-1.5 text-sm" @click="closeMenu">
                    Toiture & couverture
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/renovation" class="block py-1.5 text-sm" @click="closeMenu">
                    Rénovation générale
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/isolation" class="block py-1.5 text-sm" @click="closeMenu">
                    Isolation & étanchéité
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/exterieur" class="block py-1.5 text-sm" @click="closeMenu">
                    Travaux extérieurs
                  </NuxtLink>
                </li>
              </ul>
            </Transition>
          </li>

         <li>
            <NuxtLink to="/realisations" class="block py-2" @click="closeMenu">
              Réalisations
            </NuxtLink>
          </li>

          
          <li>
            <NuxtLink to="/contact" class="block py-2" @click="closeMenu">
              Contact
            </NuxtLink>
          </li>

          <!-- CTA mobile -->
          <li class="pt-2">
            <NuxtLink
              to="/contact"
              class="inline-flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover transition"
              @click="closeMenu"
            >
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
