<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const projects = [
  {
    name: "Teester",
    img: "https://raw.githubusercontent.com/c0d3-dump/teester/main/examples/todo/screenshots/collection.png",
    description: `<p class='mx-2 text-white'>A powerful testing utility that bridges the realms of API and UI testing. Developed using React.js for the frontend and Go for the backend, teester empowers developers to ensure the reliability and functionality of their applications.</p>
      <ol class="mx-6 text-white text-sm font-bold  list-disc">
        <li>Git</li>
        <li>Databases</li>
        <li>Node.js</li>
        <li>API Testing</li>
        <li>React.js</li>
        <li>UI Testing</li> 
        <li>Go (Programming Language)</li> 
        <li>Test Automation</li> 
      </ol> 
      `,
    link: "https://github.com/c0d3-dump/teester",
  },
  {
    name: "Mini Base",
    img: "https://raw.githubusercontent.com/c0d3-dump/mini-base/main/examples/todo/screenshots/apis.png",
    description: `<p class='mx-2 text-white'>A cutting-edge Backend-as-a-Service (BaaS) solution crafted in Rust. With a focus on flexibility and innovation, miniBase empowers developers to streamline their projects through dynamic APIs generated from custom SQL queries, all presented through an intuitive Terminal User Interface (TUI).</p>
    <ol class="mx-6 text-white text-sm font-bold list-disc">
        <li>SQL</li>
        <li>mysql</li>
        <li>Rust (Programming Language)</li>
        <li>Git</li>
        <li>System Programming</li>
        <li>SQLite</li>
      </ol> 
      `,
    link: "https://github.com/c0d3-dump/mini-base",
  },
];
</script>

<template>
  <div class="m-auto h-[86%] w-full md:w-1/2">
    <Carousel :autoplay="5000" :wrap-around="true">
      <Slide v-for="project in projects" :key="project.name">
        <div class="bg-black bg-opacity-20 h-[86%] w-full block align-middle">
          <img
            :src="project.img"
            :alt="project.name"
            class="h-1/2 w-full object-cover object-left-top"
          />
          <a
            class="block text-center text-xl mt-2 mb-0 w-full text-blue-400 font-bold"
            :href="project.link"
            target="_blank"
          >
            {{ project.name }}
          </a>
          <div class="text-left p-2" v-html="project.description"></div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<style>
.carousel__prev,
.carousel__next {
  color: white !important;
}
</style>
