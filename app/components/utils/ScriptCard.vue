<script setup>
import { Download, Sparkles } from 'lucide-vue-next'
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'

const props = defineProps({
  title: String,
  description: String,
  downloads: Number,
})
</script>

<template>
  <Card class="flex flex-col hover:bg-gray-50">
    <CardHeader class="flex-grow px-4 pt-4 pb-2">
      <a href="">
        <CardTitle class="line-clamp-2 mb-2 text-sm">
          {{ props.title }}
        </CardTitle>
      </a>
    </CardHeader>
    <div class="line-clamp-3 text-xs text-gray-400 px-4">
      {{ props.description }}
    </div>
    <CardFooter
      class="flex justify-between items-center space-x-4 px-4 pb-4 pt-4 text-gray-500"
    >
      <div class="w-full line-clamp-1">
        <p class="text-xs truncate">
          @zupaazhai
        </p>
      </div>
      <div class="flex space-x-2">
        <p class="text-xs 0 inline-flex items-end">
          <Sparkles size="16" class="mr-2" />
          <span>
            {{ props.downloads }}
          </span>
        </p>
        <p class="text-xs inline-flex items-end">
          <Download size="16" class="mr-2" />
          <span>
            {{ props.downloads }}
          </span>
        </p>
      </div>
    </CardFooter>
  </Card>
</template>
