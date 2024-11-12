<template>
    <div id="friendListPage">
        <van-empty v-if="mark && userList.length < 1" description="你还未添加好友" />
        <van-skeleton v-if="!mark" title avatar :row="5" />
        <user-card-list :userList="userList" />
    </div>
</template>

<script setup>
import UserCardList from "../components/UserCardList.vue";
import { ref, onMounted } from "vue";
import {getFriendList} from "../services/user.ts";
import {showFailToast} from "vant";

const userList = ref([]);
const mark = ref(false);
const getMyFriendList = async () => {
    const res = await getFriendList();
    if (res.code === 0) {
        userList.value = res.data;
        mark.value = true;
        return;
    }
    showFailToast("获取好友列表失败");
}
onMounted(() => {
    getMyFriendList();
})
</script>

<style scoped>

</style>
