<script setup>
import { LogOut, User } from 'lucide-vue-next'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'

const supabase = useSupabaseClient()

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const createFallbackName = (name) => {
  return name.split(' ').map(n => n[0]).join('')
}

const onLogout = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error('Failed to sign out', error)
  }
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <div class="flex space-x-2">
        <div class="flex flex-col items-end">
          <span class="text-xs font-bold text-gray-600">{{ props.user.user_metadata.full_name }}</span>
          <span class="text-xs text-gray-400">{{ props.user.user_metadata.user_name }}</span>
        </div>
        <Avatar class="w-8 h-8">
          <AvatarImage :src="props.user.user_metadata.avatar_url" />
          <AvatarFallback>{{ createFallbackName(props.user.user_metadata.full_name) }}</AvatarFallback>
        </Avatar>
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="mt-1">
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <User class="mr-1 h-4 w-4" />
          <span class="text-xs">Profile</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem as="a" href="#" @click="onLogout">
          <LogOut class="mr-1 h-4 w-4" />
          <span class="text-xs">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
