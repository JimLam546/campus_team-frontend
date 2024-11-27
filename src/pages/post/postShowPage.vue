<template>
    <div id="postShowPage">
        <van-button class="btn_createTeam" icon="records-o" to="" type="primary"></van-button>
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
                        <img :alt=post.userVO.username :src=post.userVO.avatarUrl class="avatar"
                             onclick="showUser(${remoteUser.id})">
                    </div>
                    <div class="content">
                        <div class="postUsername">
                            <span style="color: #576BB0; font-size: 16px;">{{ post.userVO.username }}</span><span
                                style="color: #9999A6; font-size: 13px;"> · {{ timeAgo(post.createTime) }}</span>
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
                        <div class="button">
                            <div v-if="!postList[postList.indexOf(post)].isLiked" id="liked"
                                 @click="liked(post, POST_TYPE, null)">
                                <van-icon name="good-job-o" size="20px"/>
                                <span v-if="postList[postList.indexOf(post)].likedNum < 1"
                                      style="margin-left: 5px;">点赞</span>
                                <span v-else style="margin-left: 5px">{{ post.likedNum }}</span>
                            </div>
                            <div v-else id="liked" @click="liked(post, POST_TYPE, null)">
                                <van-icon color="#1989FA" name="good-job" size="20px"/>
                                <span style="margin-left: 5px">{{ post.likedNum }}</span>
                            </div>
                            <div id="toComment" @click="show = true">
                                <van-icon name="edit" size="20px"/>
                                <span>评论</span>
                            </div>
                        </div>
                    </div>

                    <div v-for="comment in post.commentVOList" :key="comment.id" class="commentContain">

                        <div class="commentImage">
                            <img :alt=post.userVO.username :src=post.userVO.avatarUrl class="commentAvatar"
                                 onclick="showUser(${remoteUser.id})">
                        </div>
                        <div class="commentContent">
                            <div class="postUsername">
                                <span style="color: #777777; font-size: 13px;">{{ comment.userVO.username }}</span><span
                                    style="color: #9999A6; font-size: 12px;"> · {{ timeAgo(comment.createTime) }}</span>
                            </div>
                            <div class="postContent">
                                <span style="width: 70%; font-size: 15px">{{ comment.content }}</span>
                            </div>
                        </div>

                        <div class="commentButton">
                            <div v-if="!postList[postList.indexOf(post)].commentVOList[postList[postList.indexOf(post)].commentVOList.indexOf(comment)].myLiked"
                                 id="liked" @click="liked(post, COMMENT_TYPE, comment)">
                                <van-icon name="good-job-o" size="20px"/>
                                <span v-if="postList[postList.indexOf(post)].commentVOList[postList[postList.indexOf(post)].commentVOList.indexOf(comment)].likedNum > 0"
                                      style="margin-left: 5px">{{
                                    postList[postList.indexOf(post)].commentVOList[postList[postList.indexOf(post)].commentVOList.indexOf(comment)].likedNum
                                    }}</span>
                            </div>
                            <div v-else id="liked" @click="liked(post, COMMENT_TYPE, comment)">
                                <van-icon color="#1989FA" name="good-job" size="20px"/>
                                <span style="margin-left: 2px">{{
                                    postList[postList.indexOf(post)].commentVOList[postList[postList.indexOf(post)].commentVOList.indexOf(comment)].likedNum
                                    }}</span>
                            </div>
                        </div>

                        <!--评论弹窗-->
                        <van-dialog v-model:show="show" title="评论" show-cancel-button
                                    @cancel="cancel" @confirm="publishComment(post)">
                            <van-cell-group inset>
                                <van-field
                                    v-model="commentContent"
                                    rows="1"
                                    autosize
                                    label="评论内容"
                                    type="textarea"
                                    maxlength="50"
                                    placeholder="请输入评论"
                                    show-word-limit
                                />
                            </van-cell-group>
                        </van-dialog>
                    </div>
                </div>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {Service} from "../../../generated";
import {showFailToast, showImagePreview} from "vant";
import {useRouter} from "vue-router";

const POST_TYPE = 1;
const COMMENT_TYPE = 2;
const loading = ref(false);
const listLoading = ref(false);
const show = ref(false);
const postList = ref([]);
const commentContent = ref("");
const router = useRouter();
const pageRequest = ref({
    pageNum: 0,
    pageSize: 10,
});
const publishComment = async (post) => {
    const res = await Service.publishCommentUsingPost({postId: post.id, content: commentContent.value});
    if (res.data == true) {
        post.commentVOList.push(res.data);
        return;
    }
    showFailToast("评论失败");
}
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
    const res = await Service.listPostUsingPost(pageRequest.value);
    if (res.data.length === 0) {
        finished.value = true;
        return;
    }
    for (let i = 0; i < res.data.length; i++) {
        postList.value.push(res.data[i]);
    }
    console.log(postList.value)
}
const liked = async (post, type, comment) => {
    const res = await Service.likedUsingGet(post.id, type);
    if (res.code === 0) {
        if (type === POST_TYPE) {
            // 帖子
            postList.value[postList.value.indexOf(post)].isLiked = res.data;
            if (res.data === true) {
                postList.value[postList.value.indexOf(post)].likedNum++;
            } else {
                postList.value[postList.value.indexOf(post)].likedNum--;
            }
        } else {
            // 评论
            // console.log("123", postList.value[postList.value.indexOf(post)].commentVOList[postList.value[postList.value.indexOf(post)].commentVOList.indexOf(comment)].myLiked)
            postList.value[postList.value.indexOf(post)].commentVOList[postList.value[postList.value.indexOf(post)].commentVOList.indexOf(comment)].myLiked = res.data;
            if (res.data === true) {
                postList.value[postList.value.indexOf(post)].commentVOList[postList.value[postList.value.indexOf(post)].commentVOList.indexOf(comment)].likedNum++;
            } else {
                postList.value[postList.value.indexOf(post)].commentVOList[postList.value[postList.value.indexOf(post)].commentVOList.indexOf(comment)].likedNum--;
            }
        }
        return;
    }
    showFailToast("网络异常");
}
onMounted(() => {
    // getPostList();
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

<style>
#postShowPage {
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

.commentAvatar {
    align-self: flex-start;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 15px;
    margin-left: 40px;
    margin-top: 10px;
}

.content {
    padding: 0;
    width: 70%;
    margin-bottom: 10px;
}

.postContent {
    width: 100%;
    font-size: 17px;
    margin-top: 5px;
}

.button {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}

#liked {
    width: 60px;
    justify-self: left;
    display: flex;
    align-items: center;
    justify-content: center;
}

#commentLiked {
    width: 60px;
}

#toComment {
    height: 35px;
    width: 80px;
    justify-self: right;
    border: 1px solid #D9D9D9;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.commentContain {
    width: 100%;
    background-color: #F7F7F7;
    display: flex;
    box-sizing: border-box;
}

.commentContent {
    width: 60%;
    margin-bottom: 15px;
}

.commentButton {
    margin-top: 20px;
}

.btn_createTeam {
    position: fixed;
    height: 50px;
    width: 50px;
    left: 10px;
    bottom: 55px;
    top: auto;
    z-index: 1;
    border-radius: 100%;
}
</style>
