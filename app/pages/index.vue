<script setup>
import { Search } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
</script>

<template>
  <main class="flex-1">
    <section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div class="container mx-auto px-4 md:px-6 max-w-6xl">
        <div class="flex flex-col items-center space-y-4 text-center">
          <div class="space-y-6">
            <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              getsh.me
            </h1>
            <div class="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 py-8">
              <p>
                Discover, create, and share powerful bash scripts to automate and boost your workflow
              </p>
            </div>
          </div>
          <div class="w-full max-w-lg space-y-2">
            <form class="flex space-y-4 flex-col">
              <Input
                class="max-w-lg flex-1 px-4"
                placeholder="Find bash script that can help you..."
                type="search"
              />
              <Button type="submit">
                <Search size="18" class="mr-2" />
                Search
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
