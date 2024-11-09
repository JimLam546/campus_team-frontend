<template>
    <div id="ChatPage">
        <van-cell-group>
            <van-cell @click="">
                <template #title>
                    title
                    <!--<span class="cell-span">{{ user.username}}</span>-->
                </template>
                <template #label>
                    label
                    <!--<span class="cell-span">{{ user.lastMessage }}</span>-->
                </template>
                <template #icon>
                    <van-image src="https://img.zcool.cn/community/01a6095f110b9fa8012066219b67d4.png@1280w_1l_2o_100sh.png"
                        round width="50" height="50" style="margin-right: 10px"/>
                    <!--<van-badge v-if="user.unReadNum>0" :content="user.unReadNum" max="99">-->
                    <!--    <van-image :src="user.avatarUrl || defaultImg" round width="50" height="50"-->
                    <!--               style="margin-left: 10px"/>-->
                    <!--</van-badge>-->
                    <!--<van-badge v-else>-->
                    <!--    <van-image :src="user.avatarUrl || defaultImg" round width="50" height="50"-->
                    <!--               style="margin-left: 10px"/>-->
                    <!--</van-badge>-->
                </template>
                <template #value>
                    value
                    <!--{{ user.lastMessageDate }}-->
                </template>
            </van-cell>
        </van-cell-group>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
