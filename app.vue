<template>
  <div>
    <el-button type="primary">primary</el-button>
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<script setup>
import { ElButton } from "element-plus/dist/index.full.js";

const nuxtApp = useNuxtApp();
console.log(nuxtApp.$hello("name"));

nuxtApp.$http({ url: "/test", method: "GET" });
</script>
