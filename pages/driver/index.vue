<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Drive with<br />
            <span class="bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent">
              TaxiPlus
            </span>
          </h1>
          
          <p class="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Be your own boss. Set your schedule. Earn on your terms.
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink to="/auth/driver-signup" class="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
              Start Driving
            </NuxtLink>
            <NuxtLink to="/auth/driver-login" class="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all w-full sm:w-auto">
              Driver Sign In
            </NuxtLink>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mt-20">
            <div class="glass-dark rounded-2xl p-8">
              <div class="text-4xl font-bold text-primary-400 mb-2">15K+</div>
              <div class="text-gray-400">Average Monthly Earnings</div>
            </div>
            <div class="glass-dark rounded-2xl p-8">
              <div class="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div class="text-gray-400">Drive Anytime</div>
            </div>
            <div class="glass-dark rounded-2xl p-8">
              <div class="text-4xl font-bold text-green-400 mb-2">500+</div>
              <div class="text-gray-400">Active Drivers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Benefits Section -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why Drive with Us?</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Join Ethiopia's fastest-growing mobility platform
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="card">
            <div class="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Competitive Earnings</h3>
            <p class="text-gray-600">Keep 80% of every fare. Weekly payouts directly to your account.</p>
          </div>
          
          <div class="card">
            <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Flexible Schedule</h3>
            <p class="text-gray-600">Drive when you want. Morning, evening, or weekends—you decide.</p>
          </div>
          
          <div class="card">
            <div class="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Safety & Support</h3>
            <p class="text-gray-600">24/7 driver support, insurance coverage, and safety features.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA -->
    <section class="section-padding bg-gradient-to-br from-primary-600 to-blue-600 text-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">Ready to Start Earning?</h2>
        <p class="text-xl text-primary-100 mb-8">
          Sign up today and start driving within 48 hours
        </p>
        <NuxtLink to="/auth/driver-signup" class="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all inline-block">
          Apply Now
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>
