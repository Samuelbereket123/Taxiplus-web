<template>
  <div class="w-full max-w-md animate-scale-in">
    <div class="glass rounded-3xl p-8 shadow-2xl">
      <div class="text-center mb-8">
        <NuxtLink to="/" class="inline-flex items-center space-x-2 mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
            <span class="text-white font-bold text-xl">T+</span>
          </div>
        </NuxtLink>
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Reset Password</h1>
        <p class="text-gray-600">We'll send you a reset link</p>
      </div>
      
      <form @submit.prevent="handleReset" class="space-y-5">
        <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
          {{ error }}
        </div>
        
        <div v-if="success" class="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
          {{ success }}
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input v-model="email" type="email" required class="input-field" placeholder="you@example.com" />
        </div>
        
        <button type="submit" :disabled="loading" class="w-full btn-primary disabled:opacity-50">
          {{ loading ? 'Sending...' : 'Send Reset Link' }}
        </button>
      </form>
      
      <div class="mt-6 text-center text-sm text-gray-600">
        Remember your password?
        <NuxtLink to="/auth/login" class="text-primary-600 hover:text-primary-700 font-medium">
          Sign in
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'auth' })

const { resetPassword } = useAuth()

const email = ref('')
const loading = ref(false)
const error = ref('')
const success = ref('')

const handleReset = async () => {
  loading.value = true
  error.value = ''
  success.value = ''
  
  const { error: resetError } = await resetPassword(email.value)
  
  if (resetError) {
    error.value = resetError.message
  } else {
    success.value = 'Check your email for the reset link!'
  }
  
  loading.value = false
}
</script>
