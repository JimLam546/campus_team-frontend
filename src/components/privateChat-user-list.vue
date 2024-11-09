<template>
    <div id="privateChat-user-list">
        <van-cell-group v-for="user in props.userList">
            <van-cell @click="toChat(user.id)">
                <template #title>
                    <span class="cell-span">{{ user.username}}</span>
                </template>
                <template #label>
                    <span class="cell-span">{{ user.lastMessage }}</span>
                </template>
                <template #icon>
                    <van-image :src="user.avatarUrl"
                               round width="50" height="50" style="margin-right: 10px"/>
                    <!--<van-badge v-if="user.unReadNum>0" :content="user.unReadNum" max="99">-->
                    <!--    <van-image :src="user.avatarUrl || defaultImg" round width="50" height="50"-->
                    <!--               style="margin-left: 10px"/>-->
                    <!--</van-badge>-->
                    <!--<van-badge v-else>-->
                    <!--    <van-image :src="user.avatarUrl || defaultImg" round width="50" height="50"-->
                    <!--               style="margin-left: 10px"/>-->
                    <!--</van-badge>-->
                </template>
                <template #value>
                    {{ user.lastMessageDate }}
                </template>
            </van-cell>
        </van-cell-group>
    </div>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";

const router = useRouter();
interface privateChatUserListProps {
    userList: any
}
const props = defineProps<privateChatUserListProps>();
const toChat = (id : number) => {
    router.push({
        path: "/message/privateMessage",
        query: {
            id: id
        }
    })
}
</script>

<style scoped>
#privateChat-user-list {
    height: 100%;
}
</style>
