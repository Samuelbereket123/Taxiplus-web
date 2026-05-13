<template>
  <div>
    <!-- Development Banner -->
    <div class="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 px-4 text-center sticky top-0 z-50 shadow-lg">
      <div class="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm sm:text-base">
        <svg class="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
        </svg>
        <span class="font-medium">
          🚧 This Website is Under Development | Our App is Running Locally (Not Yet Hosted)
        </span>
      </div>
    </div>
    
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { checkAuth } = useAuth()

onMounted(() => {
  checkAuth()
})
</script>
