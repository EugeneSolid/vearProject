<script>
export default {
  name: "ProfileClaimRent",
  data() {
    return {
      isHintOpened: false,
    }
  },
  mounted() {
    document.body.addEventListener('click', (e) => this.setFalse(e));
  },
  methods: {
    setFalse(e) {
      if (!e.target.classList.contains('hint-icon')) {
        this.isHintOpened = false;
      }
    },
    copyValue(text) {
      navigator.clipboard.writeText(text)
    }
  }
}
</script>

<template>
  <div class="profile-page w-100">
    <p class="profile-page__title">Rent</p>
    <div class="profile-page__section position-relative">
      <div class="d-flex flex-column w-100 mt-3">
        <label class="section-label active">Registered Wallets</label>
        <div class="position-relative registered-wallet">
          <p class="mb-0 wallet-value highlight-area">0x897jk4l3k3lkjl34455jn3oin934n34mno34j</p>
          <i class="fi fi-rr-copy position-absolute copy-value-icon highlight-area"
             @click="copyValue('0x897jk4l3k3lkjl34455jn3oin934n34mno34j')"></i>
        </div>
        <p class="mt-5 mb-0 redirect-info">To change your wallet or network, please use
          <router-link to="/profile/wallets" class="redirect-info-link">Wallets section.</router-link>
        </p>
      </div>
      <hr class="position-absolute w-100 delimiter">
      <div class="claim-section">
        <div class="d-flex justify-content-between">
          <div>
            <p class="mb-1 claim-section__title">Current rent to claim from all properties</p>
            <p class="mb-0 claim-section__currency">8750.12 LIQD <span
                class="claim-section__currency_span">($879.7 USD)</span></p>
            <p class="mb-0 claim-section__info">Claimed rent will be visible in your portfolio</p>
          </div>
          <div style="height: 56px" class="d-flex justify-content-end align-items-center">
            <p style="max-width: 110px;" class="mb-0 me-3 text-end profile-page__info-text">on ethereum mainment</p>
            <button class="section-add-btn">Claim All</button>
          </div>
        </div>
        <table class="w-100 default-table">
          <tr class="table-columns">
            <th style="width: 155px;">Token</th>
            <th style="width: 135px">Tokens owned</th>
            <th style="width: 155px;">Total Rent Earned</th>
            <th style="width: 140px;" class="pe-2">Claimable Rent</th>
            <th style="width: 135px;"></th>
          </tr>
          <tr class="separator header"/>
          <tr class="table-row">
            <td class="table-text bold"><img class="table-property-img" src="/vearProject/images/properties/property-1.png">LE0001</td>
            <td class="table-text">3.000</td>
            <td>
              <div class="d-flex flex-column">
                <p class="mb-1 table-text">834 LIQD</p>
                <p class="mb-0 table-subtext">$9786 USD</p>
              </div>
            </td>
            <td class="pe-3">
              <div class="d-flex flex-column">
                <p class="mb-1 table-text">398 LIQD</p>
                <p class="mb-0 table-subtext">$97 USD</p>
              </div>
            </td>
            <td class="text-end ps-0">
              <button class="claim-btn">Claim</button>
            </td>
          </tr>
          <tr class="separator"/>
          <tr class="table-row">
            <td class="table-text bold"><img class="table-property-img" src="/vearProject/images/properties/property-2.png">LE0002</td>
            <td class="table-text">3.000</td>
            <td>
              <div class="d-flex flex-column">
                <p class="mb-1 table-text">834 LIQD</p>
                <p class="mb-0 table-subtext">$9786 USD</p>
              </div>
            </td>
            <td>
              <div class="d-flex flex-column">
                <p class="mb-1 table-text">398 LIQD</p>
                <p class="mb-0 table-subtext">$97 USD</p>
              </div>
            </td>
            <td class="text-end ps-0">
              <button class="claim-btn">Claim</button>
            </td>
          </tr>
          <tr class="separator"/>
          <tr class="table-row">
            <td class="table-text bold"><img class="table-property-img" src="/vearProject/images/properties/property-3.png">LE0003</td>
            <td class="table-text">3.000</td>
            <td>
              <div class="d-flex flex-column">
                <p class="mb-1 table-text">834 LIQD</p>
                <p class="mb-0 table-subtext">$9786 USD</p>
              </div>
            </td>
            <td>
              <div class="d-flex flex-column">
                <p class="mb-1 table-text">398 LIQD</p>
                <p class="mb-0 table-subtext">$97 USD</p>
              </div>
            </td>
            <td class="text-end ps-0">
              <div class="position-relative">
                <i v-if="!this.isHintOpened" @click="this.isHintOpened = !this.isHintOpened"
                   class="fi fi-rr-info position-absolute hint-icon open"></i>
                <i v-else @click="this.isHintOpened = !this.isHintOpened"
                   class="fi fi-sr-info position-absolute hint-icon opened"></i>
                <p :class="'mb-0 position-absolute text-start locked-hint ' + (this.isHintOpened ? 'd-flock' : 'd-none')">
                  The rent for this property is staked and can’t be claimed. Go to the saking section to unlock it.</p>
                <button class="claim-btn locked" disabled>Locked</button>
              </div>
            </td>
          </tr>
        </table>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>