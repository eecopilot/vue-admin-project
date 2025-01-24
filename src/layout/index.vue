<template>
  <div class="layout-container">
    <div class="layout-slider">
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu
          :collapse="LayOutSettingStore.fold ? true : false"
          :default-active="route.path"
          background-color="#001529"
          text-color="#fff"
        >
          <SideMenu :menuList="userStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <div
      class="layout-tabbar"
      :class="{ fold: LayOutSettingStore.fold ? true : false }"
    >
      <Tabbar />
    </div>
    <div
      class="layout-content"
      :class="{ fold: LayOutSettingStore.fold ? true : false }"
    >
      <MainContent />
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './components/Logo.vue'
import SideMenu from './components/Menu/index.vue'
import MainContent from './components/MainContent/index.vue'
// tabbar
import Tabbar from './components/Tabbar/index.vue'
// 引入router
import { useRoute } from 'vue-router'
import useLayOutSettingStore from '@/store/modules/setting'
const LayOutSettingStore = useLayOutSettingStore()
// 引入useUserStore
import useUserStore from '@/store/modules/user'
const userStore = useUserStore()
const route = useRoute()
// console.log(route.path)
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
    transition: all 0.3s;

    .scrollbar {
      width: 100%;
      height: calc(100% - styles.$base-tabbar-height);
      .el-menu {
        border-right: none;
      }
    }
  }
  .layout-tabbar {
    position: fixed;
    left: styles.$base-menu-width;
    top: 0;
    width: calc(100% - styles.$base-menu-width);
    height: styles.$base-tabbar-height;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - styles.$base-menu-min-width);
      left: styles.$base-menu-min-width;
      background-color: #f5f5f5;
    }
  }
  .layout-content {
    position: absolute;
    left: styles.$base-menu-width;
    top: styles.$base-tabbar-height;
    padding: 20px;
    width: calc(100% - styles.$base-menu-width);
    height: calc(100vh - styles.$base-tabbar-height);
    overflow: auto;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - styles.$base-menu-min-width);
      left: styles.$base-menu-min-width;
      background-color: #f5f5f5;
    }
  }
}
</style>
