<template>
  <div>
    <h1
      class="hero-text absolute left-[50vw] top-[17vh] -z-10 text-[4vw] text-[#ff0000]"
    >
      Nhà Nghỉ Bình Minh
    </h1>
    <section class="mx1 my1">
      <div class="flex">
        <div class="flex-1">
          <h1 class="mt-8 text-3xl">NHÀ NGHỈ BÌNH MINH</h1>
          <div class="max-w-[80ch]">
            <small>Chào mừng quý khách đến với Nhà Nghỉ Bình Minh!</small>
            <br />
            <p class="mt-10">
              Tọa lạc tại vị trí thuận lợi nhất trong trung tâm thành phố, Nhà
              Nghỉ Bình Minh là điểm dừng chân lý tưởng cho du khách muốn thăm
              qua danh lam thắng cảnh và di tích lịch sử Điện Biên Phủ
            </p>
            <br />
            <p>
              Với phong cách phục vụ thân thiện, chúng tôi mong muốn sẽ mang đến
              cho quý khách trải nghiệm thoải mái và tiện nghi nhất có thể.
            </p>
            <div
              class="my-8 inline-block rounded-full bg-[hsl(0,70%,50%)] px-4 py-2 hover:scale-105 dark:bg-[hsl(0,90%,30%)]"
            >
              Xem thêm
              <Icon
                name="ph:arrow-right-light"
                color="black"
                class="icon-title"
              />
            </div>
          </div>
        </div>
        <figure class="flex flex-1 justify-end pt-4">
          <NuxtImg
            src="/hero.jpg"
            :placeholder="[50, 25, 75, 5]"
            class="hero-img rounded-md border-8"
          />
        </figure>
      </div>
    </section>
    <section class="mx1 my1">
      <h3>Vị Trí Địa Lý</h3>
      <small>Di Chuyển Thuận Tiện Ngay Bên Trong Thành Phố</small>
      <div class="grid grid-cols-4">
        <LocationGroupFirst />
        <LocationGroupSecond />
        <LocationGroupThird />
      </div>
    </section>
    <Location />
    <Service />
  </div>
</template>

<script setup>
import LocationGroupSecond from "~/components/Location/LocationGroupSecond.vue";

useHead({
  title: "Nhà Nghỉ Bình Minh",
});
</script>

<style></style>
