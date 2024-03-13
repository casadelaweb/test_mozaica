<script lang="ts" setup>
interface iButtonProps {
  title: string,
}

const props = defineProps<iButtonProps>()
</script>

<template>
  <button :aria-label="title" :title="title" class="button-submit" type="submit">
    <slot>
      {{ title }}
    </slot>
  </button>
</template>

<style lang="scss" scoped>
.button-submit {
  text-align: center;
  margin: 16px auto 0;
  border-radius: 8px;
  width: 320px;
  height: 48px;
  background: #303030;
  color: white;
  transition: background-color 0.15s;

  @media (any-hover: hover) {
    &:hover {
      background: #878F97;
    }
  }

  &:active {
    background: black;
  }
}
</style>