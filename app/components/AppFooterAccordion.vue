<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { Facebook, Instagram } from 'lucide-vue-next'
const year = new Date().getFullYear();


// Scroll accueil du footer
const route = useRoute()
const router = useRouter()

const handleLogoClick = async () => {
  if (route.path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    await router.push('/')
  }
}
// État pour gérer l'ouverture des accordéons (mobile uniquement)
const openSections = ref<Record<string, boolean>>({
  navigation: false,
  zone: false,
  resources: false,
});

const toggleSection = (section: string) => {
  openSections.value[section] = !openSections.value[section];
};
</script>

<template>
  <footer
    class="w-full border-foreground/20 bg-primary-bg"
    aria-label="Pied de page"
  >
    <div class="mx-auto max-w-[1440px] px-4 pt-8 md:pt-12 pb-4 md:pb-6">
      <!-- Grille responsive avec accordéon sur mobile -->
      <div class="grid gap-8 md:grid-cols-4">
        <!-- Colonne 1 : Branding (toujours visible) -->
        <div class="text-center  md:text-left pb-6">
          <button
           type="button"
           aria-label="Retour à l'accueil"
           class="inline-flex"
          @click="handleLogoClick"
          >
         <NuxtImg
          src="/images/logo/logo-cg-renov.png"
         alt="CG Renov"
         class="h-20 w-auto"
         />
         </button>
          <p
            class="mt-2 text-sm text-foreground/60 mx-auto md:mx-0 max-w-[280px]"
          >
            Artisan en rénovation en Belgique, spécialisé en toiture, rénovation et isolation.
          </p>

          <!-- Réseaux sociaux -->
          <div class="mt-4 flex items-center gap-3 justify-center md:justify-start">
            <a
              href="https://www.facebook.com/CGRenov1325/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center w-9 h-9 rounded-lg bg-foreground/5 text-foreground/70 hover:bg-primary hover:text-white transition-all"
              aria-label="Suivez-nous sur Facebook"
            >
              <Facebook :size="18" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/cyrilgh33/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center w-9 h-9 rounded-lg bg-foreground/5 text-foreground/70 hover:bg-primary hover:text-white transition-all"
              aria-label="Suivez-nous sur Instagram"
            >
              <Instagram :size="18" aria-hidden="true" />
            </a>
          </div>
        </div>

        <!-- Colonne 2 : Navigation (accordéon sur mobile) -->
        <nav aria-label="Navigation du pied de page">
          <!-- Titre avec bouton toggle (mobile uniquement) -->
          <button
            type="button"
            class="flex w-full items-center justify-between text-sm font-semibold text-foreground md:cursor-default md:pointer-events-none"
            :aria-expanded="openSections.navigation"
            aria-controls="nav-links"
            @click="toggleSection('navigation')"
          >
            <span>Navigation</span>
            <svg
              class="h-5 w-5 md:hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <!-- Ligne horizontale (toujours visible = -) -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 12H4"
              />
              <!-- Ligne verticale (visible = +, cachée = -) -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16"
                class="transition-opacity duration-200"
                :class="openSections.navigation ? 'opacity-0' : 'opacity-100'"
              />
            </svg>
          </button>
          <div class="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-primary/60 via-primary to-primary/60" aria-hidden="true"/>

          <!-- Liste de liens (accordéon sur mobile, toujours visible sur desktop) -->
          <div
            id="nav-links"
            class="grid overflow-hidden transition-all duration-300 ease-in-out md:block"
            :class="
              openSections.navigation
                ? 'mt-2 grid-rows-[1fr]'
                : 'grid-rows-[0fr] md:mt-2 md:grid-rows-[1fr]'
            "
          >
            <ul class="min-h-0 space-y-2 text-sm">
              <li>
                <NuxtLink
                  to="/"
                  class="text-foreground/60 hover:text-primary transition"
                >
                  Accueil
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/#services"
                  class="text-foreground/60 hover:text-primary transition"
                >
                  Services
                </NuxtLink>
              </li>
              
              <li>
                <NuxtLink
                  to="/contact"
                  class="text-foreground/60 hover:text-primary transition"
                >
                  Contact
                </NuxtLink>
              </li>

            </ul>
          </div>
        </nav>

        <!-- Colonne 3 : Ressources (accordéon sur mobile) -->
        <nav aria-label="Ressources">
          <!-- Titre avec bouton toggle (mobile uniquement) -->
          <button
            type="button"
            class="flex w-full items-center justify-between text-sm font-semibold text-foreground md:cursor-default md:pointer-events-none"
            :aria-expanded="openSections.resources"
            aria-controls="resource-links"
            @click="toggleSection('resources')"
          >
            <span>Ressources</span>
            <svg
              class="h-5 w-5 md:hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <!-- Ligne horizontale (toujours visible = -) -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 12H4"
              />
              <!-- Ligne verticale (visible = +, cachée = -) -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16"
                class="transition-opacity duration-200"
                :class="openSections.resources ? 'opacity-0' : 'opacity-100'"
              />
            </svg>
          </button>
          <div class="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-primary/60 via-primary to-primary/60" aria-hidden="true"/>

          <!-- Liste de liens (accordéon sur mobile, toujours visible sur desktop) -->
          <div
            id="resource-links"
            class="grid overflow-hidden transition-all duration-300 ease-in-out md:block"
            :class="
              openSections.resources
                ? 'mt-2 grid-rows-[1fr]'
                : 'grid-rows-[0fr] md:mt-2 md:grid-rows-[1fr]'
            "
          >
            <ul class="min-h-0 space-y-2 text-sm">
           
              <li>
                <NuxtLink
                  to="/legal/mentions-legales"
                  class="text-foreground/60 hover:text-primary transition"
                >
                  Mentions légales
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/legal/politique-confidentialite"
                  class="text-foreground/60 hover:text-primary transition"
                >
                  Politique de confidentialité
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>

        <!-- Colonne 4 : Zone d'intervention (accordéon sur mobile) -->
        <nav aria-label="Zone d'intervention">
          <!-- Titre avec bouton toggle (mobile uniquement) -->
          <button
            type="button"
            class="flex w-full items-center justify-between text-sm font-semibold text-foreground md:cursor-default md:pointer-events-none"
            :aria-expanded="openSections.zone"
            aria-controls="zone-content"
            @click="toggleSection('zone')"
          >
            <span>Zone d'intervention</span>
            <svg
              class="h-5 w-5 md:hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <!-- Ligne horizontale (toujours visible = -) -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 12H4"
              />
              <!-- Ligne verticale (visible = +, cachée = -) -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16"
                class="transition-opacity duration-200"
                :class="openSections.zone ? 'opacity-0' : 'opacity-100'"
              />
            </svg>
          </button>
          <div class="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-primary/60 via-primary to-primary/60" aria-hidden="true"/>

          <!-- Contenu (accordéon sur mobile, toujours visible sur desktop) -->
          <div
            id="zone-content"
            class="grid overflow-hidden transition-all duration-300 ease-in-out md:block"
            :class="
              openSections.zone
                ? 'mt-2 grid-rows-[1fr]'
                : 'grid-rows-[0fr] md:mt-2 md:grid-rows-[1fr]'
            "
          >
            <div class="min-h-0 text-sm text-foreground/60">
              <p>
                Belgique – principalement en Wallonie, Brabant Wallon & Bruxelles.
              </p>
            </div>
          </div>
        </nav>
      </div>

      <!-- Bas de footer -->
      <div
        class="mt-10 border-t border-foreground/20 pt-6 text-center text-sm text-foreground/50"
      >
        <p>© {{ year }} CGRenov – Tous droits réservés.</p>
        <p class="mt-2">
          Site réalisé par
          <NuxtLink
            to="https://nicolasdeza.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-foreground/70 hover:text-primary transition underline"
            aria-label="Nicolas Deza (ouvre dans un nouvel onglet)"
          >
            Nicolas Deza
          </NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>
