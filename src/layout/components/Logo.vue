<template>
  <div class="logo">
    <img :src="settings.logo" alt="logo" />
    <p>{{ settings.title }}</p>
  </div>
</template>

<script setup lang="ts">
import settings from '@/settings'
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  height: 50px;
  img {
    width: 40px;
    height: 40px;
  }
  p {
    padding-left: 10px;
    color: white;
    font-size: 20px;
  }
}
</style>
