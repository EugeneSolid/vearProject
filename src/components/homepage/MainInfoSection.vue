<script>
export default {
  name: "MainInfoSection"
}
</script>

<template>
  <div class="main-info">
    <div class="main-info__header">
      <p class="title mb-2">Uneiling A New Dimension To Real Estate Investment</p>
      <p class="description mb-0">Finally, investors from all over the world can participate in the global real estate
        market via fractional,
        tokenized ownership that is compliant and running on the blockchain.</p>
    </div>
    <div class="d-flex advantages-section">
      <div class="advantages-section__block d-flex flex-column align-items-center justify-content-start">
        <i class="fi fi-rs-building"></i>
        <p class="mb-0 block-text">Fractional real estate ownership. You own 5% of the building, Get 5% of the rent.</p>
      </div>
      <div class="advantages-section__block d-flex flex-column align-items-center justify-content-start">
        <i class="fi fi-rr-usd-circle"></i>
        <p class="mb-0 block-text">Earn rent immediately. Rent is being calculated and paid every transaction block.</p>
      </div>
      <div class="advantages-section__block d-flex flex-column align-items-center justify-content-start">
        <i class="fi fi-rr-handshake"></i>
        <p class="mb-0 block-text">Trade your tokens freely. Buy and sell your tokens anytime, 24/7.</p>
      </div>
      <div class="advantages-section__block d-flex flex-column align-items-center justify-content-start">
        <i class="fi fi-rr-settings"></i>
        <p class="mb-0 block-text">All properties are managed by a management company, so you don't need to do
          anything.</p>
      </div>
    </div>
  </div>
  <div class="main-info__logic-chain-section">
    <div class="d-flex justify-content-between align-items-center">
      <img class="problem-img" src="@/assets/images/homepage-chain/problem.png">
      <div>
        <p class="pb-0 title text-start">The Problem</p>
        <p class="pb-0 description text-start">While investing in traditional real estate is relatively safer and more stable than
          investing in stocks, it comes with some inconvenient downsides. The traditional way of investing in real
          estate is a very bureaucratic, time-consuming, and expensive process. Moreover, selling a property can be
          difficult as it takes time to find a buyer, and ownership changes are often associated with high fees. Real
          estate assets are considered iliquid assets.</p>
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <p class="mb-0 title text-start">The Solution</p>
        <p class="mb-4 description text-start">Liquid Estate proposes an innovative solution to eliminate all these barriers by
          harnessing the power of blockchain. Our team of specialists will pick real estate assets with good ROI,
          tokenize and fund them via crowd sale on our platform, therefore creating liquidity in a traditionally
          illiquid market.
        </p>
        <p class="mb-0 description text-start">
          Compliant and tokenized real-life assets that generate dividends can now be fractionally owned and traded
          freely, hence democratizing a traditionally resource-intensive class of assets.
        </p>
      </div>
      <img class="iphone-ing" src="@/assets/images/homepage-chain/iphone.png">
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <img class="how-it-works-img" src="@/assets/images/homepage-chain/how-it-works.png">
      <div>
        <p class="mb-0 title text-start">How it works</p>
        <p class="mb-4 description text-start">With Liquid Estate, you can acquire fractional shares in real estate. Each property
          listed for sale on our platform will be tokenized in tokens of $1, with a minimum buy of 100.</p>
        <p class="mb-4 description text-start">As a result,
          real estate investing will be a democratic procedure, allowing people with limited resources to invest in
          attractive deals without the need for great capital. </p>
        <p class="mb-0 hint text-start">Eg. you own 5% of the property, you get 5% of the rent value. It’s that simple!</p>
      </div>
    </div>
  </div>
  <div class="main-info__finance-block d-flex flex-column align-items-center justify-content-start ">
    <div class="block-info">
      <p class="title mb-2">Your Money, Your Decisions</p>
      <p class="description mb-0">A DAO is created for every property, and all property decisions are put to the vote by
        owners through our governance structure. These choices include everything from addressing repair requests to
        choosing the tenant. A supermajority (60 percent or more) decides which decisions win, and those results are
        automatically forwarded to the property manager to carry through</p>
    </div>
  </div>

</template>

<style scoped>
.main-info__logic-chain-section {
  .description {
    text-align: justify !important;
  }
}
</style>