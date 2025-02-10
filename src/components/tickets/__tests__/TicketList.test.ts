import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TicketList from '../TicketList.vue'

describe('TicketList', () => {
  const createTickets = () => [
    { id: '1', name: 'Regular Ticket', isVIP: false, price: 10, count: 5 },
    { id: '2', name: 'VIP Ticket', isVIP: true, price: 20, count: 5 },
    { id: '3', name: 'Another Regular', isVIP: false, price: 15, count: 5 }
  ]

  it('sorts VIP tickets first', () => {
    const tickets = createTickets()
    const wrapper = mount(TicketList, { props: { tickets } })
    
    const renderedTickets = wrapper.findAll('h3')
    expect(renderedTickets[0].text()).toBe('VIP Ticket')
  })

  it('emits delete event with ticket id', async () => {
    const tickets = createTickets()
    const wrapper = mount(TicketList, { props: { tickets } })
    
    // Find the delete button next to the VIP ticket (first in sorted list)
    const vipTicketRow = wrapper.find('[data-testid="ticket-2"]')
    await vipTicketRow.find('button').trigger('click')
    
    expect(wrapper.emitted('delete')?.[0]).toEqual(['2'])
  })

  it('displays correct ticket count', () => {
    const tickets = createTickets()
    const wrapper = mount(TicketList, { props: { tickets } })
    
    expect(wrapper.text()).toContain('5 available')
  })
})
