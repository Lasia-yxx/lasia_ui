<template>
  <button
    class="ls-switch"
    :class="[
      size ? `ls-switch--${size}` : '',
      type ? `ls-switch--${type}` : '',
      {
        'ls-switch-active': value,
        'ls-switch-round': round,
        'ls-button-disabled': disabled,
      },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "LsSwitch",
  props: {
    round: Boolean,
    value: Boolean,
    size: String,
    type: String,
    disabled: Boolean,
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
