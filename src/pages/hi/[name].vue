<script setup lang="ts">
const props = defineProps<{ name: string }>()
const router = useRouter()
</script>

<template>
  <div>
    <div i-carbon-pedestrian text-4xl inline-block />
    <p>Hi, {{ props.name }}</p>
    <p text-sm op50>
      <em>Dynamic route!</em>
    </p>
    {{ $route }}
    <div>
      <button class="btn m-3 mt-8 text-sm" @click="router.back()">Back</button>
    </div>
  </div>
</template>
