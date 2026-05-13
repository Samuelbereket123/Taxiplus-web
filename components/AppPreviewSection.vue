<template>
  <section class="section-padding bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Experience the App</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Designed to feel native, fast, and intuitive
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Mobile-First Design</h3>
              <p class="text-gray-600">Built for your phone. Feels like a native app, works in your browser.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p class="text-gray-600">Optimized for speed. Book a ride in under 10 seconds.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Works Offline</h3>
              <p class="text-gray-600">View ride history and saved places even without internet.</p>
            </div>
          </div>
        </div>
        
        <div class="relative">
          <div class="glass rounded-3xl p-4 shadow-2xl">
            <div class="bg-gray-900 rounded-2xl p-6 aspect-[9/16]">
              <div class="flex items-center justify-between mb-6">
                <div class="text-white font-semibold">TaxiPlus</div>
                <div class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span class="text-white text-sm">Online</span>
                </div>
              </div>
              
              <div class="space-y-4">
                <div class="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div class="text-white/60 text-xs mb-2">Where to?</div>
                  <div class="text-white font-medium">Meskel Square</div>
                </div>
                
                <div class="bg-gradient-to-r from-primary-500 to-blue-500 rounded-xl p-4">
                  <div class="flex items-center justify-between text-white">
                    <div>
                      <div class="text-sm opacity-90 mb-1">Estimated Fare</div>
                      <div class="text-2xl font-bold">250 ETB</div>
                    </div>
                    <div class="text-right">
                      <div class="text-sm opacity-90 mb-1">ETA</div>
                      <div class="text-2xl font-bold">12m</div>
                    </div>
                  </div>
                </div>
                
                <button class="w-full bg-white text-gray-900 font-semibold py-4 rounded-xl">
                  Request Ride
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
