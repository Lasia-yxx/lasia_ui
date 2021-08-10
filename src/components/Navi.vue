<template>
  <div class="navi-container">
    <img class="avatar" :src="state.authorInfo.avatar">
    <div
      class="icon-wrapper"
      :class="choosed === 'blog' ? 'selected' : ''"
      @click="onNaviChange('blog')"
    >
      <Icon :size="iconSize">
        <BookOpen20Regular />
      </Icon>
      <span class="label">博客</span>
    </div>

    <div
      class="icon-wrapper"
      :class="choosed === 'project' ? 'selected' : ''"
      @click="onNaviChange('project')"
    >
      <Icon :size="iconSize">
        <Branch24Regular />
      </Icon>
      <span class="label">项目</span>
    </div>

    <div
      class="icon-wrapper"
      :class="choosed === 'dairy' ? 'selected' : ''"
      @click="onNaviChange('dairy')"
    >
      <Icon :size="iconSize">
        <Timeline24Regular />
      </Icon>
      <span class="label">动态</span>
    </div>

    <div
      class="icon-wrapper"
      :class="choosed === 'picture' ? 'selected' : ''"
      @click="onNaviChange('picture')"
    >
      <Icon :size="iconSize">
        <ImageCopy24Regular />
      </Icon>
      <span class="label">摄影</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BookOpen20Regular from '@vicons/fluent/BookOpen20Regular';
import Branch24Regular from '@vicons/fluent/Branch24Regular';
import Timeline24Regular from '@vicons/fluent/Timeline24Regular';
import ImageCopy24Regular from '@vicons/fluent/ImageCopy24Regular';

export default defineComponent({
  name: 'Navi',
  components: {
    BookOpen20Regular,
    Branch24Regular,
    Timeline24Regular,
    ImageCopy24Regular,
  },
  data() {
    return {
      iconSize: 24,
      choosed: 'blog',
      state: this.$Store.state,
    };
  },
  methods: {
    onNaviChange(id) {
      this.choosed = id;
    },
  },
});
</script>

<style scoped>
.navi-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 35px 0;
}

.avatar {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 12px rgb(68, 68, 68);
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 25px 0;
  cursor: pointer;
  transition: 0.4s color ease-in;
  user-select: none;
}

.selected {
  color: #9c88ff;
  border-right: 3px solid #9c88ff;
}

.label {
  margin-top: -2px;
  margin-left: 8px;
  letter-spacing: 1px;
}

@media screen and (max-width: 800px) {
  .navi-container {
    top: initial;
    right: 0;
    bottom: 0;
    left: 0;
    flex-direction: row;
    width: initial;
    min-height: initial;
    padding: 10px 25px;
    background-color: #ecedef;
    border-radius: 0;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .avatar {
    display: none;
  }

  .icon-wrapper {
    flex-direction: column;
  }

  .label {
    margin: 0;
    letter-spacing: 1px;
  }

  .selected {
    box-shadow: initial;
  }
}
</style>
