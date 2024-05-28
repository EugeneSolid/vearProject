<template>
  <default-layout>
    <div class="homepage position-relative">
      <MainVideoSection/>
      <MainInfoSection/>
      <PropertiesSection/>
      <ViewWhitepaperBlock/>
      <JoinCommunitySection/>
      <OurTeamSection/>
      <FAQSection/>
      <div class="position-fixed join-button d-flex align-items-center">
        <p class="join-text mb-0">Join Telegram</p>
        <a class="join-icon" href="https://bit.ly/3Pp9C4k" target="_blank">
          <img src="/vearProject/images/icons/telegram-3d.svg">
        </a>
      </div>
    </div>
  </default-layout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import MainVideoSection from "@/components/homepage/MainVideoSection.vue";
import MainInfoSection from "@/components/homepage/MainInfoSection.vue";
import JoinCommunitySection from "@/components/homepage/JoinCommunitySection.vue";
import OurTeamSection from "@/components/homepage/OurTeamSection.vue";
import ViewWhitepaperBlock from "@/components/homepage/ViewWhitepaperBlock.vue";
import PropertiesSection from "@/components/homepage/PropertiesSection.vue";
import FAQSection from "@/components/homepage/FAQSection.vue";

export default {
  name: 'Example',
  components: {
    FAQSection,
    PropertiesSection,
    ViewWhitepaperBlock,
    OurTeamSection,
    JoinCommunitySection,
    MainInfoSection,
    MainVideoSection,
    DefaultLayout,
  }
}
</script>

<style lang="scss" scoped>
.join-button {
  bottom: 25px;
  right: 30px;
  gap: 10px;
  z-index: 9999;
  font-family: 'SF Pro Display';

  .join-text {
    text-align: center;
    min-width: 1em;
    max-width: 21em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px 15px;
    border-radius: 10px;
    background: #fff;
    color: rgb(63, 154, 216);
    z-index: 1000;
    box-shadow: 0 1.93465px 7.73859px rgba(0, 0, 0, 0.26);
    font-size: 17px;
    line-height: 21px;
    letter-spacing: .42px;
  }

  .join-text:after {
    content:'';
    position: absolute;
    top: 41%;
    left: 44%;
    right: 5px;
    margin: 0 auto;
    width: 0;
    height: 0;
    border-top: solid 7px transparent;
    border-left: solid 7px #FFF;
    border-right: solid 7px transparent;
    border-bottom: solid 7px transparent;
  }

  .join-icon {
    box-shadow: 0 3px 6px rgb(0 0 0/25%);
    border-radius: 50%;

    img {
      width: 54px;
    }
  }
}
</style>