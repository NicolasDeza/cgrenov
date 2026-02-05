<template>
  <section
    class="w-full bg-[#11171D] py-10 md:py-16"
    aria-label="Appel à l'action"
  >
    <div class="mx-auto max-w-7xl px-4">
      <div class="rounded-lg px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white ">
          Prêt à concrétiser votre projet de rénovation ?
        </h2>

        <p class="mx-auto mt-5 max-w-2xl text-white/70">
          CG Renov vous accompagne avec des solutions durables, un travail soigné et un suivi sérieux, de la première prise de contact à la fin du chantier.
        </p>

        <div
          class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <NuxtLink
            to="/contact"
            class="group relative inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-bold text-white overflow-hidden
                   transition-all duration-300 ease-out hover:scale-105"
          >
            <span class="relative z-10">Contactez-nous</span>
            <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
          </NuxtLink>

         
        </div>
      </div>
    </div>
  </section>
</template>
