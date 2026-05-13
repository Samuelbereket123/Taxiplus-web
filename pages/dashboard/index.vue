<template>
  <div class="max-w-7xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Welcome back, {{ userName }}!</h1>
      <p class="text-gray-600">Ready for your next ride?</p>
    </div>
    
    <!-- Quick Actions -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <NuxtLink to="/dashboard/ride" class="card group hover:border-primary-200 cursor-pointer">
        <div class="flex items-center space-x-4">
          <div class="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-1">Book a Ride</h3>
            <p class="text-sm text-gray-600">Get moving now</p>
          </div>
        </div>
      </NuxtLink>
      
      <div class="card">
        <div class="flex items-center space-x-4">
          <div class="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-1">12 Rides</h3>
            <p class="text-sm text-gray-600">This month</p>
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="flex items-center space-x-4">
          <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-1">3,450 ETB</h3>
            <p class="text-sm text-gray-600">Total spent</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Recent Rides -->
    <div class="card mb-8">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-semibold text-gray-900">Recent Rides</h2>
        <NuxtLink to="/dashboard/history" class="text-primary-600 hover:text-primary-700 text-sm font-medium">
          View All
        </NuxtLink>
      </div>
      
      <div class="space-y-4">
        <div v-for="ride in recentRides" :key="ride.id" class="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div>
              <p class="font-medium text-gray-900">{{ ride.destination }}</p>
              <p class="text-sm text-gray-600">{{ ride.date }} • {{ ride.distance }}</p>
            </div>
          </div>
          <div class="text-right">
            <p class="font-semibold text-gray-900">{{ ride.fare }} ETB</p>
            <div class="flex items-center space-x-1 mt-1">
              <svg class="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <span class="text-sm text-gray-600">{{ ride.rating }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Saved Places -->
    <div class="card">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-semibold text-gray-900">Saved Places</h2>
        <button class="text-primary-600 hover:text-primary-700 text-sm font-medium">
          Add New
        </button>
      </div>
      
      <div class="grid md:grid-cols-2 gap-4">
        <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
          <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
          </div>
          <div>
            <p class="font-medium text-gray-900">Home</p>
            <p class="text-sm text-gray-600">Bole, Addis Ababa</p>
          </div>
        </div>
        
        <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
          <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <div>
            <p class="font-medium text-gray-900">Work</p>
            <p class="text-sm text-gray-600">Kazanchis, Addis Ababa</p>
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

const { user } = useAuth()
const userName = computed(() => user.value?.user_metadata?.full_name?.split(' ')[0] || 'there')

const recentRides = ref([
  { id: 1, destination: 'Meskel Square', date: 'Today, 2:30 PM', distance: '8.5 km', fare: '250', rating: '5.0' },
  { id: 2, destination: 'Bole Airport', date: 'Yesterday, 9:15 AM', distance: '12.3 km', fare: '380', rating: '4.8' },
  { id: 3, destination: 'Piazza', date: 'May 11, 4:45 PM', distance: '6.2 km', fare: '180', rating: '5.0' },
])
</script>
