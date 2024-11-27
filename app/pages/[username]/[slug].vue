<script setup>
import { ReceiptText, Code, Moon, Sun } from 'lucide-vue-next'
import { scripts } from '@/lib/mock'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button/index'
import BashInfo from '@/components/sections/BashInfo.vue'
import ProgramInScriptInfo from '@/components/sections/ProgramInScriptInfo.vue'
import SummaryInfo from '@/components/sections/SummaryInfo.vue'
import CreatorInfo from '@/components/sections/CreatorInfo.vue'
import InstallScriptCard from '@/components/utils/InstallScriptCard.vue'
import { SectionWrapper, SectionLabel } from '@/components/ui/section'
import ScriptViewer from '@/components/utils/ScriptViewer.vue'

const route = useRoute()
const bashScript = scripts().find(script => script.slug === route.params.slug)

const scriptViewerTheme = ref('light')
const scriptViewerLocalStorageKey = 'script-viewer-theme'

const toggleViwerTheme = () => {
  scriptViewerTheme.value = scriptViewerTheme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem(scriptViewerLocalStorageKey, scriptViewerTheme.value)
}

onMounted(() => {
  const savedScriptViewerTheme = localStorage.getItem(scriptViewerLocalStorageKey) || 'light'
  scriptViewerTheme.value = savedScriptViewerTheme
})
</script>

<template>
  <main class="flex-1">
    <section>
      <div class="container mx-auto px-4 max-w-6xl py-12">
        <div class="grid grid-cols-3 gap-4">
          <!-- Left Column -->
          <div class="col-span-2 space-y-6">
            <h1 class="font-bold text-xl">
              {{ bashScript.title }}
            </h1>

            <div>
              <InstallScriptCard :install-path="bashScript.path" />
            </div>

            <Separator />

            <SectionWrapper>
              <SectionLabel :icon="ReceiptText" title="Description" />
              <div class="text-gray-500 text-sm">
                {{ bashScript.description }}
              </div>
            </SectionWrapper>

            <Separator />

            <SectionWrapper>
              <div class="flex items-center justify-center">
                <SectionLabel :icon="Code" title="Script" />
                <div>
                  <Button
                    size="sm"
                    :variant="scriptViewerTheme === 'dark' ? 'default' : 'outline'"
                    @click="toggleViwerTheme"
                  >
                    <Moon v-if="scriptViewerTheme === 'dark'" :size="14" />
                    <Sun v-if="scriptViewerTheme === 'light'" :size="14" />
                  </Button>
                </div>
              </div>
              <ScriptViewer :theme="scriptViewerTheme" />
            </SectionWrapper>
          </div>
          <!-- Right Column -->
          <div class="border border-gray-200 rounded-lg p-4 flex flex-col space-y-4">
            <CreatorInfo />

            <Separator />

            <BashInfo />

            <Separator />

            <ProgramInScriptInfo />

            <Separator />

            <SummaryInfo />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
