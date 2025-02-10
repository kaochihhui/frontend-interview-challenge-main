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
     * Generates a unique ID using crypto.randomUUID or fallback method
     */
    addTicket(ticket: Omit<Ticket, 'id'>) {
      // Generate unique ID with fallback for older browsers
      const id = crypto.randomUUID?.() || 
        Math.random().toString(36).substring(2) + Date.now().toString(36)
      
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
    }
  },
  getters: {
    getTicketById: (state) => {
      return (id: string) => state.tickets.find(ticket => ticket.id === id)
    }
  },
  persist: true
})
