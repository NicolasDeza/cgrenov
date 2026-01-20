<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"
import { Mail, MapPin, Send, ShieldCheck, Instagram, Facebook } from "lucide-vue-next"
import { useContactForm } from "~/composables/useContactForm"

const { form, errors, loading, success, submit } = useContactForm()
const config = useRuntimeConfig()

const widgetId = ref<string | null>(null)

declare global {
  interface Window {
    turnstile?: {
      render: (selector: string, options: { sitekey: string; callback: (token: string) => void }) => string
      remove: (widgetId: string) => void
    }
  }
}

onMounted(() => {
  const state = useState<string | null>("turnstile")

  if (!config.public.turnstileSiteKey) {
    console.error("Turnstile sitekey manquant")
    return
  }

  const renderWidget = () => {
    if (window.turnstile && !widgetId.value) {
      try {
        widgetId.value = window.turnstile.render("#cf-turnstile-container", {
          sitekey: config.public.turnstileSiteKey,
          callback: (token: string) => {
            state.value = token
          },
        })
      } catch (e) {
        console.error("Erreur rendu Turnstile:", e)
      }
    }
  }

  // Attendre que Turnstile soit chargé
  if (window.turnstile) {
    renderWidget()
  } else {
    const interval = setInterval(() => {
      if (window.turnstile) {
        clearInterval(interval)
        renderWidget()
      }
    }, 100)

    setTimeout(() => clearInterval(interval), 5000)
  }
})

onBeforeUnmount(() => {
  if (widgetId.value && window.turnstile) {
    try {
      window.turnstile.remove(widgetId.value)
    } catch {
      // Ignorer les erreurs de nettoyage
    }
  }
})
</script>


