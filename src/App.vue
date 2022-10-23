<template >
    <router-link to="/" class="app-header">
        WeerwolveN <br>
        Van wakkerdaM
    </router-link>
    <section class="outlet-full"><router-view /></section>
</template>


<script>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md

</script>

<style src="./app.scss"></style>
<style lang="scss">

.app-header {
  padding: 10px 0 25px 0;
  font-family: "Danger-night";
  font-weight: bold;
  font-style: normal;
  font-size: 64px;
  line-height: 48px;
  text-align: center;
  width: 100%;
  color: #e80b0b;
  text-shadow: 1px 0px 2px rgb(128 0 0 / 40%);
}
#app > a {
  text-decoration: none;
}
</style>