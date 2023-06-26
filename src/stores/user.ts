import { defineStore } from 'pinia'
import type { loginFormData, loginResponseData } from '@/api/user/type'
import { reqLogin } from '@/api/user'
import { ref } from 'vue'
import type { UserMenuRoutes, UserToken } from '@/stores/types/type'
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'
import { constantRoute } from '@/router/routes'

export const useUserStore = defineStore('user', () => {
  // 用户唯一标识
  const token = ref<UserToken>(GET_TOKEN())
  // 生成菜单需要的数组
  const menuRoutes = ref<UserMenuRoutes>(constantRoute)

  // 登录
  const userLogin = async (data: loginFormData) => {
    const res: loginResponseData = await reqLogin(data)
    if (res.code === 200) {
      token.value = res.data.token as string
      SET_TOKEN(res.data.token as string)
      return 'OK'
    } else {
      return Promise.reject(new Error(res.data.message))
    }
  }

  return { token, menuRoutes, userLogin }
})
