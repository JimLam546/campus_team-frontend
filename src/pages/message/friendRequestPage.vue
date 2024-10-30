<template>
    <div id="friendRequestPage">
        <request-card-list :requestList="requestList"/>
        <van-skeleton title :row="3" :loading="loading"/>
    </div>
</template>

<script setup lang="ts">
import myAxios from "../../libs/axiosRequest.js";
import {onMounted} from "vue";
import {ref} from "vue";
import RequestCardList from "../../components/request-card-list.vue";

const requestList = ref([]);
const loading = ref(true);
const getRequestList = async () => {
    let res = await myAxios.get('/request/getRequestList');
    if(res.length !== 0) {
        loading.value = false;
    }
    requestList.value = res as any;
}
onMounted(async () => {
    await getRequestList();
})
</script>

<style scoped>

</style>
