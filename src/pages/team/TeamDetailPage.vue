<template>
    <div class="img">
        <van-image
                :src="team.avatarUrl"
                radius="10px"
                style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
                width="100%"
        />
    </div>

    <van-divider />

    <van-cell icon="flag-o">
        <template #title>
            <span>昵称</span>
        </template>
        <template #value>
            <span>{{team.teamName}}</span>
        </template>
    </van-cell>
    <van-cell icon="label-o">
        <template #title>
            <span>队伍描述</span>
        </template>
        <template #value>
            <span>{{team.description}}</span>
        </template>
    </van-cell>
    <van-cell icon="manager-o">
        <template #title>
            <span>队长昵称</span>
        </template>
        <template #value>
            <span>{{team?.createUser?.username}}</span>
        </template>
    </van-cell>
    <van-cell icon="shield-o">
        <template #title>
            <span>队伍状态</span>
        </template>
        <template #value>
            <span v-if="team?.teamStatus === 0">公开</span>
            <span v-else-if="team?.teamStatus === 1">加密</span>
        </template>
    </van-cell>
    <van-cell icon="friends-o">
        <template #title>
            <span>队伍人数</span>
        </template>
        <template #value>
            <!--下面不加?问号就报不存在参数异常。但是又存在-->
            {{team?.teamUserList?.length}}/{{team.maxNum}}
        </template>
    </van-cell>
    <van-cell icon="clock-o">
        <template #title>
            <span>过期时间</span>
        </template>
        <template #value>
            {{team.expireTime}}
        </template>
    </van-cell>

    <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
    >
        队伍成员
    </van-divider>

    <user-card-list :user-list="team.teamUserList"/>
</template>

<script lang="ts" setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../../libs/axiosRequest.ts";
import {showFailToast} from "vant";
import UserCardList from "../../components/UserCardList.vue";

const team = ref({})
const route = useRoute();
onMounted(async () => {
    let res: resType = await myAxios.get('/team/get?id=' + route.query.id);
    if (res?.code !== 0) {
        showFailToast('该队伍不存在');
    }
    team.value = res.data;
})
</script>

<style scoped>
.img {
    display: flex;
    justify-content: center;
}
</style>
