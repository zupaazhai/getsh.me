<script setup>
import { Github, Armchair, Home } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import UserDropdown from '@/components/utils/UserDropdown.vue'

const supabase = useSupabaseClient()
const user = useSupabaseUser()

const signInWithGithub = async () => {
  const config = useRuntimeConfig()

  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: config.app.githubLogin.redirectUri,
    },
  })

  if (error) {
    console.error('Failed to sign in with Github', error)
  }
}
</script>

<template>
  <header class="w-full border-b">
    <div class="container mx-auto px-4 h-14 flex items-center max-w-6xl">
      <NuxtLink :to="{ name: 'index' }" class="flex items-center justify-center" aria-label="Home page">
        <Home />
      </NuxtLink>
      <nav class="ml-auto flex gap-4 sm:gap-6">
        <ClientOnly>
          <div v-if="user">
            <UserDropdown :user="user" />
          </div>
          <Dialog v-if="!user">
            <DialogTrigger>
              <Button variant="outline">
                <Armchair size="18" class="mr-2" /> Login
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle> Login </DialogTitle>
              </DialogHeader>

              <div class="flex flex-col space-y-2 py-4">
                <div class="w-full">
                  <Button
                    class="w-full"
                    variant="outline"
                    @click="signInWithGithub"
                  >
                    <Github size="20" class="mr-2" /> Login with Github
                  </Button>
                </div>
              </div>

              <Separator />

              <div class="w-full space-y-2">
                <p class="text-sm text-center text-gray-600">
                  Why we support only Github login?
                </p>
                <p class="text-xs px-4 text-center text-balance text-gray-400">
                  We use GitHub Gists to store your bash files because it’s
                  simple, secure, and reliable.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </ClientOnly>
      </nav>
    </div>
  </header>
</template>
