<script setup lang="ts">
const items = [
  { icon: 'carbon-home', text: 'Home', path: '/' },
  { icon: 'carbon:data-table', text: 'Browse', path: '/2' },
  { icon: 'carbon-search', text: 'Query', path: '/3' },
  { icon: 'carbon-help', text: 'Help', path: '/4' },
  { icon: 'carbon-download', text: 'Download', path: '/5' },
  { icon: 'carbon-archive', text: 'Version 1 (archived)', path: '/about' },
]
const router = useRoute()
const showActiveTab = (path: string) => { return path === router.path }
</script>

<template>
  <nav class="bg-[#6a4c9c]" sticky top-0 z-50 px-8 py-0 shadow-lg>
    <div flex flex-auto justify-start items-center mx-auto>
      <span text-3xl font-medium whitespace-nowrap text-gray-100 py-3 hover:text-gray-400 transition delay-70>
        <RouterLink to="/" flex items-center>
          scREAD
        </RouterLink>
      </span>
      <span lg:visible font-400 text-sm whitespace-nowrap text-gray-100 mt-3 mx-4>A Single-cell and Spatial RNA-Seq
        Database for Alzheimer's Disease</span>

      <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <div v-for="(item, index) in items" :key="index">
          <span v-if="showActiveTab(item.path)">
            <div mx-4 text-base font-medium text-gray-100 hover:text-gray-400 underline underline-offset-4 decoration-2 scale-125>
              <RouterLink :to="item.path">
                {{ item.text }}
              </RouterLink>
            </div> </span>
          <span v-else><span mx-4 text-base font-medium text-gray-100 hover:text-gray-400 transition delay-70>
            <RouterLink :to="item.path">
              {{ item.text }}
            </RouterLink>
          </span></span>
        </div>
      </div>
    </div>
  </nav>
</template>

