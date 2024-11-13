<template>
  <div id="messagePage">
      <van-cell to="/message/friendRequest">
          <template #title>
              <span class="cell-span">好友申请</span>
          </template>
          <template #icon>
              <van-badge v-if="applyNoReadNum>0" :content="applyNoReadNum" max="99">
                  <div class="icon_area">
                      <van-icon name="envelop-o" size="25"
                                style="color: #0da941;margin-left: 12px;margin-top: 13px"/>
                  </div>
              </van-badge>
              <van-badge v-else>
                  <div class="icon_area">
                      <van-icon name="bell" size="25"
                                style="margin-left: 12px;margin-top: 13px;color: #e89817"/>
                  </div>
              </van-badge>

          </template>
          <template #label>
              <span class="cell-span">新好友消息通知</span>
          </template>
      </van-cell>
      <van-cell to="/message/privateChatList">
          <template #title>
              <span class="cell-span">私聊</span>
          </template>
          <template #icon>
              <van-badge v-if="unReadPrivateNum>0" :content="unReadPrivateNum" max="99">
                  <div class="icon_area">
                      <van-icon name="envelop-o" size="25"
                                style="color: #0da941;margin-left: 12px;margin-top: 13px"/>
                  </div>
              </van-badge>
              <van-badge v-else>
                  <div class="icon_area">
                      <van-icon name="envelop-o" size="25"
                                style="margin-left: 12px;margin-top: 13px"/>
                  </div>
              </van-badge>
          </template>
          <template #label>
              <span class="cell-span">私聊用户归档</span>
          </template>
      </van-cell>
      <van-cell to="/message/teamChatList">
          <template #title>
              <span class="cell-span">队聊</span>
          </template>
          <template #icon>
              <van-badge v-if="unReadPrivateNum>0" :content="unReadPrivateNum" max="99">
                  <div class="icon_area">
                      <van-icon name="friends-o" size="25"
                                style="color: #0da941;margin-left: 12px;margin-top: 13px"/>
                  </div>
              </van-badge>
              <van-badge v-else>
                  <div class="icon_area">
                      <van-icon name="friends-o" size="25"
                                style="margin-left: 12px;margin-top: 13px"/>
                  </div>
              </van-badge>
          </template>
          <template #label>
              <span class="cell-span">队伍聊天群</span>
          </template>
      </van-cell>
  </div>
</template>

<script>
const unReadPrivateNum = 10;
</script>

<style scoped>
.icon_area {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ededed;
    position: relative;
    margin-left: 10px;
}
.cell-span {
    margin-top: 15px;
    margin-left: 10px;
}
</style>
