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

<style scoped></style>
