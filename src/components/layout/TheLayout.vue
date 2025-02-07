<template>
  <div class="min-h-screen bg-gray-100">
    <TheNavigation />
    <main class="container mx-auto p-4">
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import TheNavigation from './TheNavigation.vue'
</script>
