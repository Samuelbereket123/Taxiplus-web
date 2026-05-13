<template>
  <div class="max-w-5xl mx-auto pb-20 lg:pb-0">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Payment Methods</h1>
      <p class="text-gray-600">Manage your payment options</p>
    </div>
    
    <!-- Add Payment Method -->
    <div class="card mb-6 border-2 border-dashed border-gray-300 hover:border-primary-500 transition-colors cursor-pointer">
      <button class="w-full flex items-center justify-center space-x-3 py-4">
        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
        </svg>
        <span class="font-medium text-gray-700">Add Payment Method</span>
      </button>
    </div>
    
    <!-- Payment Methods -->
    <div class="space-y-4 mb-8">
      <div v-for="method in paymentMethods" :key="method.id" class="card">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="w-14 h-14 bg-gradient-to-br rounded-xl flex items-center justify-center" :class="method.iconBg">
              <svg class="w-7 h-7" :class="method.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-gray-900">{{ method.name }}</p>
              <p class="text-sm text-gray-600">{{ method.details }}</p>
            </div>
          </div>
          
          <div class="flex items-center space-x-3">
            <span v-if="method.default" class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
              Default
            </span>
            <button class="text-gray-400 hover:text-gray-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Transaction History -->
    <div class="card">
      <h2 class="text-xl font-semibold text-gray-900 mb-6">Recent Transactions</h2>
      <div class="space-y-4">
        <div v-for="transaction in transactions" :key="transaction.id" class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div>
            <p class="font-medium text-gray-900">{{ transaction.description }}</p>
            <p class="text-sm text-gray-600">{{ transaction.date }}</p>
          </div>
          <div class="text-right">
            <p class="font-semibold text-gray-900">{{ transaction.amount }} ETB</p>
            <span class="text-xs px-2 py-1 rounded-full" :class="transaction.statusClass">
              {{ transaction.status }}
            </span>
          </div>
        </div>
      </div>
    </div>
    
    <MobileNav />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

const paymentMethods = ref([
  {
    id: 1,
    name: 'Mobile Money',
    details: '+251 91 234 5678',
    default: true,
    iconBg: 'from-green-500 to-green-600',
    iconColor: 'text-white'
  },
  {
    id: 2,
    name: 'Credit Card',
    details: '•••• 4242',
    default: false,
    iconBg: 'from-blue-500 to-blue-600',
    iconColor: 'text-white'
  }
])

const transactions = ref([
  {
    id: 1,
    description: 'Ride to Meskel Square',
    date: 'Today, 2:30 PM',
    amount: '250',
    status: 'Completed',
    statusClass: 'bg-green-100 text-green-700'
  },
  {
    id: 2,
    description: 'Ride to Bole Airport',
    date: 'Yesterday, 9:15 AM',
    amount: '380',
    status: 'Completed',
    statusClass: 'bg-green-100 text-green-700'
  },
  {
    id: 3,
    description: 'Ride to CMC',
    date: 'May 11, 4:45 PM',
    amount: '180',
    status: 'Completed',
    statusClass: 'bg-green-100 text-green-700'
  }
])
</script>
