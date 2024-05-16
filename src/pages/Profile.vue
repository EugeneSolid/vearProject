<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import ProfileSidebar from "@/components/profile/ProfileSidebar.vue";

export default {
  name: "Profile",
  components: {ProfileSidebar, DefaultLayout}
}
</script>

<template>
  <default-layout>
    <div class="profile">
      <h1 class="mb-4 title">My Account</h1>
      <div class="w-100 text-center">
        <div class="position-relative profile-image-section">
          <img class="profile-img" src="/vearProject/images/header/profile.jpeg">
          <i class="fi fi-ss-circle-camera camera-icon position-absolute bottom-0"></i>
        </div>
        <p class="mb-0 profile-name">Micheal Antonio</p>
      </div>
      <div class="d-flex gap-4 mt-5 profile-content">
        <ProfileSidebar/>
        <router-view />
      </div>

    </div>
  </default-layout>
</template>

<style scoped>

</style>