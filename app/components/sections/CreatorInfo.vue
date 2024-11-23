<script setup>
import { UserPen, Github } from 'lucide-vue-next'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
</script>

<template>
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
</template>
