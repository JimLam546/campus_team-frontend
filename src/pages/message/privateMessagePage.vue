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
import {getCurrentUser, getUser} from "../../services/user.ts";
import {onBeforeRouteLeave, useRoute, useRouter} from "vue-router";
import {showFailToast} from "vant";
import {getPrivateMessageList} from "../../services/chat.ts";

const route = useRoute();
const router = useRouter();
const remoteUser = ref({});
const chatRoom = ref();
const currentUser = ref();
const state = ref({
    text: "",
    content: "",
    ws: null,
})
const getLoginUser = async () => {
    const res = await getCurrentUser();
    if (res) {
        currentUser.value = res;
        return;
    }
    showFailToast("获取当前登录用户信息失败");
}
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
    });
}
const PRIVATE_CHAT = 1;
const send = () => {
    if (!state.value.text.trim()) {
        showFailToast("请输入内容");
        return;
    }
    let message = {
        toId: route.query.id,
        text: state.value.text,
        chatType: PRIVATE_CHAT,
        isAdmin: false,
    }
    state.value.ws.send(JSON.stringify(message));
    createContent(null, currentUser.value, state.value.text);
    state.value.text = "";
    nextTick(() => {
        const lastElement = chatRoom.value.lastElementChild
        lastElement.scrollIntoView()
    })
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
        if (chat.myMessage) {
            createContent(null, chat.fromUser, chat.text, false, chat.createTime);
        } else {
            createContent(chat.fromUser, null, chat.text, false, chat.createTime);
        }
    })
    await init();
    await nextTick();
    const lastElement = chatRoom.value.lastElementChild;
    lastElement.scrollIntoView();
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
    // console.log("html=", html)
    state.value.content += html;
}
window.showUser = onClickRight;
let heartbeatTimer = null;
const startHeartbeat = (ws) => {
    heartbeatTimer = setInterval(() => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send("PING");
        }
    }, 10 * 1000); // 30 秒
}
const stopHeartbeat = () => {
    clearInterval(heartbeatTimer);
    heartbeatTimer = null;
}
const reconnection = ref(true);
const init = async () => {
    await getLoginUser();
    // 建立 WebSocket
    const ws = new WebSocket("ws://localhost:8080/chat/" + `${currentUser.value.id}/NaN`);
    state.value.ws = ws;
    ws.onopen = () => {
        // 开启心跳
        startHeartbeat(ws);
    }
    ws.onmessage = (msg) => {
        if (msg.data === "PONG") {
            return;
        }
        // 解析成 json 对象
        let data = JSON.parse(msg.data);
        // console.log("接收的内容:", data);
        createContent(data.fromUser, null, data.text, data.isAdmin, data.createTime);
        nextTick(() => {
            const lastElement = chatRoom.value.lastElementChild
            lastElement.scrollIntoView()
        })
    }
    //关闭事件
    ws.onclose = function () {
        stopHeartbeat();
        if (reconnection.value) {
            setTimeout(init, 5000); // 5秒后重连
        }
    };
}
onMounted(() => {
    getLoginUser();
    getRemoteUser();
    renderPage();
})
onBeforeRouteLeave(() => {
    reconnection.value = false;
    stopHeartbeat();
    state.value.ws.close();
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

.self {
    align-self: flex-end;
}

.avatar {
    align-self: flex-start;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: 10px;
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
</style>
