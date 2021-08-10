<template>
  <div class="index-container">
    <div class="user-wrapper">
      <img :src="state.authorInfo.avatar" class="avatar">
      <div class="name">{{ state.authorInfo.name }}</div>
      <div class="function-cotnainer">
        <n-button class="button" type="primary" @click="onEnterHome">Let's Go!</n-button>
        <n-button class="button" type="info" @click="isShowModel = true">吐槽一下</n-button>
      </div>
    </div>
    <!-- eslint-disable-next-line vue/valid-v-model -->
    <n-modal v-model:show="isShowModel">
      <n-card style="width: 600px;" title="吐槽一下" :bordered="false" size="medium">
        <n-input
          type="textarea"
          placeholder="你再骂？"
          class="input"
          :autosize="{
            minRows: 3,
            maxRows: 4
          }"
          maxlength="120"
          show-count
        />
        <template #footer>
          <div class="commit-wrapper">
            <n-button type="info">发送</n-button>
          </div>
        </template>
      </n-card>
    </n-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'index',
  data() {
    return {
      avatar: '',
      name: '',
      isShowModel: false,
      comment: '',
      state: this.$Store.state,
    };
  },
  methods: {
    onEnterHome() {
      this.$router.push({ name: 'Article' });
    },
  },
});
</script>

<style scoped>
.index-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  text-align: center;
}

.avatar {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border: 3px solid rgba(255, 170, 170, 0.4);
  border-radius: 50%;
}

.name {
  margin: 10px;
  font-size: 36px;
}

.button {
  margin: 20px;
}

.input {
  resize: none;
}

.commit-wrapper {
  display: flex;
  flex-direction: row-reverse;
}
</style>
