<script lang="ts" setup>
import type { GlobalThemeOverrides } from 'naive-ui'
import { NConfigProvider } from 'naive-ui'

/**
 * Traditional chinese color 传统中国色
 * http://zhongguose.com/
 * 桔梗紫
 */
const primaryColor = '#6A4C9C'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor,
    primaryColorHover: primaryColor,
    primaryColorPressed: primaryColor,
  },
}
</script>

<template>
  <NConfigProvider :theme-overrides="themeOverrides">
    <slot />
  </NConfigProvider>
</template>

