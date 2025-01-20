<template>
  <div class="login">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login-form" ref="loginForms">
          <h1>Hello</h1>
          <h2>欢迎来到管理后台</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="state.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :prefix-icon="Lock"
              type="password"
              show-password
              v-model="state.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login-form-btn"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user'
import type { LoginParams } from '@/api/user/type'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
const userStore = useUserStore()
const router = useRouter()
const state = reactive<LoginParams>({
  username: '',
  password: '',
})
const loading = ref(false)
const login = async () => {
  try {
    loading.value = true
    const res = await userStore.login(state)
    if (res.code === 200) {
      console.log('登录成功')
      router.push('/')
      ElNotification({
        title: '登录成功',
        message: '欢迎回来',
        type: 'success',
      })
    } else {
      ElNotification({
        title: '登录失败',
        message: '请检查用户名和密码',
        type: 'error',
      })
    }
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  height: 100dvh;
  background: url('@/assets/images/background.jpg') no-repeat center center;
  background-size: cover;
  &-form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
    &-btn {
      width: 100%;
    }
  }
  h1 {
    color: white;
    font-size: 40px;
  }

  h2 {
    font-size: 20px;
    color: white;
    margin: 20px 0px;
  }
}
</style>
