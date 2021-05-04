<template>
  <div
    class="ls-card"
    :class="{ 'ls-card--round': round, 'ls-card--foucs': foucs }"
  >
    <div v-if="$slots.default"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "LsCard",
  props: {
    round: Boolean,
    foucs: Boolean,
  },
};
</script>
