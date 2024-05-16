<script>
export default {
  name: "ProfileSettings",
  data() {
    return {
      displayName: 'Micheal-Antonio'
    }
  }
}
</script>

<template>
  <div class="profile-page w-100">
    <div class="main-info-section">
      <p class="profile-page__title">Account Settings</p>
      <div class="profile-page__section">
        <div class="d-flex profile-name-info">
          <div class="d-flex flex-column w-100">
            <label class="section-label">First Name <span class="error">*</span></label>
            <p class="section-field disabled">Micheal</p>
          </div>
          <div class="d-flex flex-column w-100">
            <label class="section-label">Last Name <span class="error">*</span></label>
            <p class="section-field disabled">Antonio</p>
          </div>
        </div>
        <p class="profile-page__info-text">You can only update your name via ID Verification. To get started, please contact us via chat in the lower
          right corner of the screen</p>
        <div style="margin-top: 28px;" class="d-flex flex-column w-100">
          <label class="section-label">Display Name <span class="error">*</span></label>
          <input class="section-field mb-3" type="text" v-model="displayName">
        </div>
        <p class="profile-page__info-text">This will be hou your name will be displayed in the account section and in reviews.</p>
        <div style="margin-top: 28px;" class="d-flex flex-column w-100">
          <label class="section-label">Email Address <span class="error">*</span></label>
          <p class="mb-3 section-field disabled">vn@vear.me</p>
        </div>
        <p class="profile-page__info-text mb-0">If you want to change your email, please contact us via chat in the lower right corner of the screen.</p>
      </div>
    </div>
    <div>
      <p class="profile-page__title">Password Change</p>
      <div class="profile-page__section">
        <div class="d-flex flex-column w-100">
          <label class="section-label">Current Password</label>
          <input class="section-field" type="text">
        </div>
        <div class="d-flex flex-column w-100">
          <label class="section-label mt-3">New Password</label>
          <input class="section-field" type="text">
        </div>
        <div class="d-flex flex-column w-100">
          <label class="section-label mt-3">Confirm New Password</label>
          <input class="section-field" type="text">
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between resident-question align-items-center">
      <p class="profile-page__info-text mb-0">Are you a resident or cetizen of the united states or It’s Territories? <span class="error">*</span></p>
      <div class="d-flex gap-2">
        <button class="resident-question__button active">Yes</button>
        <button class="resident-question__button">No</button>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>