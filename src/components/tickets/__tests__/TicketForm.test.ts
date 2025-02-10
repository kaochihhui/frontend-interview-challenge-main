import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TicketForm from '../TicketForm.vue'

describe('TicketForm', () => {
  it('emits submit event with form data', async () => {
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

  it('resets form after submission', async () => {
    const wrapper = mount(TicketForm)
    
    await wrapper.find('input[type="text"]').setValue('Test Ticket')
    await wrapper.find('form').trigger('submit')
    
    expect(wrapper.find('input[type="text"]').element.value).toBe('')
  })
})
