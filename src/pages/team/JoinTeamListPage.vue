<template>
  <div id="joinTeamListPage">
      <team-card-list :team-list="teamList" />
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import myAxios from "../../libs/axiosRequest.js";

const teamList = ref();
onMounted(async () => {
    const res = await myAxios.get('/team//list/myJoin');
    teamList.value = res.data;
})
</script>

<style scoped>

</style>
