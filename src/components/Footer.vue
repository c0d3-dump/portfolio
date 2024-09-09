<script setup lang="ts">
import { watch } from "fs";
import { computed } from "vue";

const emit = defineEmits(["scrollToPosition"]);
const props = defineProps(["seekValue"]);

const menuOptions = [
  {
    name: "Home",
    scrollPos: 0,
  },
  {
    name: "Projects",
    scrollPos: 0.334,
  },
  {
    name: "Technologies",
    scrollPos: 0.667,
  },
  {
    name: "Contact",
    scrollPos: 1,
  },
];

const currentPage = computed(() => {
  const options = menuOptions.filter(
    (option) => option.scrollPos <= props.seekValue
  );
  return options.length ? options.map((o) => o.name) : ["Home"];
});

function onMenuClicked(page: string) {
  const menu = menuOptions.find((menuOption: any) => menuOption.name === page);
  emit("scrollToPosition", menu?.scrollPos);
}
</script>

<template>
  <div class="fixed w-full bottom-0 z-50">
    <div class="hidden sm:block mx-8 my-4">
      <nav class="flex justify-between align-middle -mb-5">
        <div v-for="option in menuOptions" class="block">
          <span
            class="text-white font-semibold text-md absolute -top-3 w-[114px] text-center -translate-x-[41px]"
          >
            {{ option.name }}
          </span>
          <button
            class="w-8 h-8 rounded-full mx-auto hover:bg-gray-300"
            :class="
              currentPage.includes(option.name) ? 'bg-white' : 'bg-gray-800'
            "
            @click="onMenuClicked(option.name)"
          ></button>
        </div>
      </nav>

      <div class="bg-gray-200 rounded-full h-2.5 dark:bg-gray-800">
        <div
          class="bg-white h-2.5 rounded-full"
          :style="'width: ' + props.seekValue * 100 + '%'"
        ></div>
      </div>
    </div>
  </div>
</template>
