<template>
    <van-cell center title="推荐用户">
        <template #right-icon>
            <span>匹配模式</span>
            <van-switch v-model="checked" @click="recommend"/>
        </template>
    </van-cell>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" style="border-radius: 5%;margin: 15px">
        <van-swipe-item v-for="image in images" :key="image">
            <img :src="image" style="width: 100%">
        </van-swipe-item>
    </van-swipe>

    <!--<van-search v-model="searchText" placeholder="请输入搜索关键词" @search="searchUsers"/>-->
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
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <UserCardList :user-list="userList"/>
        </van-pull-refresh>
    <!--回到顶部-->
    <van-back-top right="20px" bottom="60px"/>

</template>

<script setup lang="ts">
import UserCardList from "../components/UserCardList.vue";
import myAxios from "../libs/axiosRequest.ts";
import {onMounted, ref} from "vue";
import {showFailToast} from "vant";

const images = ref([
    'https://jim-one-project.oss-cn-shenzhen.aliyuncs.com/wallpaper/1.jpg',
    'https://jim-one-project.oss-cn-shenzhen.aliyuncs.com/wallpaper/2.jpg',
    'https://jim-one-project.oss-cn-shenzhen.aliyuncs.com/wallpaper/3.jpg',
    'https://jim-one-project.oss-cn-shenzhen.aliyuncs.com/wallpaper/4.jpg',
    'https://jim-one-project.oss-cn-shenzhen.aliyuncs.com/wallpaper/5.jpg',
]);
const userList = ref<UserType[]>([]);
const currentPage = ref(1);
const checked = ref(false);
const refreshing = ref(false);
const onRefresh = async () => {
    userList.value = []
    await recommend();
    refreshing.value = false
}
const recommend = async () => {
    userList.value = []
    if(checked.value) {
        const res: resType  = await myAxios.get('/user/match', {params: {num: 10}})
        if(res?.code === 0) {
            for (let i = 0; i < res?.data.length; i++) {
                userList.value.push(res?.data[i])
            }
        } else {
            showFailToast('网络异常')
        }
    } else {
        const res: resType = await myAxios.get('/user/recommend', {params: {pageNum: currentPage.value, pageSize: 20}})
        if(res?.code === 0) {
            for (let i = 0; i < res?.data.length; i++) {
                userList.value.push(res?.data[i])
            }
        } else {
            showFailToast('网络异常')
        }
    }
}
onMounted(async () => {
    await recommend();
})
</script>

<style scoped>

</style>
