<script lang="ts">
import VChart, { THEME_KEY } from 'vue-echarts'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: 'white',
  },
  props: {
    option: Object,
  },
})
</script>

<template>
  <VChart class="chart" :option="option" />
</template>

<style scoped>
.chart {
  height: 500px;
}
</style>
