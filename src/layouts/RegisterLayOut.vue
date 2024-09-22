<template>
    <span style="display:block; text-align: center; font-weight: bold; margin-top: 20vw; margin-bottom: 20vw; font-size: 10vw">注册账户</span>
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
                    v-model="username"
                    name="昵称"
                    label="昵称"
                    placeholder="请输入昵称"
                    :rules="[{ required: true, message: '请填写昵称' },
                    {required: true, message: '昵称不能为空' }]"
            />
            <van-field
                    v-model="userPassword"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="请输入密码"
                    :rules="[{ required: true, message: '请填写密码' },
                    {validator: userPassVail}]"
            />
            <van-field
                    v-model="checkPassword"
                    type="password"
                    name="确认密码"
                    label="确认密码"
                    placeholder="请再次输入密码"
                    :rules="[{ required: true, message: '请再次填写密码' },
                    {validator: checkPassVail}]"
            />
        </van-cell-group>
        <div style="margin: 10vw 8vw auto 8vw ">
            <van-button round block type="primary" native-type="submit">
                注册
            </van-button>
        </div>
    </van-form>
    <div style="padding: 8vw">
        <van-button type="default" block round @click="router.push('/login')">已有账号？ 登录</van-button>
    </div>
</template>

<script setup lang="ts">
import myAxios from "../libs/axiosRequest.ts";
import {closeToast, showFailToast, showLoadingToast, showSuccessToast, Toast} from "vant";
import { ref } from 'vue'
import { useRouter } from "vue-router";

const router = useRouter()
const userAccount = ref('')
const username = ref('')
const userPassword = ref('')
const checkPassword = ref('')
const onSubmit = async () => {
    showLoadingToast({
        duration: 0,
        message: '加载中...',
        forbidClick: true,
    });

    const res:resType = await myAxios.post('/user/register', {
        userAccount: userAccount.value,
        username: username.value,
        userPassword: userPassword.value,
        checkPassword: checkPassword.value
    })
    if(res?.code === 0) {
        // 注册成功
        await router.replace('/login')
        showSuccessToast('注册成功');
    } else {
        showFailToast(res.description);
    }
}
const accountVail = () => userAccount.value.length >= 4
const userPassVail = () => userPassword.value.length >= 8
const checkPassVail = () => {
    if(checkPassword.value.length < 8) {
        return '密码长度不能小于8位'
    }
    if(checkPassword.value !== userPassword.value) {
        return '两次密码输入不一致'
    }
    return true;
}
</script>

<style scoped>

</style>
