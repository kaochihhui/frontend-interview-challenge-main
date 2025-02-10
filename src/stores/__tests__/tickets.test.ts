import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useTicketStore } from '../tickets'

describe('Ticket Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const mockTicket = {
    name: 'Test Ticket',
    description: 'Test Description',
    isVIP: false,
    count: 10,
    price: 99.99
  }

  it('adds a new ticket', () => {
    const store = useTicketStore()
    store.addTicket(mockTicket)
    
    expect(store.tickets).toHaveLength(1)
    expect(store.tickets[0]).toMatchObject(mockTicket)
    expect(store.tickets[0].id).toBeDefined()
  })

  it('removes a ticket', () => {
    const store = useTicketStore()
    store.addTicket(mockTicket)
    const id = store.tickets[0].id
    
    store.removeTicket(id)
    expect(store.tickets).toHaveLength(0)
  })

  it('updates ticket count', () => {
    const store = useTicketStore()
    store.addTicket(mockTicket)
    const id = store.tickets[0].id
    
    store.updateTicketCount(id, 5)
    expect(store.tickets[0].count).toBe(5)
  })

  it('finds ticket by ID', () => {
    const store = useTicketStore()
    store.addTicket(mockTicket)
    const id = store.tickets[0].id
    
    const found = store.getTicketById(id)
    expect(found).toMatchObject(mockTicket)
  })
})
