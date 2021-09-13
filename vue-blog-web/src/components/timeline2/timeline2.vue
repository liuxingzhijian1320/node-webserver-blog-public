<style lang="scss" scoped>
@import "src/assets/styles/common.scss";

.mo-loading {
  position: relative;
  bottom: -70px;
  left: 50%;
  z-index: 2;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-left: -30px;
  width: 60px;
  height: 60px;
  border: 3px solid #fff;
  border-radius: 50%;
  background-color: $primary-color;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from($assist-color),
    to($primary-color)
  );
  background-image: linear-gradient(180deg, $assist-color, $primary-color);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  color: #f5f5f5;
  font-size: 0;
  -webkit-animation: changeBg 1.2s ease-in-out 0s infinite;
  animation: changeBg 1.2s ease-in-out 0s infinite;
}

.hour,
.minute {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: #fff;
}

.hour {
  margin: -2px 0 -2px -25%;
  padding: 2px 0 2px 25%;
  border-radius: 2px 0 0 2px;
  -webkit-transform-origin: 100% 50%;
  transform-origin: 100% 50%;
  -webkit-animation: rotate 1.2s linear 0s infinite;
  animation: rotate 1.2s linear 0s infinite;
}
.minute {
  margin: -40% -1px 0;
  padding: 40% 1px 0;
  border-radius: 1px 1px 0 0;
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-animation: rotate 0.6s linear 0s infinite;
  animation: rotate 0.6s linear 0s infinite;
}
.mo-loading:after {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  margin: -4px 0 0 -4px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #fff;
  content: "";
}
@keyframes changeBg {
  0% {
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from($assist-color),
      to($primary-color)
    );
    background-image: linear-gradient(0deg, $assist-color, $primary-color);
  }

  25% {
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      from($assist-color),
      to($primary-color)
    );
    background-image: linear-gradient(90deg, $assist-color, $primary-color);
  }
  50% {
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from($assist-color),
      to($primary-color)
    );
    background-image: linear-gradient(180deg, $assist-color, $primary-color);
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  100% {
    background-image: -webkit-gradient(
      linear,
      right top,
      left top,
      from($assist-color),
      to($primary-color)
    );
    background-image: linear-gradient(270deg, $assist-color, $primary-color);
  }
}
@keyframes rotate {
  0% {
    transform: rotate(1turn);
  }
  100% {
    transform: rotate(0deg);
  }
}
.callback {
  position: absolute;
  top: 30px;
  right: 30px;
  display: inline-block;
  display: none;
  padding: 3px 5px;
  border-radius: 4px;
  background-image: $bg;
  color: #fff;
  font-size: 14px;
}

.c-li {
  display: flex;
  margin-bottom: 10px;
  .c-avatar {
    width: 40px;
    .img {
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
  .c-msg {
    flex: 1;
    .c-msg-nickname {
      font-size: 13px;
    }
    .c-msg-info {
      text-align: justify;
      font-size: 15px;
      line-height: 1.6;
    }
  }
}
</style>

<template>
  <section id="cd-timeline" class="cd-container">

    <div class="cd-timeline-block" v-for="(item,index) in list" :key="index">
      <div class="cd-timeline-img cd-picture">
        <img :src="item.avatar">
      </div>
      <div class="cd-timeline-content wow" :class="slideClass(index)">
        <h2 class="lg">昵称：{{item.username}}</h2>
        <p>内容：{{item.content}}</p>
        <span class="cd-date wow fadeIn"
          data-wow-delay="1s">{{item.createdAt | timeStampFormat}}</span>

        <!-- <div class="callback pointer" @click="juder">
          {{hasUserInfo?'回复':'登录以回复'}}
        </div> -->

        <div class="cd-comment-list">
          <ul>
            <li class="c-li" v-for="(code) in item.list" :key="code.id">
              <div class="c-avatar">
                <img class="img" :src="code.avatar">
              </div>
              <div class="c-msg">
                <div class="c-msg-nickname lg">{{code.username}}</div>
                <div class="c-msg-info">
                  {{code.content}}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- <callback @close="close" v-if="showCallback"></callback> -->

    <!-- <div class="mo-loading" id="timeline-loading">
      <span class="hour"></span>
      <span class="minute"></span>
    </div> -->

  </section>
</template>

<script>
import { mapGetters } from "vuex";
import callback from "src/components/callback/callback";
import "animate.css";
import { WOW } from "wowjs";
export default {
  name: "timeline2",
  components: {
    callback
  },
  props: ["list"],
  data() {
    return {
      myTimeLine: null,
      showCallback: false
    };
  },
  computed: {
    ...mapGetters({
      hasUserInfo: "login/hasUserInfo"
    })
  },
  methods: {
    slideClass(index) {
      if (index % 2 != 0) {
        return "slideInRight";
      } else {
        return "slideInLeft";
      }
    },
    wowInit() {
      let wow = new WOW({
        live: false
      });
      wow.init();
    },
    close() {
      this.showCallback = false;
    },
    juder() {
      if (this.hasUserInfo) {
        this.showCallback = true;
      } else {
        this.$store.commit("login/setShow", true);
      }
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.wowInit();
      }, 200);
    });
  }
};
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}

