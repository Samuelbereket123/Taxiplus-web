<template>
  <section class="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-blue-700 text-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl"></div>
    </div>
    
    <div class="max-w-4xl mx-auto text-center relative">
      <h2 class="text-4xl lg:text-6xl font-bold mb-6">
        Ready to Move Smarter?
      </h2>
      <p class="text-xl lg:text-2xl text-primary-100 mb-12">
        Join thousands of riders experiencing transportation without uncertainty.
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <NuxtLink to="/auth/signup" class="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-2xl active:scale-95 w-full sm:w-auto">
          Get Started Free
        </NuxtLink>
        <NuxtLink to="/driver" class="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-200 w-full sm:w-auto">
          Become a Driver
        </NuxtLink>
      </div>
      
      <p class="mt-8 text-primary-100 text-sm">
        No credit card required • Start riding in minutes
      </p>
    </div>
  </section>
</template>
