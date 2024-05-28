<script>
export default {
  name: "Timeline"
}
</script>

<template>
  <div class="timeline mt-4 position-relative">
    <hr class="position-absolute timeline-line second"/>
    <div class="position-relative">
      <i class="timeline-icon active fi fi-sr-check-circle position-absolute"></i>
      <hr class="position-absolute timeline-line first active"/>
      <p class="timeline-date">June 25, 2024</p>
      <p class="timeline-description">Property is listed on Liquid Estate & Investor express buying interest, investors get whitelist.</p>
    </div>
    <div class="position-relative">
      <i style="border-color: transparent;" class="timeline-icon active fi fi-rr-dot-circle position-absolute bg-white"></i>
      <p class="timeline-date">June 30, 2024</p>
      <p class="timeline-description">Property crowdfunding starts for 48 hours, Investors deposit money into smart contracts. If 100% of the sums
        raised, the building is acquired. If 100%of the amount is not raised, all funds are returned to investors.</p>
    </div>
    <div class="position-relative">
      <i class="timeline-icon fi fi-ss-circle position-absolute"></i>
      <p class="timeline-date">July 02, 2024</p>
      <p class="timeline-description">Acquisition process starts: LLC formation, funds conversion, owner changes etc.</p>
    </div>
    <div class="position-relative">
      <i class="timeline-icon fi fi-ss-circle position-absolute"></i>
      <p class="timeline-date">August 03, 2024</p>
      <p class="timeline-description">Tokens are distributed to investors.</p>
    </div>
    <div class="position-relative">
      <i class="timeline-icon fi fi-ss-circle position-absolute"></i>
      <p class="timeline-date">August 05, 2024</p>
      <p class="timeline-description">The acquisition process is complete. Rent payout starts.</p>
    </div>
  </div>
</template>

<style scoped>

</style>