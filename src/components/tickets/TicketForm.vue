<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700">
        Name <span class="text-red-500">*</span>
      </label>
      <input 
        v-model="form.name"
        type="text"
        required
        class="p-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Description</label>
      <textarea
        v-model="form.description"
        class="p-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      ></textarea>
    </div>

    <div class="flex items-center">
      <input
        v-model="form.isVIP"
        type="checkbox"
        id="isVIP"
        class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      <label class="ml-2 block text-sm text-gray-900" for="isVIP">VIP Ticket</label>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">
        Available Count <span class="text-red-500">*</span>
      </label>
      <input
        v-model.number="form.count"
        type="number"
        min="0"
        required
        class="p-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">
        Price ($) <span class="text-red-500">*</span>
      </label>
      <input
        v-model.number="form.price"
        type="number"
        min="0"
        step="0.01"
        required
        class="p-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </div>

    <button
      type="submit"
      class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition cursor-pointer"
    >
      Create Ticket
    </button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { Ticket } from '@/types/ticket'

const emit = defineEmits<{
  (e: 'submit', ticket: Omit<Ticket, 'id'>): void
}>()

const form = reactive({
  name: '',
  description: '',
  isVIP: false,
  count: 0,
  price: 0
})

const handleSubmit = () => {
  emit('submit', { ...form })
  resetForm()
}

// Reset form
const resetForm = () => {
  form.name = ''
  form.description = ''
  form.isVIP = false
  form.count = 0
  form.price = 0
}
</script>
