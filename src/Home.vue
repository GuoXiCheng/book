<template>
  <div class="book-shelf">
    <div class="shelf">
      <div v-for="(book, index) in books" :key="index" class="book">
        <img :src="book.cover" :alt="book.title" />
        <p>{{ book.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const books = [
  { title: "书籍 1", cover: "/images/107eae4c90418237.jpg" },
  { title: "书籍 2", cover: "/images/107eae4c90418237.jpg" },
  { title: "书籍 3", cover: "/images/107eae4c90418237.jpg" },
  // 你可以继续添加更多书籍
];
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
