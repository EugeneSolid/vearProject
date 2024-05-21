<script>
export default {
  name: "HistoryModal",
  data() {
    return {
      isWalletConnected: false
    }
  },
  mounted() {
    document.getElementById('historyModal').addEventListener('show.bs.modal', event => {
      this.isWalletConnected = false
    })
  }
}
</script>

<template>
  <div class="swap-modal modal fade" id="historyModal" tabindex="-1" aria-labelledby="connectWalletModalLabel"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-0 py-0">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <h1 class="modal-title" id="connectWalletModalLabel">Your History</h1>
        <div class="modal-body">
          <div v-if="!isWalletConnected">
            <button class="w-100 mb-3 connect-wallet-btn" @click="isWalletConnected = true">Connect Wallet</button>
            <p class="mb-0 item-hint text-center">To view recent transaction</p>
          </div>
          <div v-else>
            <div class="w-100 d-flex align-items-center justify-content-center">
              <img class="file-img" src="@/assets/images/file.png">
            </div>

            <p class="mb-0 item-hint text-center">No recent transaction</p>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>