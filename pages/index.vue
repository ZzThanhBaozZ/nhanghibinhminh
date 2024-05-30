<template>
  <div>
    <section class="mx1 my1">
      <h1>NHÀ NGHỈ BÌNH MINH</h1>
      <div>
        <p>Chào mừng quý khách đến với Nhà Nghỉ Bình Minh!</p>
        <br />
        <p>
          Tọa lạc tại vị trí thuận lợi nhất trong trung tâm thành phố, Nhà Nghỉ
          Bình Minh là điểm dừng chân lý tưởng cho du khách muốn thăm qua danh
          lam thắng cảnh và di tích lịch sử Điện Biên Phủ
        </p>
        <br />
        <p>
          Với phong cách phục vụ thân thiện, chúng tôi mong muốn sẽ mang đến cho
          quý khách trải nghiệm thoải mái và tiện nghi nhất có thể.
        </p>
      </div>
    </section>
    <section class="mx1 my1">
      <h3>Vị Trí Địa Lý</h3>
      <small>Di Chuyển Thuận Tiện Ngay Bên Trong Thành Phố</small>
      <div class="grid grid-cols-4">
        <div
          class="my3 px3 py3 col-start-1 col-end-3 h-[20vh] rounded-lg bg-gray-300"
        >
          <h5>Danh Lam Thắng Cảnh</h5>
        </div>
        <div
          class="my3 px3 py3 col-start-2 col-end-4 h-[20vh] rounded-lg bg-gray-300"
        >
          <h5>Địa Điểm Du Lịch</h5>
        </div>
        <div
          class="my3 px3 py3 col-start-3 col-end-5 h-[20vh] rounded-lg bg-gray-300"
        >
          <h5>Bến Đón</h5>
        </div>
      </div>
    </section>
    <Location />
    <Service />
  </div>
</template>

<script setup>
useHead({
  title: "Nhà Nghỉ Bình Minh",
});
</script>

<style></style>
