<template>
    <div id="createTeamListPage">
      <team-card-list :teamList="teamList"/>
    </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import myAxios from "../../libs/axiosRequest.ts";
import TeamCardList from "../../components/team-card-list.vue";

const teamList = ref();
onMounted(async () => {
    const res = await myAxios.get('/team//list/myCreate');
    teamList.value = res.data;
})
</script>

<style scoped>

</style>
