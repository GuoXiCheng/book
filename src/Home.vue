<template>
  <div class="shelf">
    <div v-for="(book, index) in books" :key="index">
      <div class="shelf-year">{{ book.text }} 年</div>
      <div class="books">
        <div class="book" v-for="(item, itemId) in book.items" @click="handleClick(item)">
          <img :src="item.image" :alt="item.title" />
          <div class="title">{{ item.text }}</div>
          <div class="author">{{ item.author }}</div>
          <div class="author">{{ item.date }}</div>
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
  // console.log(books.value);
});

function handleClick(item) {
  window.location.href = item.link;
}
</script>

<style scoped>
.shelf {
  margin: 30px;
}
.shelf-year {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  border-bottom: 3px solid #b9bec7;
  padding-bottom: 4px;
  width: 100%;
}
.books {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  cursor: pointer;
}
.book {
  width: 160px;
}
.book img {
  width: 150px;
  height: 200px;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}
.title {
  font-size: 14px;
  font-weight: bold;
  color: var(--text);
  text-align: center;
}

.author {
  font-size: 12px;
  color: var(--subtext);
  text-align: center;
}
</style>
