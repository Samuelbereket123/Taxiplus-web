<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white border-b border-gray-200">
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
              <span class="text-white font-bold text-lg">T+</span>
            </div>
            <span class="text-xl font-bold text-gray-900">Admin</span>
          </div>
          
          <div class="flex items-center space-x-4">
            <span class="text-sm text-gray-600">Admin User</span>
          </div>
        </div>
      </div>
    </nav>
    
    <div class="flex">
      <aside class="w-64 bg-white border-r border-gray-200 min-h-screen">
        <nav class="p-4 space-y-1">
          <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-xl bg-primary-50 text-primary-700">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
            </svg>
            <span class="font-medium">Dashboard</span>
          </a>
          <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
            <span class="font-medium">Users</span>
          </a>
          <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span class="font-medium">Rides</span>
          </a>
          <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
            </svg>
            <span class="font-medium">Revenue</span>
          </a>
        </nav>
      </aside>
      
      <main class="flex-1 p-8">
        <div class="max-w-7xl mx-auto">
          <h1 class="text-3xl font-bold text-gray-900 mb-8">Platform Overview</h1>
          
          <!-- Key Metrics -->
          <div class="grid md:grid-cols-4 gap-6 mb-8">
            <div class="card">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-600">Total Users</span>
                <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <p class="text-3xl font-bold text-gray-900">10,234</p>
              <p class="text-sm text-green-600 mt-1">+12% this month</p>
            </div>
            
            <div class="card">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-600">Active Drivers</span>
                <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <p class="text-3xl font-bold text-gray-900">523</p>
              <p class="text-sm text-gray-600 mt-1">89 online now</p>
            </div>
            
            <div class="card">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-600">Today's Rides</span>
                <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <p class="text-3xl font-bold text-gray-900">1,847</p>
              <p class="text-sm text-green-600 mt-1">+8% vs yesterday</p>
            </div>
            
            <div class="card">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-600">Revenue Today</span>
                <svg class="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
              </div>
              <p class="text-3xl font-bold text-gray-900">456K ETB</p>
              <p class="text-sm text-green-600 mt-1">+15% vs yesterday</p>
            </div>
          </div>
          
          <!-- Recent Activity -->
          <div class="grid lg:grid-cols-2 gap-8">
            <div class="card">
              <h2 class="text-xl font-semibold text-gray-900 mb-6">Recent Rides</h2>
              <div class="space-y-4">
                <div v-for="ride in recentRides" :key="ride.id" class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p class="font-medium text-gray-900">{{ ride.route }}</p>
                    <p class="text-sm text-gray-600">{{ ride.driver }} • {{ ride.time }}</p>
                  </div>
                  <span class="px-3 py-1 rounded-full text-sm font-medium" :class="ride.statusClass">
                    {{ ride.status }}
                  </span>
                </div>
              </div>
            </div>
            
            <div class="card">
              <h2 class="text-xl font-semibold text-gray-900 mb-6">Driver Verifications</h2>
              <div class="space-y-4">
                <div v-for="driver in pendingDrivers" :key="driver.id" class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full"></div>
                    <div>
                      <p class="font-medium text-gray-900">{{ driver.name }}</p>
                      <p class="text-sm text-gray-600">{{ driver.vehicle }}</p>
                    </div>
                  </div>
                  <div class="flex space-x-2">
                    <button class="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200">
                      Approve
                    </button>
                    <button class="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200">
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: 'auth'
})

const recentRides = ref([
  { id: 1, route: 'Bole → Meskel Square', driver: 'Abebe K.', time: '2 min ago', status: 'Completed', statusClass: 'bg-green-100 text-green-700' },
  { id: 2, route: 'Piazza → Airport', driver: 'Tigist M.', time: '5 min ago', status: 'In Progress', statusClass: 'bg-blue-100 text-blue-700' },
  { id: 3, route: 'CMC → Bole', driver: 'Dawit A.', time: '8 min ago', status: 'Completed', statusClass: 'bg-green-100 text-green-700' },
])

const pendingDrivers = ref([
  { id: 1, name: 'Solomon Tesfaye', vehicle: 'Toyota Corolla' },
  { id: 2, name: 'Hanna Bekele', vehicle: 'Hyundai Elantra' },
  { id: 3, name: 'Yonas Girma', vehicle: 'Toyota Yaris' },
])
</script>
