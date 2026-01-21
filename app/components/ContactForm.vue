<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"
import { Mail, MapPin, Send, ShieldCheck, Instagram, Facebook, Info } from "lucide-vue-next"
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

    <div class="absolute inset-0 opacity-35 pointer-events-none">
      <div class="absolute inset-0 w-full h-full" style="background-image: url('/images/bg/briques.svg'); background-size: 100px 100px; background-repeat: repeat;"/>
    </div>
    
    <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

      <!-- Colonne gauche : Infos -->
      
        <div class="space-y-8">
          <div class="space-y-5">
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 px-5 py-2 bg-primary text-white font-bold uppercase tracking-wider text-xs shadow-lg">
              <div class="w-2 h-2 bg-white"/>
              <span>Devis Gratuit</span>
            </div>

            <!-- Titre -->
            <h1 class="text-4xl sm:text-5xl font-black text-slate-900 ">
              Votre projet de
              <span class=" mt-2 text-primary relative inline-block">
                rénovation
                <svg class="absolute -bottom-2 left-0 w-full h-3 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 10" preserveAspectRatio="none">
                  <path d="M 0 8 Q 50 3, 100 6 T 200 8" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/>
                </svg>
              </span>
            </h1>

            <!-- Description -->
            <p class="text-lg text-slate-600  leading-relaxed font-medium">
              Un projet de rénovation en tête ? Contactez CG Renov pour échanger sur vos besoins et obtenir un premier avis, sans engagement.
            </p>
          </div>

          <div class="space-y-4">
            <!-- Email -->
            <div
              class="flex items-center gap-4 p-4 rounded-xl
                     bg-white/70 
                     border border-foreground/10 
                     hover:border-primary/30 hover:shadow-md
                     transition-all duration-300"
            >
              <div class="p-3 rounded-lg bg-primary/10">
                <Mail :size="22" class="text-primary" />
              </div>
              <div>
                <p
                  class="text-xs font-medium text-foreground/50  uppercase tracking-wide mb-1"
                >
                  Email
                </p>
                <a
                  href="mailto:cyrilgrandhenry@gmail.com"
                  class="text-foreground  font-medium hover:text-primary transition"
                >
                  cyrilgrandhenry@gmail.com
                </a>
              </div>
            </div>

            <!-- Localisation -->
            <div
              class="flex items-center gap-4 p-4 rounded-xl
                     bg-white/70 
                     border border-foreground/10 
                     hover:border-primary/30 hover:shadow-md
                     transition-all duration-300"
            >
              <div class="p-3 rounded-lg bg-primary/10">
                <MapPin :size="22" class="text-primary" />
              </div>
              <div>
                <p
                  class="text-xs font-medium text-foreground/50  uppercase tracking-wide mb-1"
                >
                  Zone d’intervention
                </p>
                <p class="text-foreground  font-medium">
                  Wallonie – Brabant wallon et Bruxelles
                </p>
              </div>
            </div>

            <!-- Réseaux sociaux -->
            <div class="pt-4">
              <p class="text-sm font-bold text-slate-700  mb-4 uppercase tracking-wide">
                Suivez-nous
              </p>

              <div class="flex gap-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  class="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 hover:bg-primary transition-all duration-300 group"
                >
                  <Facebook :size="20" class="text-slate-700 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  class="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 hover:bg-primary transition-all duration-300 group"
                >
                  <Instagram :size="20" class="text-slate-700 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            <!-- Google Maps -->
            <div class="pt-6">
              <p class="text-sm font-bold text-slate-700  mb-4 uppercase tracking-wide">
                Où nous trouver
              </p>
              
              <div class="relative rounded-lg overflow-hidden shadow-lg border-2 border-slate-200 h-64 transition-colors duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.5915512363454!2d4.619488177710046!3d50.63470407162796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c17e567790f019%3A0xe52938f69a4ed716!2sRue%20d&#39;Alvau%2021%2C%201435%20Mont-Saint-Guibert!5e0!3m2!1sfr!2sbe!4v1768941949844!5m2!1sfr!2sbe"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Localisation CG Renov - Rue de Ville-en-Hesbaye"
                  class="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Colonne droite : Form -->
        <form
          class="relative rounded-lg p-8  lg:p-10 bg-white  shadow-2xl  space-y-6"
          @submit.prevent="submit"
        >
          <!-- Badge professionnel en coin -->
          <div class="absolute -top-3 right-6 px-5 py-2 bg-slate-900  text-white shadow-lg">
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
            class="p-4 bg-red-50 border-l-4 border-red-500 text-red-700  text-sm font-medium"
          >
            {{ errors.global }}
          </div>

          <!-- Nom -->
          <div class="space-y-2">
            <label for="name" class="block text-sm font-bold text-slate-900  uppercase tracking-wide">
              Nom complet
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Ex: Jean Dupont"
              required
              class="w-full px-5 py-2 rounded-lg bg-slate-50  border-2 border-slate-200 text-slate-900  placeholder:text-slate-400  outline-none focus:border-primary focus:bg-white  transition-all font-medium"
            >
          </div>

          <!-- Email -->
          <div class="space-y-2">
            <label for="email" class="block text-sm font-bold text-slate-900 tracking-wide">
              Adresse Email
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="votre@email.com"
              required
              class="w-full px-5 py-2 rounded-lg bg-slate-50  border-2 border-slate-200 text-slate-900  placeholder:text-slate-400  outline-none focus:border-primary focus:bg-white  transition-all font-medium"
            >
          </div>

          <!-- Message -->
          <div class="space-y-2">
            <label for="message" class="block text-sm font-bold text-slate-900  uppercase tracking-wide">
              Votre Projet
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="6"
              placeholder="Décrivez votre projet de rénovation : type de travaux, superficie, délais souhaités..."
              required
              class="w-full px-5 py-2 rounded-lg bg-slate-50  border-2 border-slate-200 resize-none text-slate-900  placeholder:text-slate-400 outline-none focus:border-primary focus:bg-white  transition-all font-medium"
            />
          </div>

          <!-- Turnstile -->
          <div class="mb-4">
            <div id="cf-turnstile-container" class="min-h-[70px] flex items-center" />
          </div>

          <!-- Info réponse rapide -->
          <div class="flex items-start gap-3 p-4 rounded-lg bg-primary/10 border border-1 border-primary">
            <Info :size="20" class="text-primary flex-shrink-0 mt-0.5" />
            <p class="text-sm text-primary  font-medium ">
              Nous revenons vers vous rapidement pour établir votre devis.
            </p>
          </div>

          <!-- Bouton -->
          <button
            type="submit"
            :disabled="loading"
            class="group relative w-full px-4 py-4 rounded-lg bg-primary hover:bg-primary-hover text-white font-bold text-base uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
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
            class="p-5 bg-green-50  border-l-4 border-green-500 text-green-700  text-sm font-bold flex items-center gap-3"
          >
            <span class="text-xl">✓</span>
            <span>Message envoyé ! Nous vous recontactons sous 48h.</span>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
