<script setup>
import { DollarSign } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
import SectionLabel from '@/components/utils/SectionLabel.vue'
</script>

<template>
  <div id="program-in-script-info" class="flex flex-col space-y-4">
    <SectionLabel :icon="DollarSign" title="Program in script" />

    <div class="inline-flex space-x-2">
      <Badge
        v-for="program in ['curl', 'glow', 'wget', 'go']"
        :key="program"
        variant="secondary"
        class="text-sm"
      >
        {{ program }}
      </Badge>
    </div>
  </div>
</template>
