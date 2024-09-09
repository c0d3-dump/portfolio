<script setup lang="ts">
const items = [
  "/logos/vue.svg",
  "/logos/nuxt-icon.svg",
  "/logos/angular-icon.svg",
  "/logos/react.svg",
  "/logos/nodejs-icon.svg",
  "/logos/mongodb-icon.svg",
  "/logos/express.svg",
  "/logos/html-5.svg",
  "/logos/css-3.svg",
  "/logos/javascript.svg",
  "/logos/typescript-icon.svg",
  "/logos/git-icon.svg",
  "/logos/jira.svg",
  "/logos/jwt-icon.svg",
  "/logos/sendgrid-icon.svg",
  "/logos/mysql-icon.svg",
  "/logos/curl.svg",
  "/logos/rust.svg",
  "/logos/gopher.svg",
  "/logos/google-cloud.svg",
  "/logos/github-icon.svg",
  "/logos/godot-icon.svg",
  "/logos/docker-icon.svg",
  "/logos/nginx.svg",
  "/logos/markdown.svg",
  "/logos/redis.svg",
  "/logos/redux.svg",
  "/logos/auth0-icon.svg",
  "/logos/sequelize.svg",
  "/logos/bootstrap.svg",
  "/logos/nestjs.svg",
  "/logos/momentjs.svg",
  "/logos/faker.svg",
  "/logos/vercel-icon.svg",
  "/logos/visual-studio-code.svg",
  "/logos/tailwindcss-icon.svg",
  "/logos/socket.io.svg",
  "/logos/swagger.svg",
];
</script>

<template>
  <div class="base max-w-screen-lg h-full m-auto mt-16">
    <div class="grids">
      <div v-for="item in items" class="bg-white bg-opacity-80">
        <span class="hover:opacity-30 w-full h-full">
          <img
            :src="item"
            alt="img"
            class="object-center w-20 h-20 m-auto my-5"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.base {
  display: grid;
  grid-template-columns: repeat(auto-fit, calc(var(--s) + 2 * var(--mh)));
  justify-content: center;
  --s: 120px; /* size */
  --r: 1; /* ratio */

  /* clip-path */
  --h: 0.5;
  --v: 0.25;
  --hc: calc(clamp(0, var(--h), 0.5) * var(--s));
  --vc: calc(clamp(0, var(--v), 0.5) * var(--s) * var(--r));

  /*margin */
  --mv: 4px; /* vertical */
  --mh: calc(var(--mv) + (var(--s) - 2 * var(--hc)) / 2); /* horizontal */
  /* for the float*/
  --f: calc(2 * var(--s) * var(--r) + 4 * var(--mv) - 2 * var(--vc) - 2px);
}

.grids {
  grid-column: 1/-1;
  font-size: 0; /*disable white space between inline block element */
}

.grids div {
  width: var(--s);
  margin: var(--mv) var(--mh);
  height: calc(var(--s) * var(--r));
  display: inline-block;
  font-size: initial;
  clip-path: polygon(
    var(--hc) 0,
    calc(100% - var(--hc)) 0,
    100% var(--vc),
    100% calc(100% - var(--vc)),
    calc(100% - var(--hc)) 100%,
    var(--hc) 100%,
    0 calc(100% - var(--vc)),
    0 var(--vc)
  );
  margin-bottom: calc(var(--mv) - var(--vc));
}
.grids::before {
  content: "";
  width: calc(var(--s) / 2 + var(--mh));
  float: left;
  height: 120%;
  shape-outside: repeating-linear-gradient(
    #0000 0 calc(var(--f) - 2px),
    #000 0 var(--f)
  );
}

.panel {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px;
  border: 1px solid;
  border-radius: 10px;
  background: #fff;
  font-family: sans-serif;
  opacity: 0.5;
}
.panel:hover {
  opacity: 1;
}
.panel > div:not(:last-child) {
  border-bottom: 1px solid;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
*,
*::before {
  transition: 0.5s linear;
}
</style>
