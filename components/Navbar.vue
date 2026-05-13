<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'glass shadow-sm' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <NuxtLink to="/" class="flex items-center space-x-2 group">
          <div class="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
            <span class="text-white font-bold text-xl">T+</span>
          </div>
          <span class="text-xl font-bold text-gray-900">TaxiPlus</span>
        </NuxtLink>
        
        <div class="hidden lg:flex items-center space-x-8">
          <NuxtLink to="/#features" class="text-gray-600 hover:text-gray-900 transition-colors">Features</NuxtLink>
          <NuxtLink to="/#how-it-works" class="text-gray-600 hover:text-gray-900 transition-colors">How it Works</NuxtLink>
          <NuxtLink to="/driver" class="text-gray-600 hover:text-gray-900 transition-colors">Drive with Us</NuxtLink>
        </div>
        
        <div class="flex items-center space-x-3">
          <NuxtLink to="/auth/login" class="hidden sm:block text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Sign In
          </NuxtLink>
          <NuxtLink to="/auth/signup" class="btn-primary">
            Get Started
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const scrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>
