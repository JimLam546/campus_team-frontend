<template>
    <div id="myPostPublishPage">
        <van-pull-refresh v-model="loading" @refresh="refresh">

            <div style="height: 10px; width: 100%; background-color: #F7F7F7"></div>
            <!--下滑加载-->
            <van-list
                v-model:loading="listLoading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <div v-for="post in postList" :key="post.id" class="postContain">
                    <div class="image" @click="toUserDetail(post.userVO.id)">
                        <img :alt=post.userVO.username :src=post.userVO.avatarUrl class="avatar">
                    </div>
                    <div class="content">
                        <div class="usernameContain" style="display: flex; justify-content: space-between">
                            <div class="postUsername">
                                <span style="color: #576BB0; font-size: 16px;">{{ post.userVO.username }}</span><span
                                style="color: #9999A6; font-size: 13px;"> · {{ timeAgo(post.createTime) }}</span>
                            </div>
                            <div @click="showDelete(post.id)">
                                <span v-if="post.userVO.id === currentUser.id" style="font-size: 13px; color: red; display: block; margin-top: 15px;">删除</span>
                            </div>
                            <van-dialog v-model:show="showDeleteDialog" title="警告" show-cancel-button message="是否确认删除该帖子?" @confirm="deletePost"></van-dialog>
                        </div>
                        <div class="postContent">
                            <span style="width: 70%; font-size: 17px">{{ post.content }}</span>
                        </div>
                        <div class="postImage">
                            <img v-for="image in post.imageUrl" :src="image" alt=""
                                 style="max-width: 120px; margin: 5px"
                                 @click="showImagePreview({images: [image], closeable: true})"/>
                        </div>
                        <div class="postModule">
                            <span id="module" style="color: #576B94; font-size: 13px">#{{ post.module }}</span>
                        </div>
                    </div>

                </div>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {Service} from "../../../generated";
import {showFailToast, showImagePreview, showSuccessToast} from "vant";
import {useRouter} from "vue-router";

const loading = ref(false);
const listLoading = ref(false);
const postList = ref([]);
const commentContent = ref("");
const router = useRouter();
const deletePostId = ref();
const showDeleteDialog = ref(false);
const pageRequest = ref({
    pageNum: 0,
    pageSize: 10,
});
const currentUser = ref({});
const finished = ref(false);
const refresh = () => {
    pageRequest.value.pageNum = 1;
    postList.value = [];
    getPostList();
    loading.value = false;
}
const toUserDetail = (userId) => {
    router.push({
        path: '/user/detail',
        query: {
            id: userId
        }})
}
const onLoad = async () => {
    pageRequest.value.pageNum++;
    console.log(pageRequest.value.pageNum);
    await getPostList();
    listLoading.value = false;
}
const cancel = () => {
    commentContent.value = "";
}
const getPostList = async () => {
    const res = await Service.listMyPostUsingGet();
    if (res.data.length === 0) {
        finished.value = true;
        return;
    }
    for (let i = 0; i < res.data.length; i++) {
        postList.value.push(res.data[i]);
    }
    finished.value = true;
}
const deletePost = async () => {
    const res = await Service.deletePostUsingGet(deletePostId.value);
    if (res.code === 0) {
        location.reload();
        showSuccessToast("删除成功");
        return;
    }
    showFailToast("删除失败");
}
const getCurrentUser = async () => {
    const res = await Service.getCurrentUserUsingGet();
    if (res.code === 0) {
        currentUser.value = res.data;
        return;
    }
    showFailToast("获取登录用户失败");
}
const showDelete = (postId) => {
    deletePostId.value = postId;
    showDeleteDialog.value = true;
}
onMounted(() => {
    getCurrentUser();
})
const timeAgo = (dateTimeStamp) => {
    let result = "";
    let minute = 1000 * 60;      //把分，时，天，周，半个月，一个月用毫秒表示
    let hour = minute * 60;
    let day = hour * 24;
    let week = day * 7;
    let halfamonth = day * 15;
    let month = day * 30;
    let now = new Date().getTime();   //获取当前时间毫秒

    dateTimeStamp = dateTimeStamp.substring(0, 18);
    //必须把日期'-'转为'/'
    dateTimeStamp = dateTimeStamp.replace(/-/g, '/');
    let timestamp = new Date(dateTimeStamp).getTime();

    let diffValue = now - timestamp;//时间差

    if (diffValue < 0) {
        return result;
    }
    let minC = diffValue / minute;  //计算时间差的分，时，天，周，月
    let hourC = diffValue / hour;
    let dayC = diffValue / day;
    let weekC = diffValue / week;
    let monthC = diffValue / month;

    if (monthC >= 6 && monthC < 12) {
        result = " " + "半年前"
    } else if (monthC >= 1 && monthC < 6) {
        result = " " + parseInt(monthC) + "月前"
    } else if (weekC >= 1 && weekC < 4) {
        result = " " + parseInt(weekC) + "周前"
    } else if (dayC >= 1 && dayC < 7) {
        result = " " + parseInt(dayC) + "天前"
    } else if (hourC >= 1 && hourC < 24) {
        result = " " + parseInt(hourC) + "小时前"
    } else if (minC >= 1 && minC < 60) {
        result = " " + parseInt(minC) + "分钟前"
    } else if (diffValue >= 0 && diffValue <= minute) {
        result = "刚刚"
    } else {
        let datetime = new Date();
        datetime.setTime(timestamp);
        let Nyear = datetime.getFullYear();
        let Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
        let Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
        let Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
        let Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
        let Nsecond = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
        result = Nyear + "-" + Nmonth + "-" + Ndate
    }
    return result;
}
</script>

<style scoped>
#myPostPublishPage {
    margin-bottom: 30px;
}

.postModule {
    width: 80px;
    max-width: 200px;
    background-color: #DDE1EA;
    margin: 5px;
    text-align: center;
    line-height: 25px; /* 垂直居中 */
}

.postContain {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
}

.postUsername {
    height: 20px;
    margin-top: 15px;
}

.avatar {
    align-self: flex-start;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 15px;
    margin-left: 20px;
    margin-top: 10px;
}

.content {
    width: 70%;
    margin-bottom: 10px;
}

.postContent {
    width: 100%;
    font-size: 17px;
    margin-top: 5px;
}
</style>
