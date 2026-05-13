<template>
  <div class="max-w-5xl mx-auto pb-20 lg:pb-0">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Ride History</h1>
      <p class="text-gray-600">View all your past trips</p>
    </div>
    
    <!-- Filters -->
    <div class="card mb-6">
      <div class="flex flex-col sm:flex-row gap-4">
        <select class="input-field flex-1">
          <option>All Rides</option>
          <option>This Week</option>
          <option>This Month</option>
          <option>Last 3 Months</option>
        </select>
        <select class="input-field flex-1">
          <option>All Statuses</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>
      </div>
    </div>
    
    <!-- Ride List -->
    <div class="space-y-4">
      <div v-for="ride in rides" :key="ride.id" class="card hover:shadow-lg transition-shadow">
        <div class="flex items-start justify-between mb-4">
          <div class="flex-1">
            <div class="flex items-center space-x-2 mb-2">
              <span class="px-3 py-1 rounded-full text-xs font-medium" :class="ride.statusClass">
                {{ ride.status }}
              </span>
              <span class="text-sm text-gray-500">{{ ride.date }}</span>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <div class="w-2.5 h-2.5 bg-primary-600 rounded-full"></div>
                </div>
                <div>
                  <p class="text-sm text-gray-600">Pickup</p>
                  <p class="font-medium text-gray-900">{{ ride.pickup }}</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <div class="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
                </div>
                <div>
                  <p class="text-sm text-gray-600">Dropoff</p>
                  <p class="font-medium text-gray-900">{{ ride.dropoff }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="text-right ml-4">
            <p class="text-2xl font-bold text-gray-900 mb-1">{{ ride.fare }} ETB</p>
            <p class="text-sm text-gray-600 mb-2">{{ ride.distance }} km</p>
            <div class="flex items-center space-x-1">
              <svg class="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <span class="text-sm font-medium text-gray-700">{{ ride.rating }}</span>
            </div>
          </div>
        </div>
        
        <div class="pt-4 border-t border-gray-200 flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full"></div>
            <div>
              <p class="font-medium text-gray-900 text-sm">{{ ride.driver }}</p>
              <p class="text-xs text-gray-600">{{ ride.vehicle }}</p>
            </div>
          </div>
          
          <button class="text-primary-600 hover:text-primary-700 text-sm font-medium">
            View Receipt
          </button>
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

const rides = ref([
  {
    id: 1,
    pickup: 'Bole, Addis Ababa',
    dropoff: 'Meskel Square',
    date: 'Today, 2:30 PM',
    fare: '250',
    distance: '8.5',
    rating: '5.0',
    driver: 'Abebe Kebede',
    vehicle: 'Toyota Corolla',
    status: 'Completed',
    statusClass: 'bg-green-100 text-green-700'
  },
  {
    id: 2,
    pickup: 'Piazza',
    dropoff: 'Bole Airport',
    date: 'Yesterday, 9:15 AM',
    fare: '380',
    distance: '12.3',
    rating: '4.8',
    driver: 'Tigist Mengistu',
    vehicle: 'Hyundai Elantra',
    status: 'Completed',
    statusClass: 'bg-green-100 text-green-700'
  },
  {
    id: 3,
    pickup: 'Kazanchis',
    dropoff: 'CMC',
    date: 'May 11, 4:45 PM',
    fare: '180',
    distance: '6.2',
    rating: '5.0',
    driver: 'Dawit Alemu',
    vehicle: 'Toyota Yaris',
    status: 'Completed',
    statusClass: 'bg-green-100 text-green-700'
  },
])
</script>
