<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-bold">Shopping Cart</h1>
    
    <div class="bg-white rounded-lg shadow">
      <div v-if="items.length === 0" class="p-6 text-center text-gray-500">
        Your cart is empty
      </div>
      
      <template v-else>
        <div class="divide-y">
          <CartItem
            v-for="item in items"
            :key="item.id"
            :item="item"
            @remove="removeFromCart(item.id)"
          />
        </div>
        
        <div class="p-6 bg-gray-50 border-t">
          <div class="text-xl font-bold">
            Total: ${{ totalAmount }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart'
import CartItem from '@/components/cart/CartItem.vue'

const cartStore = useCartStore()
const { items, totalAmount } = storeToRefs(cartStore)

const removeFromCart = (id: string) => {
  cartStore.removeItem(id)
}
</script>
