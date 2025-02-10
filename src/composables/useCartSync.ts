import { watch } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useTicketStore } from '@/stores/tickets'

export function useCartSync() {
  const cartStore = useCartStore()
  const ticketStore = useTicketStore()

  // Setup watcher for ticket deletions
  watch(
    () => ticketStore.tickets,
    () => cartStore.syncWithAvailableTickets(),
    { deep: true }
  )
}
