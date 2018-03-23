<template>
<div>
        <row :centerSm="true">
            <column>
                <h4>{{title}}</h4>
                <blockquote>
                    {{tips}}
                </blockquote>
            </column>
        </row>

</div>
</template>

<script>
/* eslint-disable */
export default {
  name: "ThemeTip",
  props: ["tips", "title"],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
