<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Fair Pricing.<br />
          <span class="text-primary-600">No Surprises.</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          We use standard local taxi rates plus a small service fee for the convenience, safety, and reliability you deserve.
        </p>
      </div>
    </section>

    <!-- How Pricing Works -->
    <section class="py-20 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p class="text-lg text-gray-600">Simple, transparent, and fair</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <!-- Local Tariff -->
          <div class="text-center">
            <div class="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Local Taxi Rate</h3>
            <p class="text-gray-600">Standard government-approved tariff that all taxis use</p>
          </div>

          <!-- Plus Sign -->
          <div class="flex items-center justify-center">
            <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <span class="text-2xl font-bold text-primary-600">+</span>
            </div>
          </div>

          <!-- Service Fee -->
          <div class="text-center">
            <div class="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Small Service Fee</h3>
            <p class="text-gray-600">For app convenience, driver verification, and 24/7 support</p>
          </div>
        </div>

        <!-- Pricing Note -->
        <div class="glass rounded-3xl p-8 lg:p-12 max-w-3xl mx-auto text-center">
          <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Transparent Pricing Model</h3>
          <p class="text-lg text-gray-600 mb-6">
            Your fare is calculated based on the standard local taxi rate for your distance, plus a minimal service fee to cover the technology and safety features that make your ride better.
          </p>
          <div class="inline-flex items-center space-x-2 px-6 py-3 bg-primary-50 rounded-xl">
            <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="font-medium text-primary-700">You see the total price before you book</span>
          </div>
        </div>
      </div>
    </section>

    <!-- What You Get -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What the Service Fee Covers</h2>
          <p class="text-lg text-gray-600">More than just a ride</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Verified Drivers</h3>
            <p class="text-sm text-gray-600">Background checks and training</p>
          </div>

          <div class="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Live Tracking</h3>
            <p class="text-sm text-gray-600">Real-time GPS and trip sharing</p>
          </div>

          <div class="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Cashless Payments</h3>
            <p class="text-sm text-gray-600">Secure digital transactions</p>
          </div>

          <div class="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p class="text-sm text-gray-600">Always here when you need us</p>
          </div>

          <div class="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Insurance Coverage</h3>
            <p class="text-sm text-gray-600">Every ride is protected</p>
          </div>

          <div class="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Quality Assurance</h3>
            <p class="text-sm text-gray-600">Driver ratings and reviews</p>
          </div>

          <div class="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Platform Technology</h3>
            <p class="text-sm text-gray-600">App development and maintenance</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Signals -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div class="flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">No Hidden Fees</h3>
            <p class="text-gray-600">What you see is what you pay</p>
          </div>

          <div>
            <div class="flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Upfront Pricing</h3>
            <p class="text-gray-600">Know your fare before you book</p>
          </div>

          <div>
            <div class="flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Fair & Consistent</h3>
            <p class="text-gray-600">Based on standard local rates</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Common Questions</h2>
        </div>

        <div class="space-y-4">
          <div class="bg-white rounded-2xl p-6">
            <h3 class="font-semibold text-gray-900 mb-2">Why is there a service fee?</h3>
            <p class="text-gray-600">The service fee covers app maintenance, driver verification, GPS tracking, payment processing, insurance, and 24/7 customer support—everything that makes your ride safer and more convenient than a regular taxi.</p>
          </div>

          <div class="bg-white rounded-2xl p-6">
            <h3 class="font-semibold text-gray-900 mb-2">How is my fare calculated?</h3>
            <p class="text-gray-600">Your fare is based on the standard local taxi rate for your distance, plus a small service fee. You'll see the complete price before confirming your ride—no surprises.</p>
          </div>

          <div class="bg-white rounded-2xl p-6">
            <h3 class="font-semibold text-gray-900 mb-2">Are there any surge prices?</h3>
            <p class="text-gray-600">We use predictable pricing based on local taxi rates. During very high demand, we may apply a small multiplier, but you'll always see the final price before booking.</p>
          </div>

          <div class="bg-white rounded-2xl p-6">
            <h3 class="font-semibold text-gray-900 mb-2">Can I pay with cash?</h3>
            <p class="text-gray-600">We recommend cashless payment for convenience and safety, but cash payment options are available with select drivers.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-br from-primary-600 to-blue-600 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          Ready to Experience<br />Better Transportation?
        </h2>
        <p class="text-xl text-primary-100 mb-8">
          Fair prices. No surprises. Just reliable rides.
        </p>
        <NuxtLink to="/auth/signup" class="inline-block bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all hover:shadow-2xl">
          Get Started Free
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useHead({
  title: 'Pricing - TaxiPlus',
  meta: [
    { name: 'description', content: 'Fair, transparent pricing. Local taxi rates plus a small service fee for convenience, safety, and reliability.' }
  ]
})
</script>
