<script lang="ts" setup>
interface iFormFieldsetProps {
  inputId: string,
  labelText: string,
}

const props = defineProps<iFormFieldsetProps>()
</script>

<template>
  <fieldset class="fieldset">
    <label :for="inputId" class="fieldset-label">
      {{ labelText }}
    </label>
    <slot></slot>
  </fieldset>
</template>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.fieldset {
  &-label {
    @extend .font-l !optional;
    display: block;
    margin-bottom: 4px;
    color: #303030;
  }
}
</style>