<template>
  <section
    class="w-full bg-gradient-to-br from-slate-50 via-white to-slate-100  py-20 relative overflow-hidden"
    aria-label="Formulaire de contact"
  >
    <!-- Motif construction en arrière-plan -->
    <!-- <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none">
      <div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px);"/>
    </div> -->
    
    <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

        <!-- ===================== -->
        <!-- Colonne gauche : Infos -->
        <!-- ===================== -->
        <div class="space-y-8">
          <div class="space-y-5">
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 px-5 py-2 bg-primary text-white font-bold uppercase tracking-wider text-xs shadow-lg">
              <div class="w-2 h-2 bg-white"/>
              <span>Devis Gratuit</span>
            </div>

            <!-- Titre -->
            <h1 class="text-4xl sm:text-5xl  font-black text-slate-900 dark:text-white leading-tight">
              Votre projet de
              <span class=" mt-2 text-primary relative inline-block">
                rénovation
                <svg class="absolute -bottom-2 left-0 w-full h-3 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 10" preserveAspectRatio="none">
                  <path d="M 0 8 Q 50 3, 100 6 T 200 8" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/>
                </svg>
              </span>
            </h1>

            <!-- Description -->
            <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Un projet de rénovation en tête ? Contactez CG Renov pour échanger sur vos besoins et obtenir un premier avis, sans engagement.
            </p>
          </div>

          <div class="space-y-4">
            <!-- Email -->
            <div
              class="flex items-center gap-4 p-4 rounded-xl
                     bg-white/70 dark:bg-white/5
                     border border-foreground/10 dark:border-white/10
                     hover:border-primary/30 hover:shadow-md
                     transition-all duration-300"
            >
              <div class="p-3 rounded-lg bg-primary/10">
                <Mail :size="22" class="text-primary" />
              </div>
              <div>
                <p
                  class="text-xs font-medium text-foreground/50 dark:text-white/50 uppercase tracking-wide mb-1"
                >
                  Email
                </p>
                <a
                  href="mailto:cyrilgrandhenry@gmail.com"
                  class="text-foreground dark:text-white font-medium hover:text-primary transition"
                >
                  cyrilgrandhenry@gmail.com
                </a>
              </div>
            </div>

            <!-- Localisation -->
            <div
              class="flex items-center gap-4 p-4 rounded-xl
                     bg-white/70 dark:bg-white/5
                     border border-foreground/10 dark:border-white/10
                     hover:border-primary/30 hover:shadow-md
                     transition-all duration-300"
            >
              <div class="p-3 rounded-lg bg-primary/10">
                <MapPin :size="22" class="text-primary" />
              </div>
              <div>
                <p
                  class="text-xs font-medium text-foreground/50 dark:text-white/50 uppercase tracking-wide mb-1"
                >
                  Zone d’intervention
                </p>
                <p class="text-foreground dark:text-white font-medium">
                  Wallonie – Brabant wallon et environs
                </p>
              </div>
            </div>

            <!-- Réseaux sociaux -->
            <div class="pt-4">
              <p class="text-sm font-bold text-slate-700 dark:text-slate-300 mb-4 uppercase tracking-wide">
                Suivez nos réalisations
              </p>

              <div class="flex gap-4">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  class="group flex-1 flex items-center justify-center gap-2 px-4 py-3.5 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Instagram :size="20" class="text-slate-700 dark:text-slate-300 group-hover:text-primary stroke-[2.5]" />
                  <span class="font-bold text-sm text-slate-700 dark:text-slate-300 group-hover:text-primary">Instagram</span>
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  class="group flex-1 flex items-center justify-center gap-2 px-4 py-3.5 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Facebook :size="20" class="text-slate-700 dark:text-slate-300 group-hover:text-primary stroke-[2.5]" />
                  <span class="font-bold text-sm text-slate-700 dark:text-slate-300 group-hover:text-primary">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- ===================== -->
        <!-- Colonne droite : Form -->
        <!-- ===================== -->
        <form
          class="relative p-8 lg:p-10 bg-white dark:bg-slate-800 shadow-2xl border-t-4 border-primary space-y-6"
          @submit.prevent="submit"
        >
          <!-- Badge professionnel en coin -->
          <div class="absolute -top-3 right-6 px-5 py-2 bg-slate-900 dark:bg-primary text-white shadow-lg">
            <div class="flex items-center gap-2">
              <ShieldCheck :size="14" class="stroke-[2.5]" />
              <span class="text-xs font-bold uppercase tracking-wider">Garantie Pro</span>
            </div>
          </div>

          <!-- Erreur globale -->
          <div
            v-if="errors.global"
            role="alert"
            aria-live="polite"
            class="p-4 bg-red-50 dark:bg-red-500/10 border-l-4 border-red-500 text-red-700 dark:text-red-400 text-sm font-medium"
          >
            {{ errors.global }}
          </div>

          <!-- Nom -->
          <div class="space-y-2">
            <label for="name" class="block text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
              Nom complet
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Ex: Jean Dupont"
              required
              class="w-full px-5 py-4 bg-slate-50 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:border-primary focus:bg-white dark:focus:bg-slate-600 transition-all font-medium"
            >
          </div>

          <!-- Email -->
          <div class="space-y-2">
            <label for="email" class="block text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
              Adresse Email
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="votre@email.com"
              required
              class="w-full px-5 py-4 bg-slate-50 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:border-primary focus:bg-white dark:focus:bg-slate-600 transition-all font-medium"
            >
          </div>

          <!-- Message -->
          <div class="space-y-2">
            <label for="message" class="block text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
              Votre Projet
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="6"
              placeholder="Décrivez votre projet de rénovation : type de travaux, superficie, délais souhaités..."
              required
              class="w-full px-5 py-4 bg-slate-50 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 resize-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:border-primary focus:bg-white dark:focus:bg-slate-600 transition-all font-medium"
            />
          </div>

          <!-- Turnstile -->
          <div class="mb-4">
            <div id="cf-turnstile-container" class="min-h-[70px] flex items-center" />
          </div>

          <!-- Protection -->
          <div class="flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <ShieldCheck :size="14" class="text-primary" />
            <span>Protection anti-spam active</span>
          </div>

          <!-- Bouton -->
          <button
            type="submit"
            :disabled="loading"
            class="group relative w-full px-4 py-4 bg-primary hover:bg-primary-hover text-white font-bold text-base uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
          >
            <div class="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"/>
            <span class="relative z-10">{{ loading ? 'Envoi en cours…' : 'Envoyer' }}</span>
            <Send v-if="!loading" :size="20" class="relative z-10 stroke-[2.5]" />
          </button>

          <!-- Succès -->
          <p
            v-if="success"
            role="status"
            aria-live="polite"
            class="p-5 bg-green-50 dark:bg-green-500/10 border-l-4 border-green-500 text-green-700 dark:text-green-400 text-sm font-bold flex items-center gap-3"
          >
            <span class="text-xl">✓</span>
            <span>Message envoyé ! Nous vous recontactons sous 48h.</span>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
