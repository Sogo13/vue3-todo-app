<template>
  <page>
    <template #header>
      my header
    </template>

    <template #default>
      <p @click="text = 'updated'" v-red>{{ text }}</p>
      <my-input :label="'My input '+count" v-model.trim="text"
                v-model:cleared-count="count">
        <h1>sdfsdfg</h1>
        <p>sdfsdfg</p>
      </my-input>
    </template>

    <template #footer="footerProps">
      footer {{ footerProps.year }} @ {{ footerProps.profile.name }}
    </template>
  </page>
</template>

<script setup>
import {ref} from "vue";
import MyInput from "@/components/MyInput.vue";
import Page from "@/components/Page.vue";

const text = ref('default');
const count = ref(0)

const log = console.log
</script>