.cd-container {
  margin: 0 auto;
  max-width: 1170px;
  /* this class is used to give a max-width to the element it is applied to, and center it horizontally when it reaches that max-width */
  width: 90%;
}

.cd-container::after {
  display: table;
  clear: both;
  /* clearfix */
  content: "";
}

/* --------------------------------

Main components

-------------------------------- */

@media only screen and (min-width: 1170px) {
  header {
    height: 300px;
    line-height: 300px;
  }
  header h1 {
    font-size: 24px;
    font-size: 1.5rem;
  }
}

#cd-timeline {
  position: relative;
  margin-top: 2em;
  margin-bottom: 2em;
  padding: 2em 0;
}

#cd-timeline::before {
  position: absolute;
  top: 0;
  left: 18px;
  width: 4px;
  height: 100%;
  background: #d9ddd6;
  /* this is the vertical line */
  content: "";
}

@media only screen and (min-width: 1170px) {
  #cd-timeline {
    margin-top: 3em;
    margin-bottom: 3em;
  }
  #cd-timeline::before {
    left: 50%;
    margin-left: -2px;
  }
}

.cd-timeline-block {
  position: relative;
  margin: 2em 0;
}

.cd-timeline-block::after {
  display: table;
  clear: both;
  content: "";
}

.cd-timeline-block:first-child {
  margin-top: 0;
}

.cd-timeline-block:last-child {
  margin-bottom: 0;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-block {
    margin: 4em 0;
  }
  .cd-timeline-block:first-child {
    margin-top: 0;
  }
  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }
}

.cd-timeline-img {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #ffffff, inset 0 2px 0 rgba(0, 0, 0, 0.08),
    0 3px 0 4px rgba(0, 0, 0, 0.05);
}

.cd-timeline-img img {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-img {
    left: 50%;
    margin-left: -30px;
    width: 60px;
    height: 60px;
    /* Force Hardware Acceleration in WebKit */
    -webkit-transform: translateZ(0);

    -webkit-backface-visibility: hidden;
  }
  .cssanimations .cd-timeline-img.is-hidden {
    visibility: hidden;
  }
  .cssanimations .cd-timeline-img.bounce-in {
    visibility: visible;
    -webkit-animation: cd-bounce-1 0.6s;
    -moz-animation: cd-bounce-1 0.6s;
    animation: cd-bounce-1 0.6s;
  }
}

@-webkit-keyframes cd-bounce-1 {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.5);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale(1.2);
  }
  100% {
    -webkit-transform: scale(1);
  }
}

@-moz-keyframes cd-bounce-1 {
  0% {
    opacity: 0;
    -moz-transform: scale(0.5);
  }
  60% {
    opacity: 1;
    -moz-transform: scale(1.2);
  }
  100% {
    -moz-transform: scale(1);
  }
}

@keyframes cd-bounce-1 {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -o-transform: scale(0.5);
    transform: scale(0.5);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
  100% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
}

.cd-timeline-content {
  position: relative;
  margin-left: 60px;
  padding: 1em;
  border-radius: 0.25em;
  background: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  &:hover {
    .callback {
      display: block;
    }
  }
}

.cd-timeline-content::after {
  display: table;
  clear: both;
  content: "";
}

