<script setup>
import { UserPen, Github, ScrollText, SquareChevronRight, DollarSign } from 'lucide-vue-next'
import { scripts } from '@/lib/mock'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'

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
          <div class="border border-gray-200 rounded-lg p-4 flex flex-col space-y-4">
            <div id="creator-info" class="w-full space-y-2 ">
              <div class="flex space-x-2">
                <Avatar>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/2087604?v=4" />
                </Avatar>
                <div class="flex-1">
                  <div class="font-bold">
                    Zupaazhai
                  </div>
                  <div class="text-gray-500 text-xs">
                    @zupaazhai
                  </div>
                </div>
                <div class="space-x-1">
                  <Button size="icon" variant="outline">
                    <Github />
                  </Button>
                  <Button size="icon" variant="outline">
                    <UserPen />
                  </Button>
                </div>
              </div>
            </div>

            <Separator />

            <div id="bash-info" class="flex flex-col space-y-4">
              <div class="flex items-center space-x-2  w-full">
                <ScrollText :size="20" />
                <Label class="font-bold text-left">
                  Bash Info
                </Label>
              </div>

              <div class="">
                <Label class="text-xs font-bold text-gray-500 mr-2">Created At:</Label>
                <span class="text-gray-500 text-xs">2024-01-20 12:00</span>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="flex flex-col items-center border p-4 rounded-lg">
                  <p class="font-bold text-xl text-gray-500">
                    20k
                  </p>
                  <Label class="text-gray-400">Download</Label>
                </div>
                <div class="flex flex-col items-center border p-4 rounded-lg">
                  <p class="font-bold text-xl text-gray-500">
                    20k
                  </p>
                  <Label class="text-gray-400">Spark</Label>
                </div>
              </div>
            </div>

            <Separator />

            <div id="bash-info" class="flex flex-col space-y-4">
              <div class="flex items-center space-x-2  w-full">
                <DollarSign :size="20" />
                <Label class="font-bold text-left">
                  Program in script
                </Label>
              </div>
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
            </div>

            <Separator />

            <div id="summarize-info" class="flex flex-col space-y-4">
              <div class="flex items-center space-x-2  w-full">
                <SquareChevronRight :size="20" />
                <Label class="font-bold text-left">
                  Summarize
                </Label>
              </div>
              <div class="inline-flex space-x-2">
                <p class="text-sm text-gray-500">
                  This script aim install ubuntu 20.04 with docker and docker-compose. In docker will install nginx, mysql, phpmyadmin, wordpress, and portainer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
