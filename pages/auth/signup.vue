<template>
  <div class="w-full max-w-md animate-scale-in">
    <div class="glass rounded-3xl p-8 shadow-2xl">
      <div class="text-center mb-8">
        <NuxtLink to="/" class="inline-flex items-center space-x-2 mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
            <span class="text-white font-bold text-xl">T+</span>
          </div>
        </NuxtLink>
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Get Started</h1>
        <p class="text-gray-600">Create your account in seconds</p>
      </div>
      
      <form @submit.prevent="handleSignup" class="space-y-5">
        <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
          {{ error }}
        </div>
        
        <div v-if="success" class="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
          {{ success }}
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input 
            v-model="fullName" 
            type="text" 
            required
            class="input-field"
            placeholder="Abebe Kebede"
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input 
            v-model="email" 
            type="email" 
            required
            class="input-field"
            placeholder="you@example.com"
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input 
            v-model="phone" 
            type="tel" 
            required
            class="input-field"
            placeholder="+251 91 234 5678"
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input 
            v-model="password" 
            type="password" 
            required
            minlength="8"
            class="input-field"
            placeholder="••••••••"
          />
          <p class="text-xs text-gray-500 mt-1">At least 8 characters</p>
        </div>
        
        <div class="flex items-start">
          <input type="checkbox" required class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 mt-1">
          <label class="ml-2 text-sm text-gray-600">
            I agree to the <NuxtLink to="/terms" class="text-primary-600 hover:text-primary-700">Terms of Service</NuxtLink> and <NuxtLink to="/privacy" class="text-primary-600 hover:text-primary-700">Privacy Policy</NuxtLink>
          </label>
        </div>
        
        <button 
          type="submit" 
          :disabled="loading"
          class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ loading ? 'Creating account...' : 'Create Account' }}
        </button>
      </form>
      
      <div class="mt-6 text-center text-sm text-gray-600">
        Already have an account?
        <NuxtLink to="/auth/login" class="text-primary-600 hover:text-primary-700 font-medium">
          Sign in
        </NuxtLink>
      </div>
      
      <div class="mt-6 pt-6 border-t border-gray-200">
        <NuxtLink to="/auth/driver-signup" class="block text-center text-sm text-gray-600 hover:text-gray-900">
          Sign up as a <span class="font-medium text-primary-600">Driver</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const { signUp } = useAuth()
const router = useRouter()

const fullName = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')
const success = ref('')

const handleSignup = async () => {
  loading.value = true
  error.value = ''
  success.value = ''
  
  const { error: signUpError } = await signUp(email.value, password.value, {
    full_name: fullName.value,
    phone: phone.value,
    user_type: 'passenger'
  })
  
  if (signUpError) {
    error.value = signUpError.message
    loading.value = false
  } else {
    success.value = 'Account created! Check your email to verify.'
    setTimeout(() => {
      router.push('/auth/login')
    }, 2000)
  }
}
</script>
