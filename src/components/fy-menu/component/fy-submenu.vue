<template>
  <li @click="change" class="submenu">
    <span>
      <slot name="title"></slot>
    </span>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @afterEnter="afterEnter"
      @beforeLeave="beforeLeave"
      @leave="leave"
      @afterLeave="afterLeave"
    >
      <ul v-show="isShow" class="collapse-transition" :style="{textIndent: Number(level)*10+'px'}">
        <slot name="default"></slot>
      </ul>
    </transition>
    <svg t="1586501350504" :style="iconStyle" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1133" width="10" height="10"><path d="M927.804 352.193l-415.804 415.632-415.803-415.632 63.616-63.445 352.209 352.017 352.102-352.017z" fill="#ffffff" p-id="1134"></path></svg>
  </li>
</template>
<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1
    },
    showChange: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    showChange(newVal) {
      this.isShow = newVal;
    }
  },
  data() {
    return {
      isShow: false,
      dataset: {}
    };
  },
  computed: {
    iconStyle() {
      return { transform: this.isShow ? "rotate(180deg)" : ""};
    }
  },
  methods: {
    change(e) {
      e.stopPropagation();
      // 判断当前动作是展开还是关闭，
      // 如果是展示动作就向上查找已经打开的菜单进行关闭，
      // 反之向下查找已经打开的菜单进行关闭
      this.$emit('change', this.isShow)
      this.isShow = !this.isShow;
    },
    openMenu() {
      // 向上查找组件
      console.log(this)
      
    },
    beforeEnter(el) {
      this.dataset.oldHeight = el.scrollHeight;
      el.style.height = "0";
    },
    enter(el) {
      el.dataset.oldOverflow = el.style.overflow;
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + "px";
      } else {
        el.style.height = "";
      }
      el.style.overflow = "hidden";
    },
    afterEnter(el) {
      el.style.height = "";
      el.style.overflow = el.dataset.oldOverflow;
    },

    beforeLeave(el) {
      if (!el.dataset) el.dataset = {};
      el.dataset.oldOverflow = el.style.overflow;
      el.style.height = el.scrollHeight + "px";
      el.style.overflow = "hidden";
    },
    leave(el) {
      if (el.scrollHeight !== 0) {
        el.style.height = 0;
      }
    },
    afterLeave(el) {
      el.style.height = "";
      el.style.overflow = el.dataset.oldOverflow;
    }
  }
};
</script>
<style lang="scss" scoped>
.collapse-transition {
  transition: height 0.3s ease-in-out;
}
li.submenu {
  position: relative;
  svg.icon {
    position: absolute;
    top: 10px;
    right: 30%;
    transition: 0.3s;
  }
}
</style>