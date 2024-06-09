<template>
  <div class="service-list">
    <div class="button-box" v-for="(service, index) in services" :key="index">
      <Icon :name="service.icon_name" color="black" class="icon-title" />
      <p>{{ service.name }}</p>
    </div>
  </div>
</template>

<script setup>
const services = [
  { icon_name: "tabler:bed-filled", name: "Thuê Phòng" },
  { icon_name: "tabler:wifi", name: "Mạng WIFI" },
  { icon_name: "tabler:parking-circle", name: "Chỗ Để Xe" },
  { icon_name: "tabler:wash-temperature-3", name: "Giặt Đồ" },
  { icon_name: "healthicons:clean-hands-outline", name: "Dọn Dẹp" },
  { icon_name: "fluent:payment-16-regular", name: "Thanh Toán" },
];
</script>

<style></style>
