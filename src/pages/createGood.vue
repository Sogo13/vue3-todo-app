<template>
  <div>
    <div class="header">
      <p class="header-txt">Создание товара</p>
    </div>

    <div class="body">
      <div class="forms">
        <form action="">
          <label class="forms-label">Фото товара</label>
          <input type="file" accept="image/*" @change="handleFileUpload">
        </form> <form action="">
        <label class="forms-label">Название</label>
        <textarea class="forms-input" v-model="title"></textarea>
      </form>
        <form action="">
          <label class="forms-label">Описание товара</label>
          <textarea class="forms-input" v-model="description"></textarea>
        </form>
        <form action="">
          <label class="forms-label">Цена товара</label>
          <input class="forms-input" @blur="validatePrice" type="number" v-model="price">
          <p v-if="priceError">{{priceError}}</p>
        </form>


      </div>
      <div class="btnContainer">
      <button class="btn" @click="createProduct">Создать товар</button>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import store from "@/store/store";

const router = useRouter();
const priceError = ref('')
const file = ref(null);
const title = ref('')
const description = ref('');
const price = ref(0);

async function createProduct() {
  validatePrice()
  // Проверяем, что все поля заполнены
  if (!file.value || !description.value || !price.value) {
    console.error('Please fill in all fields');
    return;
  }
  validatePrice()
  if (priceError.value !== ''){
    return
  }
  // Создаем объект данных для отправки на сервер
  const data = {
    img:file.value,
    price: price.value,
    title: title.value,
    description:description.value
  }
  await store.dispatch('addGood', {data})

}
function validatePrice() {
  if (!price.value || price.value < 1){
    priceError.value = 'Error in price'
  }
  else{
    priceError.value = ''
  }
}
function handleFileUpload(event) {
  file.value = event.target.files[0];
}
</script>

<style scoped lang="scss">
.header {
  font-size: 6rem;
  margin-top: 5%;
  text-align: center;
}

.body {
  padding: 20px;
}
.btnContainer{
  width: 100%;
  align-items: center;
}
.btn {
margin-left: 37%;
  margin-top: 24px;
  padding: 16px;
  width: 25%;
}

.forms {
  text-align: center;

  &-label {
    padding: 8px;
    font-size: 24px;
  }

  &-input {
    width: 25%;
    border: none;
  }
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
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

