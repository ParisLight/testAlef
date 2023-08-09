<template>
  <header class="header">
    <div class="container header__container">
      <router-link class="logo" to="/">
        <LogoIcon />
      </router-link>
      <nav class="header-nav">
        <router-link to="/">Форма</router-link>
        <router-link to="/preview">Превью</router-link>
      </nav>
    </div>
  </header>
</template>
<script setup>
import LogoIcon from "@/components/icons/LogoIcon.vue";
</script>
<style lang="scss" scoped>
.header {
  padding: 22px;
  box-shadow: 0px 1px 0px 0px rgba(17, 17, 17, 0.1);

  &__container {
    display: flex;
    align-items: center;
  }
}
.header-nav {
  display: flex;
  align-items: center;
  column-gap: 24px;
  margin-left: 473px;
  a {
    color: $gray2;
  }
}
</style>
