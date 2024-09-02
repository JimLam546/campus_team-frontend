<template>

    <van-card
        v-for="user in props.userList"
        :title="`${user.username} (${user.userAccount})`"
        :thumb="user.avatarUrl"
        @click-thumb="showUserDetail(user.id)"
        :desc="!user.profile || user.profile.length < 1 ? '该用户很懒，没有填写简介' : `${user.profile}`"
        style="margin: 15px; border-radius: 8%"
    >

        <template #tags>
            标签:
        </template>

        <template #bottom>
            <van-tag v-for="tag in JSON.parse(user.tags)"
                     plain
                     type="primary"
                     style="margin-right: 5px">
                {{ tag }}
            </van-tag>
        </template>
        <!--<template #footer>-->
        <!--    <van-button size="mini">联系我</van-button>-->
        <!--</template>-->
    </van-card>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";

interface userCardListProps{
    userList: UserType[]
}
const props = defineProps<userCardListProps>()
let router = useRouter()
const showUserDetail = (id : any) => {
    router.push({
        path: '/user/detail',
        query: {
            id: id
        }
    })
}
</script>

<style scoped>

</style>
