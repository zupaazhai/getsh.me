<script setup>
const props = defineProps({
  theme: {
    type: String,
    required: true,
  },
})

const cfBaseUrl = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0'

watch(() => props.theme, (theme) => {
  const link = document.getElementById('highlight-css')

  if (theme === 'dark') {
    link.href = getThemeUrl('dark')
    return
  }

  link.href = getThemeUrl('light')
})

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

const getThemeUrl = (theme) => {
  const themeCssUrl = {
    light: `${cfBaseUrl}/styles/atom-one-light.min.css`,
    dark: `${cfBaseUrl}/styles/atom-one-dark.min.css`,
  }

  return themeCssUrl[theme]
}

onMounted(() => {
  Promise.all([
    loadHiglightJs('highlight-js', `${cfBaseUrl}/highlight.min.js`),
    loadHighlightCss('highlight-css', getThemeUrl(props.theme)),
  ]).then(async () => {
    await loadHiglightJs('bash-language', `${cfBaseUrl}/languages/bash.min.js`)

    console.log('props.theme', props.theme)
    hljs.highlightAll({
      theme: props.theme === 'dark' ? 'atom-one-dark' : 'atom-one-light',
    })
  })
})
</script>

<template>
  <div
    :class="['script-viewer p-4 rounded-lg !text-sm overflow-auto', props.theme]"
  >
    <pre><code class="language-bash rounded-lg">{{ scriptContent }}</code></pre>
  </div>
</template>

<style lang="postcss">
.script-viewer.light {
  @apply bg-secondary;
}

.script-viewer.dark {
  @apply bg-[#282c34];
}

.script-viewer.light pre code.hljs {
  @apply bg-secondary !p-0;
}

.script-viewer.dark pre code.hljs {
  @apply bg-[#282c34] !p-0;
}
</style>
