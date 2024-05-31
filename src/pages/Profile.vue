<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import ProfileSidebar from "@/components/profile/ProfileSidebar.vue";
import ProfileSidebarMobile from "@/components/profile/ProfileSidebarMobile.vue";

export default {
  name: "Profile",
  components: {ProfileSidebar, DefaultLayout, ProfileSidebarMobile},
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
        <p class="mb-0 profile-name">Michael Antonio</p>
      </div>
      <div class="profile-sidebar-mobile">
        <button class="open-mobile-sidebar" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
                aria-controls="offcanvasDarkNavbar"
                aria-label="Toggle navigation">Profile Menu
        </button>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasDarkNavbar"
             aria-labelledby="offcanvasDarkNavbarLabel">
          <div class="offcanvas-body p-0">
            <ProfileSidebarMobile/>
          </div>
        </div>
      </div>

      <div class="d-flex gap-4 mt-5 profile-content">
        <ProfileSidebar/>
        <router-view/>
      </div>

    </div>
  </default-layout>
</template>

<style scoped>

</style>