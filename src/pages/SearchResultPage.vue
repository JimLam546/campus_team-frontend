<template>
    <UserCardList :user-list="userList"/>
    <van-empty description="搜索不到相匹配用户" v-if="!userList || userList.length < 0"/>
</template>

<script setup>
import {ref,onMounted} from 'vue'
import myAxios from "../libs/axiosRequest.ts";
import {useRoute} from "vue-router";
import qs from 'qs'
import UserCardList from "../components/UserCardList.vue";
import {closeToast, showLoadingToast} from "vant";

const route = useRoute()
const userList = ref([]) // 展示搜索的用户列表
const { tags } = route.query
onMounted( async () => {
    showLoadingToast({
        message: '加载中...',
        forbidClick: true,
        duration: 0
    });
    const res = await myAxios({
        method: 'get',
        url: '/user/search/list',
        params: {
            tagList: tags
        },
        paramsSerializer: (params) => {
            return qs.stringify(params, {arrayFormat: 'repeat'})
        }
    })
    closeToast()
    userList.value = res.data
})
</script>

<style scoped>

</style>
