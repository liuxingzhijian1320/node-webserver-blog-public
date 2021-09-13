
<style lang="scss" scoped>
@import "https://fonts.googleapis.com/css?family=Rajdhani:700";
@import "src/assets/styles/common.scss";

h1 {
  background: url(http://html5book.ru/wp-content/uploads/2016/08/bubbles.png)
    repeat #011f42;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 40px auto;
  text-align: center;
  text-shadow: 2px 2px 2px #fff;
  font-weight: 900;
  font-size: 50px;
  font-family: "Rajdhani", sans-serif;
  -webkit-animation: background 12s infinite linear;
  animation: background 12s infinite linear;

  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
}

@keyframes background {
  from {
    background-position: 0 0%;
  }
  to {
    background-position: 0 -300px;
  }
}
h3 {
  margin-top: 70px;
  color: #fff;
  text-align: center;
}
.span {
  display: inline-block;
  font-size: 24px;
  @for $i from 0 through 4 {
    $time: ($i * 100+1000) + ms;
    &.animation-#{$i} {
      animation: colorAnimation#{$i} 4s ease infinite;
      animation-delay: $time;
    }
    @keyframes colorAnimation#{$i} {
      0% {
        transform: matrix(0, 0, 0, 0, 0, 0);
      }
      1.666667% {
        transform: matrix(0.19514, 0, 0, 0.19514, 0, -3.8179);
      }
      3.333333% {
        transform: matrix(0.48061, 0, 0, 0.48061, 0, -16.89184);
      }
      5% {
        transform: matrix(0.78868, 0, 0, 0.78868, 0, -35.82897);
      }
      6.666667% {
        transform: matrix(1.06298, 0, 0, 1.06298, 0, -54.24398);
      }
      8.333333% {
        transform: matrix(1.26541, 0, 0, 1.26541, 0, -67.42532);
      }
      10% {
        transform: matrix(1.37835, 0, 0, 1.37835, 0, -73.79667);
      }
      11.666667% {
        transform: matrix(1.40302, 0, 0, 1.40302, 0, -74.15221);
      }
      13.333333% {
        opacity: 1;
        transform: matrix(1.35507, 0, 0, 1.35507, 0, -70.32855);
      }
      15% {
        transform: matrix(1.25874, 0, 0, 1.25874, 0, -64.25506);
      }
      16.666667% {
        transform: matrix(1.14088, 0, 0, 1.14088, 0, -57.53621);
      }
      18.333333% {
        transform: matrix(1.02595, 0, 0, 1.02595, 0, -51.35907);
      }
      20% {
        transform: matrix(0.93241, 0, 0, 0.93241, 0, -46.51039);
      }
      21.666667% {
        transform: matrix(0.87106, 0, 0, 0.87106, 0, -43.40452);
      }
      23.333333% {
        transform: matrix(0.84491, 0, 0, 0.84491, 0, -42.11433);
      }
      25% {
        transform: matrix(0.85043, 0, 0, 0.85043, 0, -42.42524);
      }
      26.666667% {
        transform: matrix(0.87962, 0, 0, 0.87962, 0, -43.92027);
      }
      28.333333% {
        transform: matrix(0.92232, 0, 0, 0.92232, 0, -46.08478);
      }
      30% {
        transform: matrix(0.96839, 0, 0, 0.96839, 0, -48.40959);
      }
      31.666667% {
        transform: matrix(1.00942, 0, 0, 1.00942, 0, -50.47334);
      }
      33.333333% {
        transform: matrix(1.0397, 0, 0, 1.0397, 0, -51.99258);
      }
      35% {
        transform: matrix(1.05659, 0, 0, 1.05659, 0, -52.83794);
      }
      36.666667% {
        transform: matrix(1.06028, 0, 0, 1.06028, 0, -53.02083);
      }
      38.333333% {
        transform: matrix(1.05311, 0, 0, 1.05311, 0, -52.65993);
      }
      40% {
        transform: matrix(1.0387, 0, 0, 1.0387, 0, -51.93743);
      }
      41.666667% {
        transform: matrix(1.02107, 0, 0, 1.02107, 0, -51.05459);
      }
      43.333333% {
        transform: matrix(1.00388, 0, 0, 1.00388, 0, -50.19419);
      }
      45% {
        transform: matrix(0.98989, 0, 0, 0.98989, 0, -49.4943);
      }
      46.666667% {
        transform: matrix(0.98072, 0, 0, 0.98072, 0, -49.03539);
      }
      48.333333% {
        transform: matrix(0.9768, 0, 0, 0.9768, 0, -48.83983);
      }
      50% {
        transform: matrix(0.97763, 0, 0, 0.97763, 0, -48.88146);
      }
      51.666667% {
        transform: matrix(0.98199, 0, 0, 0.98199, 0, -49.09973);
      }
      53.333333% {
        transform: matrix(0.98838, 0, 0, 0.98838, 0, -49.41905);
      }
      55% {
        transform: matrix(0.99527, 0, 0, 0.99527, 0, -49.76363);
      }
      56.666667% {
        transform: matrix(1.00141, 0, 0, 1.00141, 0, -50.07044);
      }
      58.333333% {
        transform: matrix(1.00594, 0, 0, 1.00594, 0, -50.29687);
      }
      60% {
        transform: matrix(1.00846, 0, 0, 1.00846, 0, -50.4232);
      }
      61.666667% {
        transform: matrix(1.00902, 0, 0, 1.00902, 0, -50.4508);
      }
      63.333333% {
        transform: matrix(1.00794, 0, 0, 1.00794, 0, -50.39716);
      }
      65% {
        transform: matrix(1.00579, 0, 0, 1.00579, 0, -50.28941);
      }
      66.666667% {
        transform: matrix(1.00315, 0, 0, 1.00315, 0, -50.15758);
      }
      68.333333% {
        transform: matrix(1.00058, 0, 0, 1.00058, 0, -50.02902);
      }
      70% {
        transform: matrix(0.99849, 0, 0, 0.99849, 0, -49.9244);
      }
      71.666667% {
        transform: matrix(0.99712, 0, 0, 0.99712, 0, -49.85578);
      }
      73.333333% {
        transform: matrix(0.99653, 0, 0, 0.99653, 0, -49.82653);
      }
      75% {
        transform: matrix(0.99665, 0, 0, 0.99665, 0, -49.8327);
      }
      76.666667% {
        transform: matrix(0.99731, 0, 0, 0.99731, 0, -49.86535);
      }
      78.333333% {
        transform: matrix(0.99826, 0, 0, 0.99826, 0, -49.91311);
      }
      80% {
        transform: matrix(0.99929, 0, 0, 0.99929, 0, -49.96465);
      }
      81.666667% {
        transform: matrix(1.00021, 0, 0, 1.00021, 0, -50.01054);
      }
      83.333333% {
        transform: matrix(1.00089, 0, 0, 1.00089, 0, -50.0444);
      }
      85% {
        transform: matrix(1.00127, 0, 0, 1.00127, 0, -50.0633);
      }
      86.666667% {
        transform: matrix(1.00135, 0, 0, 1.00135, 0, -50.06743);
      }
      88.333333% {
        transform: matrix(1.00119, 0, 0, 1.00119, 0, -50.0594);
      }
      90% {
        transform: matrix(1.00087, 0, 0, 1.00087, 0, -50.04329);
      }
      91.666667% {
        transform: matrix(1.00047, 0, 0, 1.00047, 0, -50.02357);
      }
      93.333333% {
        transform: matrix(1.00009, 0, 0, 1.00009, 0, -50.00434);
      }
      95% {
        transform: matrix(0.99977, 0, 0, 0.99977, 0, -49.98869);
      }
      96.666667% {
        transform: matrix(0.99957, 0, 0, 0.99957, 0, -49.97843);
      }
      98.333333% {
        transform: matrix(0.99948, 0, 0, 0.99948, 0, -49.97405);
      }
      to {
        opacity: 1;
        transform: matrix(1, 0, 0, 1, 0, -50);
      }
    }
  }
}
.btn {
  display: flex;

  .github {
    .banner-btn {
      display: block;
      background-image: linear-gradient(
        90deg,
        rgba(78, 187, 170, 0.75),
        rgba(107, 195, 13, 0.75)
      );
      &:hover {
        background-image: $bg;
      }
    }
  }
}
.btn-val {
  margin: 0 10px;
  width: 240px;
  height: 50px;
  line-height: 50px;
  border-radius: 25px;
  color: #fff;
  text-align: center;
  font-size: 18px;
}
.article-val {
  border: 1px solid #fff;
}
</style>

<template>
  <div>
    <h1>
      <span v-for="(item,index) in title" :key="index">{{item}}</span>
    </h1>
    <h3>
      <span v-for="(item,index) in subtitle" :key="index" class="span"
        :class="activeFuc(item, index)">{{item}}</span>
    </h3>
    <div class="btn">
      <div class="github pointer">
        <a class="banner-btn btn-val"
          href="https://github.com/liuxingzhijian1320"
          target="_blank">Github</a>
      </div>
      <router-link tag="div" :to="{name:'article'}" class="article pointer">
        <div class="article-val btn-val">进入博客</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ["少", "壮", "不", "努", "力"],
      subtitle: ["长", "大", "开", "夏", "利"],
    };
  },
  methods: {
    activeFuc(item, index) {
      return `animation-${index}`;
    },
  },
};
</script>
