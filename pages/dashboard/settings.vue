<template>
  <div class="max-w-3xl mx-auto pb-20 lg:pb-0">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
      <p class="text-gray-600">Manage your account and preferences</p>
    </div>
    
    <!-- Profile Section -->
    <div class="card mb-6">
      <h2 class="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
      <form class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input type="text" v-model="profile.name" class="input-field" />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input type="email" v-model="profile.email" class="input-field" disabled />
          <p class="text-xs text-gray-500 mt-1">Email cannot be changed</p>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input type="tel" v-model="profile.phone" class="input-field" />
        </div>
        
        <button type="submit" class="btn-primary">
          Save Changes
        </button>
      </form>
    </div>
    
    <!-- Security Section -->
    <div class="card mb-6">
      <h2 class="text-xl font-semibold text-gray-900 mb-6">Security</h2>
      <div class="space-y-4">
        <button class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
          <div class="flex items-center space-x-3">
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
            </svg>
            <div class="text-left">
              <p class="font-medium text-gray-900">Change Password</p>
              <p class="text-sm text-gray-600">Update your password</p>
            </div>
          </div>
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Preferences -->
    <div class="card mb-6">
      <h2 class="text-xl font-semibold text-gray-900 mb-6">Preferences</h2>
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <p class="font-medium text-gray-900">Push Notifications</p>
            <p class="text-sm text-gray-600">Receive ride updates</p>
          </div>
          <button class="w-12 h-6 bg-primary-600 rounded-full relative">
            <span class="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
          </button>
        </div>
        
        <div class="flex items-center justify-between">
          <div>
            <p class="font-medium text-gray-900">Email Updates</p>
            <p class="text-sm text-gray-600">Promotions and news</p>
          </div>
          <button class="w-12 h-6 bg-gray-200 rounded-full relative">
            <span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></span>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Danger Zone -->
    <div class="card border-red-200">
      <h2 class="text-xl font-semibold text-red-600 mb-6">Danger Zone</h2>
      <button class="w-full px-6 py-3 bg-red-50 text-red-700 rounded-xl font-medium hover:bg-red-100 transition-colors">
        Delete Account
      </button>
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

const profile = ref({
  name: user.value?.user_metadata?.full_name || '',
  email: user.value?.email || '',
  phone: user.value?.user_metadata?.phone || ''
})
</script>
