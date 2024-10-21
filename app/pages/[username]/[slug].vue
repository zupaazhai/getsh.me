<script setup>
import { scripts } from '@/lib/mock'

const route = useRoute()
const bashScript = scripts().find(script => script.slug === route.params.slug)
</script>

<template>
  <main class="flex-1">
    <section>
      <div class="container mx-auto px-4 max-w-6xl py-12">
        <div class="grid grid-cols-3">
          <!-- Left Column -->
          <div class="col-span-2 space-y-6">
            <h1 class="font-bold text-xl">
              {{ bashScript.title }}
            </h1>

            <div class="text-gray-500">
              {{ bashScript.description }}
            </div>
          </div>
          <!-- Right Column -->
          <div class="border border-gray-200 rounded-lg p-4">
            Right Column
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
