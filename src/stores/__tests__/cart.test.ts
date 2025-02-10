import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from '../cart'
import { useTicketStore } from '../tickets'

describe('Cart Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const createTicket = (ticketStore: ReturnType<typeof useTicketStore>) => {
    const ticket = {
      name: 'Test Ticket',
      description: 'Test Description',
      isVIP: false,
      count: 10,
      price: 99.99
    }
    ticketStore.addTicket(ticket)
    return ticketStore.tickets[0]
  }

  it('adds item and decreases ticket count', () => {
    const cartStore = useCartStore()
    const ticketStore = useTicketStore()
    const ticket = createTicket(ticketStore)
    
    cartStore.addItem(ticket)
    
    expect(cartStore.items).toHaveLength(1)
    expect(cartStore.items[0].quantity).toBe(1)
    expect(ticketStore.getTicketById(ticket.id)?.count).toBe(9)
  })

  it('increases quantity for existing item', () => {
    const cartStore = useCartStore()
    const ticketStore = useTicketStore()
    const ticket = createTicket(ticketStore)
    
    cartStore.addItem(ticket)
    cartStore.addItem(ticket)
    
    expect(cartStore.items).toHaveLength(1)
    expect(cartStore.items[0].quantity).toBe(2)
    expect(ticketStore.getTicketById(ticket.id)?.count).toBe(8)
  })

  it('prevents adding when ticket count is 0', () => {
    const cartStore = useCartStore()
    const ticketStore = useTicketStore()
    const ticket = createTicket(ticketStore)
    ticketStore.updateTicketCount(ticket.id, 0)
    
    cartStore.addItem(ticket)
    
    expect(cartStore.items).toHaveLength(0)
  })

  it('calculates total amount correctly', () => {
    const cartStore = useCartStore()
    const ticketStore = useTicketStore()
    const ticket = createTicket(ticketStore)
    
    cartStore.addItem(ticket)
    cartStore.addItem(ticket)
    
    expect(cartStore.totalAmount).toBe(199.98) // 99.99 * 2
  })

  it('restores ticket count when removing from cart', () => {
    const cartStore = useCartStore()
    const ticketStore = useTicketStore()
    const ticket = createTicket(ticketStore)
    
    cartStore.addItem(ticket)
    cartStore.addItem(ticket)
    cartStore.removeItem(ticket.id)
    
    expect(cartStore.items).toHaveLength(0)
    expect(ticketStore.getTicketById(ticket.id)?.count).toBe(10)
  })
})
