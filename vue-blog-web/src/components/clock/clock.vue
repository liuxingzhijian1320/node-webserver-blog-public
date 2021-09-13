<template>
  <div class="clock">
    <div class="memory" :class="`memory-${index+1} angle-${index+1}`"
      v-for="(item,index) in new Array(60)" :key="index">
    </div>

    <div class="needle" id="hours" ref="hours"></div>
    <div class="needle" id="minutes" ref="minutes"></div>
    <div class="needle" id="seconds" ref="seconds"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: {
        dt: new Date(),
        hours: {
          el: document.getElementById("hours"),
          val: 0
        },

        minutes: {
          el: document.getElementById("minutes"),
          val: 0
        },

        seconds: {
          el: document.getElementById("seconds"),
          val: 0
        },

        renderTime: 1000
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      // setInterval(() => {
      //   this.updateTime();
      // }, this.date.renderTime);
      // this.updateTime();
      // this.date.seconds.el.addEventListener("transitionend", () => {
      //   this.date.hours.el.classList.remove("moving");
      //   this.date.minutes.el.classList.remove("moving");
      //   this.date.seconds.el.classList.remove("moving");
      //   if (this.date.hours.val == 360) {
      //     this.date.hours.el.style.transform =
      //       "translate(-50%, -75%) rotate(0deg)";
      //   }
      //   if (this.date.minutes.val == 360) {
      //     this.date.minutes.el.style.transform =
      //       "translate(-50%, -75%) rotate(0deg)";
      //   }
      //   if (this.date.seconds.val == 360) {
      //     this.date.seconds.el.style.transform =
      //       "translate(-50%, -75%) rotate(0deg)";
      //   }
      // });
    });
  },
  methods: {
    updateTime() {
      let hour = this.date.dt.getHours();
      let minute = this.date.dt.getMinutes();
      let second = this.date.dt.getSeconds();

      this.date.hours.el.classList.add("moving");
      this.date.minutes.el.classList.add("moving");
      this.date.seconds.el.classList.add("moving");

      this.date.hours.val =
        hour == 0 && this.date.hours.val == 59 * 6 * 5 ? 360 : hour * 6 * 5;
      this.date.minutes.val =
        minute == 0 && this.date.minutes.val == 59 * 6 ? 360 : minute * 6;
      this.date.seconds.val =
        second == 0 && this.date.seconds.val == 59 * 6 ? 360 : second * 6;

      this.date.hours.el.style.transform = `translate(-50%, -75%) rotate(${this.date.hours.val}deg)`;
      this.date.minutes.el.style.transform = `translate(-50%, -75%) rotate(${this.date.minutes.val}deg)`;
      this.date.seconds.el.style.transform = `translate(-50%, -75%) rotate(${this.date.seconds.val}deg)`;

      this.date.dt.setSeconds(second + 1);
    }
  }
};
</script>

<style scoped lang="scss">
.clock {
  position: relative;
  width: 200px;
  height: 200px;
  border: 1px solid #242424;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
}

.memory {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center;

  @for $i from 1 through 60 {
    $angle: ($i * 6) + deg;

    @if $i % 6 == 0 {
      &.memory-#{$i} {
        width: 2%;
        height: 8%;
        background-color: #424242;
        transform: translate(-50%, -50%) rotate($angle) translateY(-520%);
      }
    } @else {
      &.memory-#{$i} {
        width: 1%;
        height: 3%;
        background-color: #949494;
        transform: translate(-50%, -50%) rotate($angle) translateY(-1461%);
      }
    }
  }
}

.needle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center;
}
.needle#hours {
  width: 4%;
  height: 30%;
  background-color: #1f1f1f;
  transform: translate(-50%, -75%);
  transform-origin: center 75%;
}
.needle#hours.moving {
  transition: transform 150ms ease-out;
}
.needle#hours:after {
  position: absolute;
  top: 75%;
  left: 50%;
  display: block;
  box-sizing: border-box;
  max-width: 4vh;
  max-height: 4vh;
  width: 4vw;
  height: 4vw;
  border-radius: 50%;
  background-color: #1f1f1f;
  content: "";
  transform: translate(-50%, -50%);
}
.needle#minutes {
  width: 2%;
  height: 45%;
  background-color: #1f1f1f;
  transform: translate(-50%, -75%);
  transform-origin: center 75%;
}
.needle#minutes.moving {
  transition: transform 150ms ease-out;
}
.needle#minutes:after {
  position: absolute;
  top: 75%;
  left: 50%;
  display: block;
  box-sizing: border-box;
  max-width: 4vh;
  max-height: 4vh;
  width: 4vw;
  height: 4vw;
  border-radius: 50%;
  background-color: #1f1f1f;
  content: "";
  transform: translate(-50%, -50%);
}
.needle#seconds {
  width: 1%;
  height: 50%;
  background-color: #cb2f2f;
  transform: translate(-50%, -75%);
  transform-origin: center 75%;
}
.needle#seconds.moving {
  transition: transform 150ms ease-out;
}
.needle#seconds:after {
  position: absolute;
  top: 75%;
  left: 50%;
  display: block;
  box-sizing: border-box;
  max-width: 2.5vh;
  max-height: 2.5vh;
  width: 2.5vw;
  height: 2.5vw;
  border-radius: 50%;
  background-color: #cb2f2f;
  content: "";
  transform: translate(-50%, -50%);
}
</style>
