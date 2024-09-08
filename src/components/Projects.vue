<script setup lang="ts">
const projects = [
  {
    name: "Teester",
    img: "https://raw.githubusercontent.com/c0d3-dump/teester/main/examples/todo/screenshots/collection.png",
    description: `<p class='mx-2 md:ml-[11%]'>A powerful testing utility that bridges the realms of API and UI testing. Developed using React.js for the frontend and Go for the backend, teester empowers developers to ensure the reliability and functionality of their applications.</p>
      <ol class="mx-6 md:ml-[15%] text-sm font-bold mt-2 list-disc">
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
    description: `<p class='mx-2 md:ml-[11%]'>A cutting-edge Backend-as-a-Service (BaaS) solution crafted in Rust. With a focus on flexibility and innovation, miniBase empowers developers to streamline their projects through dynamic APIs generated from custom SQL queries, all presented through an intuitive Terminal User Interface (TUI).</p>
    <ol class="mx-6 md:ml-[15%] text-sm font-bold mt-2 list-disc">
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
  <div
    class="second-inner absolute w-3/5 h-3/5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block md:flex rounded-xl opacity-0"
    v-for="project in projects"
  >
    <div
      class="side-image w-full md:w-1/2 h-1/2 md:h-full -translate-x-[5%] -translate-y-[5%] z-10"
    >
      <img
        :src="project.img"
        :alt="project.name"
        class="w-full h-full object-cover object-left rounded-xl"
      />
    </div>
    <div
      class="w-full md:w-1/2 rounded-xl bg-white opacity-80 -ml-[6%] overflow-hidden"
    >
      <a
        class="block text-center text-3xl mt-4 mb-2 w-full text-purple-700 font-bold"
        :href="project.link"
        target="_blank"
        >{{ project.name }}</a
      >
      <span v-html="project.description"></span>
    </div>
  </div>
</template>
