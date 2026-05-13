<template>
  <div class="w-full max-w-2xl animate-scale-in">
    <div class="glass rounded-3xl p-8 shadow-2xl">
      <div class="text-center mb-8">
        <NuxtLink to="/" class="inline-flex items-center space-x-2 mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
            <span class="text-white font-bold text-xl">T+</span>
          </div>
        </NuxtLink>
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Become a Driver</h1>
        <p class="text-gray-600">Start earning with TaxiPlus</p>
      </div>
      
      <form @submit.prevent="handleSignup" class="space-y-5">
        <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
          {{ error }}
        </div>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input v-model="fullName" type="text" required class="input-field" placeholder="Abebe Kebede" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input v-model="phone" type="tel" required class="input-field" placeholder="+251 91 234 5678" />
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input v-model="email" type="email" required class="input-field" placeholder="you@example.com" />
        </div>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Vehicle Make</label>
            <input v-model="vehicleMake" type="text" required class="input-field" placeholder="Toyota" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Vehicle Model</label>
            <input v-model="vehicleModel" type="text" required class="input-field" placeholder="Corolla" />
          </div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">License Plate</label>
            <input v-model="licensePlate" type="text" required class="input-field" placeholder="AA-3-12345" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">License Number</label>
            <input v-model="licenseNumber" type="text" required class="input-field" placeholder="DL123456" />
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input v-model="password" type="password" required minlength="8" class="input-field" placeholder="••••••••" />
        </div>
        
        <div class="flex items-start">
          <input type="checkbox" required class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 mt-1">
          <label class="ml-2 text-sm text-gray-600">
            I agree to the Driver Terms and understand that my application will be reviewed
          </label>
        </div>
        
        <button type="submit" :disabled="loading" class="w-full btn-primary disabled:opacity-50">
          {{ loading ? 'Submitting...' : 'Submit Application' }}
        </button>
      </form>
      
      <div class="mt-6 text-center text-sm text-gray-600">
        Already a driver?
        <NuxtLink to="/auth/driver-login" class="text-primary-600 hover:text-primary-700 font-medium">
          Sign in
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'auth' })

const { signUp } = useAuth()
const router = useRouter()

const fullName = ref('')
const email = ref('')
const phone = ref('')
const vehicleMake = ref('')
const vehicleModel = ref('')
const licensePlate = ref('')
const licenseNumber = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

const handleSignup = async () => {
  loading.value = true
  error.value = ''
  
  const { error: signUpError } = await signUp(email.value, password.value, {
    full_name: fullName.value,
    phone: phone.value,
    user_type: 'driver',
    vehicle_make: vehicleMake.value,
    vehicle_model: vehicleModel.value,
    license_plate: licensePlate.value,
    license_number: licenseNumber.value,
    verification_status: 'pending'
  })
  
  if (signUpError) {
    error.value = signUpError.message
    loading.value = false
  } else {
    alert('Application submitted! We will review and contact you within 24 hours.')
    router.push('/')
  }
}
</script>
