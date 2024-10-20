<script setup>
import { Search, Trophy, Sparkles } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import TopList from '@/components/sections/TopList.vue'

const mockList = [
  {
    id: 1,
    title: 'Install Docker with awesome dependencies',
    description: 'Install Docker on your machine with a single command',
    downloads: 1000,
  },
  {
    id: 2,
    title:
      'Install Node.js + react + express + postgres db and more for rep stack',
    description: 'Install Node.js on your machine with a single command',
    downloads: 900,
  },
  {
    id: 3,
    title: 'Install Nginx',
    description: 'Install Nginx on your machine with a single command',
    downloads: 800,
  },
  {
    id: 4,
    title: 'Install MySQL',
    description: 'Install MySQL on your machine with a single command',
    downloads: 700,
  },
  {
    id: 5,
    title: 'Install Redis',
    description: 'Install Redis on your machine with a single command',
    downloads: 600,
  },
  {
    id: 6,
    title: 'Install MongoDB',
    description: 'Install MongoDB on your machine with a single command',
    downloads: 500,
  },
  {
    id: 7,
    title: 'Install Postgres',
    description: 'Install Postgres on your machine with a single command',
    downloads: 400,
  },
  {
    id: 8,
    title: 'Install Python',
    description: 'Install Python on your machine with a single command',
    downloads: 300,
  },
]
</script>

<template>
  <main class="flex-1">
    <section class="w-full py-12 md:py-24 lg:py-32">
      <div class="container mx-auto px-4 md:px-6 max-w-6xl">
        <div class="flex flex-col items-center space-y-4 text-center">
          <div class="space-y-6">
            <h1
              class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
            >
              getsh.me
            </h1>
            <div
              class="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 py-8"
            >
              <p>
                Discover, create, and share powerful bash scripts to automate
                and boost your workflow
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

    <Separator class="my-4 lg:my-8" />

    <TopList title="Top Download" :icon="Trophy" :items="mockList" />

    <Separator class="my-4 lg:my-8" />

    <TopList title="Top Spark" :icon="Sparkles" :items="mockList" />

    <Separator class="my-4 lg:my-8" />
  </main>
</template>
