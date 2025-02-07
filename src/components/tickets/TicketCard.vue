<template>
  <div class="bg-white rounded-lg shadow p-6" :class="{ 'border-2 border-gold bg-amber-50': ticket.isVIP }">
    <div class="flex justify-between items-start">
      <div>
        <h3 class="text-xl font-semibold">{{ ticket.name }}</h3>
        <p class="text-gray-600 mt-2">{{ ticket.description }}</p>
      </div>
      <div v-if="ticket.isVIP" class="bg-amber-500 text-white px-2 py-1 rounded text-sm">
        VIP
      </div>
    </div>
    
    <div class="mt-4 flex justify-between items-center">
      <span class="text-lg font-bold">${{ ticket.price }}</span>
      <span class="text-sm text-gray-500">{{ ticket.count }} available</span>
    </div>

    <div class="mt-4">
      <button 
        @click="$emit('add-to-cart', ticket)"
        class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        :disabled="ticket.count === 0"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ticket } from '@/types/ticket'

defineProps<{
  ticket: Ticket
}>()

defineEmits<{
  (e: 'add-to-cart', ticket: Ticket): void
}>()
</script>
