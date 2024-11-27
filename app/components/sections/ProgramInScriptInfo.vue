<script setup>
import { DollarSign } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
import { SectionWrapper, SectionLabel } from '@/components/ui/section'
</script>

<template>
  <SectionWrapper id="program-in-script-info">
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
  </SectionWrapper>
</template>
