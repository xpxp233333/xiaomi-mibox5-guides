<script setup>
import DefaultTheme from 'vitepress/theme'
import DocNotice from './DocNotice.vue'
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-bottom>
      <DocNotice />
    </template>
  </DefaultTheme.Layout>
</template>
