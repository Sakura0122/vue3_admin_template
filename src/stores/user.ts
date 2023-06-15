import { defineStore } from 'pinia'
import type { loginFormData, loginResponseData } from '@/api/user/type'
import { reqLogin } from '@/api/user'
import { ref } from 'vue'
import type { UserToken } from '@/stores/types/type'
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'

export const useUserStore = defineStore('user', () => {
  const token = ref<UserToken>(GET_TOKEN())

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

  return { token, userLogin }
})
