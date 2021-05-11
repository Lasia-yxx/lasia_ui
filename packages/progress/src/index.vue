<template>
  <div class="ls-progress">
    <div v-if="round" class="ls-progress-circle" :style="contianerStyle">
      <div class="ls-progress-circle-before" :style="beforeStyle">
        <span v-if="showProgress" :style="`color:${color}`"
          >{{ this.percent }}%</span
        >
      </div>
      <svg viewBox="0 0 100 100">
        <path
          :d="trackPath"
          stroke="#fff"
          :stroke-width="relativeTrackWidth"
          fill="none"
        />
        <path
          :d="trackPath"
          stroke="#ffaaaa"
          :stroke-width="relativeTrackWidth"
          fill="none"
          :style="circlePathStyle"
          stroke-linecap="round"
        />
      </svg>
      <div class="ls-progress-circle-after" :style="contianerStyle" />
    </div>
    <div v-else class="ls-progress-line">
      <div
        class="ls-progress-line-container"
        :class="[`ls-progress-line-container--${size}`]"
        :style="`width:${width}px`"
        ref="progress"
      />
      <div
        :class="[
          'ls-progress-line-slider',
          size ? `ls-progress-line-slider--${size}` : '',
        ]"
        :style="lineStyle"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "LsProgress",
  props: {
    width: {
      type: Number,
      default: 108,
    },
    trackWidth: {
      type: Number,
      default: 8,
    },
    percentage: {
      type: Number,
      required: true,
      default: 0,
      validator: (val) => val >= 0 && val <= 100,
    },
    color: {
      type: String,
      default: "#ffaaaa",
    },
    size: String,
    round: Boolean,
    showProgress: Boolean,
  },
  computed: {
    percent() {
      if (this.percentage < 0) {
        return 0;
      }
      if (this.percentage > 100) {
        return 100;
      }
      return this.percentage;
    },
    zoom() {
      return (this.width / 100).toFixed(1);
    },
    beforeStyle() {
      const value =
        (this.radius * 2 - this.relativeTrackWidth) * this.zoom + "px";
      if (this.trackWidth <= 4) {
        return { height: value, width: value, "box-shadow": "none" };
      }
      return { height: value, width: value };
    },
    contianerStyle() {
      return { height: `${this.width}px`, width: `${this.width}px` };
    },
    relativeTrackWidth() {
      return Math.round((this.trackWidth / this.width) * 128);
    },
    radius() {
      return parseInt(50 - this.relativeTrackWidth / 2);
    },
    trackPath() {
      const radius = this.radius;
      return `
      M 50 50
      m 0 -${radius}
      a ${radius} ${radius} 0 1 1 0 ${radius * 2}
      a ${radius} ${radius} 0 1 1 0 -${radius * 2}
      `;
    },
    perimeter() {
      return 2 * Math.PI * this.radius;
    },
    circlePathStyle() {
      return {
        strokeDasharray: `${this.perimeter * (this.percent / 100)}px, ${
          this.perimeter
        }px`,
        transition: "stroke-dasharray 1s linear, stroke 1s ease",
      };
    },
    lineStyle() {
      return { width: `${this.lineWidth}px`, backgroundColor: this.color };
    },
    lineWidth() {
      return (this.width * this.percent) / 100;
    },
  },
};
</script>
