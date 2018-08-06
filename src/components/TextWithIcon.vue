<template>
    <div class="item">
        <div class="item-svg" v-if="svgOrPng">
            <svg-icon :icon-class="iconName" :class-name="`svg-icon-${this.iconName}`">
            </svg-icon>
        </div>
        <div class="item-png" v-else>
            <img :src="path"/>
        </div>
        <span v-if="hasText" class="item-text" slot="title">{{text}}</span>
    </div>
</template>
<script>
import SvgIcon from "@/components/SvgIcon";
// written by yinsuqin August 2018
export default {
  name: "TextWithIcon",
  data: function() {
    return {
      src: ""
    };
  },
  components: {
    SvgIcon
  },
  props: {
    iconName: {
      type: String
    },
    path: {
      type: String
    },
    text: {
      type: String,
      required: true
    },
    svgOrPng: {
      type: Boolean,
      required: true,
      default: true
    },
    hasText: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  computed: {}
};
</script>
<style type="text/scss" lang="scss" scoped>
.item {
  margin-left: 3rem;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  .item-svg,
  .item-png {
    display: inline-block;
    color: transparent;
    width: 1.6rem;
    height: 1.6rem;
    img {
      width: 1.6rem;
      height: auto;
    }
  }
  .item-text {
    margin-left: 1.4rem;
    font-size: 1.4rem;
  }
}
</style>
