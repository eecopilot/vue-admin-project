<script setup lang="ts"></script>

<template>
  <router-view></router-view>
</template>

<style scoped lang="scss">
@use './style.scss' as styles;

.test {
  color: styles.$primary-color;
}
.test2 {
  color: styles.$secondary-color;
}
</style>
