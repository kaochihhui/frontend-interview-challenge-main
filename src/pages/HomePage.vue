<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-bold">Available Tickets</h1>
    <div v-if="tickets.length === 0" class="p-6 text-center text-gray-500">
      No tickets available
    </div>
    <template v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TicketCard
          v-for="ticket in sortedTickets"
          :key="ticket.id"
          :ticket="ticket"
          @add-to-cart="addToCart"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTicketStore } from '@/stores/tickets'
import { useCartStore } from '@/stores/cart'
import TicketCard from '@/components/tickets/TicketCard.vue'
import type { Ticket } from '@/types/ticket'

const ticketStore = useTicketStore()
const cartStore = useCartStore()
const { tickets } = storeToRefs(ticketStore)

const sortedTickets = computed(() => {
  return [...tickets.value].sort((a, b) => {
    // Sort VIP tickets first
    if (a.isVIP && !b.isVIP) return -1
    if (!a.isVIP && b.isVIP) return 1
    // Then sort by name
    return a.name.localeCompare(b.name)
  })
})

const addToCart = (ticket: Ticket) => {
  cartStore.addItem(ticket)
}
</script>
