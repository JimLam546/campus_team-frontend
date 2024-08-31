<template>
    <van-cell center title="推荐用户">
        <template #right-icon>
            <span>匹配模式 </span>
            <van-switch v-model="checked" @click="recommend"/>
        </template>
    </van-cell>

    <van-skeleton v-if="!userList || userList.length < 1">
        <template #template>
            <div :style="{ display: 'flex', width: '100%' }">
                <van-skeleton-image />
                <div :style="{ flex: 1, marginLeft: '16px' }">
                    <van-skeleton-paragraph row-width="60%" />
                    <van-skeleton-paragraph />
                    <van-skeleton-paragraph />
                    <van-skeleton-paragraph />
                </div>
            </div>
        </template>
    </van-skeleton>

    <UserCardList :user-list="userList"/>

</template>

<script setup lang="ts">
import UserCardList from "../components/UserCardList.vue";
import myAxios from "../libs/axiosRequest.ts";
import {onMounted, ref} from "vue";
import {showFailToast} from "vant";

const userList = ref<UserType[]>([]);
const checked = ref(false);
const recommend = async () => {
    userList.value = []
    if(checked.value) {
        const res: resType  = await myAxios.get('/user/match', {params: {num: 5}})
        if(res?.code === 0) {
            userList.value = res.data
        } else {
            showFailToast('网络异常')
        }
    } else {
        const res: resType = await myAxios.get('/user/recommend', {params: {pageNum: 1, pageSize: 10}})
        if(res?.code === 0) {
            userList.value = res.data
        } else {
            showFailToast('网络异常')
        }
    }
}

onMounted(async () => {
    const res: resType = await myAxios.get('/user/recommend', {params:{pageNum: 1, pageSize: 10}})
    if(res?.code === 0) {
        userList.value = res.data
        console.log(userList.value)
    }
})
</script>

<style scoped>

</style>
