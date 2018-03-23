<template>
    <div class="collapse collapse-item" :class="{ 'is-active': active }">
        <div
        class="collapse-header touchable"
        role="tab"
        :aria-expanded="active ? 'true' : 'false'"
        @click.prevent="toggle"
        >
        <slot name="collapse-header"></slot>
        </div>
        <transition name="fade">
        <div class="collapse-content" v-if="active">
            <div class="collapse-content-box">
            <slot name="collapse-body"></slot>
            </div>
        </div>
        </transition>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Collapse",

  data() {
    return {
      active: false
    };
  },

  props: {
    selected: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  created() {
    this._isCollapseItem = true;
    this.active = this.selected;
  },
  ready() {
    if (this.active) {
      this.$emit("collapse-open", this.index);
    }
  },
  methods: {
    toggle() {
      this.active = !this.active;
      if (this.active) {
        this.$emit("collapse-open", this.index);
      }
    }
  }
};
</script>

<style>
.collapse {
  margin-bottom: 2px;
}
.collapse .collapse-header {
  padding: var(--spacing) 0;
  border-top: 1px solid var(--color-primary);
  position: relative;
}
.collapse .collapse-header > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.collapse .collapse-header::before {
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  content: url("../assets/images/arrow-down.svg");
  position: absolute;
  font-size: 0.4em;
  top: calc(50% - 0.4em);
  right: 20px;
  color: #c5c9d0;
  transform: rotate(0deg);
}
.collapse.is-active .collapse-header::before {
  transform: rotate(-180deg);
}
.collapse .collapse-content-box {
  transition: all 0.2s;
  padding: 30px 0px;
  border-bottom: 2px solid var(--color-primary);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
</style>