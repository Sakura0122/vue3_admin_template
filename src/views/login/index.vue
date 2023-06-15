<script setup lang='ts'>
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import type { FormInstance } from 'element-plus'
import { getTime } from '@/utils/time'

const userStore = useUserStore()
const router = useRouter()

// 表单实例
const loginFormRef = ref<FormInstance>()
// 收集账号与密码的数据
const loginForm = reactive({ username: 'admin', password: '111111' })
// 定义变量控制按钮加载效果
const loading = ref(false)

// 登录按钮回调
const login = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      loading.value = true
      userStore.userLogin(loginForm).then(() => {
        router.push('/')
        ElNotification({
          title: `Hi,${getTime()}`,
          message: `欢迎回来`,
          type: 'success',
        })
      }).catch((e) => {
        ElNotification.error((e as Error).message)
      }).finally(() => {
        loading.value = false
      })
    }
  })
}

// rule:即为校验规则对象
// value:即为表单元素文本内容
// 函数:如果符合条件callBack放行通过即为
// 如果不符合条件callBack方法,注入错误提示信息
const validatorUserName = (rule: any, value: any, callback: any) => {
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少五位'))
  }
}
const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少六位'))
  }
}

// 定义表单校验需要配置对象
const rules = {
  // 规则对象属性:
  // required,代表这个字段务必要校验的
  // min:文本长度至少多少位
  // max:文本长度最多多少位
  // message:错误的提示信息
  // trigger:触发校验表单的时机 change->文本发生变化触发校验,blur:失去焦点的时候触发校验规则
  username: [
    // { required: true, min: 6, max: 10, message: '账号长度至少六位', trigger: 'change' }
    { trigger: 'blur', validator: validatorUserName },
  ],
  password: [
    // { required: true, min: 6, max: 15, message: '密码长度至少6位', trigger: 'change' }
    { trigger: 'blur', validator: validatorPassword },
  ],
}
</script>

<template>
  <div class='login_container'>
    <el-row>
      <el-col :span='12' :xs='0'></el-col>
      <el-col :span='12' :xs='24'>
        <!-- 登录的表单 -->
        <el-form
          class='login_form'
          ref='loginFormRef'
          :model='loginForm'
          :rules='rules'
        >
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop='username'>
            <el-input
              v-model='loginForm.username'
              :prefix-icon='User as string'
            ></el-input>
          </el-form-item>
          <el-form-item prop='password'>
            <el-input
              v-model='loginForm.password'
              show-password
              :prefix-icon='Lock as string'
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading='loading'
              class='login_btn'
              type='primary'
              size='default'
              @click='login(loginFormRef)'
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang='scss'>
.login_container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
