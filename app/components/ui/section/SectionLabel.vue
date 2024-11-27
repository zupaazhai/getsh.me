<script setup>
const props = defineProps({
  icon: {
    type: Function,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="flex items-center space-x-2  w-full">
    <component :is="props.icon" :size="20" />
    <Label class="font-bold text-left">
      {{ props.title }}
    </Label>
  </div>
</template>
