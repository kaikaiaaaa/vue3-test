import {reactive, computed,readonly} from 'vue'

const state = reactive({
    loginUser: null,
    loading: false,
})

export const loginUserStore = readonly(state)

//登录
export const login = async (user,password) => {
    this.state.loading = true
    let loginUser = await login(user,password)
    state.loginUser = loginUser
    this.state.loading = false
}
//退出
export const logout = async () => {
    this.state.loading = true
    await logout()
    state.loginUser = null
    this.state.loading = false
}

//恢复登录状态
export const restoreLogin = async () => {
    this.state.loading = true
    let loginUser = await restoreLogin()
    state.loginUser = loginUser
    this.state.loading = false
}
