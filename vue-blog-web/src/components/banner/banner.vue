<template>
  <div class="banner">
    <swiper ref="mySwiper" :options="swiperOption">
      <!-- slides -->
      <swiper-slide>
        <img class="img" src="http://ptqucw2wn.bkt.clouddn.com/1.jpg">
      </swiper-slide>
      <swiper-slide>
        <img class="img" src="http://ptqucw2wn.bkt.clouddn.com/2.jpeg">
      </swiper-slide>
      <swiper-slide>
        <img class="img" src="http://ptqucw2wn.bkt.clouddn.com/3.jpg">
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.banner {
  .img {
    width: 100%;
    height: 400px;
  }
}
</style>
