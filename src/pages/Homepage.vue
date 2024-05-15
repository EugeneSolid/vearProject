<template>
  <default-layout>
    <div class="homepage">
      <MainVideoSection/>
      <MainInfoSection/>
      <PropertiesSection/>
      <ViewWhitepaperBlock/>
      <JoinCommunitySection/>
      <OurTeamSection/>
      <FAQSection/>
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

</style>