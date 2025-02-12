import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TicketForm from '../TicketForm.vue'

describe('TicketForm', () => {
  it('validates required fields before submission', async () => {
    const wrapper = mount(TicketForm)
    await wrapper.find('form').trigger('submit')
    
    // Check error messages are displayed
    expect(wrapper.text()).toContain('Name is required')
    expect(wrapper.emitted('submit')).toBeFalsy()
  })

  it('validates count must be positive integer', async () => {
    const wrapper = mount(TicketForm)
    
    // Fill required name
    await wrapper.find('input[type="text"]').setValue('Test Ticket')
    
    // Test decimal
    await wrapper.find('input[type="number"]').setValue(1.5)
    await wrapper.find('form').trigger('submit')
    expect(wrapper.text()).toContain('Available count must be a whole number')
    
    // Test zero
    await wrapper.find('input[type="number"]').setValue(0)
    await wrapper.find('form').trigger('submit')
    expect(wrapper.text()).toContain('Available count must be a whole number')
    
    // Test negative
    await wrapper.find('input[type="number"]').setValue(-1)
    await wrapper.find('form').trigger('submit')
    expect(wrapper.text()).toContain('Available count must be a whole number')
    
    expect(wrapper.emitted('submit')).toBeFalsy()
  })

  it('emits submit event with valid form data', async () => {
    const wrapper = mount(TicketForm)
    
    await wrapper.find('input[type="text"]').setValue('Test Ticket')
    await wrapper.find('textarea').setValue('Test Description')
    await wrapper.find('#isVIP').setValue(true)
    await wrapper.find('input[type="number"]').setValue(10)
    await wrapper.find('input[step="0.01"]').setValue(99.99)
    
    await wrapper.find('form').trigger('submit')
    
    expect(wrapper.emitted('submit')?.[0][0]).toEqual({
      name: 'Test Ticket',
      description: 'Test Description',
      isVIP: true,
      count: 10,
      price: 99.99
    })
  })

  it('resets form and errors after successful submission', async () => {
    const wrapper = mount(TicketForm)
    
    // First try invalid submission
    await wrapper.find('form').trigger('submit')
    expect(wrapper.text()).toContain('Name is required')
    
    // Then submit valid data
    await wrapper.find('input[type="text"]').setValue('Test Ticket')
    await wrapper.find('input[type="number"]').setValue(1)
    await wrapper.find('input[step="0.01"]').setValue(0.01)
    await wrapper.find('form').trigger('submit')
    
    // Check form and errors are reset
    expect(wrapper.find('input[type="text"]').element.value).toBe('')
    expect(wrapper.text()).not.toContain('Name is required')
  })
})