.cd-timeline-content h2 {
  color: #303e49;
}

.cd-timeline-content p,
.cd-timeline-content .cd-read-more,
.cd-timeline-content .cd-date {
  font-size: 13px;
  font-size: 0.8125rem;
}

.cd-timeline-content .cd-read-more,
.cd-timeline-content .cd-date {
  display: inline-block;
}

.cd-timeline-content p {
  margin: 1em 0;
  line-height: 1.6;
}

.cd-timeline-content .cd-read-more {
  float: right;
  padding: 0.8em 1em;
  border-radius: 0.25em;
  background: #acb7c0;
  color: #ffffff;
}

.no-touch .cd-timeline-content .cd-read-more:hover {
  background-color: #bac4cb;
}

.cd-timeline-content .cd-date {
  float: left;
  padding: 0.8em 0;
  opacity: 0.7;
}

.cd-timeline-content::before {
  position: absolute;
  top: 16px;
  right: 100%;
  width: 0;
  height: 0;
  border: 7px solid transparent;
  border-right: 7px solid #ffffff;
  content: "";
}

@media only screen and (min-width: 768px) {
  .cd-timeline-content h2 {
    font-size: 20px;
    font-size: 1.25rem;
  }
  .cd-timeline-content p {
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-content .cd-read-more,
  .cd-timeline-content .cd-date {
    font-size: 14px;
    font-size: 0.875rem;
  }
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-content {
    margin-left: 0;
    padding: 1.6em;
    width: 45%;
  }
  .cd-timeline-content::before {
    top: 24px;
    left: 100%;
    border-color: transparent;
    border-left-color: #ffffff;
  }
  .cd-timeline-content .cd-read-more {
    float: left;
  }
  .cd-timeline-content .cd-date {
    position: absolute;
    top: 6px;
    left: 122%;
    width: 100%;
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
    top: 24px;
    right: 100%;
    left: auto;
    border-color: transparent;
    border-right-color: #ffffff;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
    right: 122%;
    left: auto;
    text-align: right;
  }
  .cssanimations .cd-timeline-content.is-hidden {
    visibility: hidden;
  }
  .cssanimations .cd-timeline-content.bounce-in {
    visibility: visible;
    -webkit-animation: cd-bounce-2 0.6s;
    -moz-animation: cd-bounce-2 0.6s;
    animation: cd-bounce-2 0.6s;
  }
}

@media only screen and (min-width: 1170px) {
  /* inverse bounce effect on even content blocks */
  .cssanimations
    .cd-timeline-block:nth-child(even)
    .cd-timeline-content.bounce-in {
    -webkit-animation: cd-bounce-2-inverse 0.6s;
    -moz-animation: cd-bounce-2-inverse 0.6s;
    animation: cd-bounce-2-inverse 0.6s;
  }
}

@-webkit-keyframes cd-bounce-2 {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(20px);
  }
  100% {
    -webkit-transform: translateX(0);
  }
}

@-moz-keyframes cd-bounce-2 {
  0% {
    opacity: 0;
    -moz-transform: translateX(-100px);
  }
  60% {
    opacity: 1;
    -moz-transform: translateX(20px);
  }
  100% {
    -moz-transform: translateX(0);
  }
}

@keyframes cd-bounce-2 {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100px);
    -moz-transform: translateX(-100px);
    -ms-transform: translateX(-100px);
    -o-transform: translateX(-100px);
    transform: translateX(-100px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    -ms-transform: translateX(20px);
    -o-transform: translateX(20px);
    transform: translateX(20px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}

@-webkit-keyframes cd-bounce-2-inverse {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
  }
  100% {
    -webkit-transform: translateX(0);
  }
}

@-moz-keyframes cd-bounce-2-inverse {
  0% {
    opacity: 0;
    -moz-transform: translateX(100px);
  }
  60% {
    opacity: 1;
    -moz-transform: translateX(-20px);
  }
  100% {
    -moz-transform: translateX(0);
  }
}

@keyframes cd-bounce-2-inverse {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100px);
    -moz-transform: translateX(100px);
    -ms-transform: translateX(100px);
    -o-transform: translateX(100px);
    transform: translateX(100px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    -o-transform: translateX(-20px);
    transform: translateX(-20px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
</style>
