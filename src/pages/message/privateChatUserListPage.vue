<template>
    <div id="privateChatUserListPage">
        <private-chat-user-list :userList="userList"/>
    </div>
</template>

<script setup lang="ts">
import PrivateChatUserList from "../../components/privateChat-user-list.vue";
import {getPrivateChatUserList} from "../../services/chat.ts";
import {onMounted, ref} from "vue";
import {showFailToast} from "vant";

const userList = ref([]);
const getPrivateChatList = async () => {
    const res = await getPrivateChatUserList();
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
