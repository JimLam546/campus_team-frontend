<template>

    <div class="img">
        <van-image
            :src="team.avatarUrl"
            radius="10px"
            style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
            width="100%"
        />
    </div>

    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-divider />
            <van-cell title="队伍图标" :center="true">
                <van-uploader :after-read="afterRead">
                    <van-button icon="plus" type="primary">上传文件</van-button>
                </van-uploader>
            </van-cell>
            <van-field
                    v-model="team.teamName"
                    :rules="[{ required: true, message: '请填写队伍名称' }]"
                    label="队伍名称"
                    name="队伍名称"
                    placeholder="队伍名称"
            />
            <van-field
                    v-model="team.description"
                    autosize
                    label="队伍描述"
                    placeholder="请输入描述"
                    rows="1"
                    type="textarea"
            />

            <van-field label="最大人数" name="stepper">
                <template #input>
                    <van-stepper v-model="team.maxNum"/>
                </template>
            </van-field>


            <!--时间选择器-->
            <van-field
                    v-model="timeResult"
                    is-link
                    label="设置截止时间"
                    name="datePicker"
                    placeholder="点击选择时间"
                    readonly
                    @click="showPicker = true"
            />
            <van-popup v-model:show="showPicker" position="bottom">
                <van-date-picker :min-date="new Date()" @cancel="showPicker = false" @confirm="onConfirm"/>
            </van-popup>

            <van-field label="队伍状态" name="radio">
                <template #input>
                    <van-radio-group v-model="checked" direction="horizontal">
                        <van-radio name="0">公开</van-radio>
                        <van-radio name="1">加密</van-radio>
                        <van-radio name="2">私有</van-radio>
                    </van-radio-group>
                </template>
            </van-field>

            <van-field
                    v-if="checked === '1'"
                    v-model="team.teamPassword"
                    :rules="[{ required: true, message: '请填写密码' }]"
                    label="密码"
                    name="密码"
                    placeholder="密码"
                    type="text"
            />

        </van-cell-group>
        <div style="margin: 16px;">
            <van-button block native-type="submit" round type="primary">
                提交
            </van-button>
        </div>
    </van-form>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import myAxios from "../../libs/axiosRequest.ts";
import {useRoute, useRouter} from "vue-router";
import {showFailToast, showSuccessToast, showToast} from "vant";

const route = useRoute();
const router = useRouter();
const team = ref({
    id: route.params.id, // 队伍id
    teamName: '',
    description: '',
    userId: 0,
    expireTime: new Date(),
    maxNum: 1,
    teamStatus: 0,
    teamPassword: '',
    avatarUrl: '',
    strExpireTime: '',
});
const checked = ref('0');
const timeResult = ref('');
const showPicker = ref(false);
const onConfirm = ({selectedValues}) => {
    // console.log('selectedValues=', selectedValues)
    timeResult.value = selectedValues.join('/');
    showPicker.value = false;
    // console.log('时间',new Date(result.value))
    team.value.expireTime = new Date(timeResult.value)
    // console.log('时间', team.value.expireTime)
};

const getTeam = async () => {
    const res: resType = await myAxios.get('/team/get', {params: {id: route.params.id}})
    if (res?.code === 0) {
        checked.value = String(res.data.teamStatus) // 将数字状态改为string类型用于绑定单选框
        timeResult.value = res.data.expireTime // 将后端的时间放在选择器中显示
        team.value = res.data
        // 修改时间格式
        team.value.strExpireTime = res.data.expireTime.split(' ')[0]
        let date = team.value.strExpireTime.split('-')
        timeResult.value = date.join('/')
        team.value.expireTime = new Date(timeResult.value)
    }
};
const afterRead = async (file) => {
    let type = file.file.type;
    const formData = new FormData();
    formData.append('file', file.file); // 将文件对象添加到 FormData 对象中
    if(type === 'image/jpeg' || type === 'image/png') {
        // console.log(file)
        let res: resType = await myAxios.post('/team/uploadAvatar', {'file': file.file, teamId: team.value.id}, {headers: {"Content-Type": "multipart/form-data"}});
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
const onSubmit = async () => {
    team.value.teamStatus = Number(checked.value) // 调整队伍状态类型 string -> number
    const res: resType = await myAxios.post('/team/update', team.value)
    if (res?.code === 0) {
        showSuccessToast('队伍信息更新成功')
        router.back()
    } else {
        showFailToast('操作失败')
    }
    // console.log(res)
}
onMounted(() => {
    getTeam();
})
</script>

<style scoped>
.img {
    display: flex;
    justify-content: center;
}
</style>
