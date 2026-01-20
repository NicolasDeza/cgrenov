<script setup>
// Meta tags pour SEO
useHead({
  title: 'Travaux extérieurs - CG Renov',
  meta: [
    {
      name: 'description',
      content: 'Travaux extérieurs, pavage, terrasse ect.'
    }
  ]
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[400px] text-white overflow-hidden">
      <!-- Image en arrière-plan -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[url('/images/renovation/hero-renovation.jpg')] bg-cover bg-no-repeat bg-center"/>
      </div>
      
      <!-- Overlay sombre -->
     <div class="absolute inset-0 bg-black/55"/>

      <!-- Contenu Hero -->
      <div class="relative z-10 max-w-[1440px] mx-auto px-4 h-full flex flex-col justify-center">
        <!-- Breadcrumb -->
        <nav class="mb-6" aria-label="Fil d'ariane">
          <ol class="flex items-center gap-2 text-sm text-white/70">
            <li>
              <NuxtLink to="/" class="hover:text-white transition">Accueil</NuxtLink>
            </li>
            <li>/</li>
            <li>
              <NuxtLink to="/#services" class="hover:text-white transition">Services</NuxtLink>
            </li>
            <li>/</li>
            <li class="text-white font-semibold">Travaux extérieurs</li>
          </ol>
        </nav>

        <!-- Titre -->
        <div class="max-w-3xl">
          <div class="inline-block px-4 py-1.5 bg-primary text-white text-xs font-bold uppercase tracking-wider mb-4">
            Service professionnel
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
            Travaux extérieurs
          </h1>
          <p class="text-lg md:text-xl text-white/90 font-medium leading-relaxed">
            Transformez votre habitation avec des travaux de rénovation complets, intérieurs et extérieurs, réalisés par des artisans qualifiés.
          </p>
        </div>
      </div>

      <!-- Ligne décorative en bas -->
      <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60"/>
    </section>

    <!-- Section Description -->
    <section class="py-16 md:py-20 bg-white">
      <div class="max-w-[1200px] mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <!-- Colonne texte -->
          <div>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Des travaux de rénovation sur mesure
            </h2>
            <div class="prose prose-lg max-w-none space-y-4 text-slate-700">
              <p class="font-medium">
                Que vous souhaitiez rafraîchir votre intérieur, moderniser votre façade ou entreprendre une rénovation complète, 
                <strong class="text-primary">CG Renov</strong> vous accompagne à chaque étape de votre projet.
              </p>
              <p>
                Nous intervenons sur tous types de travaux de rénovation : peinture, revêtements de sols, plafonnage, 
                menuiseries, électricité, plomberie et bien plus encore. Notre équipe coordonne l'ensemble des corps de métier 
                pour vous garantir un résultat impeccable.
              </p>
              <p>
                Chaque projet est unique. Nous prenons le temps d'écouter vos besoins, de vous conseiller et de vous proposer 
                des solutions adaptées à votre budget et vos attentes.
              </p>
            </div>
          </div>

          <!-- Colonne liste avantages -->
          <div class="bg-slate-50 p-8 border-l-4 border-primary">
            <h3 class="text-2xl font-black text-slate-900 mb-6">Nos prestations</h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <span class="flex-shrink-0 w-6 h-6 bg-primary text-white flex items-center justify-center text-xs font-bold mt-1">✓</span>
                <span class="font-medium text-slate-700">Rénovation intérieure complète (peinture, sols, plafonds)</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="flex-shrink-0 w-6 h-6 bg-primary text-white flex items-center justify-center text-xs font-bold mt-1">✓</span>
                <span class="font-medium text-slate-700">Transformation de pièces (cuisine, salle de bain, bureau)</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="flex-shrink-0 w-6 h-6 bg-primary text-white flex items-center justify-center text-xs font-bold mt-1">✓</span>
                <span class="font-medium text-slate-700">Rénovation de façades et ravalement extérieur</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="flex-shrink-0 w-6 h-6 bg-primary text-white flex items-center justify-center text-xs font-bold mt-1">✓</span>
                <span class="font-medium text-slate-700">Menuiseries (portes, fenêtres, parquets)</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="flex-shrink-0 w-6 h-6 bg-primary text-white flex items-center justify-center text-xs font-bold mt-1">✓</span>
                <span class="font-medium text-slate-700">Coordination complète du chantier</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="flex-shrink-0 w-6 h-6 bg-primary text-white flex items-center justify-center text-xs font-bold mt-1">✓</span>
                <span class="font-medium text-slate-700">Respect des délais et du budget</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Pourquoi nous choisir -->
    <section class="py-16 md:py-20 bg-slate-50 relative overflow-hidden">
      <!-- Motif background -->
      <div class="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div class="absolute inset-0" style="background-image: url('/images/bg/briques.svg'); background-size: 200px 200px; background-repeat: repeat;"/>
      </div>

      <div class="max-w-[1200px] mx-auto px-4 relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Pourquoi choisir CG Renov ?
          </h2>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto">
            Une expertise reconnue et un engagement qualité pour tous vos projets de rénovation
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div class="w-14 h-14 bg-primary text-white flex items-center justify-center font-black text-2xl mb-4">
              1
            </div>
            <h3 class="text-xl font-black text-slate-900 mb-3">Expertise multi-corps d'état</h3>
            <p class="text-slate-600 leading-relaxed">
              Nous maîtrisons tous les aspects de la rénovation pour vous offrir un service complet et coordonné.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div class="w-14 h-14 bg-primary text-white flex items-center justify-center font-black text-2xl mb-4">
              2
            </div>
            <h3 class="text-xl font-black text-slate-900 mb-3">Garanties et assurances</h3>
            <p class="text-slate-600 leading-relaxed">
              Tous nos travaux sont garantis et nous disposons des assurances professionnelles requises.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div class="w-14 h-14 bg-primary text-white flex items-center justify-center font-black text-2xl mb-4">
              3
            </div>
            <h3 class="text-xl font-black text-slate-900 mb-3">Devis détaillé gratuit</h3>
            <p class="text-slate-600 leading-relaxed">
              Nous établissons un devis précis et transparent, sans mauvaise surprise.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-16 bg-gradient-to-r from-primary to-orange-600 text-white">
      <div class="max-w-[1200px] mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-black mb-4">
          Prêt à démarrer votre projet de rénovation ?
        </h2>
        <p class="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Contactez-nous dès aujourd'hui pour obtenir un devis gratuit et personnalisé sous 48h.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center rounded-lg gap-3 px-8 py-4 bg-white text-primary font-bold text-lg uppercase tracking-wider hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          Demander un devis gratuit
         
        </NuxtLink>
      </div>
    </section>

    <!-- Section Image + Texte -->
<section class="py-16 md:py-24 bg-white">
  <div class="max-w-[1200px] mx-auto px-4">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      
      <!-- Image -->
      <div class="relative">
        <div class="aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden shadow-md">
          <!-- Image placeholder -->
          <img
            src="/images/renovation/renovation.jpg"
            alt="Travaux de rénovation réalisés par CG Renov"
            class="w-full h-full object-cover"
          >
        </div>

        <!-- Badge optionnel -->
        <div class="absolute top-4 left-4 bg-primary text-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow">
          Chantier récent
        </div>
      </div>

      <!-- Texte -->
      <div>
        <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-6">
          Des rénovations visibles, durables et soignées
        </h2>

        <div class="space-y-4 text-slate-700 text-lg">
          <p>
            Chaque chantier réalisé par <strong class="text-primary">CG Renov</strong> est pensé
            dans le respect des normes, des délais et des attentes du client.
            Nous accordons une attention particulière aux finitions et à la qualité
            des matériaux utilisés.
          </p>

          <p>
            Grâce à notre expérience terrain et à une organisation rigoureuse,
            nous garantissons des rénovations durables, esthétiques et fonctionnelles,
            adaptées à votre mode de vie.
          </p>
        </div>

        <NuxtLink
          to="/realisations"
          class="inline-flex items-center gap-3 mt-8 text-primary font-bold hover:underline"
        >
          Voir nos réalisations
       
        </NuxtLink>
      </div>
    </div>
  </div>
</section>

  </div>
</template>

