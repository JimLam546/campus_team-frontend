<template>
    <van-nav-bar
            :title="title"
            left-arrow
            right-text="按钮"
            @click-left="left"
            @click-right="onClickRight"
    >
        <template #right>
            <van-icon name="search" size="18"/>
        </template>
    </van-nav-bar>

    <div id="content">
        <router-view/>
    </div>

    <van-tabbar route @change="onChange">
        <van-tabbar-item icon="home-o" replace to="/index">主页</van-tabbar-item>
        <van-tabbar-item icon="search" replace to="/team">队伍</van-tabbar-item>
        <van-tabbar-item icon="friends-o" replace to="/user">个人</van-tabbar-item>
    </van-tabbar>


</template>

<script lang="ts" setup>
import {showToast} from "vant";
import {useRouter} from "vue-router";
import {routes} from "../router"
import {onMounted, ref} from "vue";

const router = useRouter()
const title = ref('匹配系统')
const left = () => router.back()
const onClickRight = () => {
    router.push('/search')
}
// const onChange = (index) => showToast(`标签 ${index}`);
onMounted(() => {
    router.beforeEach((to, from) => {
        const toPath = to.path;
        const route = routes[3].children?.find((route) => {
            return route.path === toPath
        })
        title.value = route?.title
    })
})
</script>

<style scoped>
#content {
    padding-bottom: 60px;
}
</style>
