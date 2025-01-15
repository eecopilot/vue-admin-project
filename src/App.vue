<script setup lang="ts">
import { onMounted } from 'vue'
import { login } from './api/user'
let msg = 'Hello Vite + Vue 3!'
console.log(msg)

const func = () => {
  console.log('sdsa')
}

func()

onMounted(async () => {
  console.log('mounted')
  const logininfo = await login({
    username: 'admin',
    password: '111111',
  })
  console.log(logininfo)
})
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
