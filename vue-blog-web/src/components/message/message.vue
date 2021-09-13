<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          asa
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      time: 0,
      timer: null
    };
  },
  computed: {
    ...mapGetters({
      duration: "message/duration"
    })
  },
  methods: {
    action() {
      this.time = this.duration;
      this.timer = setInterval(() => {
        if (this.time <= 1) {
          clearInterval(this.timer);
          this.$store.commit("message/setStatus", false);
        }
        this.time -= 1;
      }, 1000);
    }
  },
  mounted() {
    this.action();
  }
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  top: 65px;
  right: 10px;
  z-index: 10000;
  .modal-wrapper {
    padding: 10px 15px;
    width: 250px;
    border-radius: 3px;
    background: #6bc30d;
    color: #fff;
    text-align: center;
    font-size: 16px;
    animation: slideRightToLeft 0.3s ease-in;
  }
  @keyframes slideRightToLeft {
    from {
      transform: translateX(400px);
    }
    to {
      transform: translateX(0px);
    }
  }
}
</style>
