<template>
  <div class="wrapper pointer" @click="goindex">
    <svg width="100%" height="64">
      <text text-anchor="middle" x="50%" y="50%" class="text text-1">
        {{title}}
      </text>
      <text text-anchor="middle" x="50%" y="50%" class="text text-2">
        {{title}}
      </text>
      <text text-anchor="middle" x="50%" y="50%" class="text text-3">
        {{title}}
      </text>
      <text text-anchor="middle" x="50%" y="50%" class="text text-4">
        {{title}}
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Alex.张"
    };
  },
  methods: {
    goindex() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 12px;
  height: 100%;
  .text {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 40px;
    animation: stroke 6s infinite linear;

    fill: none;
    stroke-width: 2px;
    stroke-dasharray: 90 310;
  }

  .text-1 {
    text-shadow: 0 0 5px #4ebbaa;
    animation-delay: -1.5s;

    stroke: #4ebbaa;
  }

  .text-2 {
    text-shadow: 0 0 5px #6bc30d;
    animation-delay: -3s;

    stroke: #6bc30d;
  }

  .text-3 {
    text-shadow: 0 0 5px #1ab4e6;
    animation-delay: -4.5s;

    stroke: #1ab4e6;
  }

  .text-4 {
    text-shadow: 0 0 5px #0ec6c4;
    animation-delay: -6s;

    stroke: #0ec6c4;
  }
  @keyframes stroke {
    100% {
      stroke-dashoffset: -400;
    }
  }
}
</style>
