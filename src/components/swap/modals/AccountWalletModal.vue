<script>
export default {
  name: "AccountWalletModal"
}
</script>

<template>
  <div class="swap-modal modal fade" id="accountWalletModal" tabindex="-1" aria-labelledby="connectWalletModalLabel"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-0 py-0">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <h1 class="modal-title" id="connectWalletModalLabel">Account</h1>
        <div class="modal-body">
          <div class="d-flex flex-column gap-3 mb-2">
            <div class="account-item">
              <div class="d-flex justify-content-between align-items-center">
                <p class="mb-1 item-title">Connected with MetaMask</p>
                <div class="d-flex gap-2">
                  <p class="mb-0 warning-button">Disconnect</p>
                  <p class="mb-0 change-btn">Change</p>
                </div>
              </div>
              <p class="mb-0 item-value">kj79...90sd234</p>
            </div>
            <div class="account-item">
              <div class="d-flex justify-content-between align-items-center">
                <p class="mb-1 item-title">Connected with MetaMask</p>
                <div class="d-flex gap-2">
                  <p class="mb-0 warning-button">Disconnect</p>
                  <p class="mb-0 change-btn">Change</p>
                </div>
              </div>
              <p class="mb-0 item-value">kj79...90sd234</p>
            </div>
          </div>
          <p class="mb-0 item-title">Your Transaction will appear here...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-body {
  padding-bottom: 20px !important;
}
</style>