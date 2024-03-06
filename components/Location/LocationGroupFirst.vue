<template>
  <div class="card-box py-2">
    <div class="location-holder">
      <Icon name="ph:map-pin-bold" color="black" class="icon-title" />
      <h1 class="title-two">Danh Lam Thắng Cảnh</h1>
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
  { name: "Bảo Tàng Chiến Thắng Lịch Sử Điện Biên Phủ", distance: "0.2km" },
  { name: "Nghĩa Trang Lịch Sử Điện Biên Phủ", distance: "0.2km" },
  { name: "Di Tích Lịch Sử Đồi A1", distance: "0.4km" },
  { name: "Tượng Đài Chiến Thắng Điện Biên Phủ", distance: "1.5km" },
];
</script>

<style></style>
