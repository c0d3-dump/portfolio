<script setup lang="ts">
import { computed, ref } from "vue";
import { sendMessage } from "../supabase";

const items = [
  {
    time: "June 2022 - Sep 2024",
    title: "SDE-I (Argusoft)",
    description: "",
  },
  {
    time: "Sep 2024 - Present",
    title: "SDE-II (Argusoft)",
    description: "",
  },
];

const emailRef = ref("");
const messageRef = ref("");

const isDisabled = computed(() => !emailRef.value || !messageRef.value);

async function onSubmit() {
  const email = emailRef.value;
  const message = messageRef.value;

  emailRef.value = "";
  messageRef.value = "";

  await sendMessage(email, message);
}
</script>

<template>
  <ol
    class="border-s border-gray-200 absolute top-0 w-full md:w-1/2 lg:w-1/3 bg-black bg-opacity-20 p-3 rounded-tr-md"
  >
    <li class="mb-6 ms-4" v-for="item in items">
      <div
        class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-black"
      ></div>
      <time class="mb-1 text-xs font-semibold leading-none text-gray-50">{{
        item.time
      }}</time>
      <h3 class="text-base font-bold text-white">
        {{ item.title }}
      </h3>
      <p class="text-base font-normal text-gray-100">
        {{ item.description }}
      </p>
    </li>

    <li class="ms-4">
      <div
        class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-black"
      ></div>
      <div class="text-white font-extrabold text-lg mb-2">Contact me!</div>
      <div class="pointer-events-auto">
        <input
          placeholder="Email"
          type="email"
          class="w-full rounded-lg border-gray-200 p-3 mb-2 bg-white bg-opacity-80 font-semibold text-sm"
          v-model="emailRef"
        />

        <textarea
          placeholder="Message"
          type="text"
          rows="4"
          class="w-full rounded-lg border-gray-200 p-3 text-sm mb-2 bg-white bg-opacity-80"
          v-model="messageRef"
        />

        <button
          type="button"
          class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white md:w-auto disabled:bg-gray-600 disabled:text-gray-400"
          @click="onSubmit"
          :disabled="isDisabled"
        >
          Submit
        </button>
      </div>
    </li>
  </ol>
</template>
