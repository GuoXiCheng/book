<template>
  <div class="book-shelf">
    <div class="shelf">
      <div v-for="(book, index) in books" :key="index" class="book">
        <p>{{ book.text }}</p>
        <div v-for="(item, itemId) in book.items" :key="itemId" @click="handleClick(item)" style="cursor: pointer">
          <img :src="item.image" :alt="item.title" />
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const books = ref({});

const props = defineProps({
  books: Object,
});

onMounted(() => {
  books.value = props.books as any;
  console.log(books.value);
});

function handleClick(item) {
  window.location.href = item.link;
}
</script>

<style scoped>
.book-shelf {
  text-align: center;
  padding: 20px;
}

.shelf {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.book {
  width: 120px;
  text-align: center;
}

.book img {
  width: 100px;
  height: 150px;
  object-fit: cover;
}

.book p {
  font-size: 14px;
  margin-top: 10px;
}
</style>
