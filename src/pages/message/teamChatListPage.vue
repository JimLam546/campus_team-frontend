<template>
    <div id="ChatPage">
        <van-empty v-if="mark && teamList.length < 1" description="你还未发起过群聊" />
        <van-skeleton v-if="!mark" title avatar :row="5" style="margin-top: 30px"/>
        <team-chat-list :teamList="teamList" />
    </div>
</template>

<script setup lang="ts">
import TeamChatList from "../../components/teamChat-list.vue";
import {getTeamChatListService} from "../../services/chat.ts";
import {onMounted, ref} from "vue";
import {showFailToast} from "vant";

const mark = ref(false);
const teamList = ref([]);
const getTeamChatList = async () => {
    const res = await getTeamChatListService();
    mark.value = true;
    if (res?.code === 0) {
        teamList.value = res.data;
        return;
    }

    showFailToast("获取群聊列表失败");
}
onMounted(() => {
    getTeamChatList();
})
</script>

<style scoped>

</style>
