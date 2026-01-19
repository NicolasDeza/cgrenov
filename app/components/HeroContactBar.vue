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
             flex flex-col gap-4
             md:flex-row md:items-center md:justify-between"
    >
      <!-- Contact & localisation -->
      <div class="flex flex-col sm:flex-row sm:items-center gap-3 text-white/80 text-sm">
        <a
          href="tel:+32493329794"
          class="inline-flex items-center gap-2 hover:text-primary transition"
        >
          <Phone :size="16" />
          +32 493 32 97 94
        </a>

        <span class="hidden sm:block text-white/30">•</span>

        <a
          href="mailto:contact@cg-renov.be"
          class="inline-flex items-center gap-2 hover:text-primary transition"
        >
          <Mail :size="16" />
          contact@cg-renov.be
        </a>

        <span class="hidden sm:block text-white/30">•</span>

        <span class="inline-flex items-center gap-2 text-white/60">
          <MapPin :size="16" />
          Brabant wallon & Wallonie
        </span>
      </div>

      <!-- Réseaux sociaux -->
      <div class="flex items-center gap-3">
        <a
          href="#"
          class="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 text-white/70 hover:bg-primary hover:text-white transition-all"
          aria-label="Facebook"
        >
          <Facebook :size="18" />
        </a>
        <a
          href="#"
          class="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 text-white/70 hover:bg-primary hover:text-white transition-all"
          aria-label="Instagram"
        >
          <Instagram :size="18" />
        </a>
      </div>
    </div>
  </section>
</template>
