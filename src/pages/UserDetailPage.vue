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
        <template #value v-if="user.username">
            <span>{{user.username}}</span>
        </template>
        <template #value v-else>
            该用户未设置昵称
        </template>
    </van-cell>
    <van-cell icon="description-o" title="个人简介">
        <template #value v-if="user.profile">
            {{user.profile}}
        </template>
        <template #value v-else>
            该用户很懒，没有填写简介
        </template>
    </van-cell>
    <van-cell icon="flag-o" title="性别">
        <template #value v-if="user.gender">
            <div v-if="user.gender === 1">男</div>
            <div v-if="user.gender === 0">女</div>
        </template>
        <template #value v-else>
            保密
        </template>
    </van-cell>
    <van-cell icon="phone-o" :value="user.phone" title="联系方式">
        <template #value v-if="user.phone">
            {{user.phone}}
        </template>
        <template #value v-else>
            该用户未填写联系方式
        </template>
    </van-cell>
    <van-cell icon="envelop-o" :value="user.email" title="邮箱">
        <template #value v-if="user.email">
            {{user.email}}
        </template>
        <template #value v-else>
            该用户未填写邮箱
        </template>
    </van-cell>
    <van-cell icon="flag-o" title="标签">
        <template #value>
            <van-tag v-for="tag in user.tagList" plain type="primary"
                     style="margin-right: 8px">{{ tag }}</van-tag>
        </template>
    </van-cell>
</template>

<script lang="ts" setup>
import myAxios from "../libs/axiosRequest.ts";
import {showFailToast} from "vant";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const user = ref({})
let route = useRoute();
onMounted(async () => {
    // console.log(route.query.id)
    let res : resType= await myAxios.get('/user/query/' + route.query.id);
    if (res?.code !== 0) {
        showFailToast('该用户不存在');
    }
    // console.log(res.data)
    user.value = res.data;
    user.value.tagList = JSON.parse(res.data?.tags)
    // console.log(user.value)
})
</script>

<style scoped>
.img {
    display: flex;
    justify-content: center;
}
</style>
