<template>
  <div>
    <div class="header">
      <p class="header-txt">Вход</p>
    </div>

    <div class="body">
      <div class="forms">
        <label class="forms-label">Email</label>
        <input v-model="email" @blur="validateEmail" class="forms-input" :class="{ 'error': emailError }">
        <div class="error-message" v-if="emailError">{{ emailError }}</div>

        <label class="forms-label">Password</label>
        <input v-model="password" @blur="validatePassword" class="forms-input" type="password" :class="{ 'error': passwordError }">
        <div class="error-message" v-if="passwordError">{{ passwordError }}</div>

<!--        <label class="forms-label">Address</label>-->
<!--        <input v-model="address" @blur="validateAddress" class="forms-input" :class="{ 'error': addressError }">-->
<!--        <div class="error-message" v-if="addressError">{{ addressError }}</div>-->

<!--        <label class="forms-label">Card Number</label>-->
<!--        <input v-model="cardNumber" @blur="validateCardNumber" type="number" class="forms-input" :class="{ 'error': cardNumberError }">-->
<!--        <div class="error-message" v-if="cardNumberError">{{ cardNumberError }}</div>-->
        <div><button class="btn" @click="handleSubmit">Submit</button></div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {useRouter} from "vue-router";
const router = useRouter();

const email = ref('');
const password = ref('');
const address = ref('');
const cardNumber = ref('');

const emailError = ref('');
const passwordError = ref('');
const addressError = ref('');
const cardNumberError = ref('');

function validateEmail() {
  if (!email.value) {
    emailError.value = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    emailError.value = 'Invalid email format';
  } else {
    emailError.value = '';
  }
}

function validatePassword() {
  if (!password.value) {
    passwordError.value = 'Password is required';
  } else {
    passwordError.value = '';
  }
}

function validateAddress() {
  if (!address.value) {
    addressError.value = 'Address is required';
  } else {
    addressError.value = '';
  }
}

function validateCardNumber() {
  if (!cardNumber.value) {
    cardNumberError.value = 'Card Number is required';
  } else {
    cardNumberError.value = '';
  }
}

async function handleSubmit() {
  validateEmail();
  validatePassword();
  if (emailError.value === '' && passwordError.value === ''){
    localStorage.setItem('isAuthenticated', 'true');
    await router.push({name:'createGood'})
  }

}
</script>
<style scoped lang="scss">
.header{
  font-size: 6rem;
  margin-top: 5%;
  text-align: center;
}
.body{
  padding: 20px;

}
.btn{
  margin-top: 24px;
  padding: 16px;
  width: 25%;
}

.forms{
  text-align: center;
  &-label{
    padding: 8px;
    font-size: 24px;
  }
  &-input{
    width: 25%;
    border: none;
  }
}
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none; // Yeah, yeah everybody write about it
}
input[type='number'],
input[type='number']:hover,
input[type='number']:focus {
  appearance: none;
  -moz-appearance: textfield;
}
label {
  margin-top: 10px;
  display: block;
}

input {
  font-size: 18px;
  padding: 24px 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
}

input.error {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>