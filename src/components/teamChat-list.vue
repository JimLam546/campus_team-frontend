<template>
    <div id="teamChat-list">
        <van-cell-group v-for="team in props.teamList">
            <van-cell @click="toChat(team.id)">
                <template #title>
                    <span class="cell-span">{{team.teamName}}</span>
                </template>
                <template #label>
                    <span class="cell-span">{{team.username}}：{{ team.lastMessage }}</span>
                </template>
                <template #icon>
                    <van-image :src="team.avatarUrl"
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
                    {{ team.lastMessageDate }}
                </template>
            </van-cell>
        </van-cell-group>
    </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();
interface teamChatListProps {
    teamList: any
}
const props = defineProps<teamChatListProps>();
const toChat = (id : number) => {
    router.push({
        path: "/message/teamChat",
        query: {
            id: id
        }
    })
}
</script>

<style scoped>

</style>
