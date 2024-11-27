<script setup>
import { CaseSensitive, Text, Code } from 'lucide-vue-next'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SectionLabel, SectionWrapper } from '@/components/ui/section'
import Editor from '@/components/utils/Editor.vue'

const isReady = ref(false)

onMounted(() => {
  isReady.value = true
})

const value = ref(`#!/bin/bash
echo "Hello, World!"`)
</script>

<template>
  <main class="flex-1">
    <section>
      <div class="container mx-auto px-4 max-w-6xl py-12">
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-2 space-y-6">
            <h1 class="font-bold text-xl">
              New Script
            </h1>
            <div class="flex flex-col space-y-4">
              <SectionWrapper>
                <SectionLabel :icon="CaseSensitive" title="Title" />
                <Input />
              </SectionWrapper>

              <SectionWrapper>
                <SectionLabel :icon="Text" title="Description" />
                <Textarea />
              </SectionWrapper>

              <ClientOnly>
                <SectionWrapper>
                  <SectionLabel :icon="Code" title="Script" />
                  <Editor v-model="value" />
                </SectionWrapper>
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
