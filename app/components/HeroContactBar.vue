<script setup lang="ts">
import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-vue-next"
</script>

<template>
  <section class="w-full bg-[#11171D] border-t border-white/5">
    <div
      class="mx-auto max-w-[1440px] px-4 py-5
             flex flex-row items-center justify-between gap-4"
    >
      <!-- Contact & localisation -->
      <div class="flex flex-col sm:flex-row sm:items-center gap-3 text-white/80 text-sm">
        <a
          href="tel:+32493329794"
          class="inline-flex items-center gap-2 hover:text-primary transition"
          aria-label="Appelez-nous au +32 493 32 97 94"
        >
          <Phone :size="16" aria-hidden="true" />
          +32 493 32 97 94
        </a>

        <span class="hidden sm:block text-white/30" aria-hidden="true">•</span>

        <a
          href="mailto:info@cgrenov.be"
          class="inline-flex items-center gap-2 hover:text-primary transition"
          aria-label="Envoyez-nous un email à cyrilgrandhenry@gmail.com"
        >
          <Mail :size="16" aria-hidden="true" />
          info@cgrenov.be
        </a>

        <span class="hidden lg:block text-white/30" aria-hidden="true">•</span>

        <span class="hidden lg:inline-flex items-center gap-2 text-white/60">
          <MapPin :size="16" aria-hidden="true" />
          Belgique – Wallonie, Brabant Wallon et Bruxelles
        </span>
      </div>

      <!-- Réseaux sociaux -->
      <div class="flex items-center gap-3">
        <a
          href="https://www.facebook.com/CGRenov1325/"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 text-white/70 hover:bg-primary hover:text-white transition-all"
          aria-label="Suivez-nous sur Facebook"
        >
          <Facebook :size="18" aria-hidden="true" />
        </a>
        <a
          href="https://www.instagram.com/cyrilgh33/"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 text-white/70 hover:bg-primary hover:text-white transition-all"
          aria-label="Suivez-nous sur Instagram"
        >
          <Instagram :size="18" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>
