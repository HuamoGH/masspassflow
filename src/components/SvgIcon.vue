<!-- svg-sprite组件，业务组件中直接使用该组件展示icon -->
<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
// 引入所有的svg的文件
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('@/assets/icons/aside', false, /\.svg$/);
requireAll(req);

export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return `svg-icon ${this.className}`;
      }
      return 'svg-icon';
    },
  },
};
</script>

<style scoped>
.svg-icon {
  width: 1.8rem;
  height: 1.8rem;
  vertical-align: -0.25rem;
  fill: currentColor;
  overflow: hidden;
}
</style>