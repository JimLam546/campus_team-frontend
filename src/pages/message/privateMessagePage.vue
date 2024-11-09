<template>
    <div id="privateMessagePage">
        <van-sticky>
            <van-nav-bar
                    :title="remoteUser.username"
                    left-arrow
                    right-text="按钮"
                    @click-left="left"
                    @click-right="onClickRight"
            >
                <template #right>
                    <van-icon name="ellipsis" size="18px"/>
                </template>
            </van-nav-bar>
        </van-sticky>
        <div class="chat-container">
            <div ref="chatRoom" class="content" v-html="state.content"></div>
            <van-cell-group inset style="position: fixed;bottom: 0;width: 100%; margin-left: 0">
                <van-field
                        v-model="state.text"
                        center
                        clearable
                        placeholder="聊点什么吧...."
                >
                    <template #button>
                        <van-button size="small" style="margin-right: 0" type="primary" @click="send">发送
                        </van-button>
                    </template>
                </van-field>
            </van-cell-group>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref, nextTick} from "vue";
import {getUser} from "../../services/user.ts";
import {useRoute, useRouter} from "vue-router";
import {showFailToast} from "vant";
import {getPrivateMessageList} from "../../services/chat.ts";

const route = useRoute();
const router = useRouter();
const remoteUser = ref({});
const chatRoom = ref();
const state = ref({
    text: "",
    content: "",
})
const getRemoteUser = async () => {
    const res = await getUser(route.query.id);
    if (res) {
        remoteUser.value = res;
        return;
    }
    showFailToast("获取对方信息失败");
}
const left = () => router.back();
const onClickRight = () => {
    router.push({
        path: '/user/detail',
        query: {
            id: route.query.id
        }
})}
const send = () => {
    showFailToast("待开发...")
}
const messageList = ref([]);
// 获取私聊消息
const getPrivateMessage = async () => {
    const res = await getPrivateMessageList(route.query.id);
    if (res) {
        messageList.value = res;
        return;
    }
    showFailToast("获取聊天记录失败");
}
// 将聊天记录渲染到页面
const renderPage = async () => {
    await getPrivateMessage();
    messageList.value.forEach((chat) => {
        if (chat.isMyMessage) {
            createContent(null, chat.fromUser, chat.text, false, chat.createTime);
        } else {
            createContent(chat.toUser, null, chat.text, false, chat.createTime);
        }
    })
    // init()
    // await nextTick()
    // const lastElement = chatRoom.value.lastElementChild
    // lastElement.scrollIntoView()
}
const showUser = (id) => {
    showFailToast("展示用户细节，还未实现")
}
const createContent = (remoteUser, nowUser, text, isAdmin, createTime) => {
    // 当前用户消息
    let html;
    if (nowUser) {
        // nowUser 表示是否显示当前用户发送的聊天消息，绿色气泡
        html = `
    <div class="message self">
    <div class="myInfo info">
      <img :alt=${nowUser.username} class="avatar" onclick="showUser(${nowUser.id})" src=${nowUser.avatarUrl}>
    </div>
      <p class="text">${text}</p>
    </div>
`
    } else if (remoteUser) {
        // remoteUser表示远程用户聊天消息，灰色的气泡
        html = `
     <div class="message other">
      <img :alt=${remoteUser.username} class="avatar" onclick="showUser(${remoteUser.id})" src=${remoteUser.avatarUrl}>
    <div class="info">
      <span class="username">${remoteUser.username.length < 10 ? remoteUser.username : remoteUser.username}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${createTime}</span>
      <p class="${isAdmin ? 'admin text' : 'text'}" >${text}</p>
    </div>
    </div>
`
    }
    console.log("html=", html)
    state.value.content += html;
}
window.showUser = showUser
onMounted(() => {
    getRemoteUser();
    renderPage();
    console.log(state.value.content)
})
</script>

<style>
.chat-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: auto;
}

.message {
    display: flex;
    align-items: center;
    margin: 10px 10px;
}

.content {
    padding-top: 22px;
    padding-bottom: 57px;
    display: flex;
    flex-direction: column
}

.avatar {
    align-self: flex-start;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: 10px;
}

.text {
    margin-top: 0;
    padding: 10px;
    border-radius: 10px;
    background-color: #eee;
    word-wrap: break-word;
    word-break: break-all;
}

.other .text {
    align-self: flex-start;
}

.self .text {
    background-color: #0084ff;
    color: #fff;
}

.username {
    align-self: flex-start;
    text-align: center;
    max-width: 200px;
    font-size: 12px;
    color: #999;
    margin-top: -20px;
    padding-bottom: 2px;
    white-space: nowrap;
    overflow: visible;
    background-color: #fff;
}

.info {
    display: flex;
    flex-direction: column;
    order: 2;
}

.myInfo {
    align-self: flex-start;
}
</style>
