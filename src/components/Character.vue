<script setup lang="ts">
import { shallowRef, watch } from "vue";
import { useGLTF, useAnimations } from "@tresjs/cientos";
import gsap from "gsap";

const { scene, animations } = await useGLTF("t2.glb", {
  draco: true,
});
scene.traverse((node) => {
  node.castShadow = true;
});

const { mixer } = useAnimations(animations, scene);

const animationAction = mixer.clipAction(animations[24]);
animationAction.play();
animationAction.paused = true;

const characterRef = shallowRef();
const sections = 3;
const characterPosTimeline = gsap.timeline({
  defaults: { ease: "none" },
});
const characterRotTimeline = gsap.timeline({
  defaults: { ease: "none" },
});

const props = defineProps(["seekValue"]);

watch(characterRef, () => {
  characterPosTimeline.set(characterRef.value.position, {
    x: -0.43,
    y: 0.166,
    z: 1.41,
  });
  characterPosTimeline.to(characterRef.value.position, {
    x: 0.18,
    y: 0.166,
    z: 1.11,
    duration: 1 / sections / 2,
  });
  characterPosTimeline.to(characterRef.value.position, {
    x: 0.94,
    y: 0.166,
    z: 1.23,
    duration: 1 / sections / 2,
  });
  characterPosTimeline.to(characterRef.value.position, {
    x: 0.44,
    y: 0.166,
    z: 0.58,
    duration: 1 / sections,
  });
  characterPosTimeline.to(characterRef.value.position, {
    x: 0.07,
    y: 0.166,
    z: 0.07,
    duration: 1 / sections,
  });

  characterPosTimeline.pause();
});

watch(characterRef, () => {
  characterRotTimeline.set(characterRef.value.rotation, {
    x: 0,
    y: 0,
    z: 0,
  });
  characterRotTimeline.to(characterRef.value.rotation, {
    x: 0,
    y: 1.93,
    z: 0,
    duration: 1 / sections / 2,
  });
  characterRotTimeline.to(characterRef.value.rotation, {
    x: 0,
    y: 0.8,
    z: 0,
    duration: 1 / sections / 2,
  });
  characterRotTimeline.to(characterRef.value.rotation, {
    x: 0,
    y: 2.59,
    z: 0,
    duration: 1 / sections,
  });
  characterRotTimeline.to(characterRef.value.rotation, {
    x: 0,
    y: 4.3,
    z: 0,
    duration: 1 / sections,
  });

  characterRotTimeline.pause();

  animate(props.seekValue);
});

watch(props, (v) => {
  animate(v.seekValue);
});

function animate(seek: number) {
  characterPosTimeline.seek(seek);
  characterRotTimeline.seek(seek);

  const duration = animationAction.getClip().duration;
  const targetTime = duration * ((seek * sections) % 1);

  animationAction.time = targetTime;
  mixer.update(0);
}
</script>

<template>
  <primitive
    :object="scene"
    ref="characterRef"
    :position="[-0.43, 0.166, 1.41]"
    castShadow
  />
</template>

<style scoped></style>
