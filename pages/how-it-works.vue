<template>
  <div>
    <section class="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">How It Works</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Get from A to B in three simple steps
          </p>
        </div>
      </div>
    </section>
    
    <HowItWorksSection />
    
    <!-- Detailed Steps -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div class="order-2 lg:order-1">
            <div class="glass rounded-3xl p-8 shadow-xl">
              <div class="bg-gradient-to-br from-primary-500 to-blue-500 rounded-2xl p-6 text-white">
                <div class="flex items-center space-x-4 mb-4">
                  <div class="w-12 h-12 bg-white/20 rounded-full"></div>
                  <div>
                    <p class="font-semibold">Abebe Kebede</p>
                    <p class="text-sm opacity-90">Toyota Corolla</p>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm opacity-90">Fare</p>
                    <p class="text-2xl font-bold">--</p>
                  </div>
                  <div>
                    <p class="text-sm opacity-90">ETA</p>
                    <p class="text-2xl font-bold">3 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center">
                <span class="text-3xl font-bold text-white">1</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">Request Your Ride</h2>
            </div>
            <p class="text-lg text-gray-600 mb-6">
              Open the TaxiPlus app, enter your destination, and see your fare instantly. No surprises, no negotiations. Tap "Request Ride" and we'll match you with the nearest available driver.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700">See upfront pricing</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700">Choose ride type</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700">Instant driver matching</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                <span class="text-3xl font-bold text-white">2</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">Track in Real-Time</h2>
            </div>
            <p class="text-lg text-gray-600 mb-6">
              Watch your driver's location update in real-time on the map. Get notified when they're approaching. Share your trip with family or friends for added safety.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700">Live GPS tracking</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700">Driver details & photo</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700">Share trip with contacts</span>
              </li>
            </ul>
          </div>
          <div>
            <div class="glass rounded-3xl p-8 shadow-xl">
              <div class="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div class="text-center">
                  <svg class="w-32 h-32 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                  </svg>
                  <p class="text-blue-700 font-medium">Live Map View</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <div class="glass rounded-3xl p-8 shadow-xl">
              <div class="space-y-4">
                <div class="bg-green-50 rounded-xl p-6 border border-green-200">
                  <div class="flex items-center justify-between mb-4">
                    <span class="text-sm text-green-600">Trip Completed</span>
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <p class="text-2xl font-bold text-green-700 mb-2">Paid</p>
                  <p class="text-sm text-green-600">Paid via Mobile Money</p>
                </div>
                <div class="bg-gray-50 rounded-xl p-4">
                  <p class="text-sm text-gray-600 mb-2">Rate your experience</p>
                  <div class="flex space-x-2">
                    <div class="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    </div>
                    <div class="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    </div>
                    <div class="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    </div>
                    <div class="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    </div>
                    <div class="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center">
                <span class="text-3xl font-bold text-white">3</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">Ride & Pay</h2>
            </div>
            <p class="text-lg text-gray-600 mb-6">
              Enjoy your journey knowing exactly what you'll pay. Payment is automatic and cashless. Rate your driver and help maintain our high-quality service.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700">Automatic payment</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700">Digital receipt</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700">Rate your experience</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <CTASection />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useHead({
  title: 'How It Works - TaxiPlus',
  meta: [
    { name: 'description', content: 'Learn how TaxiPlus works: Request, Track, and Ride in three simple steps.' }
  ]
})
</script>
