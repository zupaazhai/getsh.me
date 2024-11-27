<script setup>
import NightOwl from '@/lib/editor/themes/night-owl'

const props = defineProps({
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const editorRef = ref(null)

const loadMonaco = async () => {
  return new Promise((resolve, reject) => {
    if (document.getElementById('monaco-loader')) {
      return resolve()
    }

    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.0/min/vs/loader.min.js'
    script.id = 'monaco-loader'
    script.onload = resolve
    script.onerror = reject

    document.head.appendChild(script)
  })
}

onMounted(async () => {
  await loadMonaco()
  window.require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.0/min/vs' } })

  window.require(['vs/editor/editor.main'], function () {
    monaco.editor.defineTheme('NightOwl', NightOwl)

    const editor = monaco.editor.create(editorRef.value, {
      value: props.modelValue,
      language: 'shell',
      theme: 'NightOwl',
      automaticLayout: true,
    })

    editor.onDidChangeModelContent(() => {
      emit('update:modelValue', editor.getValue())
    })
  })
})
</script>

<template>
  <div class="rounded-lg overflow-hidden px-2 py-4 bg-[#011627]">
    <div ref="editorRef" class="w-full h-[500px]" />
  </div>
</template>
