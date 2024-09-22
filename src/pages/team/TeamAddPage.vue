<template>
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field
                v-model="team.teamName"
                name="队伍名称"
                label="队伍名称"
                placeholder="队伍名称"
                :rules="[{ required: true, message: '请填写队伍名称' }]"
            />
            <van-cell-group>
                <van-field
                    v-model="team.description"
                    rows="2"
                    autosize
                    label="队伍描述"
                    type="textarea"
                    maxlength="200"
                    placeholder="请输入队伍描述"
                    show-word-limit
                />
            </van-cell-group>


            <van-field name="stepper" label="最大人数">
                <template #input>
                    <van-stepper v-model="team.maxNum" />
                </template>
            </van-field>


            <!--时间选择器-->
            <van-field
                v-model="timeResult"
                is-link
                readonly
                name="datePicker"
                label="设置截止时间"
                placeholder="点击选择时间"
                @click="showPicker = true"
            />
            <van-popup v-model:show="showPicker" position="bottom">
                <van-date-picker @confirm="onConfirm" @cancel="showPicker = false"
                                 :min-date="minDate"/>
            </van-popup>


            <van-field name="radio" label="队伍状态">
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
                type="text"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />

        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                创建队伍
            </van-button>
        </div>
    </van-form>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import myAxios from "../../libs/axiosRequest.ts";
import {useRoute, useRouter} from "vue-router";
import {showFailToast, showSuccessToast} from "vant";

const route = useRoute();
const router = useRouter();
const minDate = new Date();
const team = ref({
    id: route.params.id, // 队伍id
    teamName: '',
    description: '',
    userId: 0,
    expireTime: new Date(),
    maxNum: 1,
    teamStatus: 0,
    teamPassword: '',
});
const checked = ref('0');
const timeResult = ref();
const showPicker = ref(false);
const onConfirm = ({ selectedValues }) => {
    timeResult.value = selectedValues.join('/');
    team.value.expireTime = new Date(timeResult.value);
    showPicker.value = false;
};
const onSubmit = async () => {
    if(!timeResult.value) {
        showFailToast('过期时间不能为空');
        return;
    }
    team.value.teamStatus = Number(checked.value) // 调整队伍状态类型 string -> number
    const res: resType = await myAxios.post('/team/add', team.value)
    if(res?.code === 0) {
        showSuccessToast('创建成功')
        router.back()
    } else {
        showFailToast('操作失败')
    }
    // console.log(res)
}
onMounted(() => {
})
</script>

<style scoped>

</style>
