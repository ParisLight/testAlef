<template>
  <div class="children-item">
    <TransparentInput 
      :title="'Имя'" 
      :placeholder="'Введите имя'" 
      v-model="props.children.name"
    />
    <TransparentInput 
      :title="'Возраст'" 
      :placeholder="'Введите возраст'" 
      v-model="props.children.age"
      :onlyNumbers="true"
    />
    <div class="delete-item" @click="$emit('deleteChildren')">
      <span>Удалить</span>
    </div>
  </div>
</template>
<script setup>
import TransparentInput from "@/components/UI/TransparentInput.vue";
const props = defineProps({
  children: {
    type: Object,
    required: true
  }
})
</script>
<style lang="scss">
.children-item {
  display: flex;
  column-gap: 18px;
  align-items: center;
  justify-content: space-between;
}
.delete-item {
  cursor: pointer;
  span {
    color: $primary;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }
}
</style>
