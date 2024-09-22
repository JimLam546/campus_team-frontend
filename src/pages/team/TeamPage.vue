<template>
    <div class="teamList-card">
        <van-search v-model="searchText" placeholder="请输入队伍关键词" @search="searchTeams"/>
        <van-button class="btn_createTeam" icon="plus" type="primary" to="/team/create"></van-button>
        <van-tabs @click="onTabChange" v-model:active="active">
            <van-tab title="公开" name='public'></van-tab>
            <van-tab title="加密" name='secret'></van-tab>
            <van-tab title="我的" name='myTeam'></van-tab>
        </van-tabs>

        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <team-card-list :teamList="teamList" :active="active"/>
        </van-pull-refresh>
        <van-empty v-if="teamList?.length < 1" description="数据为空"/>
    </div>
</template>

<script setup lang="ts" >
import myAxios from "../../libs/axiosRequest.ts";
import {ref, onMounted} from "vue"
import TeamCardList from "../../components/team-card-list.vue";
import {setTeamList} from "../../storage/teamListStoage.ts";

const teamList = ref<teamType[]>([])
const searchText = ref('')
const active = ref('public')
const refreshing = ref(false);
const onRefresh = async () => {
    teamList.value = []
    await onTabChange();
    refreshing.value = false
}
const onTabChange = async () => {
    teamList.value = [];
    if(active.value === 'public') {
        // 公开
        const res: resType = await myAxios.get('/team/list/page',{params: {searchText: searchText.value, teamStatus: 0}})
        // console.log(res.data)
        if(res?.code === 0) {
            teamList.value = res.data
        }
    } else if(active.value === 'secret') {
        // 加密
        const res: resType = await myAxios.get('/team/list/page',{params: {searchText: searchText.value, teamStatus: 1}})
        if(res?.code === 0) {
            teamList.value = res.data
        }
    } else if(active.value === 'myTeam'){
        // 我的队伍
        const res: resType = await myAxios.get('/team/list/myTeam')
        if(res?.code === 0) {
            teamList.value = res.data
            // console.log('teamList=',res.data)
        }
    }
    setTeamList(teamList.value)
}
const searchTeams = async () => {
    if(active.value === 'public') {
        const res:resType = await myAxios('/team/list/page', {params: {searchText: searchText.value, teamStatus: 0}})
        if(res?.code === 0) {
            teamList.value = res.data
        }
    } else if(active.value === 'secret') {
        const res:resType = await myAxios('/team/list/page', {params: {searchText: searchText.value, teamStatus: 1}})
        if(res?.code === 0) {
            teamList.value = res.data
        }
    }
}


onMounted(async () => {
    await onTabChange();
    setTeamList(teamList.value)
    // console.log('team页=', teamList.value)
})
</script>

<style scoped>
    .btn_createTeam{
        position: fixed;
        height: 50px;
        width: 50px;
        right: 10px;
        bottom: 55px;
        top: auto;
        z-index: 1;
        border-radius: 100%;
    }
    .teamList-card{
        margin-bottom: 50px;
    }
</style>
