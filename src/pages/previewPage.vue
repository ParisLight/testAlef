<template>
  <div class="preview-page">
    <div class="container inner-container">
      <div class="personal-info preview-page__personal-info">
        <div class="title preview-page__title">
          <span>Персональные данные</span>
        </div>
        <div class="personal-text preview-page__personal-text" v-if="fullInfo">
          <span class="text-bold"
            >{{ userStore.user.name }}, {{ userStore.user.age }} лет</span
          >
        </div>
      </div>
      <div
        class="childrens-block preview-page__childrens-block"
        v-if="childrenStore.savedInfo"
      >
        <div class="title">
          <span>Дети</span>
        </div>
        <div class="childrens-list">
          <ChildrenInfo
            v-for="children in childrensList"
            :key="children"
            :childrenInfo="children"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ChildrenInfo from "@/components/ChildrenInfo.vue";
import { computed } from "vue";
import { useChildrensStore } from "@/stores/childrensStore.js";
import { useUserStore } from "@/stores/userStore.js";

const childrenStore = useChildrensStore();
const userStore = useUserStore();

const fullInfo = computed(() => {
  return userStore.user.name && userStore.user.age;
});

const childrensList = computed(() => {
  return childrenStore.childrens.map((children) => {
    if (children.name && children.age) {
      return `${children.name}, ${children.age} лет`;
    }
  });
});
</script>
<style lang="scss" scoped>
.preview-page {
  &__personal-text {
    margin-top: 20px;
  }
  &__childrens-block {
    margin-top: 60px;
  }
}
.childrens-block {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
.childrens-list {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: flex-start;
}
</style>
