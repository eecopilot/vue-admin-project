<script setup lang="ts">
let msg = 'Hello Vite + Vue 3!'
console.log(msg)

const func = () => {
  console.log('sdsa')
}

func()
</script>

<template>
  <div class="test">test</div>
  <div class="test2">test2</div>
  <div>
    <svg-icon name="phone" />
  </div>
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
