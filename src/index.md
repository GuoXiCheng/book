---
layout: page
sidebar: false
---

<script setup>
import { ref } from 'vue';
import Home from './Home.vue'
import { useData } from 'vitepress';

const { theme: {_value: {nav, sidebar}} } = useData();

const books = ref({});
books.value = sidebar;

</script>

<Home :books="books"/>
