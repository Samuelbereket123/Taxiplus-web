<template>
  <div class="min-h-screen bg-gray-50">
    <DashboardNav />
    <div class="flex">
      <DashboardSidebar />
      <main class="flex-1 p-4 sm:p-6 lg:p-8">
        <slot />
      </main>
    </div>
    <MobileNav />
  </div>
</template>
