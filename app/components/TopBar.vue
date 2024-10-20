<script setup>
import { Github, AtSign, Armchair } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
</script>

<template>
  <header class="w-full border-b">
    <div class="container mx-auto px-4 h-14 flex items-center max-w-6xl">
      <a class="flex items-center justify-center" href="#">
        <span class="ml-2 text-lg font-bold">getsh.me</span>
      </a>
      <nav class="ml-auto flex gap-4 sm:gap-6">
        <ClientOnly>
          <Dialog>
            <DialogTrigger>
              <Button variant="outline">
                <Armchair size="18" class="mr-2" />
                Login
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Login</DialogTitle>
              </DialogHeader>

              <div class="flex flex-col space-y-2 py-4">
                <div class="w-full">
                  <Button class="w-full" variant="outline">
                    <Github size="20" class="mr-2" />
                    Login with Github
                  </Button>
                </div>
                <div class="w-full">
                  <Button class="w-full" variant="outline">
                    <AtSign size="20" class="mr-2" />
                    Login with Gmail
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </ClientOnly>
      </nav>
    </div>
  </header>
</template>
