<script>
export default {
  name: "OurTeamSection"
}
</script>

<template>
  <div class="team-section" id="ourTeam">
    <h2 class="mb-4 title">Founding Team</h2>
    <div class="d-flex justify-content-center gap-3 team-info-section">
      <div class="team-member-info">
        <div class="d-flex align-items-center gap-2">
          <img class="me-2" src="@/assets/images/founders/founder-1.png"/>
          <div>
            <p class="mb-2 member-name">Valentin Nicoara</p>
            <p class="mb-0 job-title">CEO</p>
          </div>
        </div>
        <p class="mb-0 description">Valentin holds an M.Sc. in engineering from a prestigious Danish university, has a
          keen sense of design, and
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
        <p class="mb-0 description">George Wolfe, J.D., is a practicing associate general counsel of U.S. Commercial for
          a Fortune 200 company.
          George specializes in competition law, regulatory compliance, and commercial contracting. George has also
          previously served at the United States Department of Justice and Federal Trade Commission.</p>
      </div>
    </div>
    <h2 class="mt-5 mb-4 title">Advisors</h2>
    <div class="d-flex justify-content-center gap-3 team-info-section">
      <div class="team-member-info">
        <div class="d-flex align-items-center gap-2">
          <img class="me-2" src="@/assets/images/founders/founder-3.png"/>
          <div>
            <p class="mb-2 member-name">Kyle Teague</p>
            <p class="mb-0 job-title">Advisor</p>
          </div>
        </div>
        <p class="mb-0 description">Kyle is a 3x startup founder based out of New York with over 20 years of software
          development experience. He
          has worked as a Data Scientist, VP of Engineering, and CTO. Kyle was also the lead blockchain developer for
          Loom Network, which had a successful ICO in 2018 and raised $24 MM in private sales. More recently, Kyle
          founded Fiat Labs which received funding from Techstars New York. Kyle holds a B.S. in Electrical Engineering
          from the Georgia Institute of Technology.</p>
      </div>
      <div class="team-member-info">
        <div class="d-flex align-items-center gap-2">
          <img class="me-2 founder-img" src="@/assets/images/founders/founder-4.png"/>
          <div>
            <p class="mb-2 member-name">Sum Yeung</p>
            <p class="mb-0 job-title">Advisor</p>
          </div>
        </div>
        <p class="mb-0 description">Sum Yeung is a seasoned investor from Hong Kong with a strong background in the
          stock market and real estate investment. He has successfully managed a diverse portfolio, including
          significant property holdings in the UK. Sum's extensive experience in both financial markets and
          international real estate investment brings valuable insights and strategic guidance to the Liquid Estate
          team. His expertise in navigating complex market dynamics and identifying profitable investment opportunities
          is instrumental in driving the project's success.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.team-section {
  .description {
    text-align: justify !important;
  }
}

.founder-img {
  width: 65px;
  border-radius: 50%;
}
</style>