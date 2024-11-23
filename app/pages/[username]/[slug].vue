<script setup>
import { UserPen, Github, ReceiptText, Code } from 'lucide-vue-next'
import { scripts } from '@/lib/mock'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import BashInfo from '@/components/sections/BashInfo.vue'
import ProgramInScriptInfo from '@/components/sections/ProgramInScriptInfo.vue'
import SummaryInfo from '@/components/sections/SummaryInfo.vue'
import InstallScriptCard from '@/components/utils/InstallScriptCard.vue'
import SectionLabel from '@/components/utils/SectionLabel.vue'

const route = useRoute()
const bashScript = scripts().find(script => script.slug === route.params.slug)
</script>

<template>
  <main class="flex-1">
    <section>
      <div class="container mx-auto px-4 max-w-6xl py-12">
        <div class="grid grid-cols-3 gap-2">
          <!-- Left Column -->
          <div class="col-span-2 space-y-6">
            <h1 class="font-bold text-xl">
              {{ bashScript.title }}
            </h1>

            <div>
              <InstallScriptCard :install-path="bashScript.path" />
            </div>

            <Separator />

            <div class="flex flex-col space-y-4">
              <SectionLabel :icon="ReceiptText" title="Description" />
              <div class="text-gray-500 text-sm">
                {{ bashScript.description }}
              </div>
            </div>

            <Separator />

            <div class="flex flex-col space-y-4">
              <SectionLabel :icon="Code" title="Script" />
              <code>Code will be render here !!</code>
            </div>
          </div>
          <!-- Right Column -->
          <div class="border border-gray-200 rounded-lg p-4 flex flex-col space-y-4">
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
