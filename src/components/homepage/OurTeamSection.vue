<script>
export default {
  name: "OurTeamSection"
}
</script>

<template>
  <div class="team-section" id="ourTeam">
    <h2 class="mb-4 title">Founding Team</h2>
    <div class="d-flex justify-content-between">
      <div class="team-member-info">
        <div class="d-flex align-items-center gap-2">
          <img class="me-2" src="@/assets/images/founders/founder-1.png"/>
          <div>
            <p class="mb-2 member-name">Valentin Nicoara</p>
            <p class="mb-0 job-title">CEO</p>
          </div>
        </div>
        <p class="mb-0 description">Valentin holds an M.Sc. in engineering from a prestigious Danish university, has a keen sense of design, and
          a meticulous attention to detail. He has extensive expertise in international business, speaks five languages,
          and has lived and visited over 40 countries.</p>
      </div>
      <div class="team-member-info">
        <div class="d-flex align-items-center gap-2">
          <img class="me-2" src="@/assets/images/founders/founder-2.png"/>
          <div>
            <p class="mb-2 member-name">George Wolfe</p>
            <p class="mb-0 job-title">CFO</p>
          </div>
        </div>
        <p class="mb-0 description">George Wolfe, J.D., is a practicing associate general counsel of U.S. Commercial for a Fortune 200 company.
          George specializes in competition law, regulatory compliance, and commercial contracting. George has also
          previously served at the United States Department of Justice and Federal Trade Commission.</p>
      </div>
      <div class="team-member-info">
        <div class="d-flex align-items-center gap-2">
          <img class="me-2" src="@/assets/images/founders/founder-3.png"/>
          <div>
            <p class="mb-2 member-name">Kyle Teague</p>
            <p class="mb-0 job-title">CTO</p>
          </div>
        </div>
        <p class="mb-0 description">Kyle is a 3x startup founder based out of New York with over 20 years of software development experience. He
          has worked as a Data Scientist, VP of Engineering, and CTO. Kyle was also the lead blockchain developer for
          Loom Network, which had a successful ICO in 2018 and raised $24 MM in private sales.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.team-section {
  .description {
    text-align: justify!important;
  }
}
</style>