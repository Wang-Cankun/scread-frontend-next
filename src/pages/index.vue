<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useRequest } from 'vue-request'

import EchartsExample from '../components/EchartsExample.vue'
import { useCounter } from '~/stores/counter'
import { useUserStore } from '~/stores/store'
const siteData = reactive({
  title: 'My website title',
  description: 'My beautiful website',
})

useHead({
  // Can be static or computed
  title: computed(() => siteData.title),
  meta: [
    {
      name: 'description',
      content: computed(() => siteData.description),
    },
  ],
})

const user = useUserStore()
const counter = useCounter()
const name = $ref(user.savedName)
const {
  run: run1,
  data: data1,
  loading: loading1,
} = useRequest('https://osubmi.com/api/scread/dataset', {
  cacheKey: 'date',
})
const {
  run: run2,
  data: data2,
  loading: loading2,
} = useRequest('https://osubmi.com/api/scread/dataset')
const { x, y } = useMouse()
const router = useRouter()
const go = () => {
  if (name) {
    router.push(`/hi/${encodeURIComponent(name)}`)
  }
}
</script>

<template>
  <div>
    <div i-carbon-campsite text-4xl inline-block />
    <p>
      <a
        rel="noreferrer"
        href="https://github.com/antfu/vitesse-lite"
        target="_blank"
      >
        Count: {{ counter.count }} | Name: {{ name }}
      </a>
    </p>
    <div>pos: {{ x }}, {{ y }}</div>
    <NButton @click="counter.increment"> Increment </NButton>
    <NButton @click="counter.decrement"> Decrement </NButton>
    <NButton @click="counter.reset"> Reset </NButton>
    <NButton @click="run1"> API Loading: {{ loading1 }} </NButton>
    <NButton @click="run2"> API Loading: {{ loading2 }} </NButton>
    <RouterLink to="/about">
      <NButton> About </NButton>
    </RouterLink>

    <NInput
      v-model:value="name"
      type="text"
      placeholder="Basic Input"
      @keydown.enter="go"
    />

    <NButton :disabled="!name" @click="go">Go</NButton>

    <n-card>
      This is UI card with icon:
      <div i-carbon-search text-2x inline-block />
      <echarts-example :title="name" :counter="counter.count" />
    </n-card>
    <p>
      <em text-sm op75>API1: {{ data1 }}</em>
    </p>

    <p>
      <em text-sm op75>API2: {{ data2 }}</em>
    </p>
  </div>
</template>
