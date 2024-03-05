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
      <div class="card-box py-2">
        <div
          class="mb-4 flex items-center gap-2 border-b-2 border-b-black pb-2"
        >
          <Icon name="ph:map-pin-bold" color="black" class="icon-title" />
          <h1 class="title-two">Danh Lam Thắng Cảnh</h1>
        </div>
        <div>
          <div class="start-end-box">
            <h1>Bảo Tàng Chiến Thắng Lịch Sử Điện Biên Phủ</h1>
            <h1>0.2km</h1>
          </div>
          <div class="start-end-box">
            <h1>Nghĩa Trang Lịch Sử Điện Biên Phủ</h1>
            <h1>0.2km</h1>
          </div>
          <div class="start-end-box">
            <h1>Di Tích Lịch Sử Đồi A1</h1>
            <h1>0.4km</h1>
          </div>
          <div class="start-end-box">
            <h1>Tượng Đài Chiến Thắng Điện Biên Phủ</h1>
            <h1>1.5km</h1>
          </div>
        </div>
      </div>
      <div class="card-box py-2">
        <div
          class="mb-4 flex items-center gap-2 border-b-2 border-b-black pb-2"
        >
          <Icon name="ph:butterfly-bold" color="black" class="icon-title" />
          <h1 class="title-two">Địa Điểm Du Lịch</h1>
        </div>
        <div>
          <div class="start-end-box">
            <h1>Hồ Pá Khoang</h1>
            <h1>18km</h1>
          </div>
          <div class="start-end-box">
            <h1>Đèo Pha Đin</h1>
            <h1>87km</h1>
          </div>
        </div>
      </div>
      <div class="card-box py-2">
        <div
          class="mb-4 flex items-center gap-2 border-b-2 border-b-black pb-2"
        >
          <Icon name="ph:airplane-tilt-bold" color="black" class="icon-title" />
          <h1 class="title-two">Bến Đỗ</h1>
        </div>
        <div>
          <div class="start-end-box">
            <h1>Sân bay Điện Biên Phủ</h1>
            <h1>4km</h1>
          </div>
          <div class="start-end-box">
            <h1>Bến xe Điện Biên Phủ</h1>
            <h1>4km</h1>
          </div>
        </div>
      </div>
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
</style>
