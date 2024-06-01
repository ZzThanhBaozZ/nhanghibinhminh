<template>
  <div
    class="my3 px3 py3 border-a col-start-3 col-end-5 row-start-2 h-[30rem] rounded-lg bg-gray-200 dark:bg-[rgb(25,25,25)]"
  >
    <h5>
      <Icon name="ph:butterfly-bold" color="black" class="icon-title" />
      Địa Điểm Du Lịch
    </h5>
    <div
      class="start-end-box"
      v-for="(location, index) in locations"
      :key="index"
    >
      <p>{{ location.name }}</p>
      <p class="data-number">{{ location.distance }}</p>
    </div>
  </div>
</template>

<script setup>
const locations = [
  { name: "Hồ Pá Khoang", distance: "18 km" },
  { name: "Đèo Pha Đin", distance: "87 km" },
];
</script>

<style></style>
