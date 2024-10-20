<script setup>
import TopBar from '@/components/TopBar.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen font-mono">
    <TopBar />
    <slot />
  </div>
</template>
