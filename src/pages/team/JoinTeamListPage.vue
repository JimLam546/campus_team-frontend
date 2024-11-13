<template>
  <div id="joinTeamListPage">
      <van-empty v-if="mark && teamList.length < 1" description="您还没有加入过任何一个队伍" />
      <van-skeleton v-if="!mark" title avatar :row="5" style="margin-top: 30px" />
      <team-card-list :team-list="teamList" />
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import myAxios from "../../libs/axiosRequest.js";

const teamList = ref();
const mark = ref(false);
onMounted(async () => {
    const res = await myAxios.get('/team//list/myJoin');
    mark.value = true;
    teamList.value = res.data;
})
</script>

<style scoped>

</style>
