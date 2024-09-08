<script setup lang="ts">
import { ref, shallowRef, watch, defineEmits } from "vue";
import gsap from "gsap";
import Technologies from "./components/Technologies.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Header from "./components/Header.vue";

const baseRef = shallowRef();
const currentPage = ref("#Home");
const props = defineProps(["seekValue"]);
const emit = defineEmits(["scrollToPosition"]);

const menuOptions = [
  {
    name: "Home",
    scrollPos: 0,
  },
  {
    name: "Projects",
    scrollPos: 0.25,
  },
  {
    name: "Technologies",
    scrollPos: 0.75,
  },
  {
    name: "Contact",
    scrollPos: 1,
  },
];

const sections = 4;
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

  const projectLength = 2;

  for (let i = 0; i < projectLength; i++) {
    textContentTimeline.set(`.second-inner:nth-child(${i + 1})`, {
      opacity: 1,
    });

    textContentTimeline.to(`.second-inner:nth-child(${i + 1}) .side-image`, {
      rotate: "-3deg",
      translateX: "-64px",
      opacity: 0.7,
      ease: "expo.in",
      duration: 1 / sections / projectLength,
    });

    textContentTimeline.set(`.second-inner:nth-child(${i + 1})`, {
      opacity: 0,
    });
  }

  textContentTimeline.set("#second", {
    display: "none",
  });

  textContentTimeline.set("#third", {
    display: "block",
    opacity: 0,
  });

  textContentTimeline.to("#third", {
    opacity: 1,
    ease: "expo.in",
    duration: 1 / sections,
  });

  textContentTimeline.to("#third", {
    opacity: 0,
    ease: "expo.in",
    duration: 1 / sections,
  });

  textContentTimeline.set("#third", {
    display: "none",
  });

  textContentTimeline.set("#fourth", {
    display: "block",
  });

  textContentTimeline.pause();
});

watch(props, (v) => {
  textContentTimeline.seek(v.seekValue);

  menuOptions.forEach((menu) => {
    if (v.seekValue >= menu.scrollPos) {
      currentPage.value = "#" + menu.name;
    }
  });
});
</script>

<template>
  <div
    class="fixed container pointer-events-none left-1/2 -translate-x-1/2"
    ref="baseRef"
  >
    <Header
      :menu-options="menuOptions"
      :current-page="currentPage"
      @scroll-to-position="(pos) => emit('scrollToPosition', pos)"
    />

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

<style scoped>
#second .second-inner:nth-child(1) {
  opacity: 1;
}
</style>
