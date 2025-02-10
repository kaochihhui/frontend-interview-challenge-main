<template>
  <div class="space-y-4">
    <div v-for="ticket in sortedTickets" :key="ticket.id" 
      :data-testid="`ticket-${ticket.id}`"
      class="flex justify-between items-start p-4 border rounded gap-4"
    >
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <span v-if="ticket.isVIP" 
            class="shrink-0 px-2 py-0.5 text-xs font-semibold bg-amber-100 text-amber-700 rounded"
          >
            VIP
          </span>
          <h3 class="font-semibold truncate" :title="ticket.name">{{ ticket.name }}</h3>
        </div>
        <p v-if="ticket.description" 
          class="text-sm text-gray-600" 
          :title="ticket.description"
        >
          {{ ticket.description }}
        </p>
        <p class="text-sm text-gray-500 mt-1">${{ ticket.price }} - {{ ticket.count }} available</p>
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
import { computed } from 'vue'
import { TrashIcon } from '@heroicons/vue/24/outline'
import type { Ticket } from '@/types/ticket'

const props = defineProps<{
  tickets: Ticket[]
}>()

const sortedTickets = computed(() => {
  return [...props.tickets].sort((a, b) => {
    // Sort VIP tickets first
    if (a.isVIP && !b.isVIP) return -1
    if (!a.isVIP && b.isVIP) return 1
    // Then sort by ID in descending order (newest first)
    return b.id.localeCompare(a.id)
  })
})

defineEmits<{
  (e: 'delete', id: string): void
}>()
</script>
