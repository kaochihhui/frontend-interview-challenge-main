import { defineStore } from 'pinia'
import type { Ticket } from '@/types/ticket'

/**
 * Store for managing tickets inventory
 * Handles creation and deletion of tickets with persistent storage
 */
export const useTicketStore = defineStore('tickets', {
  state: () => ({
    tickets: [] as Ticket[]
  }),
  
  actions: {
    /**
     * Add a new ticket to the store
     * @param ticket - Ticket data without ID
     * Generates a unique ID using a timestamp
     */
    addTicket(ticket: Omit<Ticket, 'id'>) {
      // Generate ID using timestamp
      const id = Date.now().toString()
      
      this.tickets.push({
        ...ticket,
        id
      })
    },
    
    /**
     * Remove a ticket from the store
     * @param id - Unique identifier of the ticket to remove
     */
    removeTicket(id: string) {
      this.tickets = this.tickets.filter(ticket => ticket.id !== id)
    },

    /**
     * Update ticket count
     * @param id - Ticket ID
     * @param count - New count value
     */
    updateTicketCount(id: string, count: number) {
      const ticket = this.tickets.find(t => t.id === id)
      if (ticket) {
        ticket.count = count
      }
    }
  },
  getters: {
    getTicketById: (state) => {
      return (id: string) => state.tickets.find(ticket => ticket.id === id)
    }
  },
  persist: true
})
