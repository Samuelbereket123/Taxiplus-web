<template>
  <div class="w-full max-w-md animate-scale-in">
    <div class="glass rounded-3xl p-8 shadow-2xl">
      <div class="text-center mb-8">
        <NuxtLink to="/" class="inline-flex items-center space-x-2 mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
            <span class="text-white font-bold text-xl">T+</span>
          </div>
        </NuxtLink>
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Driver Sign In</h1>
        <p class="text-gray-600">Access your driver dashboard</p>
      </div>
      
      <form @submit.prevent="handleLogin" class="space-y-5">
        <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
          {{ error }}
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input v-model="email" type="email" required class="input-field" placeholder="you@example.com" />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input v-model="password" type="password" required class="input-field" placeholder="••••••••" />
        </div>
        
        <button type="submit" :disabled="loading" class="w-full btn-primary disabled:opacity-50">
          {{ loading ? 'Signing in...' : 'Sign In' }}
        </button>
      </form>
      
      <div class="mt-6 text-center text-sm text-gray-600">
        Not a driver yet?
        <NuxtLink to="/auth/driver-signup" class="text-primary-600 hover:text-primary-700 font-medium">
          Apply now
        </NuxtLink>
      </div>
      
      <div class="mt-6 pt-6 border-t border-gray-200">
        <NuxtLink to="/auth/login" class="block text-center text-sm text-gray-600 hover:text-gray-900">
          Sign in as a <span class="font-medium text-primary-600">Passenger</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'auth' })

const { signIn } = useAuth()
const router = useRouter()

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  loading.value = true
  error.value = ''
  
  const { error: signInError } = await signIn(email.value, password.value)
  
  if (signInError) {
    error.value = signInError.message
    loading.value = false
  } else {
    router.push('/driver/dashboard')
  }
}
</script>
