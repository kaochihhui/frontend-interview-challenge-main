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
      <div class="space-y-4">
        <div v-for="ticket in tickets" :key="ticket.id" 
          class="flex justify-between items-center p-4 border rounded">
          <div>
            <h3 class="font-semibold">{{ ticket.name }}</h3>
            <p class="text-sm text-gray-500">${{ ticket.price }} - {{ ticket.count }} available</p>
          </div>
          <button 
            @click="deleteTicket(ticket.id)"
            class="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTicketStore } from '@/stores/tickets'
import TicketForm from '@/components/tickets/TicketForm.vue'
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
