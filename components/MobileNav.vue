<template>
  <nav class="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
    <div class="grid grid-cols-4 gap-1 px-2 py-3">
      <NuxtLink 
        to="/dashboard" 
        class="flex flex-col items-center space-y-1 py-2 rounded-lg transition-colors"
        :class="$route.path === '/dashboard' ? 'text-primary-600' : 'text-gray-600'"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
        <span class="text-xs font-medium">Home</span>
      </NuxtLink>
      
      <NuxtLink 
        to="/dashboard/ride" 
        class="flex flex-col items-center space-y-1 py-2 rounded-lg transition-colors"
        :class="$route.path.startsWith('/dashboard/ride') ? 'text-primary-600' : 'text-gray-600'"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
        </svg>
        <span class="text-xs font-medium">Ride</span>
      </NuxtLink>
      
      <NuxtLink 
        to="/dashboard/history" 
        class="flex flex-col items-center space-y-1 py-2 rounded-lg transition-colors"
        :class="$route.path === '/dashboard/history' ? 'text-primary-600' : 'text-gray-600'"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span class="text-xs font-medium">History</span>
      </NuxtLink>
      
      <NuxtLink 
        to="/dashboard/settings" 
        class="flex flex-col items-center space-y-1 py-2 rounded-lg transition-colors"
        :class="$route.path === '/dashboard/settings' ? 'text-primary-600' : 'text-gray-600'"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
        <span class="text-xs font-medium">Account</span>
      </NuxtLink>
    </div>
  </nav>
</template>
