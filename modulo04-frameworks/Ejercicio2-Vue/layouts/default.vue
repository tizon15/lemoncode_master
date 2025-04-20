<template>
  <div class="flex flex-col min-h-screen">
    <header class="h-20 px-4 sm:px-8 bg-slate-800 text-slate-400 shadow-md">
      <TheNavigation />
    </header>
    <main class="flex-1 bg-gray-100 p-4 sm:p-8 text-slate-400">
      <slot />
    </main>
  </div>
</template>