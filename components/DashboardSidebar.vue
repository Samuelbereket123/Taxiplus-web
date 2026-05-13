<template>
  <aside class="hidden lg:block w-64 bg-white border-r border-gray-200 min-h-screen sticky top-16">
    <nav class="p-4 space-y-1">
      <NuxtLink 
        to="/dashboard" 
        class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
        :class="{ 'bg-primary-50 text-primary-700': $route.path === '/dashboard' }"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
        <span class="font-medium">Home</span>
      </NuxtLink>
      
      <NuxtLink 
        to="/dashboard/ride" 
        class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
        :class="{ 'bg-primary-50 text-primary-700': $route.path.startsWith('/dashboard/ride') }"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
        </svg>
        <span class="font-medium">Book a Ride</span>
      </NuxtLink>
      
      <NuxtLink 
        to="/dashboard/history" 
        class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
        :class="{ 'bg-primary-50 text-primary-700': $route.path === '/dashboard/history' }"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span class="font-medium">Ride History</span>
      </NuxtLink>
      
      <NuxtLink 
        to="/dashboard/payments" 
        class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
        :class="{ 'bg-primary-50 text-primary-700': $route.path === '/dashboard/payments' }"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
        </svg>
        <span class="font-medium">Payments</span>
      </NuxtLink>
      
      <NuxtLink 
        to="/dashboard/settings" 
        class="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
        :class="{ 'bg-primary-50 text-primary-700': $route.path === '/dashboard/settings' }"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        <span class="font-medium">Settings</span>
      </NuxtLink>
      
      <div class="pt-4 mt-4 border-t border-gray-200">
        <button 
          @click="handleSignOut"
          class="flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors w-full"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
          </svg>
          <span class="font-medium">Sign Out</span>
        </button>
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
const { signOut } = useAuth()
const router = useRouter()

const handleSignOut = async () => {
  await signOut()
  router.push('/')
}
</script>
