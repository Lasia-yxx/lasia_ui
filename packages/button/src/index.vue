<template>
  <button
    class="ls-button"
    :disabled="disabled"
    :type="nativeType"
    :class="[
      size ? `ls-button--${size}` : '',
      {
        'is-round': round,
      },
    ]"
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
  },
};
</script>
