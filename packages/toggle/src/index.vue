<template>
  <div
    class="ls-toggle-wrapper"
    :class="[
      {
        'ls-toggle--active': value,
        'ls-toggle--inactive': !value,
      },
      `ls-toggle--${size}`,
    ]"
    @click="handleClick"
  >
    <span class="ls-toggle-inactive-text">{{ inactiveText }}</span>
    <div class="dot-container">
      <div class="dot"></div>
    </div>
    <span class="ls-toggle-active-text">{{ activeText }}</span>
  </div>
</template>

<script>
export default {
  name: "LsToggle",
  props: {
    value: Boolean,
    size: String,
    activeText: String,
    inactiveText: String,
  },
  watch: {
    value: {
      immediate: false,
      handler(newVal) {
        this.$emit("change", newVal);
      },
    },
  },
  methods: {
    handleClick() {
      this.$emit("input", !this.value);
    },
  },
};
</script>
