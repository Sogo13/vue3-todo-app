<template>
  <p @click="hidden = !hidden"
     v-css:[property]="color"
     v-css:fontSize="'10rem'">hide all
  </p>
  <template v-if="!hidden">
    <p @click="flag = !flag">change flag</p>
    <Page>
      <template #default="mainProps">
        {{ mainProps.mainText }}
        <p>{{mainProps.profile.name}}
          @ {{mainProps.profile.secondName}}</p>
        dfghfghj
        <pre>{{ log(textUpp) }} #{{counter}}</pre>
        <my-input v-model.lazy.number="text" v-model:counter.qwe.drop="counter"></my-input>
        sdfgdgh
      </template>

      <template #header>
        <h1>My Header</h1>
      </template>
      <template #footer>
        <h1>My Footer</h1>
      </template>
    </Page>
  </template>
</template>


<script setup>
import MyInput from '@/components/MyInput.vue';
import { computed, ref } from 'vue';
import Page from '@/components/Page.vue';

const text = ref('text')
const color = ref('yellow')
const counter = ref(0)

const flag = ref(true)
const hidden = ref(false)
const property = ref('color')

const textUpp = computed(() => upp(text.value))

function upp(val) {
  return val.toString().toUpperCase();
}
function log(val) {
  console.log(val)
  return val
}
function exp(val) {
  return val + '!!!'
}
</script>