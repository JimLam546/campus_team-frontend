<template>
    <div>
        <span style="display:block; text-align: center; font-weight: bold; margin-top: 1vw; margin-bottom: 10vw; font-size: 5vw; color: #1989FA">用户登录</span>
        <img src="../../public/image.jpg" style="border-radius: 10px; height: 20vw; margin: 10px auto; display: block; box-shadow: #4d4d4d 0 0 10px"/>
        <span style="display:block; text-align: center; font-weight: bold; margin-top: 1vw; margin-bottom: 10vw; font-size: 10vw">校园同行</span>
    </div>
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field
                    v-model="userAccount"
                    :rules="[{ required: true, message: '请填写账号' },
                    {validator: accountVail, message: '账号的长度必须大于4位' }]"
                    label="账号"
                    name="账号"
                    placeholder="请输入账号"
            />
            <van-field
                    v-model="userPassword"
                    :rules="[{ required: true, message: '请填写密码' },
                    {validator: userPassVail, message: '密码的长度不能小于8位'}]"
                    label="密码"
                    name="密码"
                    placeholder="请输入密码"
                    type="password"
            />
        </van-cell-group>
        <div style="margin: 10vw 8vw auto 8vw">
            <van-button block native-type="submit" round type="primary">
                登录
            </van-button>
        </div>
    </van-form>
    <div style="padding: 8vw">
        <van-button plain block round type="primary" @click="router.push('/register')">还没有账号？ 注册</van-button>
    </div>
</template>

<script setup>
import myAxios from "../libs/axiosRequest.ts";
import {showLoadingToast, showSuccessToast} from "vant";
import {ref} from 'vue'
import {useRouter} from "vue-router";

const router = useRouter()
const userAccount = ref('')
const userPassword = ref('')
const onSubmit = async () => {
    showLoadingToast({
        duration: 0,
        message: '登录中...',
        forbidClick: true,
    });

    const res = await myAxios.post('/user/login', {
        userAccount: userAccount.value,
        userPassword: userPassword.value,
    })
    if (res.code === 0) {
        // 登录成功
        // console.log(res.code)
        await router.replace('/index')
        showSuccessToast('登录成功');
    } else {
        showFailToast("用户登录失败, 账号密码不匹配!")
    }
}
const accountVail = () => userAccount.value.length >= 4
const userPassVail = () => userPassword.value.length >= 8
</script>

<style scoped>

</style>
