<script lang="ts" setup>
import ButtonSubmit from 'src/views/components/ButtonSubmit.vue'
import FormFieldset from 'src/views/components/FormFieldset.vue'
import FormField from 'src/views/components/FormField.vue'
import { ref } from 'vue'
import { validate } from 'src/scripts/validate.ts'

const field = ref({
  inputId: 'comment',
  labelText: 'Текст перед полем ввода',
  isSending: false,
  isValid: true,
  errorText: '',
  lengthMax: 1000,
  name: 'Название поля',
})

function submit(event: Event) {
  const button = event.target as HTMLButtonElement
  const form: HTMLFormElement = button.closest('form')
}
</script>

<template>
  <form class="form">
    <FormFieldset :input-id="field.inputId" :label-text="field.labelText">
      <FormField :error-text="field.errorText"
                 :input-id="field.inputId"
                 :is-sending="field.isSending"
                 :is-valid="field.isValid"
                 :length-max="field.lengthMax"
                 :name="field.name"/>
    </FormFieldset>
    <ButtonSubmit title="Отправить" @click="submit"/>
  </form>
</template>

<style lang="scss" scoped>
.form {
  margin: 100px auto;
  width: 326px;
}
</style>