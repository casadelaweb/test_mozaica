<script lang="ts" setup>
interface iFormFieldProps {
  isSending: boolean,
  errorText: string,
  isValid: boolean,
  lengthMax: number,
  inputId: string,
  name: string,
}

const props = defineProps<iFormFieldProps>()

const modelTextarea = defineModel('modelTextarea', {
  default: '',
})

function toggleName(event: Event) {
  const textarea = event.target as HTMLTextAreaElement
  const field: HTMLElement = textarea.closest('.field')
  const fieldName: HTMLElement = field.querySelector('.field-name')

  fieldName.classList.toggle('_active')
}

function clear() {
  modelTextarea.value = ''
}
</script>

<template>
  <div class="field">
    <div class="field-body">
      <div class="field-name">{{ name }}</div>
      <div :class="{'_sending': isSending,}" class="field-loader">
        <img alt="loading" loading="lazy" src="src/assets/img/loading.png">
      </div>
      <textarea :id="inputId"
                v-model="modelTextarea"
                :class="{'_error': !isValid}"
                class="field-textarea"
                @blur="toggleName"
                @focus="toggleName"
      ></textarea>
    </div>
    <div v-if="!isValid" class="field-error">
      {{ errorText }}
    </div>
    <div class="field-counter">{{ modelTextarea.length }}/{{ lengthMax }}</div>
    <button aria-label="Очистить" class="field-clear"
            title="Очистить" type="button" @click="clear">
      Очистить
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.field {
  position: relative;
  z-index: 0;

  &-body {
    position: relative;
    z-index: 0;
  }

  &-name {
    @extend .font-m !optional;
    position: absolute;
    z-index: 1;
    top: 4px;
    left: 12px;
    transition: font-size 0.15s linear 0s;

    &._active {
      @extend .font-xs !optional;
    }
  }

  &-loader {
    position: absolute;
    z-index: 1;
    top: 7px;
    right: 7px;
    width: 18px;
    height: 18px;
    transition: transform 0.15s;
    transform: scale(0);

    &._sending {
      @include spin;
    }

    img {
      display: inline-block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  &-textarea {
    @extend .font-m !optional;
    @include scrollbar;
    background: #F0F0F0;
    display: block;
    width: 100%;
    height: 146px;
    padding: 20px 32px 16px 12px;
    border-radius: 8px;
    margin-bottom: 8px;
    transition: background-color 0.15s;

    &._error {
      background: #FBF0EF;
    }
  }

  &-error {
    @extend .font-sm !optional;
    color: #D6675C;
  }

  &-counter {
    @extend .font-sm !optional;
    color: #878F97;
  }

  &-clear {
    @extend .font-sm !optional;
    color: #00B6D0;
  }
}
</style>