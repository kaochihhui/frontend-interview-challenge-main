import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import CartItem from '../CartItem.vue'

describe('CartItem', () => {
  const mockItem = {
    id: '1',
    name: 'Test Ticket',
    price: 10,
    quantity: 2,
    isVIP: false,
    count: 5
  }

  it('displays correct item details', () => {
    const wrapper = mount(CartItem, {
      props: { item: mockItem }
    })
    
    expect(wrapper.text()).toContain('Test Ticket')
    expect(wrapper.text()).toContain('2 × $10')
    expect(wrapper.text()).toContain('$20') // Total price
  })

  it('emits remove event when deletion is confirmed', async () => {
    const wrapper = mount(CartItem, {
      props: { item: mockItem }
    })
    
    // Mock window.confirm to return true
    vi.spyOn(window, 'confirm').mockImplementation(() => true)
    
    await wrapper.find('button[title="Remove from cart"]').trigger('click')
    
    expect(window.confirm).toHaveBeenCalledWith('Are you sure you want to remove ticket "Test Ticket" from cart?')
    expect(wrapper.emitted('remove')).toBeTruthy()
  })

  it('does not emit remove event when deletion is cancelled', async () => {
    const wrapper = mount(CartItem, {
      props: { item: mockItem }
    })
    
    // Mock window.confirm to return false
    vi.spyOn(window, 'confirm').mockImplementation(() => false)
    
    await wrapper.find('button[title="Remove from cart"]').trigger('click')
    
    expect(window.confirm).toHaveBeenCalled()
    expect(wrapper.emitted('remove')).toBeFalsy()
  })
})
