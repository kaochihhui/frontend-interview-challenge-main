<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-bold">Admin Panel</h1>
    
    <!-- Ticket Creation Form -->
    <div class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-4">Create New Ticket</h2>
      <TicketForm @submit="createTicket" />
    </div>

    <!-- Ticket List -->
    <div class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-4">Existing Tickets</h2>
      <TicketList 
        :tickets="tickets"
        @delete="deleteTicket"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTicketStore } from '@/stores/tickets'
import TicketForm from '@/components/tickets/TicketForm.vue'
import TicketList from '@/components/tickets/TicketList.vue'
import type { Ticket } from '@/types/ticket'

const ticketStore = useTicketStore()
const { tickets } = storeToRefs(ticketStore)

const createTicket = (ticket: Omit<Ticket, 'id'>) => {
  ticketStore.addTicket(ticket)
}

const deleteTicket = (id: string) => {
  ticketStore.removeTicket(id)
}
</script>
