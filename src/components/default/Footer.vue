<script>
import VIcon from "@/components/generic/VIcon.vue";

export default {
  name: "Footer",
  components: {VIcon}
}
</script>

<template>
  <footer class="footer">
    <div class="d-flex justify-content-between mb-4 align-items-start">
      <img src="/images/logo.svg" alt="logo">
      <div class="d-flex flex-column justify-content-end">
        <div class="d-flex justify-content-end mb-3">
          <a href="#ourTeam" class="footer__tec-info-btn">About Us</a>
          <a href="#faqSection" class="footer__tec-info-btn">FAQ</a>
          <button class="footer__tec-info-btn">Terms Of Service</button>
          <a href="mailto:hello@liquidestate.io" class="footer__tec-info-btn">Contact</a>
        </div>
        <div class="footer__social-media-links">
          <a target="_blank" class="media-link" href="https://bit.ly/3Pp9C4k"><v-icon icon-url="/images/icons/telegram.svg"/></a>
          <a target="_blank" class="media-link" href="https://bit.ly/3PcWT59"><v-icon icon-url="/images/icons/twitter.svg"/></a>
          <a target="_blank" class="media-link" href="https://bit.ly/3cdUE2X"><v-icon icon-url="/images/icons/medium.svg"/></a>
          <a target="_blank" class="media-link" href="https://bit.ly/3O8KjCS"><v-icon icon-url="/images/icons/discord.svg"/></a>
          <a target="_blank" class="media-link" href="https://bit.ly/3cgSm3g"><v-icon icon-url="/images/icons/reddit.svg"/></a>
          <a target="_blank" class="media-link" href="https://bit.ly/3RMMgIa"><v-icon icon-url="/images/icons/linkedin.svg"/></a>
          <a target="_blank" class="media-link" href="https://bit.ly/3aE6jrl"><v-icon icon-url="/images/icons/facebook.svg"/></a>
          <a target="_blank" class="media-link" href="https://www.instagram.com/"><v-icon icon-url="/images/icons/instagram.svg"/></a>
          <a target="_blank" class="media-link" href="https://bit.ly/3z6ezK6"><v-icon icon-url="/images/icons/youtube.svg"/></a>

        </div>
      </div>
    </div>
    <div>
      <p class="footer__ad-info mb-4">
        This website is being operated by a consortium of companies, each undergoing a specific
        functionality of the platform, hereby referred to as Liquid Estate.
        Liquid Estate Inc. is the issuer and seller of the LIQD tokens, Liquid Finance LLC is the issuer and seller of the
        building tokens (LE tokens) on the primary market while Liquid Markets LLC is the operator and liquidity provider
        of the secondary market.
      </p>
      <p class="footer__ad-info mb-4">
        Liquid Estate is not a registered broker-dealer or investment advisor. Liquid Estate does not give investment
        advice, endorsement, analysis, or recommendations with respect to any securities. Nothing on this website should
        be construed as an offer to sell, solicitation of an offer to buy, or a recommendation for any security by Liquid
        Estate or any third party.
      </p>
      <p class="footer__ad-info mb-4">
        You are solely responsible for determining whether any investment, investment strategy, or related transaction is
        appropriate for you based on your personal investment objectives, financial circumstances, and risk tolerance. You
        should consult with licensed legal professionals and investment advisors for any legal, tax, insurance, or
        investment advice. Liquid Estate does not guarantee any investment performance, outcome, or return of capital for
        any investment opportunity posted on this site. By accessing this site and any pages thereof, you agree to be
        bound by the Terms of Service and Privacy Policy.
      </p>
      <p class="footer__ad-info">
        Past performance does not guarantee future results. All investments involve risk and may result in partial or
        total loss.
      </p>
    </div>
  </footer>
</template>

<style scoped>

</style>