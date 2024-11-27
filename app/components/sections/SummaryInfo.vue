<script setup>
import { SquareChevronRight } from 'lucide-vue-next'
import { SectionWrapper, SectionLabel } from '@/components/ui/section'
</script>

<template>
  <SectionWrapper id="summary-info">
    <SectionLabel :icon="SquareChevronRight" title="Summarize by AI" />

    <div class="inline-flex space-x-2">
      <p class="text-sm text-gray-500">
        This script aim install ubuntu 20.04 with docker and docker-compose. In docker will install nginx, mysql, phpmyadmin, wordpress, and portainer.
      </p>
    </div>
  </SectionWrapper>
</template>
