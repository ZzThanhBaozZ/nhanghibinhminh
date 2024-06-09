<template>
  <div
    class="my3 px3 py3 border-a col-start-1 col-end-3 rounded-lg bg-gray-200 dark:bg-[rgb(25,25,25)] lg:h-[30rem]"
  >
    <h5>
      <Icon name="ph:map-pin-bold" color="black" class="icon-title" />Danh Lam
      Thắng Cảnh
    </h5>
    <div>
      <div
        class="start-end-box"
        v-for="(location, index) in locations"
        :key="index"
      >
        <p>{{ location.name }}</p>
        <p class="data-number">{{ location.distance }}</p>
      </div>
    </div>
    <div
      class="my-8 inline-block rounded-full bg-[hsl(0,70%,50%)] px-4 py-2 text-white hover:scale-105 dark:bg-[hsl(0,90%,30%)]"
    >
      <p>
        <NuxtLink to="/contact"> Liên hệ ngay </NuxtLink>
        <Icon name="ph:arrow-right-light" color="white" class="icon-a" />
      </p>
    </div>
  </div>
</template>

<script setup>
const locations = [
  { name: "Bảo Tàng Chiến Thắng Lịch Sử Điện Biên Phủ", distance: "0.2 km" },
  { name: "Nghĩa Trang Lịch Sử Điện Biên Phủ", distance: "0.2 km" },
  { name: "Di Tích Lịch Sử Đồi A1", distance: "0.4 km" },
  { name: "Tượng Đài Chiến Thắng Điện Biên Phủ", distance: "1.5 km" },
];
</script>

<style></style>
