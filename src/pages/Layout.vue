<template>
  <Header class="layout__header" />
  <router-view class="content" />
  <ReservedRights />
</template>

<script setup>
import Header from "@/components/Header.vue";
import ReservedRights from "@/components/ReservedRights.vue";
</script>

<style lang="scss" scoped>
.content {
  flex: 1;
}
.layout__header {
  margin-bottom: 30px;
}
</style>
