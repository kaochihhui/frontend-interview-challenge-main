import { defineStore } from 'pinia'
import { useTicketStore } from './tickets'
import type { CartItem, Ticket } from '@/types/ticket'

/**
 * Store for managing shopping cart
 * Handles adding/removing items and calculates totals
 * Includes persistent storage
 */
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[]
  }),

  getters: {
    /**
     * Calculate total monetary amount in cart
     * Multiplies each item's price by its quantity
     */
    totalAmount: (state) => 
      state.items.reduce((total, item) => total + (item.price * item.quantity), 0),
    
    /**
     * Calculate total number of items in cart
     * Sums up quantities of all items
     */
    itemCount: (state) =>
      state.items.reduce((total, item) => total + item.quantity, 0)
  },

  actions: {
    /**
     * Add ticket to cart or increment quantity if already exists
     * @param ticket - Ticket to add to cart
     */
    addItem(ticket: Ticket) {
      const ticketStore = useTicketStore()
      const currentTicket = ticketStore.getTicketById(ticket.id)
      
      // Check if ticket exists and is available
      if (!currentTicket || currentTicket.count <= 0) {
        return
      }

      const existingItem = this.items.find(item => item.id === ticket.id)
      
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.items.push({
          ...ticket,
          quantity: 1
        })
      }

      // Decrease available count
      ticketStore.updateTicketCount(ticket.id, currentTicket.count - 1)
    },

    /**
     * Remove item completely from cart
     * @param id - ID of item to remove
     */
    removeItem(id: string) {
      const ticketStore = useTicketStore()
      const item = this.items.find(item => item.id === id)
      
      if (item) {
        // Restore ticket count when removing from cart
        const currentTicket = ticketStore.getTicketById(id)
        if (currentTicket) {
          ticketStore.updateTicketCount(id, currentTicket.count + item.quantity)
        }
        
        this.items = this.items.filter(item => item.id !== id)
      }
    },

    /**
     * Synchronize cart with available tickets
     * Removes cart items that no longer exist in the ticket store
     */
    syncWithAvailableTickets() {
      const ticketStore = useTicketStore()
      this.items = this.items.filter(item => ticketStore.getTicketById(item.id))
    }
  },
  persist: true
})
