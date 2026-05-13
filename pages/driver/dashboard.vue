<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
              <span class="text-white font-bold text-lg">T+</span>
            </div>
            <span class="text-xl font-bold text-gray-900">Driver</span>
          </div>
          
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2 px-4 py-2 rounded-full" :class="isOnline ? 'bg-green-100' : 'bg-gray-100'">
              <div class="w-2 h-2 rounded-full" :class="isOnline ? 'bg-green-500' : 'bg-gray-400'"></div>
              <span class="text-sm font-medium" :class="isOnline ? 'text-green-700' : 'text-gray-600'">
                {{ isOnline ? 'Online' : 'Offline' }}
              </span>
            </div>
            
            <button 
              @click="toggleOnline"
              class="px-6 py-2 rounded-xl font-medium transition-all"
              :class="isOnline ? 'bg-red-100 text-red-700 hover:bg-red-200' : 'bg-primary-600 text-white hover:bg-primary-700'"
            >
              {{ isOnline ? 'Go Offline' : 'Go Online' }}
            </button>
          </div>
        </div>
      </div>
    </nav>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Stats Overview -->
      <div class="grid md:grid-cols-4 gap-6 mb-8">
        <div class="card">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm text-gray-600">Today's Earnings</span>
            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
            </svg>
          </div>
          <p class="text-3xl font-bold text-gray-900">1,250 ETB</p>
          <p class="text-sm text-green-600 mt-1">+15% from yesterday</p>
        </div>
        
        <div class="card">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm text-gray-600">Trips Today</span>
            <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
          </div>
          <p class="text-3xl font-bold text-gray-900">8</p>
          <p class="text-sm text-gray-600 mt-1">2 hours online</p>
        </div>
        
        <div class="card">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm text-gray-600">Rating</span>
            <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          </div>
          <p class="text-3xl font-bold text-gray-900">4.9</p>
          <p class="text-sm text-gray-600 mt-1">Based on 156 trips</p>
        </div>
        
        <div class="card">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm text-gray-600">Acceptance Rate</span>
            <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <p class="text-3xl font-bold text-gray-900">94%</p>
          <p class="text-sm text-gray-600 mt-1">Excellent</p>
        </div>
      </div>
      
      <!-- Active Ride Request -->
      <div v-if="activeRequest" class="card mb-8 border-2 border-primary-500 animate-pulse">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold text-gray-900">New Ride Request</h2>
          <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
            {{ countdown }}s to respond
          </span>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <div class="flex items-start space-x-3 mb-4">
              <div class="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <div class="w-3 h-3 bg-primary-600 rounded-full"></div>
              </div>
              <div>
                <p class="text-sm text-gray-600 mb-1">Pickup</p>
                <p class="font-medium text-gray-900">Bole, Addis Ababa</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-3">
              <div class="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <div class="w-3 h-3 bg-red-600 rounded-full"></div>
              </div>
              <div>
                <p class="text-sm text-gray-600 mb-1">Dropoff</p>
                <p class="font-medium text-gray-900">Meskel Square</p>
              </div>
            </div>
          </div>
          
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <span class="text-sm text-gray-600">Distance</span>
              <span class="font-semibold text-gray-900">8.5 km</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <span class="text-sm text-gray-600">Estimated Fare</span>
              <span class="font-semibold text-green-600">250 ETB</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <span class="text-sm text-gray-600">Passenger Rating</span>
              <div class="flex items-center space-x-1">
                <svg class="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                <span class="font-semibold text-gray-900">4.8</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex gap-4">
          <button @click="declineRide" class="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
            Decline
          </button>
          <button @click="acceptRide" class="flex-1 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors">
            Accept Ride
          </button>
        </div>
      </div>
      
      <!-- Recent Trips -->
      <div class="card">
        <h2 class="text-xl font-semibold text-gray-900 mb-6">Recent Trips</h2>
        <div class="space-y-4">
          <div v-for="trip in recentTrips" :key="trip.id" class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <p class="font-medium text-gray-900 mb-1">{{ trip.route }}</p>
              <p class="text-sm text-gray-600">{{ trip.time }}</p>
            </div>
            <div class="text-right">
              <p class="font-semibold text-green-600 mb-1">+{{ trip.earnings }} ETB</p>
              <div class="flex items-center space-x-1">
                <svg class="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                <span class="text-sm text-gray-600">{{ trip.rating }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: 'auth'
})

const isOnline = ref(false)
const activeRequest = ref(true)
const countdown = ref(15)

const recentTrips = ref([
  { id: 1, route: 'Bole → Meskel Square', time: '2:30 PM', earnings: '250', rating: '5.0' },
  { id: 2, route: 'Piazza → Bole Airport', time: '1:15 PM', earnings: '380', rating: '4.8' },
  { id: 3, route: 'Kazanchis → CMC', time: '11:45 AM', earnings: '180', rating: '5.0' },
])

const toggleOnline = () => {
  isOnline.value = !isOnline.value
}

const acceptRide = () => {
  activeRequest.value = false
  alert('Ride accepted! Navigate to pickup location.')
}

const declineRide = () => {
  activeRequest.value = false
}

onMounted(() => {
  const timer = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--
    } else {
      activeRequest.value = false
      clearInterval(timer)
    }
  }, 1000)
  
  onUnmounted(() => clearInterval(timer))
})
</script>
