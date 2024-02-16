<template>
  <main>
    <div class="page">
      <div class="cart" v-if="store.getters.getCart.id !== 0">
        <div class="productCard">
          <div class="imageBlock">
            <img class="image" :src="choosenGood.image" alt="sorry">
          </div>
          <div class="details">
            <h1 class="title">{{choosenGood.title}}</h1>
            <p class="description">{{choosenGood.description}}</p>

          </div>
        </div>
        <div class="checkout">
          <h2>Checkout</h2>
          <div class="receipt">
            <h3>Receipt</h3>
            <p>Product: {{choosenGood.title}}</p>
            <p>Quantity: {{count}}</p>
            <p>Total Price: {{finalPrice}} €</p>
          </div>
          <button class="payButton" @click="pay">Pay Now</button>
        </div>
      </div>
      <div v-if="store.getters.getCart.id === 0">Добавьте что-то в корзину</div>
    </div>
  </main>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {mapActions, mapGetters, useStore} from 'vuex';
import script from "@/script";
const { getCart } = mapGetters(['getCart']);
const route = useRoute();
const choosenGood = ref('');
const store = useStore();
const info = computed(() => store.getters.getCart);
const count = info.value.counter


onMounted(async () => {
  choosenGood.value = await script.actions.fetchGoodById(info.value.id);
});


const finalPrice = computed(() => {
  const price = count * Number(choosenGood.value.price);
  return price.toFixed(2);
});

const router = useRouter();

// function pay() {
//   // Perform payment logic here
//   // Redirect to a success page or show a confirmation message
//   router.push({ name: 'payment-success' });
// }
</script>

<style scoped lang="scss">
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
}

.cart {
  display: flex;
  width: 80%;
  height: 80%;
  border: 1px solid black;
  border-radius: 8px;
  overflow: hidden;
}

.productCard {
  display: flex;
  width: 60%;
  border-right: 1px solid black;
  padding: 16px;
}

.imageBlock {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  width: 80%;
  height: auto;
}

.details {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
}

.title {
  font-size: 24px;
  margin-bottom: 8px;
}

.description {
  margin-bottom: 16px;
}

.priceBlock {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-size: 20px;
}

.counter {
  display: flex;
}

.counterPart {
  cursor: pointer;
  margin-right: 1px;
  border-radius: 2px;
  background-color: #b9b7b7;
  padding: 8px 12px;
}

.totalPrice {
  margin-top: 16px;
  font-size: 18px;
}

.checkout {
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.receipt {
  border: 1px solid black;
  padding: 16px;
  margin-bottom: 16px;
}

.payButton {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
