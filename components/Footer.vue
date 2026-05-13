<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div class="col-span-2 md:col-span-1">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
              <span class="text-white font-bold text-xl">T+</span>
            </div>
            <span class="text-xl font-bold text-white">TaxiPlus</span>
          </div>
          <p class="text-sm text-gray-400 mb-4">Transportation without uncertainty.</p>
        </div>
        
        <div>
          <h4 class="font-semibold text-white mb-4">Product</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/#features" class="hover:text-white transition-colors">Features</NuxtLink></li>
            <li><NuxtLink to="/#how-it-works" class="hover:text-white transition-colors">How it Works</NuxtLink></li>
            <li><NuxtLink to="/pricing" class="hover:text-white transition-colors">Pricing</NuxtLink></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-semibold text-white mb-4">Company</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/about" class="hover:text-white transition-colors">About</NuxtLink></li>
            <li><NuxtLink to="/driver" class="hover:text-white transition-colors">Drive with Us</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-white transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-semibold text-white mb-4">Legal</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/privacy" class="hover:text-white transition-colors">Privacy</NuxtLink></li>
            <li><NuxtLink to="/terms" class="hover:text-white transition-colors">Terms</NuxtLink></li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
        <p class="text-sm text-gray-400">© 2026 TaxiPlus. All rights reserved.</p>
        <p class="text-sm text-gray-400 mt-4 sm:mt-0">Made with ❤️ in Ethiopia</p>
      </div>
    </div>
  </footer>
</template>
