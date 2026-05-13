<template>
  <div class="max-w-5xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Book a Ride</h1>
      <p class="text-gray-600">Where would you like to go?</p>
    </div>
    
    <div class="grid lg:grid-cols-2 gap-8">
      <!-- Booking Form -->
      <div class="card">
        <form @submit.prevent="calculateFare" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
            <div class="relative">
              <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
                <div class="w-3 h-3 bg-primary-500 rounded-full"></div>
              </div>
              <input 
                v-model="pickup" 
                type="text" 
                required
                class="input-field pl-12"
                placeholder="Enter pickup location"
              />
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Dropoff Location</label>
            <div class="relative">
              <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <input 
                v-model="dropoff" 
                type="text" 
                required
                class="input-field pl-12"
                placeholder="Where to?"
              />
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Ride Type</label>
              <select v-model="rideType" class="input-field">
                <option value="standard">Standard</option>
                <option value="comfort">Comfort</option>
                <option value="premium">Premium</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
              <select v-model="passengers" class="input-field">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          
          <button type="submit" class="w-full btn-primary">
            Calculate Fare
          </button>
        </form>
        
        <!-- Fare Estimate -->
        <div v-if="fareEstimate" class="mt-6 p-6 bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl border border-primary-100">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-medium text-gray-700">Estimated Fare</span>
            <span class="text-3xl font-bold text-primary-600">{{ fareEstimate }} ETB</span>
          </div>
          <div class="flex items-center justify-between text-sm text-gray-600 mb-4">
            <span>Distance: {{ distance }} km</span>
            <span>ETA: {{ eta }} min</span>
          </div>
          <button @click="requestRide" class="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors">
            Request Ride
          </button>
        </div>
      </div>
      
      <!-- Map Preview -->
      <div class="card">
        <div class="aspect-square rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div class="text-center text-gray-500">
            <svg class="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
            </svg>
            <p class="text-sm">Map will appear here</p>
            <p class="text-xs text-gray-400 mt-2">Enter locations to see route</p>
          </div>
        </div>
        
        <!-- Nearby Drivers -->
        <div class="mt-6">
          <h3 class="font-semibold text-gray-900 mb-4">Nearby Drivers</h3>
          <div class="space-y-3">
            <div v-for="driver in nearbyDrivers" :key="driver.id" class="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full"></div>
                <div>
                  <p class="font-medium text-gray-900 text-sm">{{ driver.name }}</p>
                  <div class="flex items-center space-x-1">
                    <svg class="w-3 h-3 fill-current text-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                    <span class="text-xs text-gray-600">{{ driver.rating }}</span>
                  </div>
                </div>
              </div>
              <span class="text-sm text-gray-600">{{ driver.distance }} km</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <MobileNav />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

const pickup = ref('')
const dropoff = ref('')
const rideType = ref('standard')
const passengers = ref('1')
const fareEstimate = ref(null)
const distance = ref(null)
const eta = ref(null)

const nearbyDrivers = ref([
  { id: 1, name: 'Abebe K.', rating: '4.9', distance: '0.8' },
  { id: 2, name: 'Tigist M.', rating: '5.0', distance: '1.2' },
  { id: 3, name: 'Dawit A.', rating: '4.8', distance: '1.5' },
])

const calculateFare = () => {
  // Simulate fare calculation
  const baseDistance = Math.floor(Math.random() * 15) + 5
  const baseFare = baseDistance * 30
  const multiplier = rideType.value === 'comfort' ? 1.3 : rideType.value === 'premium' ? 1.6 : 1
  
  fareEstimate.value = Math.round(baseFare * multiplier)
  distance.value = baseDistance.toFixed(1)
  eta.value = Math.round(baseDistance * 2.5)
}

const requestRide = () => {
  alert('Ride requested! Connecting you with a driver...')
}
</script>
