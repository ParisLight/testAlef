<template>
  <main class="form-page">
    <div class="container inner-container">
      <div class="form">
        <div class="title">
          <span>Персональные данные</span>
        </div>
        <div class="inputs form-page__inputs">
          <TransparentInput
            :placeholder="'Введите имя'"
            :title="'Имя'"
            v-model="userStore.user.name"
          />
          <TransparentInput
            :placeholder="'Введите возраст'"
            :title="'Возраст'"
            v-model="userStore.user.age"
            :onlyNumbers="true"
          />
        </div>
      </div>
      <div class="form form-page__form">
        <div class="form-top">
          <div class="title" v-show="countChildrens">
            <span>Дети (макс. 5)</span>
          </div>
          <PrimaryButton @click.native="addChildren">
            Добавить ребенка
          </PrimaryButton>
        </div>
        <div class="inputs-grid form-page__inputs" v-show="countChildrens">
          <TransitionGroup name="list" mode="out-in">
            <ChildrenItem
              v-for="childrenObject in childrenStore.childrens"
              :key="childrenObject"
              :children="childrenObject"
              @deleteChildren="deleteChildren(childrenObject)"
            />
          </TransitionGroup>
        </div>
      </div>
      <BlueButton
        class="form-page__blue-button"
        v-show="countChildrens"
        @click="saveInfo()"
      >
        Сохранить
      </BlueButton>
    </div>
  </main>
</template>

<script setup>
import TransparentInput from "@/components/UI/TransparentInput.vue";
import PrimaryButton from "@/components/UI/PrimaryButton.vue";
import BlueButton from "@/components/UI/BlueButton.vue";
import ChildrenItem from "@/components/ChildrenItem.vue";
import { useChildrensStore } from "@/stores/childrensStore.js";
import { useUserStore } from "@/stores/userStore";
import { computed, onMounted } from "vue";

const childrenStore = useChildrensStore();
const userStore = useUserStore();

const countChildrens = computed(() => {
  return childrenStore.childrens.length;
});

const addChildren = () => {
  if (childrenStore.childrens.length > 4) return;

  childrenStore.childrens.push({ name: "", age: null });
};

const deleteChildren = (childrenObject) => {
  childrenStore.childrens = childrenStore.childrens.filter(
    (children) => children != childrenObject
  );

  if(countChildrens.value === 0) childrenStore.savedInfo = false;
};

const saveInfo = () => {
 childrenStore.savedInfo = true;
};
</script>

<style lang="scss" scoped>
.form-page {
  &__inputs {
    margin-top: 20px;
  }
  &__form {
    margin-top: 33px;
  }
  &__blue-button {
    max-width: 118px;
    margin-top: 30px;
  }
}
:global(.title) {
  span {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
}
.form {
  max-width: 616px;
  width: 100%;
}

.form-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.inputs {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.inputs-grid {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  position: relative;
}
</style>
