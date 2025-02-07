<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-bold">Available Tickets</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <TicketCard
        v-for="ticket in tickets"
        :key="ticket.id"
        :ticket="ticket"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTicketStore } from '@/stores/tickets'
import { useCartStore } from '@/stores/cart'
import TicketCard from '@/components/tickets/TicketCard.vue'
import type { Ticket } from '@/types/ticket'

const ticketStore = useTicketStore()
const cartStore = useCartStore()
const { tickets } = storeToRefs(ticketStore)

const addToCart = (ticket: Ticket) => {
  cartStore.addItem(ticket)
}
</script>
