<template>
    <div id="message-card-list">
        <van-card
            v-for="request in props.requestList"
            :desc="request.remark"
            :title="request.fromUserVO.username"
            @click-thumb="showUserDetail(request.fromUserVO.id)"
            :thumb="request.fromUserVO.avatarUrl"
            style="margin: 15px; border-radius: 8%"
        >
            <template #bottom>
                <van-button plain size="mini" type="primary" @click="opsFriend(request.fromUserVO.id, 1)"
                            v-if="request.state === 0"
                            style="width: 40%"
                >同意</van-button>
                <van-button plain size="mini" type="danger" @click="opsFriend(request.fromUserVO.id, 2)"
                            v-if="request.state === 0"
                            style="width: 40%; margin-left: 20%"
                >拒绝</van-button>
                <van-button plain size="mini" type="primary" disabled
                            v-if="request.state === 1"
                            style="width: 40%"
                >已同意</van-button>
                <van-button plain size="mini" type="danger" disabled
                            v-if="request.state === 2"
                            style="width: 40%"
                >已拒绝</van-button>
            </template>
        </van-card>
    </div>
</template>

<script setup lang="ts">
import {props} from "vant/es/rolling-text/RollingTextItem.js";
import {useRouter} from "vue-router";
import {onMounted} from "vue";
import myAxios from "../libs/axiosRequest.ts";
import {showFailToast, showSuccessToast} from "vant";

interface requestCardListProps {
    requestList: requestType[]
}
const router = useRouter();
const props = defineProps<requestCardListProps>();
const showUserDetail = (id) => {
    router.push({
        path: '/user/detail',
        query: {
            id: id
        }
    })
}
const opsFriend = async (fromId, state) => {
    let res : resType = await myAxios.post('/request/opsFriend', {fromId: fromId, isRead: 1, state: state});
    if(state === 1 && res.code === 0) {
        showSuccessToast('同意成功!');
        location.reload();
    } else if(state === 2 && res.code === 0) {
        showFailToast('拒绝成功');
        location.reload();
    } else if(state === 1) {
        showFailToast('同意失败');
    } else if(state === 2) {
        showFailToast('拒绝失败');
    } else {
        showFailToast('操作异常');
    }
}
onMounted(() => {
    // console.log(props.requestList)
})
</script>

<style scoped>

</style>
