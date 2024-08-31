<template>

    <div class="img">
        <van-uploader :after-read="afterRead">
            <van-image
                    :src="user.avatarUrl"
                    height="10rem"
                    round
                    style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                    width="10rem"
            />
        </van-uploader>
    </div>


    <van-cell :value="user.username" is-link title="昵称" @click="toEdit('昵称', 'username', user.username)"/>
    <van-cell :value="user.userAccount" title="账号"/>
    <van-cell :value="user.profile" is-link title="个人简介"/>
    <van-cell is-link title="性别" @click="toRadioEdit('gender', user.gender)">
        <template #default>
            <div v-if="user.gender === 1">男</div>
            <div v-if="user.gender === 0">女</div>
        </template>
    </van-cell>
    <van-cell :value="user.phone" is-link title="联系方式" @click="toEdit('联系方式', 'phone', user.phone)"/>
    <van-cell :value="user.email" is-link title="邮箱" @click="toEdit('邮箱', 'phone', user.email)"/>
    <van-cell is-link title="标签" @click="toEditTag( 'tags', user.tags)">
        <template #value>
            <van-tag v-for="tag in user.tagList" plain type="primary">{{ tag }}</van-tag>
        </template>
    </van-cell>
    <van-cell :value="user.createTimeStr" title="注册时间"/>

    <div style="margin: 20px 20px auto 20px; ">
        <van-button block type="primary" @click="lough">退出登录</van-button>
    </div>
</template>

<script lang="ts" setup>
import router from "../router";
import {onMounted, ref} from 'vue'
import myAxios from "../libs/axiosRequest.ts";
import {setCurrentUser} from "../storage/userStoage.ts";
import {showSuccessToast, showToast} from "vant";

const user = ref({});
const toEdit = (editName: string, editKey: string, currentValue: string) => {
    router.push({
        path: '/user/edit',
        query: {
            id: user.value.id,
            editKey: editKey,
            editName: editName,
            currentValue: currentValue
        }
    })
}
onMounted(async () => {
    const res = await myAxios.get('/user/current')
    user.value = res.data
    user.value.tagList = JSON.parse(user.value.tags)
    setCurrentUser(user.value)
})
const toRadioEdit = (editKey: string, currentValue: string) => {
    router.push({
        path: '/user/radioEdit',
        query: {
            id: user.value.id,
            editKey: editKey,
            currentValue: currentValue
        }
    })
}
const toEditTag = (editKey: string, currentValue: string) => {
    router.push({
        path: '/user/tagEdit',
        query: {
            id: user.value.id,
            editKey: editKey,
            currentValue: currentValue
        }
    })
}
const lough = () => {
    myAxios.post('/user/lough')
    router.replace('/')
}

const afterRead = async (file) => {
    let type = file.file.type;
    const formData = new FormData();
    formData.append('file', file.file); // 将文件对象添加到 FormData 对象中
    if(type === 'image/jpeg' || type === 'image/png') {
        console.log(file)
        let res: resType = await myAxios.post('/user/uploadAvatar', {'file': file.file}, {headers: {"Content-Type": "multipart/form-data"}});
        if(res?.code === 0) {
            showSuccessToast('上传成功');
            location.reload();
            return true;
        }
        showToast('网络异常');
        return false;
    }
    showToast('请上传 jpg/png 格式图片');
}
</script>

<style scoped>
.img {
    display: flex;
    justify-content: center;
}
</style>
