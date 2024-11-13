<template>
    <div id="userCardList">
        <van-card
                v-for="user in props.userList"
                :desc="!user.profile || user.profile.length < 1 ? '该用户很懒，没有填写简介' : `${user.profile}`"
                :thumb="user.avatarUrl"
                :title="`${user.username} (${user.userAccount})`"
                style="margin: 15px; border-radius: 8%"
                @click-thumb="showUserDetail(user.id)"
        >

            <template #tags>
                标签:
            </template>

            <template #bottom>
                <van-tag v-for="tag in JSON.parse(user.tags)"
                         plain
                         style="margin-right: 5px"
                         type="primary">
                    {{ tag }}
                </van-tag>
            </template>
            <template #footer>
                <van-button plain size="small" @click="toChat(user.id)">联系我</van-button>
            </template>
        </van-card>
    </div>
</template>

<script lang="ts" setup>

import {useRoute, useRouter} from "vue-router";

interface userCardListProps {
    userList: UserType[]
}

const props = defineProps<userCardListProps>()
const route = useRoute()
let router = useRouter()
const showUserDetail = (id: any) => {
    router.push({
        path: '/user/detail',
        query: {
            id: id
        }
    })
}
const toChat = (id) => {
    router.push({
        path: "/message/privateMessage",
        query: {
            id: id,
        }
    })
}
</script>

<style scoped>
</style>
