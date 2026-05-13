<template>
  <section class="section-padding bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">The Daily Commute Struggle</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          We believe people shouldn't have to guess their way through their daily commute.
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div class="card group hover:border-red-200">
          <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Unpredictable Wait Times</h3>
          <p class="text-gray-600">Standing on the street, never knowing when your ride will arrive or if it will come at all.</p>
        </div>
        
        <div class="card group hover:border-orange-200">
          <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Price Uncertainty</h3>
          <p class="text-gray-600">Negotiating fares, unexpected charges, and no transparency in pricing.</p>
        </div>
        
        <div class="card group hover:border-yellow-200">
          <div class="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Safety Concerns</h3>
          <p class="text-gray-600">No way to verify drivers, track your journey, or share your trip with loved ones.</p>
        </div>
      </div>
    </div>
  </section>
</template>
