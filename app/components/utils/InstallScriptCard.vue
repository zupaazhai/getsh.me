<script setup>
import { Clipboard } from 'lucide-vue-next'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const props = defineProps({
  installPath: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="border p-2 bg-gray-100 rounded-lg flex space-x-2">
    <Input :model-value="props.installPath" />
    <Button size="icon" variant="outline">
      <Clipboard />
    </Button>
  </div>
</template>
