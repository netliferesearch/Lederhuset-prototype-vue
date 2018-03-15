<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Hjem</el-breadcrumb-item>
      <el-breadcrumb-item>Først er du her</el-breadcrumb-item>
      <el-breadcrumb-item>Så er du her</el-breadcrumb-item>
      <el-breadcrumb-item>Og til slutt er du her</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <br>
    <el-row :gutter="40">
      <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content ">
        Hallo
        </div>
      </el-col>
      <el-col :xs="24" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content">
        Hallo
        </div>
      </el-col>
      <el-col :xs="24" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content">
        Hallo
        </div>
      </el-col>
      <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content">
        Hallo
        </div>
      </el-col>
    </el-row>
    <br>
    <br>
    <el-collapse accordion>

  <el-collapse-item name="1">
    <template slot="title">
      Før du ansetter
    </template>
    <div>
      Consistent with real life: in line with the process and
      logic of real life, and comply with languages and habits
      that the users are used to;
    </div>
    <div>
      Consistent within interface: all elements should be
      consistent, such as: design style, icons and texts,
      position of elements, etc.
    </div>
  </el-collapse-item>

  <el-collapse-item name="2">
    <template slot="title">
      Oppfølging av midlertidige ansatte
    </template>
    <div>
      Operation feedback: enable the users to clearly
      perceive their operations by style updates and
      interactive effects;
    </div>
    <div>
      Visual feedback: reflect current state by
      updating or rearranging elements of the
      page.
    </div>
  </el-collapse-item>

  <el-collapse-item name="3">
    <template slot="title">
      Tips for å lykkes
    </template>
    <div>
      Simplify the process: keep operating process simple and intuitive;
    </div>
    <div>
      Definite and clear: enunciate your intentions
      clearly so that the users can quickly understand
      and make decisions;
    </div>
  </el-collapse-item>

  <el-collapse-item name="4">
    <template slot="title">
      Maler
    </template>
    <div>
      Decision making: giving advices about operations
      is acceptable, but do not make decisions for the users;
    </div>
    <div>
      Controlled consequences: users should be granted
      the freedom to operate, including canceling, aborting
      or terminating current operation.
    </div>
  </el-collapse-item>

</el-collapse>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Dette blir bra!"
    };
  },
  beforeCreate: function() {
    document.body.className = "purple";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  border: 1px solid black;
}

.el-collapse-item__header {
  height: 48px;
  line-height: 48px;
  color: #303133;
  cursor: pointer;
  border-bottom: 1px solid #ebeef5;
  font-size: 33px;
  font-weight: 500;
  -webkit-transition: border-bottom-color 0.3s;
  transition: border-bottom-color 0.3s;
  outline: 0;
}
</style>
