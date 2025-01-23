<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <BreadCrumb />
    </div>
    <div class="tabbar-right">
      <Setting />
    </div>
  </div>
</template>

<script setup lang="ts">
import BreadCrumb from './breadcrumb/index.vue'
import Setting from './Setting.vue'
</script>

<style lang="scss" scoped>
.tabbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  &-left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  &-right {
    display: flex;
    align-items: center;
    padding-right: 10px;
  }
}
</style>
