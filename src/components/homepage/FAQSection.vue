<script>
export default {
  name: "FAQSection"
}
</script>

<template>
  <div class="faq-section" id="faqSection">
    <h2 class="mb-5 title">F.A.Q.</h2>
    <div class="w-100 faq-accordion-section">
      <div class="accordion d-flex faq-accordion w-100" id="faqAccordion">
        <div class="w-100">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseOne">
                <i class="accordion-icon fi fi-rs-user-check"></i><span class="faq-question ms-3">How can I participate in the presale?</span>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                <p class="mb-2 title">How can I participate in the presale?</p>
                <p class="mb-0 description">Each property will be owned by an SPV (special purpose vehicle – a unique
                  entity created with the sole purpose of holding the building) which in turn will be owned by a Series
                  LLC, each series owning an SPV and the LLC membership interests of the series being divided into equal
                  tokens which are being owned by investors like you. A more detailed explanation can be found in the
                  whitepaper.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo">
                <i class="accordion-icon fi fi-sr-dollar"></i><span
                  class="faq-question ms-3">How will rent be paid?</span>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                <p class="mb-2 title">How will rent be paid?</p>
                <p class="mb-0 description">Each property will be owned by an SPV (special purpose vehicle – a unique
                  entity created with the sole purpose of holding the building) which in turn will be owned by a Series
                  LLC, each series owning an SPV and the LLC membership interests of the series being divided into equal
                  tokens which are being owned by investors like you. A more detailed explanation can be found in the
                  whitepaper.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree">
                <i class="accordion-icon fi fi-rr-settings"></i><span class="faq-question ms-3">Who manages the properties?</span>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                <p class="mb-2 title">Who manages the properties?</p>
                <p class="mb-0 description">Each property will be owned by an SPV (special purpose vehicle – a unique
                  entity created with the sole purpose of holding the building) which in turn will be owned by a Series
                  LLC, each series owning an SPV and the LLC membership interests of the series being divided into equal
                  tokens which are being owned by investors like you. A more detailed explanation can be found in the
                  whitepaper.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-100">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#pane-collapseOne" aria-expanded="false" aria-controls="pane-collapseOne">
                <i class="accordion-icon fi fi-rs-building"></i><span class="faq-question ms-3">Will listed buildings have their own token?</span>
              </button>
            </h2>
            <div id="pane-collapseOne" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                <p class="mb-2 title">Will listed buildings have their own token?</p>
                <p class="mb-0 description">Each property will be owned by an SPV (special purpose vehicle – a unique
                  entity created with the sole purpose of holding the building) which in turn will be owned by a Series
                  LLC, each series owning an SPV and the LLC membership interests of the series being divided into equal
                  tokens which are being owned by investors like you. A more detailed explanation can be found in the
                  whitepaper.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#panel-collapseTwo" aria-expanded="false"
                      aria-controls="panel-collapseTwo">
                <i class="accordion-icon fi fi-rs-home"></i><span
                  class="faq-question ms-3">Who owns the properties?</span>
              </button>
            </h2>
            <div id="panel-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                <p class="mb-2 title">Who owns the properties?</p>
                <p class="mb-0 description">Each property will be owned by an SPV (special purpose vehicle – a unique
                  entity created with the sole purpose of holding the building) which in turn will be owned by a Series
                  LLC, each series owning an SPV and the LLC membership interests of the series being divided into equal
                  tokens which are being owned by investors like you. A more detailed explanation can be found in the
                  whitepaper.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#panel-collapseThree" aria-expanded="false"
                      aria-controls="panel-collapseThree">
                <i class="accordion-icon fi fi-sr-coins"></i><span
                  class="faq-question ms-3">Can I buy tokens using Fiat money?</span>
              </button>
            </h2>
            <div id="panel-collapseThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                <p class="mb-2 title">Can I buy tokens using Fiat money?</p>
                <p class="mb-0 description">No. To start, Liquid Estate will only accept crypto, but we plan to
                  introduce card payments and bank transfers in the near future.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 d-flex justify-content-center">
      <router-link to="/login" class=" mt-3 show-all-properties-btn">
        See All FAQ <i class="accordion-icon fi fi-sr-angle-small-right"></i>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>