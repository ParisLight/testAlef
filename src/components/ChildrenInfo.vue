<template>
  <div class="children-info" v-if="props.childrenInfo">
    <span class="text-bold">
      {{ props.childrenInfo }}
    </span>
  </div>
</template>
<script setup>
const props = defineProps({
  childrenInfo: {
    type: String,
    required: true,
    default: ''
  }
});
</script>
<style lang="scss" scoped>
.children-info {
  background-color: $grayL;
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-block;
  flex-grow: 0;
}
:global(.text-bold) {
  color: #000;
  line-height: 24px;
  font-weight: 700;
  font-size: 16px;
}
</style>
