<script setup>
import { codeToHtml } from 'shiki'

const renderer = async (script) => {
  const html = await codeToHtml(script, {
    lang: 'shell',
    theme: 'catppuccin-frappe',
  })
  return html
}

const { data: scriptContent } = await useAsyncData(async () => {
  return await renderer(`#!/bin/bash

# Get argument after command
if [ -z "$1" ]; then
  echo "Usage: ai <question>"
  exit 1
fi

# Add comment

question="$*"
markdown_output=""`)
})
</script>

<template>
  <div class="bg-[#303446] p-4 rounded-lg !text-sm overflow-auto">
    <div v-html="scriptContent" />
  </div>
</template>

<style>
pre.shiki {
  white-space: pre-wrap;
}
</style>
