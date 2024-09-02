<template>
    <div id="teamCardList">
        <van-card
                v-for="team in props.teamList"
                :desc="team.description"
                :title="team.teamName"
                @click-thumb="showTeamDetail(team.id)"
                :thumb="team.avatarUrl"
        >
            <template #tags>
                队伍类型:
                <van-tag plain type="danger">{{ teamStatusEnum[team.teamStatus] }}</van-tag>
            </template>
            <template #price-top>
            </template>
            <template #bottom>
                <div>
                    队伍人数:{{team.hasJoinNum}}/{{team.maxNum}} - - - -<span style="font-weight: bold">队长:{{team.createUser?.username}}</span>
                </div>
                <div>
                    创建时间:{{ team.createTime }}
                </div>
                <div>
                    截止时间:{{ team.expireTime }}
                </div>
            </template>
            <template #footer>
                <!--公开加入队伍-->
                <van-button plain size="mini" type="primary" @click="joinTeam(team)"
                            v-if="!team?.hasJoin && props.active === 'public'"
                >加入队伍</van-button>
                <!--加密加入队伍-->
                <van-button plain size="mini" type="primary" @click="writePassword(team)"
                            v-if="!team?.hasJoin && props.active === 'secret'"
                >加入队伍</van-button>
                <van-button plain size="mini" @click="updateTeam(team)"
                            v-if="currentUser?.id === team?.userId"
                >更新队伍</van-button>
                <van-button plain size="mini" type="danger" @click="quitTeam(team)"
                            v-if="team?.hasJoin && team?.userId !== currentUser?.id"
                >退出队伍</van-button>
                <van-button size="mini" type="danger" @click="deleteTeam(team)"
                            v-if="currentUser?.id === team?.userId"
                >解散退伍</van-button>
            </template>

        </van-card>
        <van-dialog v-model:show="showDialog" title="队伍密码" @confirm="joinTeam(teamState)" @cancel="cancel" show-cancel-button>
            <van-field v-model="value" label="密码" placeholder="请输入队伍密码" />
        </van-dialog>
    </div>
</template>

<script lang="ts" setup>
import {teamStatusEnum} from "../constants/team.ts";
import myAxios from "../libs/axiosRequest.ts";
import {showFailToast, showSuccessToast} from "vant";
import {useRouter} from "vue-router";
import {onBeforeUpdate, onMounted, onUpdated, ref} from "vue";
import {getCurrentUser} from "../services/user.ts";
import {setCurrentUser} from "../storage/userStoage.ts";
import {getTeamList} from "../storage/teamListStoage.ts";


interface TeamCardListProps {
    teamList: teamType[],
    active: string
}
const props = defineProps<TeamCardListProps>()
const router = useRouter()
const currentUser = ref({})
const showDialog = ref(false);
const value = ref('');
const teamState = ref({});
const teamList = ref<teamType[]>([])
const writePassword = (team: teamType) => {
    showDialog.value = true;
    teamState.value = team;
}
const cancel = () => {
    value.value = '';
}
const showTeamDetail = (id : number) => {
    router.push({
        path: '/team/detail',
        query: {
            id: id
        }
    })
}
const joinTeam = async (team: teamType) => {
    const res: resType = await myAxios.post('/team/join', {teamId: team.id, teamPassword: value.value})
    if (res?.code === 0) {
        team.hasJoin = true;
        showSuccessToast('加入成功')
        location.reload()
    } else {
        showFailToast(res.description)
    }
}
const updateTeam = (team: teamType) => {
    router.push('/team/update/' + team.id)
}
const quitTeam = async (team: teamType) => {
    const res: resType = await myAxios.post('/team/quit', {teamId: team.id})
    if(res?.code === 0) {
        showSuccessToast('退出队伍成功');
        location.reload()
    } else {
        showFailToast('操作失败');
    }
}
const deleteTeam = async (team: teamType) => {
    const res: resType = await myAxios.post('/team/delete', {teamId: team.id})
    if(res?.code === 0) {
        showSuccessToast('队伍解散成功')
        location.reload()
    } else {
        showFailToast('操作失败')
    }
}
onMounted( async () => {
    teamList.value = getTeamList()
    currentUser.value = await getCurrentUser();
    setCurrentUser(currentUser.value)
})
</script>

<style scoped>
#teamCardList :deep(.van-image__img) {
    height: 128px;
    object-fit: unset;
}
</style>
