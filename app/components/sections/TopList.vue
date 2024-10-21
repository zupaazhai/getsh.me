<script setup>
import ScriptCard from '@/components/utils/ScriptCard.vue'

const props = defineProps({
  title: String,
  items: Array,
  icon: Function,
})
</script>

<template>
  <section class="w-full">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="flex py-4 items-center">
        <component :is="props.icon" size="24" class="mr-2" />
        <h2 class="font-bold">
          {{ props.title }}
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ScriptCard
          v-for="item in props.items"
          :key="item.id"
          :title="item.title"
          :description="item.description"
          :downloads="item.downloads"
          :username="item.username"
          :slug="item.slug"
        />
      </div>
    </div>
  </section>
</template>
