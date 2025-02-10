import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TicketCard from '../TicketCard.vue'

describe('TicketCard', () => {
  const createTicket = (overrides = {}) => ({
    id: '1',
    name: 'Test Ticket',
    description: 'Test Description',
    isVIP: false,
    count: 10,
    price: 99.99,
    ...overrides
  })

  it('displays VIP badge for VIP tickets', () => {
    const ticket = createTicket({ isVIP: true })
    const wrapper = mount(TicketCard, { props: { ticket } })
    
    expect(wrapper.text()).toContain('VIP')
    expect(wrapper.find('.bg-amber-500').exists()).toBe(true)
  })

  it('shows sold out state when count is 0', () => {
    const ticket = createTicket({ count: 0 })
    const wrapper = mount(TicketCard, { props: { ticket } })
    
    const button = wrapper.find('button')
    expect(button.text()).toBe('Sold Out')
    expect(button.attributes('disabled')).toBeDefined()
  })

  it('emits add-to-cart event when clicking button', async () => {
    const ticket = createTicket()
    const wrapper = mount(TicketCard, { props: { ticket } })
    
    await wrapper.find('button').trigger('click')
    
    expect(wrapper.emitted('add-to-cart')?.[0]).toEqual([ticket])
  })
})
