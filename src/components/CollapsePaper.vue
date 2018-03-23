<template>
    <div class="collapsePaper collapsePaper-item" :class="{ 'is-active': active }">
        <div
        class="collapsePaper-header collapsePaper-intro touchable"
        role="tab"
        :aria-expanded="active ? 'true' : 'false'"
        @click.prevent="toggle"
        >
        <slot name="collapsePaper-intro"></slot>
        <slot name="collapsePaper-header"></slot>
        </div>
        <transition name="fade">
        <div class="collapsePaper-content" v-if="active">
            <div class="collapsePaper-content-box">
            <slot name="collapsePaper-body"></slot>
            </div>
        </div>
        </transition>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "CollapsePaper",

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
      this.$emit("collapsePaper-open", this.index);
    }
  },
  methods: {
    toggle() {
      this.active = !this.active;
      if (this.active) {
        this.$emit("collapsePaper-open", this.index);
      }
    }
  }
};
</script>

<style>
.collapsePaper {
  margin-bottom: 2px;
}
.collapsePaper .collapsePaper-header {
  padding: var(--spacing) 0;
  position: relative;
  padding: 30px 40px;
  border-left: 2px solid var(--color-primary);
  border-top: 2px solid var(--color-primary);
  border-right: 2px solid var(--color-primary);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
.collapsePaper .collapsePaper-header > div {
}

.collapsePaper .collapsePaper-intro {
  color: #000000;
}

.collapsePaper .collapsePaper-header::before {
  transition: all 0.2s;
  content: url("../assets/images/arrow-down.svg");
  position: absolute;
  bottom: 25px;
  right: 20px;
  transform: rotate(0deg);
}
.collapsePaper.is-active .collapsePaper-header::before {
  transform: rotate(-180deg);
}
.collapsePaper .collapsePaper-content-box {
  transition: all 0.2s;
  padding: 0px 40px;
  border-left: 2px solid var(--color-primary);
  border-bottom: 2px solid var(--color-primary);
  border-right: 2px solid var(--color-primary);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
</style>