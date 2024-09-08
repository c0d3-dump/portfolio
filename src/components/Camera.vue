<script setup lang="ts">
import { shallowRef, watch } from "vue";
import gsap from "gsap";

const camRef = shallowRef();

const sections = 4;
const camPosTimeline = gsap.timeline({ defaults: { ease: "expo.inOut" } });
const camRotTimeline = gsap.timeline({ defaults: { ease: "expo.inOut" } });

watch(camRef, () => {
  // main page
  camPosTimeline.set(camRef.value.position, {
    x: 0,
    y: 3,
    z: 4.5,
  });
  // main to project
  camPosTimeline.to(camRef.value.position, {
    x: 3.733,
    y: 1.599,
    z: 3.99,
    duration: 1 / sections,
  });
  // project to project
  camPosTimeline.to(camRef.value.position, {
    x: 3.733,
    y: 1.599,
    z: 3.99,
    duration: 1 / sections,
  });
  // project to ---
  camPosTimeline.to(camRef.value.position, {
    x: 1.779,
    y: 1.264,
    z: -1.596,
    duration: 1 / sections,
  });
  // --- to links
  camPosTimeline.to(camRef.value.position, {
    x: -2.492,
    y: 0.843,
    z: -0.814,
    duration: 1 / sections,
  });

  camPosTimeline.pause();
});

watch(camRef, () => {
  camRotTimeline.set(camRef.value.rotation, {
    x: -0.7013,
    y: -0.1682,
    z: -0.1404,
  });
  camRotTimeline.to(camRef.value.rotation, {
    x: -0.523,
    y: 0.665,
    z: 0.342,
    duration: 1 / sections,
  });
  camRotTimeline.to(camRef.value.rotation, {
    x: -0.523,
    y: 0.665,
    z: 0.342,
    duration: 1 / sections,
  });
  camRotTimeline.to(camRef.value.rotation, {
    x: -2.561,
    y: 0.457,
    z: 2.86,
    duration: 1 / sections,
  });
  camRotTimeline.to(camRef.value.rotation, {
    x: -2.574,
    y: -0.917,
    z: -2.673,
    duration: 1 / sections,
  });

  camRotTimeline.pause();
});

const props = defineProps(["seekValue"]);

watch(props, (v) => {
  camPosTimeline.seek(v.seekValue);
  camRotTimeline.seek(v.seekValue);
});
</script>

<template>
  <TresPerspectiveCamera
    ref="camRef"
    visible
    :position="[0, 3, 4.5]"
    :look-at="[1, -0.8, 0]"
  />
</template>

<style scoped></style>
