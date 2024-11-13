<template>
    <div id="createTeamListPage">
        <van-empty v-if="mark && teamList.length < 1" description="您还没有创建过任何一个队伍" />
        <van-skeleton v-if="!mark" title avatar :row="5" style="margin-top: 30px" />
      <team-card-list :teamList="teamList"/>
    </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import myAxios from "../../libs/axiosRequest.ts";
import TeamCardList from "../../components/team-card-list.vue";

const teamList = ref();
const mark = ref(false);
onMounted(async () => {
    const res = await myAxios.get('/team//list/myCreate');
    mark.value = true;
    teamList.value = res.data;
})
</script>

<style scoped>

</style>
