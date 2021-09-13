<template>
  <div class="date">
    <div class="day">{{day}}</div>
    <div class="other dc">
      <div>
        <div class="month">{{month}}</div>
        <div class="year">{{year}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["date"],
  data() {
    return {
      month: "",
      day: "",
      year: "",
    };
  },
  methods: {
    timeFormat() {
      let time = new Date(this.date);
      this.year = time.getFullYear();
      this.day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
      this.month = new Date("2018/1/13").toDateString().split(" ")[1];
    },
  },

  created() {
    this.timeFormat();
  },
};
</script>

<style lang="scss" scoped>
.date {
  display: flex;
  width: 160rpx;
  color: #b2b6b0;
  font-size: 26rpx;
  justify-items: self-end;
  .day {
    margin-right: 6rpx;
    font-size: 80rpx;
    background-image: linear-gradient(90deg, #4ebbaa, #6bc30d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .month {
    display: block;
    text-transform: uppercase;
  }
}
</style>
