<script setup>
const storyblokApi = useStoryblokApi()

const projects = ref([])

try {
  const { data } = await storyblokApi.get('cdn/stories', {
    version: 'draft',
    starts_with: 'realisations/',
    is_startpage: false,
  })
  projects.value = data.stories || []
} catch (error) {
  console.error('Erreur Storyblok:', error)
  projects.value = []
}
</script>

<template>
  <main>
    <!-- HERO -->
    <section class="relative h-[420px] md:h-[520px] w-full">
      <!-- Image background -->
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        alt=""
        class="absolute inset-0 h-full w-full object-cover"
      >

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50"/>

      <!-- Content -->
      <div class="relative z-10 h-full flex items-center">
        <div class="max-w-6xl mx-auto px-4">
          <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Nos <span class="text-orange-400">réalisations</span>
          </h1>
          <p class="max-w-xl text-white/90 text-lg font-semibold">
            Découvrez quelques-uns de nos chantiers réalisés avec soin,
            en Belgique, du gros œuvre aux finitions.
          </p>
        </div>
      </div>
    </section>

    <!-- GRID -->
    <section class="max-w-6xl mx-auto py-20 px-4">
      <div
        v-if="projects.length"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <NuxtLink
          v-for="project in projects"
          :key="project.uuid"
          :to="`/realisations/${project.slug}`"
          class="group rounded-xl overflow-hidden border bg-white hover:shadow-lg transition-shadow"
        >
          <div class="relative h-56 w-full overflow-hidden">
            <img
              v-if="project.content?.cover_image?.filename"
              :src="project.content.cover_image.filename"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt=""
            >
            
            <!-- Overlay + Texte "Découvrir" -->
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <span class="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Découvrir
              </span>
            </div>
          </div>

          <div class="p-5">
            <h2 class="text-lg font-bold mb-1">
              {{ project.content?.title }}
            </h2>

            <p class="text-sm text-gray-500">
              {{ project.content?.location }} · {{ project.content?.year }}
            </p>
          </div>
        </NuxtLink>
      </div>

      <p v-else class="text-gray-500">
        Aucune réalisation pour le moment.
      </p>
    </section>
  </main>
</template>
