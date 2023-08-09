<template>
  <div class="primary-button">
    <div class="button-img">
      <PlusIcon />
    </div>
    <div class="button-text">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import PlusIcon from "@/components/icons/PlusIcon.vue";
</script>
<style lang="scss" scoped>
.primary-button {
  display: flex;
  align-items: center;
  column-gap: 4px;
  padding: 10px 20px;
  border: 2px solid $primary;
  border-radius: 100px;
  cursor: pointer;
}
.button-img {
  width: 24px;
  height: 24px;
}
.button-text {
  color: $primary;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}
</style>
