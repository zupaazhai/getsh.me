<script setup>
import { Clipboard, ClipboardCheck } from 'lucide-vue-next'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useClipboard } from '@/composables/useClipboard'
import { useToast } from '@/components/ui/toast/use-toast'

const { copyToClipboard } = useClipboard()
const { toast } = useToast()

const props = defineProps({
  installPath: {
    type: String,
    required: true,
  },
})

const curlCmd = computed(() => {
  return `curl -s getsh.me/${props.installPath} | sh`
})

const isCopied = ref(false)

const onCopyToClipboard = () => {
  try {
    copyToClipboard(curlCmd.value)
    isCopied.value = true
    toast({
      title: '👌 Copied to clipboard',
      description: 'The install path has been copied to your clipboard',
    })

    const timer = setTimeout(() => {
      isCopied.value = false
      clearTimeout(timer)
    }, 1000)
  }
  catch {
    console.error('Failed to copy to clipboard')
  }
}

const onSelectInput = (e) => {
  // Highlight the input text when clicked
  e.target.select()
}
</script>

<template>
  <div class="border p-2 bg-gray-100 rounded-lg flex space-x-2">
    <Input
      :model-value="curlCmd"
      @click="onSelectInput"
    />
    <Button
      size="icon"
      variant="outline"
      @click="onCopyToClipboard"
    >
      <ClipboardCheck v-if="isCopied" />
      <Clipboard v-else />
    </Button>
  </div>
</template>
