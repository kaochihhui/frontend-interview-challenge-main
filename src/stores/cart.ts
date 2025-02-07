import { defineStore } from 'pinia'
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
      const existingItem = this.items.find(item => item.id === ticket.id)
      
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.items.push({
          ...ticket,
          quantity: 1
        })
      }
    },

    /**
     * Remove item completely from cart
     * @param id - ID of item to remove
     */
    removeItem(id: string) {
      this.items = this.items.filter(item => item.id !== id)
    }
  },
  persist: true
})
