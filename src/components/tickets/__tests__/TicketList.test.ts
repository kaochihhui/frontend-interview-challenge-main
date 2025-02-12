import { describe, it, expect, vi } from 'vitest'
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

  it('emits delete event with ticket id when confirmed', async () => {
    const tickets = createTickets()
    // Mock window.confirm to return true
    vi.spyOn(window, 'confirm').mockImplementation(() => true)
    
    const wrapper = mount(TicketList, { props: { tickets } })
    const vipTicketRow = wrapper.find('[data-testid="ticket-2"]')
    await vipTicketRow.find('button').trigger('click')
    
    expect(window.confirm).toHaveBeenCalledWith('Are you sure you want to delete ticket "VIP Ticket"?')
    expect(wrapper.emitted('delete')?.[0]).toEqual(['2'])
  })

  it('does not emit delete event when confirmation is canceled', async () => {
    const tickets = createTickets()
    // Mock window.confirm to return false
    vi.spyOn(window, 'confirm').mockImplementation(() => false)
    
    const wrapper = mount(TicketList, { props: { tickets } })
    const vipTicketRow = wrapper.find('[data-testid="ticket-2"]')
    await vipTicketRow.find('button').trigger('click')
    
    expect(window.confirm).toHaveBeenCalled()
    expect(wrapper.emitted('delete')).toBeFalsy()
  })

  it('displays correct ticket count', () => {
    const tickets = createTickets()
    const wrapper = mount(TicketList, { props: { tickets } })
    
    expect(wrapper.text()).toContain('5 available')
  })
})
