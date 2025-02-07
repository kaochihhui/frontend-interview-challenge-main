<template>
  <nav class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-xl font-bold">Ticket Store</router-link>
      <div class="space-x-4">
        <router-link to="/" class="hover:text-gray-300">Home</router-link>
        <router-link to="/admin" class="hover:text-gray-300">Admin</router-link>
        <router-link to="/cart" class="hover:text-gray-300">
          Cart
          <span v-if="itemCount" class="ml-1 bg-blue-500 px-2 py-0.5 rounded-full text-sm">
            {{ itemCount }}
          </span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart'

const { itemCount } = storeToRefs(useCartStore())
</script>
