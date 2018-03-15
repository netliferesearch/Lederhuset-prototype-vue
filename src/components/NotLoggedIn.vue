<template>
  <div class="hello">
    <h1>{{ siteTitle }}</h1>

    <el-row :gutter="40">
      <el-col :xs="24" :sm="6" :md="12" :lg="12" :xl="1">
        <div class="grid-content ">
        Du er ikke medlem ser jeg, men sign up!
        </div>
      </el-col>
      <el-col :xs="24" :sm="6" :md="12" :lg="12" :xl="1">
        <div class="grid-content ">
          <SignUpForm />
        </div>
      </el-col>

    </el-row>
  </div>
</template>

<script>
/* eslint-disable */
import SignUpForm from "./SignUpForm.vue";
export default {
  name: "NotLoggedIn",
  data() {
    return {
      siteTitle: "Ikke innlogget forside"
    };
  },
  components: {
    SignUpForm
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
