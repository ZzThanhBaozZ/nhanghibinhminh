<template>
  <div class="contain-box">
    <div class="flex-gap my-4 items-center">
      <div class="flex flex-col gap-1">
        <h1 class="title-one">Vị Trí Địa Lý</h1>
        <h4 class="title-four">
          Di chuyển thuận tiện ngay bên trong thành phố
          <span class="underline">Điện Biên Phủ</span>
        </h4>
      </div>
    </div>
    <div class="location-container">
      <LocationGroupFirst />
      <LocationGroupSecond />
      <LocationGroupThird />
    </div>
  </div>
</template>

<script setup></script>

<style>
.location-container {
  @media screen(md) {
    @apply flex justify-between;
  }
}
.card-box {
  aspect-ratio: 4/5;
  background-color: #fefefe;
  border: 1px solid #ddd;
  padding: 10px;
  @apply mb-4 rounded-lg;
  @media screen(md) {
    width: 30%;
    @apply mb-0;
  }
}
.dark .card-box {
  background: rgb(126, 101, 255);
  background: linear-gradient(
    90deg,
    rgba(126, 101, 255, 0.8) 0%,
    rgba(130, 149, 255, 0.8) 100%
  );
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.03);
}
</style>
