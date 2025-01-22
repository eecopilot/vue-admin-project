<template>
  <div class="layout-container">
    <div class="layout-slider">
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu background-color="#001529" text-color="#fff">
          <SideMenu :menuList="userStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout-tabbar">tarbar</div>
    <div class="layout-content">
      <MainContent />
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './components/Logo.vue'
import SideMenu from './components/menu/index.vue'
import MainContent from './components/MainContent/index.vue'
// 引入useUserStore
import useUserStore from '@/store/modules/user'
const userStore = useUserStore()
</script>

<style lang="scss" scoped>
@use '@/style.scss' as styles;
.layout-container {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  .layout-slider {
    width: styles.$base-menu-width;
    height: 100vh;
    background-color: styles.$base-menu-background;
    .scrollbar {
      width: 100%;
      height: calc(100% - styles.$base-tabbar-height);
      color: white;
    }
  }
  .layout-tabbar {
    position: fixed;
    left: styles.$base-menu-width;
    top: 0;
    width: calc(100% - styles.$base-menu-width);
    height: styles.$base-tabbar-height;
    background-color: styles.$base-tabbar-background;
  }
  .layout-content {
    position: absolute;
    left: styles.$base-menu-width;
    top: styles.$base-tabbar-height;
    padding: 20px;
    width: calc(100% - styles.$base-menu-width);
    height: calc(100vh - styles.$base-tabbar-height);
    overflow: auto;
  }
}
</style>
