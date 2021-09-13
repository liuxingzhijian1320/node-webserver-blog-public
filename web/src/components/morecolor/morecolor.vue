<template>
  <aside class="app-banner">
    <figure class="banner-shapes">
      <div class="banner-shapes__body">
        <div class="shape shape-block image1"></div>
        <div class="shape shape-diamond image2"></div>
        <div class="shape shape-leaf image3"></div>
        <div class="shape shape-small-circle"></div>
        <div class="shape shape-big-circle"></div>
        <div class="shape shape-triangle image4"></div>
      </div>
    </figure>
    <div class="app-viewport">
      <h2 class="banner-title">Hello World</h2>
      <p class="banner-slogan">生活，从敲的第一行代码开始 ~</p>
    </div>
  </aside>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.app-banner {
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  height: 300px;
  background-color: #141414;
  border-bottom: 1px solid #fff;
  overflow: hidden;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 80px 0;
  text-align: center;
  color: #fff;
  .app-viewport {
    position: relative;
    z-index: 1;
    padding-top: 20px;
    text-shadow: 0 4px 8px rgba(7, 17, 27, 0.4);
    letter-spacing: 5px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1320px;
    width: 100%;
  }
  .banner-title {
    font-size: 2.5rem;
    color: #fff;
    padding: 0;
    line-height: 1.2;
    font-weight: 500;
    margin: 0 0 20px;
  }
  .banner-slogan {
    color: #fff;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }
}
.banner-shapes {
  position: absolute;
  width: 3174px;
  height: 2624px;
  left: 50%;
  margin-left: -1587px;
  top: 50%;
  margin-top: -940px;
  z-index: 0;
  .banner-shapes__body {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background-position: center 24%;
    background-size: cover;
  }
  .shape {
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.6;
  }
  .image1 {
    -webkit-animation: spin2 202s linear infinite;
    animation: spin2 202s linear infinite;
  }
  .shape-block {
    position: absolute;
    width: 848px;
    height: 848px;
    left: 0;
    top: 0;
    border-radius: 4rem;
    background: -webkit-gradient(
      linear,
      left top,
      right bottom,
      from(#183de7),
      color-stop(80%, #48cffe)
    );
    background: linear-gradient(to bottom right, #183de7, #48cffe 80%);
    z-index: 2;
  }
  .image2 {
    -webkit-animation: spin1 481s linear infinite;
    animation: spin1 481s linear infinite;
  }
  .shape-diamond {
    position: absolute;
    width: 1213px;
    height: 1213px;
    left: 215px;
    top: 190px;
    border-radius: 4rem;
    background-color: #5322c0;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#5322c0),
      to(#ce71e5)
    );
    background: linear-gradient(180deg, #5322c0, #ce71e5);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    z-index: 3;
  }
  .image3 {
    -webkit-animation: spin1 502s linear infinite;
    animation: spin1 502s linear infinite;
  }
  .shape-leaf {
    position: absolute;
    width: 930px;
    height: 930px;
    left: 1060px;
    top: 450px;
    border-top-left-radius: 40rem;
    border-top-right-radius: 4rem;
    border-bottom-right-radius: 40rem;
    border-bottom-left-radius: 4rem;
    background: #0ff;
    z-index: 2;
  }
  .shape-small-circle {
    position: absolute;
    width: 864px;
    height: 864px;
    right: 478px;
    top: 336px;
    background-color: #0db54c;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#0db54c),
      color-stop(40%, #00697b)
    );
    background: linear-gradient(90deg, #0db54c, #00697b 40%);
    z-index: 0;
  }
  .shape-big-circle {
    position: absolute;
    width: 1664px;
    height: 1664px;
    right: 811px;
    top: 956px;
    border-radius: 50%;
    background-color: #0db54c;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#0db54c),
      color-stop(80%, #00697b)
    );
    background: linear-gradient(90deg, #0db54c, #00697b 80%);
    z-index: 0;
  }
  .image4 {
    -webkit-animation: spin1 824s linear infinite;
    animation: spin1 824s linear infinite;
  }
  .shape-triangle {
    position: absolute;
    width: 1374px;
    height: 1184px;
    right: 0;
    bottom: 445px;
    background-color: #f76b71;
    -webkit-clip-path: polygon(0 0, 50% 100%, 100% 0);
    clip-path: polygon(0 0, 50% 100%, 100% 0);
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#f76b71),
      to(#a41058)
    );
    background: linear-gradient(90deg, #f76b71, #a41058);
    z-index: 1;
  }
}
@keyframes spin1 {
  100% {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
}
@keyframes spin2 {
  100% {
    -webkit-transform: rotate(-1turn);
    transform: rotate(-1turn);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
}
</style>
