<template>
    <van-field name="radio" label="选择性别">
        <template #input>
            <van-radio-group v-model="editUser.currentValue" direction="horizontal">
                <van-radio name="0">女</van-radio>
                <van-radio name="1">男</van-radio>
            </van-radio-group>
        </template>
    </van-field>
    <div style="margin: 16px;">
        <van-button round block type="info" @click="onSubmit">提交</van-button>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRoute, useRouter} from "vue-router";
import {showLoadingToast, showSuccessToast} from "vant";
import myAxios from "../../libs/axiosRequest.ts";

    const route = useRoute()
    const router = useRouter()
    const editUser = ref({
        id: route.query.id,
        editKey: route.query.editKey,
        currentValue: route.query.currentValue
    })

    const onSubmit = async () => {
        showLoadingToast({
            message: '加载中...',
            forbidClick: true,
        });
        const res = await myAxios.post('/user/update', {
            id: editUser.value.id,
            [editUser.value.editKey]: editUser.value.currentValue,
        })
        if(res.code === 0) {
            await router.replace('/user')
            showSuccessToast('修改成功')
        }
    }
</script>

<style scoped>

</style>
