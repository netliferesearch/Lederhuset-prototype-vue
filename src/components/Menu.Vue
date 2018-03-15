<template>
  <div>
      <nav>
        <div class="item">
          <router-link to="/">{{ sitetitle }}</router-link>
        </div>


          <div class="item">
            <el-button type="text" @click="dialogVisible = true">Meny</el-button>
            <el-dialog
                title="Meny"
                :visible.sync="dialogVisible"
                fullscreen= true
                :before-close="handleClose">

                <ul>
                  <li><router-link to="/innlogget">Innlogget forside</router-link></li>
                  <li><router-link to="/ikke-innlogget">Ikke innlogget forside</router-link></li>
                  <li><router-link to="/tema-side">Tema side</router-link></li>
                </ul>
            </el-dialog>
          </div>
      </nav>
  </div>
</template>


<script>
/* eslint-disable */
export default {
  data() {
    return {
      sitetitle: "Lederhuset",
      MenuSymbol: "Meny",
      dialogVisible: false
    };
  }
};
</script>


<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>