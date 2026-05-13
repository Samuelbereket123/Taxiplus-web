<template>
  <nav class="bg-white border-b border-gray-200 sticky top-0 z-40">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
            <span class="text-white font-bold text-lg">T+</span>
          </div>
          <span class="text-xl font-bold text-gray-900">TaxiPlus</span>
        </div>
        
        <div class="flex items-center space-x-4">
          <button class="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors relative">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
            </svg>
            <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div class="flex items-center space-x-3 pl-4 border-l border-gray-200">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-blue-500 rounded-full"></div>
            <div class="hidden sm:block">
              <p class="text-sm font-medium text-gray-900">{{ user?.user_metadata?.full_name || 'User' }}</p>
              <p class="text-xs text-gray-500">Passenger</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { user } = useAuth()
</script>
