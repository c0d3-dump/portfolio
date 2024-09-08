<script setup lang="ts">
const emit = defineEmits(["scrollToPosition"]);
const props = defineProps(["menuOptions", "currentPage"]);

function onMenuClicked(page: string) {
  const menu = props.menuOptions.find(
    (menuOption: any) => menuOption.name === page
  );
  emit("scrollToPosition", menu?.scrollPos);
}
</script>

<template>
  <div class="flex absolute w-full justify-end mt-4 z-50">
    <div class="hidden sm:block">
      <nav class="flex gap-4 pointer-events-auto">
        <a
          v-for="option in menuOptions"
          :class="
            props.currentPage.valueOf() === '#' + option.name
              ? 'cursor-pointer shrink-0 rounded-lg bg-white p-2 text-sm font-extrabold text-black'
              : 'cursor-pointer shrink-0 rounded-lg p-2 text-sm font-bold text-white hover:bg-sky-100 hover:text-black'
          "
          @click="onMenuClicked(option.name)"
        >
          {{ option.name }}
        </a>
      </nav>
    </div>
  </div>
</template>
