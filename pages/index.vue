<template>
  <div>
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <FeaturesSection />
    <HowItWorksSection />
    <VisionSection />
    <AppPreviewSection />
    <CTASection />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useHead({
  title: 'TaxiPlus - Transportation Without Uncertainty',
  meta: [
    { name: 'description', content: 'Move through Addis with confidence. Fast, predictable, stress-free urban mobility.' }
  ]
})
</script>
