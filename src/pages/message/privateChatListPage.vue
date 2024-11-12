<template>
    <div id="privateChatUserListPage">
        <van-empty v-if="mark && userList.length < 1" description="你还未进行过聊天" />
        <van-skeleton v-if="!mark" title avatar :row="5" />
        <private-chat-user-list :userList="userList"/>
    </div>
</template>

<script setup lang="ts">
import PrivateChatUserList from "../../components/privateChat-list.vue";
import {getPrivateChatUserList} from "../../services/chat.ts";
import {onMounted, ref} from "vue";
import {showFailToast} from "vant";

const userList = ref([]);
const mark = ref(false);
const getPrivateChatList = async () => {
    const res = await getPrivateChatUserList();
    mark.value = true;
    if (res) {
        userList.value = res;
        return;
    }
    showFailToast("获取列表失败");
}
onMounted(() => {
    getPrivateChatList();
})
</script>

<style scoped>

</style>
