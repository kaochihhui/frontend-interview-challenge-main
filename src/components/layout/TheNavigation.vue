<template>
  <nav class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-xl font-bold">Ticket Store</router-link>
      <div class="space-x-4">
        <router-link to="/" class="hover:text-gray-300">Home</router-link>
        <router-link to="/admin" class="hover:text-gray-300">Admin</router-link>
        <router-link to="/cart" class="hover:text-gray-300">Cart</router-link>
      </div>
    </div>
  </nav>
</template>
