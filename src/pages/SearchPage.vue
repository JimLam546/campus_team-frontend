<template>
    <form action="/">
        <van-search
                v-model="searchContext"
                show-action
                placeholder="请输入搜索的标签"
                @search="onSearch"
                @cancel="onCancel"
        />
    </form>
    <van-divider content-position="left">已选标签</van-divider>
    <van-row>
        <van-col v-for="tag in activeIds" style="padding: 0 8px 5px 3px">
          <van-tag  closeable size="large" type="primary" @close="doClose(tag)">
              {{ tag }}
          </van-tag>
        </van-col>
    </van-row>
    <div v-if="activeIds.length === 0"><span style="color: #969799">请选择标签</span></div>

    <van-tree-select
            v-model:active-id="activeIds"
            v-model:main-active-index="activeIndex"
            :items="tagList"
    />

    <div style="padding: 2em">
        <van-button type="primary" @click="onSearchUserList" block>搜索</van-button>
    </div>
</template>

<script setup>
  import {ref} from 'vue'
  import {useRouter} from "vue-router";

  const router = useRouter()
  const searchContext = ref('')
  const activeIds = ref([]); // 已选标签
  const activeIndex = ref(0); // 页面默认打开的索引页
  const originTags = [
      {
          text: '性别',
          children: [
              { text: '男', id: '男' },
              { text: '女', id: '女' },
          ],
      },
      {
          text: '年级',
          children: [
              { text: '大一', id: '大一' },
              { text: '大二', id: '大二' },
              { text: '大三', id: `大三` },
              { text: '大四', id: `大四` },
          ],
      },
  ];
  let tagList = ref(originTags)
  const onSearch = () => {
      tagList.value = originTags.map( parentTag => {
          const tempChildren = [...parentTag.children]
          const tempParentTag = {...parentTag}
          tempParentTag.children = tempChildren.filter( tag => tag.text.includes(searchContext.value))
          return tempParentTag
      })
  }
  const onSearchUserList = () => {
      router.push({
          path: '/user/list',
          query: {
              tags: activeIds.value // 已选的标签列表
          }
      })
  }
  const onCancel = () => { // 清空搜索栏内容
      tagList = ref(originTags)
  }
  const doClose = (tag) => {
      activeIds.value = activeIds.value.filter( item => {
          return item !== tag
      })
  }
</script>

<style scoped>

</style>
