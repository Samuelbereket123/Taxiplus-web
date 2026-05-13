<template>
  <section class="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your City,<br />
            <span class="text-primary-600">Moving Smarter</span>
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            TaxiPlus brings Silicon Valley innovation to African streets. Real-time tracking, transparent pricing, and verified drivers—all in one seamless experience.
          </p>
          
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Know Before You Go</h3>
                <p class="text-gray-600">See your fare, driver details, and arrival time upfront. No surprises.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Track Every Moment</h3>
                <p class="text-gray-600">Real-time GPS tracking from pickup to dropoff. Share your trip with family.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Verified & Trusted</h3>
                <p class="text-gray-600">Every driver is background-checked, rated, and monitored for your safety.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="relative">
          <div class="glass rounded-3xl p-8 shadow-2xl">
            <div class="space-y-4">
              <div class="bg-gradient-to-r from-primary-500 to-blue-500 rounded-2xl p-6 text-white">
                <div class="flex items-center justify-between mb-4">
                  <span class="text-sm opacity-90">Your Driver</span>
                  <div class="flex items-center space-x-1">
                    <svg class="w-4 h-4 fill-current text-yellow-300" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                    <span class="text-sm font-semibold">4.9</span>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <div class="w-16 h-16 bg-white/20 rounded-full"></div>
                  <div>
                    <p class="font-semibold text-lg">Abebe Kebede</p>
                    <p class="text-sm opacity-90">Toyota Corolla • AA-3-12345</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-white rounded-2xl p-6 border border-gray-200">
                <div class="flex items-center justify-between mb-4">
                  <span class="text-sm text-gray-600">Arriving in</span>
                  <span class="text-2xl font-bold text-primary-600">3 min</span>
                </div>
                <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full" style="width: 75%"></div>
                </div>
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-green-50 rounded-xl p-4 border border-green-100">
                  <p class="text-xs text-green-600 mb-1">Trip Cost</p>
                  <p class="text-xl font-bold text-green-700">Fair Rate</p>
                </div>
                <div class="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <p class="text-xs text-blue-600 mb-1">Distance</p>
                  <p class="text-xl font-bold text-blue-700">8.5 km</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
