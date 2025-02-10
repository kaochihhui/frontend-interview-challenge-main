<template>
  <div class="flex flex-col h-full bg-white rounded-lg shadow p-6" 
    :class="{ 'border-2 border-amber-400 bg-amber-50': ticket.isVIP }"
  >
    <!-- Header with name and VIP badge -->
    <div class="flex justify-between items-start gap-2">
      <div class="flex-1 min-w-0">
        <h3 class="text-xl font-semibold truncate" :title="ticket.name">{{ ticket.name }}</h3>
        <p v-if="ticket.description" 
          class="text-gray-600 mt-2 line-clamp-2 min-h-[3rem]" 
          :title="ticket.description"
        >
          {{ ticket.description }}
        </p>
      </div>
      <div v-if="ticket.isVIP" class="shrink-0 bg-amber-500 text-white px-2 py-1 rounded text-sm font-medium">
        VIP
      </div>
    </div>
    
    <!-- Pricing section - pushed to bottom -->
    <div class="mt-auto pt-4">
      <div class="flex justify-between items-center">
        <span class="text-lg font-bold">${{ ticket.price }}</span>
        <span class="text-sm text-gray-500">{{ ticket.count }} available</span>
      </div>
      
      <button 
        @click="$emit('add-to-cart', ticket)"
        class="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="ticket.count === 0"
      >
        {{ ticket.count === 0 ? 'Sold Out' : 'Add to Cart' }}
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
