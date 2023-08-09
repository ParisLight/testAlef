<template>
  <div class="transparent-input">
    <div class="input-title">
      <span>{{ props.title }}</span>
    </div>
    <input
      type="text"
      class="input"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      @keypress="restrictToNumbers"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
    default: ''
  },
  onlyNumbers: {
    type: Boolean,
    default: false,
  },
  modelValue: [String, Number],
});

const restrictToNumbers = (event) => {
  if (props.onlyNumbers && !/\d/.test(event.key) && event.key !== 'Backspace' && event.key !== 'Delete') {
    event.preventDefault();
  }
};
</script>

<style lang="scss" scoped>
.transparent-input {
  border-radius: 4px;
  border: 1px solid $grayL;
  padding: 8px 16px;
  flex: 1;
}
.input-title {
  span {
    color: $gray;
    font-size: 13px;
    font-weight: 400;
  }
}
.input {
  border: none;
  outline: none;
  width: 100%;
}
</style>
