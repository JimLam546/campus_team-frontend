<template>
  <span style="display:block; text-align: center; font-weight: bold; margin-top: 20vw; margin-bottom: 20vw; font-size: 10vw">登录</span>
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field
                    v-model="userAccount"
                    name="账号"
                    label="账号"
                    placeholder="请输入账号"
                    :rules="[{ required: true, message: '请填写账号' },
                    {validator: accountVail, message: '账号的长度必须大于4位' }]"
            />
            <van-field
                    v-model="userPassword"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="请输入密码"
                    :rules="[{ required: true, message: '请填写密码' },
                    {validator: userPassVail, message: '密码的长度不能小于8位'}]"
            />
        </van-cell-group>
        <div style="margin: 10vw 8vw auto 8vw">
            <van-button round block type="primary" native-type="submit">
                登录
            </van-button>
        </div>
    </van-form>
    <div style="padding: 8vw">
      <van-button type="default" block round @click="router.push('/register')">还没有账号？ 注册</van-button>
    </div>
</template>

<script setup>
    import myAxios from "../libs/axiosRequest.ts";
    import {showLoadingToast, showSuccessToast, Toast} from "vant";
    import { ref } from 'vue'
    import { useRouter } from "vue-router";

    const router = useRouter()
    const userAccount = ref('')
    const userPassword = ref('')
    const onSubmit = async () => {
        showLoadingToast({
            message: '加载中...',
            forbidClick: true,
        });

        const res = await myAxios.post('/user/login', {
            userAccount: userAccount.value,
            userPassword: userPassword.value,
        })
        if(res.code === 0) {
            // 登录成功
            // console.log(res.code)
            await router.replace('/index')
            showSuccessToast('登录成功');
        } else {
            showFailToast(res.description)
        }
    }
const accountVail = () => userAccount.value.length >= 4
const userPassVail = () => userPassword.value.length >= 8
</script>

<style scoped>

</style>
