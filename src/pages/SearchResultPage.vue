<template>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
            v-model:loading="onLoad"
            :finished="finished"
            finished-text="没有更多了"
            @load="listLoad"
        >
            <UserCardList :user-list="userList"/>
        </van-list>
        <!--<van-empty description="搜索不到相匹配用户" v-if="!userList || userList.length < 1 || !isHasResult"/>-->
    </van-pull-refresh>


</template>

<script setup>
import {onMounted, ref} from 'vue'
import myAxios from "../libs/axiosRequest.ts";
import {useRoute} from "vue-router";
import qs from 'qs'
import UserCardList from "../components/UserCardList.vue";
import {closeToast, showFailToast, showLoadingToast} from "vant";

const route = useRoute()
const onLoad = ref(false)
const finished = ref(false)
const refreshing = ref(false)
const currentPage = ref(0)
const userList = ref([]) // 展示搜索的用户列表
const { tags } = route.query
const isHasResult = ref(true)
const listLoad = async () => {
    currentPage.value++;
    await getUserList();
    onLoad.value = false;
}
const onRefresh = async () => {
    userList.value = []
    finished.value = false
    currentPage.value = 1
    await getUserList()
    refreshing.value = false
}
const getUserList = async () => {
    let res =  await myAxios({
        method: 'get',
        url: '/user/search/list',
        params: {
            pageNum: currentPage.value,
            pageSize: 5,
            tagList: tags
        },
        paramsSerializer: (params) => {
            return qs.stringify(params, {arrayFormat: 'repeat'})
        }
    });
    if (res?.code !== 0) {
        showFailToast('网络异常')
    }
    if (res?.data.length === 0) {
        isHasResult.value = false;
        finished.value = true;
    }
    for (let i = 0; i < res?.data.length; i++) {
        userList.value.push(res?.data[i]);
    }
}
onMounted( async () => {
    showLoadingToast({
        message: '加载中...',
        forbidClick: true,
        duration: 0
    });
    // await getUserList()
    closeToast()
})
</script>

<style scoped>

</style>
