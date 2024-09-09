<script setup lang="ts">
import { ref, shallowRef, watch } from "vue";
import gsap from "gsap";
import Technologies from "./components/Technologies.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";

const baseRef = shallowRef();
const props = defineProps(["seekValue"]);

const sections = 3;
const textContentTimeline = gsap.timeline({ defaults: { ease: "expo.inOut" } });

watch(baseRef, () => {
  textContentTimeline.to("#first", {
    opacity: 0,
    display: "none",
    ease: "expo.in",
    duration: 1 / sections,
  });

  textContentTimeline.set("#second", {
    display: "block",
  });

  textContentTimeline.to("#second", {
    opacity: 0,
    display: "none",
    ease: "expo.in",
    duration: 1 / sections,
  });

  textContentTimeline.set("#third", {
    display: "block",
  });

  textContentTimeline.to("#third", {
    opacity: 0,
    display: "none",
    ease: "expo.in",
    duration: 1 / sections,
  });

  textContentTimeline.set("#fourth", {
    display: "block",
  });

  textContentTimeline.pause();
});

watch(props, (v) => {
  textContentTimeline.seek(v.seekValue);
});
</script>

<template>
  <div
    class="fixed container pointer-events-none left-1/2 -translate-x-1/2"
    ref="baseRef"
  >
    <div id="first" class="mt-24 text-center pointer-events-auto">
      <span class="font-medium text-2xl text-white">Hi, I am Bhavin 👋</span>
      <br />
      <span class="font-bold text-4xl text-white"
        >Full Stack Developer & Tech Enthusiast</span
      >

      <div class="ctr">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
      </div>
    </div>

    <div id="second" class="hidden w-full h-screen pointer-events-auto">
      <Projects />
    </div>

    <div id="third" class="hidden w-full h-full pointer-events-auto">
      <Technologies />
    </div>

    <div id="fourth" class="hidden h-screen">
      <Experience />
    </div>
  </div>
</template>

<style scoped lang="scss">
$base: 0.6rem;

.ctr {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.chevron {
  position: absolute;
  width: $base * 3.5;
  height: $base * 0.8;
  opacity: 0;
  transform: scale(0.3);
  animation: move-chevron 3s ease-out infinite;
}

.chevron:first-child {
  animation: move-chevron 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move-chevron 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
  content: "";
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  background: #ffffff;
}

.chevron:before {
  left: 0;
  transform: skewY(30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skewY(-30deg);
}

@keyframes move-chevron {
  25% {
    opacity: 1;
  }
  33.3% {
    opacity: 1;
    transform: translateY($base * 3.8);
  }
  66.6% {
    opacity: 1;
    transform: translateY($base * 5.2);
  }
  100% {
    opacity: 0;
    transform: translateY($base * 8) scale(0.5);
  }
}
</style>
