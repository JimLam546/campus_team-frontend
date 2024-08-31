<template>
    <van-form @submit="onSubmit">
        <van-field
                v-model="editUser.currentValue"
                :placeholder="`请输入${editUser.editName}`"
                :name="editUser.editName"
                :label="editUser.editName"
                :rules="[{ required: true, message: `请填写${editUser.editName}` }]"
        />
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
    </van-form>

</template>

<script setup>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import myAxios from "../../libs/axiosRequest.ts";
import {showLoadingToast, showSuccessToast} from "vant";

    const route = useRoute()
    const router = useRouter()
    const editUser = ref({
        id: route.query.id,
        editName: route.query.editName,
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
