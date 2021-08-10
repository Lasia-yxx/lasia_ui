<template>
  <div class="article-wrapper" @scroll="handleScroll($event)">
    <!-- <div ref="container" class="article-container">
      <ArtilceCard :data="detail" />
      <ArtilceCard :data="detail" />
      <ArtilceCard :data="detail" />
      <ArtilceCard :data="detail" />
      <ArtilceCard :data="detail" />
      <ArtilceCard :data="detail" />
      <ArtilceCard :data="detail" />
      <ArtilceCard :data="detail" />
      <ArtilceCard :data="detail" />
      <ArtilceCard :data="detail" />
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArtilceCard from '@component/ArticleCard.vue';

export default defineComponent({
  name: 'Home',
  components: {
    ArtilceCard,
  },
  data() {
    return {
      detail: {
        title: '毕设/私活/大佬必备，一个挣钱的标准开源前后端分离springboot+vue+redis+Spring Security脚手架--若依框架',
        describe: '今天和大家分享一个是一个开源接私活/毕设/兼职挣钱的java前后端分离的开源项目，用了一小时左右把源码下载跑了一下、感觉还不错，中间运行前端代码的时候遇到一些小问题、根据错误提示也很快解决了、这是个什么项目呢，它是集SpringBoot+Spring Security+redis+shiro+vue于一体的标准项目框架、解放双手 ✋ 从现在开始。',
        createTime: '2021年08月13日 16:08:97',
      },
    };
  },
  methods: {
    handleScroll(e) {
      console.log(e.target.scrollTop);
      const { container } = this.$refs;
      console.log(container.offsetHeight);
    },
  },
});
</script>

<style scoped>
.article-wrapper {
  width: 100%;
  /* padding: 5px 20px; */
}

.article-container {
  width: 100%;
  column-count: 2;
  column-gap: 20px;
  row-gap: 20px;
}

.wrapper-left,
.wrapper-right {
  flex: 1;
  padding-right: 20px;
}

@media screen and (max-width: 800px) {
  .article-wrapper {
    margin-bottom: 140px;
  }

  .article-container {
    column-count: 1;
  }
}
</style>
