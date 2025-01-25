<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import useUserStore from '@/store/modules/user'
const userStore = useUserStore()

onMounted(async () => {
  console.log('Home mounted')
  await userStore.userInfo()
})
</script>
