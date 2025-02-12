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
        @click="confirmRemove"
        class="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 cursor-pointer"
        title="Remove from cart"
      >
        <TrashIcon class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/outline'
import type { CartItem } from '@/types/ticket'

const props = defineProps<{
  item: CartItem
}>()

const emit = defineEmits<{
  (e: 'remove'): void
}>()

const confirmRemove = () => {
  if (window.confirm(`Are you sure you want to remove ticket "${props.item.name}" from cart?`)) {
    emit('remove')
  }
}
</script>
