<template>
  <div class="ls-input-wrap">
    <template v-if="type !== 'textarea'">
      <input
        class="ls-input"
        ref="input"
        :disabled="disabled"
        :placeholder="placeholder"
        :class="[
          size ? `ls-input--${size}` : '',
          {
            'ls-input--round': round,
            'ls-input--disabled': disabled,
            'ls-input--exceed': isExceed,
          },
        ]"
        :value="value"
        :type="type"
        :readonly="readonly"
        @change="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
        @input="handleInput"
        :maxlength="maxlength"
      />
    </template>
    <textarea
      v-else
      class="ls-textarea"
      :disabled="disabled"
      :value="value"
      @change="handleChange"
      @blur="handleBlur"
      @focus="handleFocus"
      @input="handleInput"
      ref="textarea"
      :style="{ resize }"
      :cols="cols"
      :rows="rows"
      :maxlength="maxlength"
      :class="[
        {
          'ls-textarea--round': round,
          'ls-textarea--disabled': disabled,
          'ls-textarea--exceed': isExceed,
        },
      ]"
    ></textarea>
    <span
      v-if="isLengthLimitShow && maxlength !== undefined"
      :class="[
        `ls-${type}-statistics`,
        {
          'ls-input--exceed': isExceed,
        },
      ]"
    >
      {{ curLength }}/{{ maxlength }}
    </span>
  </div>
</template>
<script>
export default {
  name: "LsInput",
  props: {
    value: [String, Number],
    round: Boolean,
    disabled: Boolean,
    size: String,
    placeholder: [String, Number],
    type: {
      type: String,
      default: "input",
    },
    resize: String,
    cols: [String, Number],
    rows: [String, Number],
    readonly: Boolean,
    showWordLimit: Boolean,
    maxlength: [String, Number],
  },
  computed: {
    nativeInputValue() {
      return this.value === null || this.value === undefined
        ? ""
        : String(this.value);
    },
    isLengthLimitShow() {
      return (
        this.showWordLimit &&
        (this.type === "input" || this.type === "textarea") &&
        !this.disabled &&
        !this.readonly
      );
    },
    lengthLimit() {
      if (typeof this.maxlength === "string") {
        return parseInt(this.maxlength);
      }
      return this.maxlength;
    },
    isExceed() {
      return this.isLengthLimitShow && this.curLength > this.lengthLimit;
    },
    curLength() {
      if (typeof this.value === "number") {
        return String(this.value).length;
      }
      return (this.value || "").length;
    },
  },
  watch: {
    value(val) {
      const input = this.getInput();
      input.value = val;
    },
  },
  methods: {
    focus() {
      this.getInput().focus();
    },
    blur() {
      this.getInput().blur();
    },
    handleChange(event) {
      this.$emit("change", event.target.value);
    },
    handleInput(event) {
      if (event.target.value === this.nativeInputValue) return;
      this.$emit("input", event.target.value);
      this.$nextTick(this.setNativeInputValue);
    },
    handleFocus(event) {
      this.$emit("focus", event);
    },
    handleBlur(event) {
      this.$emit("blur", event);
    },
    setNativeInputValue() {
      const input = this.getInput();
      if (!input) return;
      if (input.value === this.nativeInputValue) return;
      input.value = this.nativeInputValue;
    },
    getInput() {
      return this.$refs.input || this.$refs.textarea;
    },
  },
};
</script>
