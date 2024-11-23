<script setup>
const renderer = async (script) => {
  return script
}

const { data: scriptContent } = await useAsyncData(async () => {
  return await renderer(`#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 domain"
  exit 1
fi

domain=$1

whois_output=$(whois $domain 2>/dev/null)

if echo "$whois_output" | grep -iq "No match\|not found\|available"; then
  echo "Domain $domain is available"
else
  echo "Domain $domain is registered"
fi`)
})

const loadHiglightJs = (id, url) => {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) {
      hljs.highlightAll()
      return
    }

    const script = document.createElement('script')
    script.src = url
    script.id = id
    script.onload = resolve
    script.onerror = reject

    document.head.appendChild(script)
  })
}

const loadHighlightCss = (id, url) => {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) {
      return
    }

    const style = document.createElement('link')
    style.href = url
    style.rel = 'stylesheet'
    style.id = id

    style.onload = resolve
    style.onerror = reject

    document.head.appendChild(style)
  })
}

onMounted(() => {
  Promise.all([
    loadHiglightJs('highlight-js', 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js'),
    loadHighlightCss('highlight-css', 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-light.min.css'),
  ]).then(async () => {
    await loadHiglightJs('bash-language', 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/bash.min.js')
    hljs.highlightAll()
  })
})
</script>

<template>
  <div class="p-4 rounded-lg !text-sm overflow-auto bg-gray-100">
    <pre><code class="language-bash rounded-lg">{{ scriptContent }}</code></pre>
  </div>
</template>

<style lang="postcss">
pre code.hljs {
  @apply bg-gray-100 !p-0;
}
</style>
