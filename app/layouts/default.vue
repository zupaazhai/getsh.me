<script setup>
import TopBar from '@/components/sections/TopBar.vue'

useHead({
  title: 'getsh.me',
  meta: [
    {
      name: 'description',
      content: 'Discover, create, and share powerful bash scripts to automate and boost your workflow',
    },
  ],
})
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <TopBar />
    <slot />
  </div>
</template>
