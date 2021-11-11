<template>
  <div class="container">
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
    <div class="circle circle-3"></div>
    <div class="circle circle-4"></div>
    <div class="circle circle-5"></div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  mounted() {
    document.querySelector('body').style.overflow = 'hidden';
  },
  beforeDestroy() {
    document.querySelector('body').style.overflow = null;
  }
};
</script>

<style scoped lang="scss">
$color: #696969, #797979, #b3b3b3, #d3d3d3, #e0e0e0;

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgb(248, 248, 248);
  overflow: hidden;
  z-index: 999;
  position: fixed;
}

$circle-size: 20px;
$circle-margin: 7px;

.circle {
  width: $circle-size;
  height: $circle-size;
  border-radius: 50%;
  margin: $circle-margin;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: bounce 500ms alternate infinite cubic-bezier(0.2, 0.65, 0.6, 1);

  &:before {
    content: '';
    width: $circle-size;
    height: $circle-size;
    border-radius: 50%;
    opacity: 0.7;
    animation: scale 1s infinite cubic-bezier(0, 0, 0.5, 1);
  }
}

@for $i from 1 through 5 {
  .circle-#{$i} {
    background-color: nth($color, $i);
    animation-delay: 100ms * $i;

    &:before {
      background-color: nth($color, $i);
      animation-delay: 100ms * $i;
    }
  }
}

@keyframes scale {
  0% {
    transform: scale(1);
  }
  50%,
  75% {
    transform: scale(2.5);
  }
  78%,
  100% {
    opacity: 0;
  }
}

@keyframes bounce {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-20px);
  }
}

/* #app {
  background-image: linear-gradient(
    to bottom right,
    #f1fffc 0%,
    #ebf3ff 40%,
    #f9ecff 60%,
    #ffecfb 100%
  );

  background-size: 200% 200%;
  animation: movingGradient 5s linear infinite alternate;
}

@keyframes movingGradient {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100%;
  }
} */
</style>
