<template>
  <TheLayout>
    <router-view></router-view>
  </TheLayout>
</template>

<script setup lang="ts">
import TheLayout from './components/layout/TheLayout.vue'
import { useCartSync } from '@/composables/useCartSync'

// Initialize cart synchronization
useCartSync()
</script>
