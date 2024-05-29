<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation, Pagination} from "swiper/modules";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export default {
  name: "FullView",
  props: ['imgSource', 'imgCount', 'currentSlide'],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Pagination, Navigation],
      swiper: null
    }
  },
  methods: {
    onSwiper(swiper)  {
      this.swiper = swiper
    }
  },
  mounted() {
    document.getElementById('fullView').addEventListener('show.bs.modal', event => {
      this.swiper.slideTo(this.currentSlide - 1);
    })
  }
}
</script>

<template>
  <div class="modal fade" id="fullView" tabindex="-1" aria-labelledby="fullViewLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body p-0">
          <swiper
              :pagination="{
                dynamicBullets: true,
               }"
              :navigation="true"
              :modules="modules"
              :autoHeight="true"
              class="fullViewSwiper"
              @swiper="onSwiper"
          >
            <swiper-slide v-for="count in imgCount">
              <img :src="imgSource + count + '.jpg'"/>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#fullView {
  .modal-dialog {
    max-width: 1170px !important;
    height: 100%;

    .modal-content {
      box-shadow: 0px 24px 16px -10px rgba(0, 0, 0, 0.0784313725);
      border-radius: 18px;
    }
  }
}

.fullViewSwiper {

  &.swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    opacity: 1;
    background-color: white;

    &.swiper-pagination-bullet-active-main {
      background-color: #257CFF;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

</style>