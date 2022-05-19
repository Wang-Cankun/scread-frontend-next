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
const showActiveTab = (path: string) => {
  return path === router.path
}
</script>

<template>
  <nav class="sticky top-0 z-50 bg-[#6a4c9c] px-8 py-0 shadow-lg">
    <div class="mx-auto flex flex-auto items-center justify-start">
      <span
        class="delay-70 whitespace-nowrap py-3 text-3xl font-medium text-gray-100 transition hover:text-gray-400"
      >
        <RouterLink to="/" flex items-center> scREAD </RouterLink>
      </span>
      <span
        class="font-400 mx-4 mt-3 whitespace-nowrap text-sm text-gray-100 lg:visible"
        >A Single-cell and Spatial RNA-Seq Database for Alzheimer's
        Disease</span
      >

      <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
        <div v-for="(item, index) in items" :key="index">
          <span v-if="showActiveTab(item.path)">
            <div
              class="mx-4 scale-125 text-base font-medium text-gray-100 underline decoration-2 underline-offset-4 hover:text-gray-400"
            >
              <RouterLink :to="item.path">
                {{ item.text }}
              </RouterLink>
            </div>
          </span>
          <span v-else
            ><span
              class="delay-70 mx-4 text-base font-medium text-gray-100 transition hover:text-gray-400"
            >
              <RouterLink :to="item.path">
                {{ item.text }}
              </RouterLink>
            </span></span
          >
        </div>
      </div>
    </div>
  </nav>
</template>
