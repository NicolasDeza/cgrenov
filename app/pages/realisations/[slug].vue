<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

/* =========================
  Types Storyblok (minimal & clean)
========================= */

interface StoryblokImage {
  filename: string
}

interface RichTextNode {
  type: string
  content?: { text?: string }[]
}

interface StoryblokProjectContent {
  title?: string
  description?: {
    content?: RichTextNode[]
  }
  location?: string
  year?: string | number
  gallery?: StoryblokImage[] | StoryblokImage
}

interface StoryblokStory {
  content: StoryblokProjectContent
}

/* =========================
  Fetch Story
========================= */

const route = useRoute()
const storyblokApi = useStoryblokApi()

const story = ref<StoryblokStory | null>(null)

try {
  const { data } = await storyblokApi.get(
    `cdn/stories/realisations/${route.params.slug}`,
    {
      version: 'draft',
    }
  )

  story.value = data.story
} catch (error) {
  console.error('Erreur lors du chargement de la réalisation:', error)
  throw createError({
    statusCode: 404,
    statusMessage: 'Réalisation non trouvée',
  })
}

/* =========================
  Computed
========================= */

const content = computed<StoryblokProjectContent>(() => {
  return story.value?.content ?? {}
})

const descriptionText = computed(() => {
  if (!content.value.description?.content) return ''

  return content.value.description.content
    .map((node) => {
      if (node.type === 'paragraph' && node.content) {
        return node.content.map((item) => item.text ?? '').join('')
      }
      return ''
    })
    .filter(Boolean)
    .join('\n\n')
})

const galleryImages = computed<StoryblokImage[]>(() => {
  if (!content.value.gallery) return []

  return Array.isArray(content.value.gallery)
    ? content.value.gallery
    : [content.value.gallery]
})
</script>

<template>
  <main>
    <!-- HERO -->
    <section class="relative h-[420px] md:h-[520px] w-full">
      <!-- Image -->
      <img
        :src="'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'"
        alt=""
        class="absolute inset-0 h-full w-full object-cover"
      >

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50"/>

      <!-- Content -->
      <div class="relative z-10 h-full flex items-end">
        <div class="max-w-5xl mx-auto px-4 pb-12">
          <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-3">
            {{ content.title }}
          </h1>

          <p class="text-white/90 text-lg">
            {{ content.location }} • {{ content.year }}
          </p>
        </div>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="max-w-5xl mx-auto px-4 py-20">
      <!-- Description -->
      <div
        v-if="descriptionText"
        class="prose prose-slate max-w-none mb-16"
      />

      <!-- Gallery -->
      <section v-if="galleryImages.length">
        <h2 class="text-2xl font-bold mb-6">
          Galerie du chantier
        </h2>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <img
            v-for="(image, index) in galleryImages"
            :key="index"
            :src="image.filename"
            :alt="content.title"
            class="rounded-xl object-cover w-full h-60 md:h-80 hover:scale-[1.02] transition-transform"
          >
        </div>
      </section>

      <!-- Fallback -->
      <p v-else class="text-slate-500">
        Aucune image disponible pour cette réalisation.
      </p>

      <!-- Back -->
      <div class="mt-20">
        <NuxtLink
          to="/realisations"
          class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-hover hover:scale-105 transition-all"
        >
          Retour aux réalisations
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

