<script setup>
import { Button } from '@/components/ui/button'
</script>

<template>
  <header class="w-full border-b">
    <div class="container mx-auto px-4 h-14 flex items-center max-w-6xl">
      <a class="flex items-center justify-center" href="#">
        <Code2 class="h-6 w-6" />
        <span class="ml-2 text-lg font-bold">getsh.me</span>
      </a>
      <nav class="ml-auto flex gap-4 sm:gap-6">
        <Button>
          <span class="mr-2">🧑🏻‍💻</span>
          Login
        </Button>
      </nav>
    </div>
  </header>
</template>
