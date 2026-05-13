<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-white">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    </div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Badge -->
        <div class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-8 animate-fade-in">
          <span class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
          <span class="text-sm font-medium text-primary-700">Now live in Addis Ababa</span>
        </div>
        
        <!-- Main headline -->
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-slide-up text-balance leading-tight">
          Transportation<br />
          <span class="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
            Without Uncertainty
          </span>
        </h1>
        
        <p class="text-xl sm:text-2xl text-gray-600 mb-12 animate-slide-up max-w-2xl mx-auto" style="animation-delay: 0.1s;">
          Move through Addis with confidence. Fast, predictable, stress-free rides at your fingertips.
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style="animation-delay: 0.2s;">
          <NuxtLink to="/auth/signup" class="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
            Get Started Free
          </NuxtLink>
          <NuxtLink to="/driver" class="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
            Become a Driver
          </NuxtLink>
        </div>
        
        <!-- Social proof -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600 animate-fade-in" style="animation-delay: 0.3s;">
          <div class="flex items-center space-x-2">
            <div class="flex -space-x-2">
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white"></div>
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 border-2 border-white"></div>
            </div>
            <span class="font-medium">10,000+ riders</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <span class="font-medium">4.9/5 rating</span>
          </div>
        </div>
      </div>
      
      <!-- App preview mockup -->
      <div class="mt-20 animate-slide-up" style="animation-delay: 0.4s;">
        <div class="relative max-w-5xl mx-auto">
          <div class="glass rounded-3xl p-2 shadow-2xl">
            <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="space-y-6">
                  <div class="glass-dark rounded-2xl p-6">
                    <div class="flex items-center justify-between mb-4">
                      <span class="text-gray-400 text-sm">Pickup Location</span>
                      <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <p class="text-white font-medium">Bole, Addis Ababa</p>
                  </div>
                  <div class="glass-dark rounded-2xl p-6">
                    <div class="flex items-center justify-between mb-4">
                      <span class="text-gray-400 text-sm">Destination</span>
                    </div>
                    <p class="text-white font-medium">Meskel Square</p>
                  </div>
                  <div class="flex items-center justify-between glass-dark rounded-2xl p-6">
                    <div>
                      <p class="text-gray-400 text-sm mb-1">Estimated Fare</p>
                      <p class="text-white text-2xl font-bold">250 ETB</p>
                    </div>
                    <div class="text-right">
                      <p class="text-gray-400 text-sm mb-1">ETA</p>
                      <p class="text-white text-2xl font-bold">12 min</p>
                    </div>
                  </div>
                </div>
                <div class="hidden md:block">
                  <div class="aspect-square rounded-2xl bg-gradient-to-br from-primary-500/20 to-blue-500/20 border border-primary-500/30 flex items-center justify-center">
                    <div class="text-center text-white/60">
                      <svg class="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                      </svg>
                      <p class="text-sm">Live Map View</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </section>
</template>
