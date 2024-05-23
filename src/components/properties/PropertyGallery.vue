<template>
  <div class="position-relative gallery">
    <div class="position-absolute d-flex property-type">
      <i :class="property.type.icon"></i>
      <p class="mb-0">{{ property.type.name }}</p>
    </div>
    <div class="position-absolute images-count">
      <p class="mb-0">3 of 45 Photos</p>
    </div>
    <swiper
        :loop="true"
        :navigation="true"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        :hideOnClick="true"
        class="mySwiper2"
    >
      <swiper-slide>
        <div class="shadow">
          <img :src="property.image"/>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="shadow">
          <img src="/vearProject/images/properties/property-page/img-1.jpeg"/>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="shadow">
          <img src="/vearProject/images/properties/property-page/img-2.jpeg"/>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="shadow">
          <img src="/vearProject/images/properties/property-page/img-3.jpeg"/>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="shadow">
          <img src="/vearProject/images/properties/property-page/img-4.jpeg"/>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="shadow">
          <img src="/vearProject/images/properties/property-page/img-5.jpeg"/>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="shadow">
          <img src="/vearProject/images/properties/property-page/img-6.jpeg"/>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="shadow">
          <img src="/vearProject/images/properties/property-page/img-7.jpeg"/>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="shadow">
          <img src="/vearProject/images/properties/property-page/img-8.jpeg"/>
        </div>
      </swiper-slide>
    </swiper>
    <div style=" mask-image: linear-gradient(90deg, rgba(255,255,255,1) 87%, rgba(255,255,255,0) 98%);
">
      <swiper
          @swiper="setThumbsSwiper"
          :spaceBetween="8"
          :slidesPerView="8"
          :watchSlidesProgress="true"
          :modules="modules"
          class="mySwiper"
      >
        <swiper-slide style="display: none">
          <img :src="property.image"/>
        </swiper-slide>
        <swiper-slide>
          <img src="/vearProject/images/properties/property-page/img-1.jpeg"/>
        </swiper-slide>
        <swiper-slide>
          <img src="/vearProject/images/properties/property-page/img-2.jpeg"/>
        </swiper-slide>
        <swiper-slide>
          <img src="/vearProject/images/properties/property-page/img-3.jpeg"/>
        </swiper-slide>
        <swiper-slide>
          <img src="/vearProject/images/properties/property-page/img-4.jpeg"/>
        </swiper-slide>
        <swiper-slide>
          <img src="/vearProject/images/properties/property-page/img-5.jpeg"/>
        </swiper-slide>
        <swiper-slide>
          <img src="/vearProject/images/properties/property-page/img-6.jpeg"/>
        </swiper-slide>
        <swiper-slide>
          <img src="/vearProject/images/properties/property-page/img-7.jpeg"/>
        </swiper-slide>
        <swiper-slide>
          <img src="/vearProject/images/properties/property-page/img-8.jpeg"/>
        </swiper-slide>
      </swiper>
    </div>

  </div>

</template>
<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ['property'],
  data() {
    return {
      thumbsSwiper: null,
      modules: [FreeMode, Navigation, Thumbs]
    }
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    }
  }
}
</script>

<style lang="scss">

.gallery {
  height: 495px;
  width: 770px;

  .property-type {
    background: rgba(255, 255, 255, 0.8);
    width: 168px;
    padding: 14.5px 0;
    justify-content: center;
    gap: 8px;
    font-family: SF Pro Display;
    font-size: 16px;
    font-weight: 600;
    line-height: 19.09px;
    letter-spacing: 0.015em;
    text-align: left;
    color: #171719;
    bottom: 124px;
    left: 24px;
    border-radius: 24px;

    i {
      font-size: 16px;
      height: 16px;
    }

    z-index: 999;
  }
}

.images-count {
  font-family: SF Pro Display;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.09px;
  letter-spacing: 0.015em;
  z-index: 999;
  bottom: 137px;
  right: 24px;
  color: #FFFFFF;
  text-shadow: 0px 2px 2px #0000008F;
}

.shadow {
  mix-blend-mode: multiply;
  height: 402px;
  width: 770px;
  border-radius: 13px;

  &:after {
    height: 400px !important;
    content: '';
    border-radius: 13px;
    position: absolute;
    top: -3px;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.28) 0%, rgba(255, 255, 255, 0) 23%, rgba(255, 255, 255, 0) 66%, rgba(0, 0, 0, 0.28) 100%);
    z-index: 1;
  }
}

.swiper-wrapper {
  border-radius: 13px;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 13px;

  &.mySwiper2 {
    height: 80%;
    width: 100%;
    border: 2px solid transparent;

    &:hover {
      border: 2px solid #257CFF;
    }

    .swiper-slide {
      border: none;
      margin-right: 0;
    }
  }

  &-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid transparent;
    border-radius: 13px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 13px;
    }
  }

  &.mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 16px 0;

    .swiper-slide {
      width: 88px !important;
      height: 88px;
      border-radius: 13px;
      border: 2px solid transparent;
      cursor: pointer;
    }

    .swiper-slide-thumb-active {
      opacity: 1;
      border: 2px solid #257CFF;
      background-color: #257CFF;

      img {
        opacity: 0.7;
      }
    }
  }

  .swiper-button-next, .swiper-button-prev {
    display: none;
  }

  &:hover {
    .swiper-button-next, .swiper-button-prev {
      display: flex;
      background: #282D3C66;
      width: 40px;
      height: 40px;
      border-radius: 100%;

      &:after {
        font-size: 16px;
        color: white;
      }
    }

    .swiper-button-next {
      right: 32px;
    }

    .swiper-button-prev {
      left: 32px;
    }
  }
}

</style>
