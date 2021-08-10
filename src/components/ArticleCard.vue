<template>
  <div class="article-card-wrapper">
    <div class="artilce-card-container">
      <div class="title">{{ data.title }}</div>
      <div class="info">{{ data.describe }}</div>
      <div class="create-time">{{ data.createTime }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ArticleCard',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      style: '',
    };
  },
  mounted() {
    const value = Math.random() * 100;
    const str = `padding-bottom: ${value}px`;
    this.style = str;
  },
});
</script>

<style scoped>
.article-card-wrapper {
  padding: 10px 0;
}

.artilce-card-container {
  width: 100%;
  padding: 30px;
  word-break: break-all;
  border-radius: 10px;
  box-shadow: 5px 5px 13px #cccdd1,
    -5px -5px 13px #fff;
  transition: 0.2s;
  break-inside: avoid;
}

.artilce-card-container:hover {
  box-shadow: 2px 2px 4px 0 #babecc ,
    -2px -2px 4px 0 #fff;
}

.artilce-card-container:active {
  box-shadow: 2px 2px 4px 0 #babecc inset,
    -2px -2px 4px 0 #fff inset;
}

.title {
  display: -webkit-box;
  margin-bottom: 20px;
  overflow: hidden;
  font-weight: bold;
  font-size: 22px;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: 0.2s color ease-out;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}

.title:hover {
  color: #e79d9d;
}

.info {
  font-size: 16px;
  cursor: default;
}

.create-time {
  margin-top: 20px;
  font-size: 14px;
  text-align: right;
  user-select: none;
}
</style>
