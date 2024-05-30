<script>
import VIcon from "@/components/generic/VIcon.vue";
import ConnectWalletModal from "@/components/swap/modals/ConnectWalletModal.vue";
import AccountWalletModal from "@/components/swap/modals/AccountWalletModal.vue";

export default {
  name: "SwapHeader",
  components: {AccountWalletModal, ConnectWalletModal, VIcon}
}
</script>

<template>
  <div class="swap-element">
    <div class="swap__header">
      <p class="mb-0 lidq-balance" data-bs-toggle="modal" data-bs-target="#accountWalletModal">
        <v-icon class="me-2" icon-url="/vearProject/images/currencies/lidq.svg"/>
        $2.11
      </p>
      <button class="buy-btn">Buy LIQD</button>
      <button class="connect-wallet-btn" data-bs-toggle="modal" data-bs-target="#connectWalletModal">
        Connect Wallet</button>
      <div class="actions-dropdown">
        <button class="open-actions-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fi fi-rr-menu-dots-vertical"></i>
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li class="dropdown-action d-flex justify-content-between">
            <span>About</span>
            <i class="fi fi-sr-info"></i>
          </li>
          <li class="dropdown-action d-flex justify-content-between">
            <span>Help Center</span>
            <i class="fi fi-rr-interrogation"></i>
          </li>
          <li class="dropdown-action d-flex justify-content-between">
            <span>Request Features</span>
            <i class="fi fi-rr-star"></i>
          </li>
          <li class="dropdown-action d-flex justify-content-between">
            <a class="d-flex justify-content-between w-100" href="https://bit.ly/3O8KjCS">
              Discord
              <i class="fi fi-brands-discord"></i>
            </a>
          </li>
          <li class="dropdown-action d-flex justify-content-between">
            <span>Language</span>
            <i class="fi fi-rr-world"></i>
          </li>
          <li class="dropdown-action d-flex justify-content-between">
            <span>Dark Theme</span>
            <i class="fi fi-rr-moon"></i>
          </li>
          <li class="dropdown-action d-flex justify-content-between">
            <span>Docs</span>
            <i class="fi fi-rr-book-alt"></i>
          </li>
          <li class="dropdown-action d-flex justify-content-between">
            <span>Legal & Privacy</span>
            <i class="fi fi-rr-document"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <ConnectWalletModal/>
  <AccountWalletModal/>
</template>

<style scoped>

</style>