<template>
  <button
    class="ls-checkbox-wrapper"
    :class="disabled ? 'ls-checkbox-wrapper--disabled' : ''"
    :style="`color:${color}`"
    @click="handleClick"
    :disabled="disabled"
  >
    <button
      class="ls-checkbox"
      :class="[
        value ? 'ls-checkbox--active' : '',
        disabled ? 'ls-checkbox--disabled' : '',
      ]"
    >
      <div
        class="ls-checkbox-active"
        :class="value ? 'ls-checkbox-active--active' : ''"
      />
    </button>
    <span
      class="ls-checkbox-label"
      :class="value ? 'ls-checkbox-label--active' : ''"
      v-if="$slots.default"
      ><slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "LsCheckbox",
  props: {
    color: {
      type: String,
      default: "#ffaaaa",
    },
    value: Boolean,
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
