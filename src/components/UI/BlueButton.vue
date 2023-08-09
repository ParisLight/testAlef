<template>
  <div class="blue-button">
    <div class="button-text">
      <slot></slot>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.blue-button {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 4px;
  padding: 10px 20px;
  border-radius: 100px;
  cursor: pointer;
  background-color: $primary;
}
.button-img {
  width: 24px;
  height: 24px;
}
.button-text {
  color: $white;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}
</style>
