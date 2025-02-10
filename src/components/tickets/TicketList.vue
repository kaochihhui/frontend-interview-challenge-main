<template>
  <div class="space-y-4">
    <div v-for="ticket in tickets" :key="ticket.id" 
      class="flex justify-between items-center p-4 border rounded">
      <div>
        <h3 class="font-semibold">{{ ticket.name }}</h3>
        <p class="text-sm text-gray-500">${{ ticket.price }} - {{ ticket.count }} available</p>
      </div>
      <button 
        @click="$emit('delete', ticket.id)"
        class="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 cursor-pointer"
        title="Delete ticket"
      >
        <TrashIcon class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/outline'
import type { Ticket } from '@/types/ticket'

defineProps<{
  tickets: Ticket[]
}>()

defineEmits<{
  (e: 'delete', id: string): void
}>()
</script>
