<script setup lang="ts"></script>

<template>
  <div class="flex flex-col">
    <div class="border-green-500 border-[1px]">
      <h1>嵌套路由外层导航区域(要求点击下方子路由,导航区域保持不变)</h1>
      <div>
        <router-link to="/nest/index/1">点击跳转到子路由 1</router-link>
        <router-link to="/nest/index/2">点击跳转到子路由 2</router-link>
      </div>
    </div>
    <div class="mt-10 w-[500px] h-[1000px] border-red-500 border-[1px]">
      <h1>子路由显示区域</h1>
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
