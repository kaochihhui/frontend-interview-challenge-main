<template>
  <div class="flex justify-between items-center p-4 border-b">
    <div>
      <h3 class="font-semibold">{{ item.name }}</h3>
      <p class="text-sm text-gray-500">
        {{ item.quantity }} × ${{ item.price }}
      </p>
    </div>
    
    <div class="flex items-center space-x-4">
      <span class="font-bold">${{ item.quantity * item.price }}</span>
      <button
        @click="$emit('remove')"
        class="text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CartItem } from '@/types/ticket'

defineProps<{
  item: CartItem
}>()

defineEmits<{
  (e: 'remove'): void
}>()
</script>
