<template>
  <button
    class="ls-button"
    :disabled="disabled"
    :type="nativeType"
    :class="[
      size ? `ls-button--${size}` : '',
      type ? `ls-button--${type}` : '',
      {
        'ls-button-round': round,
        'ls-button-disabled': disabled,
      },
    ]"
    @click="handleClick"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: "LsButton",
  props: {
    disabled: Boolean,
    size: String,
    round: Boolean,
    nativeType: {
      type: String,
      default: "button",
    },
    type: String,
  },
  methods: {
    handleClick(event) {
      return this.$emit("click", event);
    },
  },
};
</script>
