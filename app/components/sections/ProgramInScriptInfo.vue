<script setup>
import { DollarSign } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div id="program-in-script-info" class="flex flex-col space-y-4">
    <div class="flex items-center space-x-2  w-full">
      <DollarSign :size="20" />
      <Label class="font-bold text-left">
        Program in script
      </Label>
    </div>
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
