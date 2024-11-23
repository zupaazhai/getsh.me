<script setup>
import { SquareChevronRight } from 'lucide-vue-next'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div id="summary-info" class="flex flex-col space-y-4">
    <div class="flex items-center space-x-2  w-full">
      <SquareChevronRight :size="20" />
      <Label class="font-bold text-left">
        Summarize
      </Label>
    </div>
    <div class="inline-flex space-x-2">
      <p class="text-sm text-gray-500">
        This script aim install ubuntu 20.04 with docker and docker-compose. In docker will install nginx, mysql, phpmyadmin, wordpress, and portainer.
      </p>
    </div>
  </div>
</template>
