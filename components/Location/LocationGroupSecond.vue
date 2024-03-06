<template>
  <div class="card-box py-2">
    <div class="location-holder">
      <Icon name="ph:butterfly-bold" color="black" class="icon-title" />
      <h1 class="title-two">Địa Điểm Du Lịch</h1>
    </div>
    <div>
      <div
        class="start-end-box"
        v-for="(location, index) in locations"
        :key="index"
      >
        <h1>{{ location.name }}</h1>
        <h1>{{ location.distance }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
const locations = [
  { name: "Hồ Pá Khoang", distance: "18km" },
  { name: "Đèo Pha Đin", distance: "87km" },
];
</script>

<style></style>
