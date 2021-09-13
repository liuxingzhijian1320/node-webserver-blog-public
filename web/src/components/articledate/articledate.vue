<template>
  <div class="date">
    <div class="day lg">{{day}}</div>
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
  name: "articledate",
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
@import "../../assets/styles/common.scss";

.date {
  display: flex;
  width: 80px;
  color: $color-placeholder;
  font-size: 13px;
  justify-items: self-end;
  .day {
    margin-right: 3px;
    font-size: 42px;
  }
  .month {
    display: block;
    text-transform: uppercase;
  }
}

@media screen and (max-width: 750px) {
  .date {
    font-size: 12px;
    justify-content: flex-end;
    width: 70px;
    .day {
      font-size: 26px;
    }
  }
}
</style>
