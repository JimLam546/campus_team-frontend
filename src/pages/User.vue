<template>

    <div class="img" style="margin-top: 10px">
        <van-uploader :after-read="afterRead">
            <van-image
                    :src="user.avatarUrl"
                    height="10rem"
                    radius="20px"
                    style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                    width="10rem"
            />
        </van-uploader>
    </div>

    <van-divider />

    <van-cell icon="flag-o" title="标签" :center="true">
        <template #value>
            <van-tag v-for="tag in user.tagList" plain type="primary"
                     style="margin-right: 8px">{{ tag }}</van-tag>
        </template>
    </van-cell>

    <!--<van-grid>-->
    <!--    <van-grid-item text="创建的队伍" @click="toCreateTeamList">-->
    <!--        <template #icon>-->
    <!--            <van-icon name="friends-o" size="30px" />-->
    <!--        </template>-->
    <!--    </van-grid-item>-->
    <!--    <van-grid-item text="加入的队伍" @click="toJoinTeamList">-->
    <!--        <template #icon>-->
    <!--            <van-icon name="user-circle-o" size="30px"/>-->
    <!--        </template>-->
    <!--    </van-grid-item>-->
    <!--    <van-grid-item text="好友列表">-->
    <!--        <template #icon>-->
    <!--            <van-icon name="coupon-o" size="30px"/>-->
    <!--        </template>-->
    <!--    </van-grid-item>-->
    <!--    <van-grid-item icon="photo-o" text="联系客服">-->
    <!--        <template #icon>-->
    <!--            <van-icon name="service-o" size="30px"/>-->
    <!--        </template>-->
    <!--    </van-grid-item>-->
    <!--</van-grid>-->
    <van-cell title="创建的队伍" style="padding: 20px" is-link to="/user/myTeam" :center="true">
        <template #icon>
            <van-icon name="friends-o" size="20" style="margin-right: 5px" color="#1989fa"/>
        </template>
    </van-cell>
    <van-cell title="加入的队伍" style="padding: 20px" is-link to="/user/joinTeam" :center="true">
        <template #icon>
            <van-icon name="user-circle-o" size="20" style="margin-right: 5px" color="#1989fa"/>
        </template>
    </van-cell>
    <van-cell title="个人信息" style="padding: 20px" is-link to="/user/sign" :center="true">
        <template #icon>
            <van-icon name="setting-o" size="20" style="margin-right: 5px" color="#1989fa"/>
        </template>
    </van-cell>

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
// const toEdit = (editName: string, editKey: string, currentValue: string) => {
//     router.push({
//         path: '/user/edit',
//         query: {
//             id: user.value.id,
//             editKey: editKey,
//             editName: editName,
//             currentValue: currentValue
//         }
//     })
// }
const toCreateTeamList = () => {
    router.push('/user/myTeam');
}
const toJoinTeamList = () => {
    router.push('/user/joinTeam');
}
onMounted(async () => {
    const res = await myAxios.get('/user/current')
    user.value = res.data
    user.value.tagList = JSON.parse(user.value.tags)
    setCurrentUser(user.value)
})
// const toRadioEdit = (editKey: string, currentValue: string) => {
//     router.push({
//         path: '/user/radioEdit',
//         query: {
//             id: user.value.id,
//             editKey: editKey,
//             currentValue: currentValue
//         }
//     })
// }
// const toEditTag = (editKey: string, currentValue: string) => {
//     router.push({
//         path: '/user/tagEdit',
//         query: {
//             id: user.value.id,
//             editKey: editKey,
//             currentValue: currentValue
//         }
//     })
// }
const lough = () => {
    myAxios.post('/user/lough')
    router.replace('/')
}

const afterRead = async (file) => {
    let type = file.file.type;
    const formData = new FormData();
    formData.append('file', file.file); // 将文件对象添加到 FormData 对象中
    if(type === 'image/jpeg' || type === 'image/png') {
        // console.log(file)
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
