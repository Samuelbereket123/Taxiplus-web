<template>
  <div>
    <section class="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Platform Features</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for seamless urban mobility
          </p>
        </div>
      </div>
    </section>
    
    <FeaturesSection />
    <AppPreviewSection />
    <CTASection />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useHead({
  title: 'Features - TaxiPlus',
  meta: [
    { name: 'description', content: 'Discover TaxiPlus features: instant booking, live tracking, upfront pricing, and more.' }
  ]
})
</script>
