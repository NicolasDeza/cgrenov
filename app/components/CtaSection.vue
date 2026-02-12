<template>
  <section class="w-full bg-white pt-12 sm:pt-12 px-1" aria-label="Appel à l'action">
    <div class="mx-auto px-1 sm:px-3">
      <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-[#1a1f26] px-6 py-8 md:px-20 md:py-12 text-center shadow-xl">
        
        <!-- <div class="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" /> -->

        <div class="relative z-10">
          <!-- <span class="inline-block px-4 py-1.5 mb-6 text-xs font-black uppercase tracking-[0.2em] text-primary bg-primary/10 rounded-full border border-primary/20">
            Un projet ?
          </span> -->

          <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight leading-[1.15] mb-6 px-2">
            Prêt à concrétiser votre <br class="hidden ">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              projet de rénovation
            </span> ?
          </h2>

          <p class="mx-auto max-w-2xl text-base md:text-lg text-gray-400 font-normal leading-relaxed mb-10">
            CG Renov vous accompagne avec des solutions durables, un travail soigné et un suivi sérieux, de la première prise de contact à la fin du chantier.
          </p>

          <div class="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <NuxtLink
              to="/contact"
              class="group relative inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base md:text-lg font-bold text-white transition-all duration-300 hover:scale-105 overflow-hidden"
              
            >
              <span class="relative z-10">Contactez-nous</span>
              <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
            </NuxtLink>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>