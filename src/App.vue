<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { TresCanvas } from "@tresjs/core";
import { ref, shallowRef, watch } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "./components/Scene.vue";
import Character from "./components/Character.vue";
import Camera from "./components/Camera.vue";
import TextContent from "./TextContent.vue";
import Footer from "./components/Footer.vue";

gsap.registerPlugin(ScrollTrigger);

const lightRef = shallowRef();
const scrollerRef = shallowRef();

watch(lightRef, () => {
  lightRef.value.shadow.bias = -0.00001;
  lightRef.value.shadow.normalBias = 0.01;
  lightRef.value.shadow.mapSize.width = 1024 * 2;
  lightRef.value.shadow.mapSize.height = 1024 * 2;
});

let scrollTrigger: globalThis.ScrollTrigger;
const seekValue = ref(0);

watch(scrollerRef, () => {
  scrollTrigger = ScrollTrigger.create({
    trigger: "#scroller",
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
      const progress = Number(self.progress.toPrecision(3));
      seekValue.value = progress;
    },
  });
});

function scrollToPosition(position: number) {
  scrollTrigger.scroller.scroll({
    top: scrollTrigger.end * position,
    behavior: "smooth",
  });
}
</script>

<template>
  <div id="scroller" ref="scrollerRef">
    <TresCanvas
      clear-color="#efd856"
      window-size
      preset="realistic"
      power-preference="high-performance"
      alpha
      depth
    >
      <Camera :seek-value="seekValue.valueOf()" />

      <Suspense>
        <Scene />
      </Suspense>

      <Suspense>
        <Character :seek-value="seekValue.valueOf()" />
      </Suspense>

      <TresPointLight
        ref="lightRef"
        :position="[3, 3, 3]"
        intentity="1"
        color="#FFDF22"
        decay="1"
        cast-shadow
      />

      <TresAmbientLight :intensity="0.2" />
    </TresCanvas>

    <Footer :seek-value="seekValue" @scroll-to-position="scrollToPosition" />

    <TextContent
      :seek-value="seekValue.valueOf()"
      @scroll-to-position="(pos) => scrollToPosition(pos)"
    />
  </div>
</template>

<style scoped>
#scroller {
  height: 300%;
}
</style>
