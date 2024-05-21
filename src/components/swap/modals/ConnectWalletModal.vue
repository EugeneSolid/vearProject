<script>
export default {
  name: "ConnectWalletModal"
}
</script>

<template>
  <div class="swap-modal modal fade" id="connectWalletModal" tabindex="-1" aria-labelledby="connectWalletModalLabel"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-0 py-0">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <h1 class="modal-title" id="connectWalletModalLabel">Connect to a wallet</h1>
        <div class="modal-body d-flex gap-3">
          <div class="wallet-item" data-bs-dismiss="modal">
            <img class="mb-2" src="/vearProject/images/wallets/metamask.svg">
            <p class="mb-0">MetaMask</p>
          </div>
          <div class="wallet-item" data-bs-dismiss="modal">
            <img class="mb-2" src="/vearProject/images/wallets/wallcetconnect.svg">
            <p class="mb-0">WalletConnect</p>
          </div>
          <div class="wallet-item" data-bs-dismiss="modal">
            <img class="mb-2" src="/vearProject/images/wallets/metamask.svg">
            <p class="mb-0">MetaMask</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>