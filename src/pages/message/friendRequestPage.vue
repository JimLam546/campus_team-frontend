<template>
    <div id="friendRequestPage">
        <van-empty v-if="mark && requestList.length < 1" description="不存在好友申请" />
        <van-skeleton v-if="!mark" title :row="3"/>
        <request-card-list :requestList="requestList"/>
    </div>
</template>

<script setup lang="ts">
import myAxios from "../../libs/axiosRequest.js";
import {onMounted} from "vue";
import {ref} from "vue";
import RequestCardList from "../../components/request-card-list.vue";

const requestList = ref([]);
const loading = ref(true);
const mark = ref(false);
const getRequestList = async () => {
    let res = await myAxios.get('/request/getRequestList');
    if(res.length !== 0) {
        loading.value = false;
    }
    mark.value = true;
    requestList.value = res as any;
}
onMounted(async () => {
    await getRequestList();
})
</script>

<style scoped>

</style>
