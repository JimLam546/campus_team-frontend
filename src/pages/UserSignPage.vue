<template>
    <van-cell icon="contact-o" is-link @click="toEdit('昵称', 'username', user.username)">
        <van-icon name="contact-o"/>
        <template #title>
            <span>昵称</span>
        </template>
        <template #value>
            <span>{{user.username}}</span>
        </template>
    </van-cell>
    <van-cell icon="notes-o" :value="user.userAccount" title="账号"/>
    <van-cell icon="description-o"  :value="user.profile" is-link title="个人简介"/>
    <van-cell icon="flag-o" is-link title="性别" @click="toRadioEdit('gender', user.gender)">
        <template #default>
            <div v-if="user.gender === 1">男</div>
            <div v-if="user.gender === 0">女</div>
        </template>
    </van-cell>
    <van-cell icon="phone-o" :value="user.phone" is-link title="联系方式" @click="toEdit('联系方式', 'phone', user.phone)"/>
    <van-cell icon="envelop-o" :value="user.email" is-link title="邮箱" @click="toEdit('邮箱', 'phone', user.email)"/>
    <van-cell icon="flag-o" is-link title="标签" @click="toEditTag( 'tags', user.tags)">
        <template #value>
            <van-tag v-for="tag in user.tagList" plain type="primary"
                     style="margin-right: 8px">{{ tag }}</van-tag>
        </template>
    </van-cell>
    <van-cell icon="records-o" :value="user.createTimeStr" title="注册时间"/>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import router from "../router/index.js";
import myAxios from "../libs/axiosRequest.ts";
import {setCurrentUser} from "../storage/userStoage.ts";

const user = ref({});
const toEdit = (editName: string, editKey: string, currentValue: string) => {
    router.push({
        path: '/user/edit',
        query: {
            id: user.value.id,
            editKey: editKey,
            editName: editName,
            currentValue: currentValue
        }
    })
}
const toRadioEdit = (editKey: string, currentValue: string) => {
    router.push({
        path: '/user/radioEdit',
        query: {
            id: user.value.id,
            editKey: editKey,
            currentValue: currentValue
        }
    })
}
const toEditTag = (editKey: string, currentValue: string) => {
    router.push({
        path: '/user/tagEdit',
        query: {
            id: user.value.id,
            editKey: editKey,
            currentValue: currentValue
        }
    })
}
onMounted(async () => {
    const res = await myAxios.get('/user/current')
    user.value = res.data
    user.value.tagList = JSON.parse(user.value.tags)
    setCurrentUser(user.value)
})
</script>

<style scoped>

</style>
