<template>
    <div id="createPostPage">
        <van-field
            v-model="module"
            is-link
            readonly
            label="内容模块"
            placeholder="选择模块"
            @click="showPicker = true"
        />
        <van-popup v-model:show="showPicker" round position="bottom" >
            <van-picker
                :columns="columns"
                @cancel="showPicker = false"
                @confirm="onConfirm"
            />
        </van-popup>

        <van-cell-group inset>
            <van-field
                v-model="content"
                rows="2"
                :autosize="{ maxHeight: 250, minHeight: 250 }"
                type="textarea"
                maxlength="2000"
                placeholder="`请输入内容`"
                show-word-limit
                clearable
            />
        </van-cell-group>

        <div class="uploadImage">
            <van-uploader v-model="fileList" multiple :before-read="beforeRead" :after-read="afterRead" max-count="4" :max-size="10 * 1024 * 1024" @oversize="showFailToast('文件大小不能超过10MB')"/>
        </div>
        <div style="margin: 10px">
            <span style="color:#777777; font-size: 13px">*请务必遵循</span><span style="color: #5B77A4; font-size: 14px; font-weight: bold"> 社区规范 </span><span style="color:#777777; font-size: 13px">，如有违规会被删帖、禁言乃至封号</span>
        </div>
        <div style="margin: 20px 20px auto 20px; ">
            <van-button block round type="primary" @click="publishPost">发布</van-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {Service} from "../../../generated";
import {useRouter} from "vue-router";
import {showFailToast, showSuccessToast} from "vant";
const module = ref('');
const showPicker = ref(false);
const content = ref("");
const fileList = ref([]);
const router = useRouter();
const imageUrlList = ref([]);
const columns = [
    { text: '日常生活', value: '日常生活' },
    { text: '身边趣事', value: '身边趣事' },
    { text: '寻找伙伴', value: '寻找伙伴' },
    { text: '学业疑难', value: '学业疑难' },
    { text: '吐槽爆料', value: '吐槽爆料' },
    { text: '食品饮料', value: '食品饮料' },
    { text: '寻物招领', value: '寻物招领' },
    { text: '情感', value: '情感' },
];
const onConfirm = ({ selectedOptions }) => {
    showPicker.value = false;
    module.value = selectedOptions[0].text;
}
// 上传前置处理
const beforeRead = (file) => {
    if (file.type !== 'image/jpeg') {
        showFailToast('请上传 jpg 格式图片');
        return false;
    }
    if (fileList.value.length >= 4) {
        showFailToast('最多上传4张图片');
        return false;
    }
    return true;
};
// 上传后置处理
const afterRead = async (file) => {
    file.status = 'uploading';
    file.message = '上传中';
    const res = await Service.uploadImageUsingPost(file.file);
    if (res.code === 0) {
        file.status = '';
        imageUrlList.value.push(res.data);
        return;
    }
    file.status = 'failed'
    file.message = '上传失败';
}
// const uploadImageList = async () => {
//     console.log(fileList.value);
//     const res = await Service.uploadImageUsingPost(fileList.value);
//     if (res.code === 0) {
//         imageUrlList.value = res.data;
//         return true;
//     }
//     showFailToast("图片提交失败");
//     return false;
// }
const publishPost = async () => {
    if (module.value === "") {
        showFailToast("请选择模块");
        return;
    }
    if (content.value === "") {
        showFailToast("请输入内容");
        return;
    }
    for (let i = 0; i < fileList.value.length; i++) {
        if (fileList.value[i].status !== '') {
            showFailToast("等待图片上传完成");
            return;
        }
    }
    const res = await Service.publishPostUsingPost({
        content: content.value,
        module: module.value,
        imageUrlList: imageUrlList.value
    });
    await router.replace(
        {
            path: "/post/index",
        }
    );
    if (res.code === 0) {
        showSuccessToast("发布成功");
        return;
    }
    showFailToast("发布失败");
}
</script>

<style scoped>
.uploadImage {
    margin-left: 20px;
    margin-top: 20px;
}
</style>
