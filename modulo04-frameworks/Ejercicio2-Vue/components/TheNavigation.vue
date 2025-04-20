<script lang="ts" setup>
const title = "Ejercicio 2 - Vue";
</script>

<template>
  <div>
    <nav class="flex items-center justify-between p-8 border-b border-slate-500" aria-label="Main navigation">
      <label for="page-title" class="sr-only">Page Title</label>
      <span id="page-title">{{ title }}</span>
      <NuxtLink to="/" class="flex items-center text-slate-400 hover:text-slate-200 gap-2" aria-label="Go to Home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          /></svg
        >Home
      </NuxtLink>
    </nav>
  </div>
</template>
