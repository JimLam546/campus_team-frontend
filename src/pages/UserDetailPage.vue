<template>
    <div class="img">
        <van-image
                :src="user.avatarUrl"
                height="10rem"
                round
                style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                width="10rem"
        />
    </div>
    <van-cell icon="contact-o">
        <van-icon name="contact-o"/>
        <template #title>
            <span>昵称</span>
        </template>
        <template v-if="user.username" #value>
            <span>{{ user.username }}</span>
        </template>
        <template v-else #value>
            该用户未设置昵称
        </template>
    </van-cell>
    <van-cell icon="description-o" title="个人简介">
        <template v-if="user.profile" #value>
            {{ user.profile }}
        </template>
        <template v-else #value>
            该用户很懒，没有填写简介
        </template>
    </van-cell>
    <van-cell icon="flag-o" title="性别">
        <template v-if="user.gender" #value>
            <div v-if="user.gender === 1">男</div>
            <div v-if="user.gender === 0">女</div>
        </template>
        <template v-else #value>
            保密
        </template>
    </van-cell>
    <van-cell :value="user.phone" icon="phone-o" title="联系方式">
        <template v-if="user.phone" #value>
            {{ user.phone }}
        </template>
        <template v-else #value>
            该用户未填写联系方式
        </template>
    </van-cell>
    <van-cell :value="user.email" icon="envelop-o" title="邮箱">
        <template v-if="user.email" #value>
            {{ user.email }}
        </template>
        <template v-else #value>
            该用户未填写邮箱
        </template>
    </van-cell>
    <van-cell icon="flag-o" title="标签">
        <template #value>
            <van-tag v-for="tag in user.tagList" plain style="margin-right: 8px"
                     type="primary">{{ tag }}
            </van-tag>
        </template>
    </van-cell>
    <div v-if="currentUser.id !== user.id" style="margin: 20px 20px auto 20px; ">
        <van-button v-if="user.friend" plain block round type="primary" @click="toChat" style="margin-bottom: 10px">私信</van-button>
        <van-button v-if="!user.friend" block round type="primary" @click="addFriend">添加好友</van-button>
        <van-button v-else plain block round type="danger" @click="removeFriend">解除好友</van-button>
    </div>

    <van-dialog :show="show" before-close="" show-cancel-button
                title="好友申请" @cancel="cancelDialog" @confirm="confirmDialog">
        <van-cell-group inset>
            <van-field
                    v-model="remark"
                    autosize
                    maxlength="50"
                    placeholder="请输入申请语"
                    rows="2"
                    show-word-limit
                    type="textarea"
            />
        </van-cell-group>

    </van-dialog>
</template>

<script lang="ts" setup>
import myAxios from "../libs/axiosRequest.ts";
import {showFailToast, showSuccessToast} from "vant";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {getCurrentUser} from "../services/user.ts";

const user = ref({})
let route = useRoute();
const show = ref(false);
const remark = ref("");
const currentUser = ref({});
const addFriend = async () => {
    show.value = true;
}
const removeFriend = async () => {
    showFailToast("功能待开发....")
}
const toChat = () => {
    showFailToast("功能待开发....")
}
const cancelDialog = () => {
    show.value = false;
    remark.value = "";
}
const confirmDialog = async () => {
    let res : resType = await myAxios.post('/request/addFriend',
        {receiveId: route.query.id, remark: remark.value});
    show.value = false;
    if(res.code === 0) {
        showSuccessToast('发送好友申请成功');
    } else {
        showFailToast(res.message);
    }
}
const getLoginUser = async () => {
    const res = await getCurrentUser();
    if (res) {
        currentUser.value = res;
        return;
    }
    showFailToast("获取登录用户信息失败");
}
onMounted(async () => {
    let res: resType = await myAxios.get('/user/query/' + route.query.id);
    if (res?.code !== 0) {
        showFailToast('该用户不存在');
    }
    user.value = res.data;
    user.value.tagList = JSON.parse(res.data?.tags)
    await getLoginUser();
})
</script>

<style scoped>
.img {
    display: flex;
    justify-content: center;
}
</style>
