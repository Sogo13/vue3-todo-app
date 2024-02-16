<template>
  <main>
    <div class="page">
      <div class="product">
        <div class="imageBlock">
          <img class="image" :src="choosenGood.image" alt="sorry">
        </div>
        <div class="details">
          <div>
          <h1 class="title">{{choosenGood.title}}</h1>
          <p class="description">{{choosenGood.description}}</p>
          </div>
          <div class="priceBlock">
            <h3 class="price">{{choosenGood.price}} €</h3>
            <div>
              <div class="counter">
                <p class="counterPart">{{count}}</p>
                <p class="counterPart" @click="deleteGood">-</p>
                <p class="counterPart" @click="addGood">+</p>

              </div>
              <p>All {{finalPrice}} €</p>
              <button class="addToCart" @click="goToCart">Add to Cart</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import {computed, onMounted, reactive, ref} from 'vue';
import {  mapActions } from 'vuex';
import {useRoute} from "vue-router";
import {useRouter} from "vue-router";
const { addToCart } = mapActions( ['addToCart']);
const router = useRouter();
import script from "@/script";
import store from "@/store/store";
const route = useRoute();
const choosenGood = ref('');
const count = ref(1)
onMounted(async () => {

  const goodId = Number(route.params.id);
  choosenGood.value = await script.actions.fetchGoodById(goodId);
});
function addGood(){
  count.value++
}
function deleteGood(){
  if (count.value > 1){
    count.value--
  }

}
function goToCart(){
  let data = {
    id:choosenGood.value.id,
    counter:count.value
  }
  store.dispatch('addToCart',{data})
  router.push({ name: 'cart' });
}
const finalPrice = computed(function() {
  const price = count.value * Number(choosenGood.value.price);
  return price.toFixed(2);
});
</script>
<style scoped lang="scss">
.counter{
  display: flex;
}
.counterPart{
  cursor: pointer;
  margin-right: 1px;
  border-radius: 2px;
  background-color: #b9b7b7;
  padding: 8px 12px;

}
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
}

.product {
  display: flex;
  width: 80%;
  height: 80%;
  border: 1px solid black;
  border-radius: 8px;
  overflow: hidden;
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
  justify-content: space-around;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  position: relative;

}

.title {
  font-size: 24px;
  margin-bottom: 8px;
}

.description {
  margin-bottom: 16px;
}

.priceBlock {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-size: 20px;
}

.addToCart {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>