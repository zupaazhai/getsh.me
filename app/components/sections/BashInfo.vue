<script setup>
import { ScrollText } from 'lucide-vue-next'
import { Label } from '@/components/ui/label'
import SectionLabel from '@/components/utils/SectionLabel.vue'
</script>

<template>
  <div id="bash-info" class="flex flex-col space-y-4">
    <SectionLabel :icon="ScrollText" title="Bash Info" />

    <div class="">
      <Label class="text-xs font-bold text-gray-500 mr-2">Created At:</Label>
      <span class="text-gray-500 text-xs">2024-01-20 12:00</span>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="flex flex-col items-center border p-4 rounded-lg">
        <p class="font-bold text-xl text-gray-500">
          20k
        </p>
        <Label class="text-gray-400">Download</Label>
      </div>
      <div class="flex flex-col items-center border p-4 rounded-lg">
        <p class="font-bold text-xl text-gray-500">
          20k
        </p>
        <Label class="text-gray-400">Spark</Label>
      </div>
    </div>
  </div>
</template>
