<script setup lang="ts">
import { GLTFModel } from "@tresjs/cientos";
import { useTexture } from "@tresjs/core";
import { shallowRef, watch } from "vue";
import gsap from "gsap";
import { MirroredRepeatWrapping, Vector2 } from "three";

const githubTexture = await useTexture({
  map: "github-logo.png",
});

const linkedinTexture = await useTexture({
  map: "linkedin-logo.png",
});

const waterTexture = await useTexture({
  map: "water-texture.jpg",
});

waterTexture.map.repeat = new Vector2(100, 100);
waterTexture.map.wrapS = MirroredRepeatWrapping;
waterTexture.map.wrapT = MirroredRepeatWrapping;

const linkedinRef = shallowRef();
const githubRef = shallowRef();

let linkedinAnim: gsap.core.Tween;
let githubAnim: gsap.core.Tween;

watch(linkedinRef, () => {
  linkedinAnim = gsap.to(linkedinRef.value.position, {
    y: 0.18,
    duration: 0.1,
  });
  linkedinAnim.pause();
});

watch(githubRef, () => {
  githubAnim = gsap.to(githubRef.value.position, {
    x: -1.38,
    duration: 0.1,
  });
  githubAnim.pause();
});

function logoUp(name: string) {
  if (name === "linkedin") {
    linkedinAnim.play();
  } else if (name === "github") {
    githubAnim.play();
  }
}

function logoDown(name: string) {
  if (name === "linkedin") {
    linkedinAnim.reverse();
  } else if (name === "github") {
    githubAnim.reverse();
  }
}

function openLink(name: string) {
  if (name === "linkedin") {
    window.open(
      "https://www.linkedin.com/in/bhavin-sojitra-6a904a28b",
      "_blank"
    );
  } else if (name === "github") {
    window.open("https://github.com/c0d3-dump", "_blank");
  }
}
</script>

<template>
  <TresMesh
    ref="blobRef"
    :rotation="[-Math.PI / 2, 0, 0]"
    :position="[0, -0.1, 0]"
  >
    <TresPlaneGeometry :args="[1000, 1000, 1000, 1000]" />
    <TresMeshStandardMaterial :map="waterTexture.map" />
  </TresMesh>

  <GLTFModel path="t1.glb" draco receive-shadow cast-shadow />

  <!-- github -->
  <TresMesh
    ref="githubRef"
    :position="[-1.36, 0.435, 0.51]"
    :rotation="[0, 0, -0.53]"
    @click="(event) => openLink('github')"
    @pointer-enter="(event) => logoUp('github')"
    @pointer-leave="(event) => logoDown('github')"
  >
    <TresBoxGeometry :args="[0.01, 0.2, 0.2]" />
    <TresMeshStandardMaterial :map="githubTexture.map" />
  </TresMesh>

  <!-- linkedin -->
  <TresMesh
    ref="linkedinRef"
    :position="[-1.58, 0.17, 0.06]"
    :rotation="[Math.PI, 0.76, -Math.PI / 2]"
    @click="(event) => openLink('linkedin')"
    @pointer-enter="(event) => logoUp('linkedin')"
    @pointer-leave="(event) => logoDown('linkedin')"
  >
    <TresBoxGeometry :args="[0.01, 0.2, 0.2]" />
    <TresMeshStandardMaterial :map="linkedinTexture.map" />
  </TresMesh>
</template>

<style scoped></style>
