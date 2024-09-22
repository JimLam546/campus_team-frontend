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
            height=""
            :items="tagList"
    />

    <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
    >
        自定义标签
    </van-divider>
    <van-cell-group inset>
        <van-field
            v-model="userDefinedTag"
            center
            clearable
            placeholder="请输入标签"
        >
            <template #button>
                <van-button size="small" type="primary" @click="addUserDefinedTag">添加</van-button>
            </template>
        </van-field>
    </van-cell-group>

    <div style="padding: 2em">
        <van-button type="primary" @click="submitTags" block>提交</van-button>
    </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import {useRouter} from "vue-router";
  import myAxios from "../libs/axiosRequest.js";
  import {showFailToast, showSuccessToast} from "vant";

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
              { text: '研究生', id: `研究生` }
          ],
      },
      {
          text: '比赛',
          children: [
              { text: '创新创业', id: '创新创业' },
              { text: '数学建模', id: '数学建模' },
              { text: '电子设计', id: '电子设计' },
          ],
      },
      {
          text: '运动',
          children: [
              { text: '足球', id: '足球' },
              { text: '乒乓球', id: '乒乓球' },
              { text: '羽毛球', id: '羽毛球' },
              { text: '篮球', id: '篮球' },
          ],
      },
      {
          text: '兴趣爱好',
          children: [
              { text: '游戏', id: '游戏' },
              { text: '摄影', id: '摄影' },
              { text: '音乐', id: '音乐' },
              { text: '电影', id: '电影' },
              { text: '旅游', id: '旅游' },
          ],
      },
  ];
  let tagList = ref(originTags)
  let userDefinedTag = ref('')
  const addUserDefinedTag = () => {
      if(userDefinedTag.value !== '') {
          activeIds.value.push(userDefinedTag.value);
          userDefinedTag.value = '';
      } else {
          showFailToast('请输入标签名')
      }
  }
  const onSearch = () => { // 搜索标签
      tagList.value = originTags.map( parentTag => {
          const tempChildren = [...parentTag.children]
          const tempParentTag = {...parentTag}
          tempParentTag.children = tempChildren.filter( tag => tag.text.includes(searchContext.value))
          return tempParentTag
      })
  }
  const submitTags = async () => {
      // console.log(JSON.stringify(activeIds.value))
      const res: resType = await myAxios({
          method: 'post',
          url: '/user/modifyTags',
          data: {
              tagList: activeIds.value
          },
      })
      await router.replace('/user')
      if(res?.code === 0) {
          showSuccessToast('修改成功')
      } else {
          showFailToast('操作失败')
      }
  }
  const onCancel = () => { // 清空搜索栏内容
      tagList = ref(originTags)
  }
  const doClose = (tag) => { // 取消已选标签
      activeIds.value = activeIds.value.filter( item => {
          return item !== tag
      })
  }
</script>

<style scoped>

</style>
