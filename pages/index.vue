<template>
  <div>
    <h1
      class="hero-text invisible left-[50vw] top-[17vh] text-[4vw] text-[#ff0000] lg:visible lg:absolute"
    >
      Nhà Nghỉ Bình Minh
    </h1>
    <section class="mx2 my2 lg:mx1 lg:my1">
      <div class="flex">
        <div class="flex-1">
          <h1 class="mt-8 text-xl md:text-2xl">
            NHÀ NGHỈ
            <span class="mt-1 block text-2xl md:inline"> BÌNH MINH</span>
          </h1>
          <div class="max-w-[80ch]">
            <small>Chào mừng quý khách đến với Nhà Nghỉ Bình Minh!</small>
            <br />
            <p class="mt-10">
              Tọa lạc tại vị trí thuận lợi nhất trong trung tâm thành phố, Nhà
              Nghỉ Bình Minh là điểm dừng chân lý tưởng cho du khách muốn thăm
              quan danh lam thắng cảnh và di tích lịch sử Điện Biên Phủ
            </p>
            <br />
            <p>
              Với phong cách phục vụ thân thiện, chúng tôi mong muốn sẽ mang đến
              cho quý khách trải nghiệm thoải mái và tiện nghi nhất có thể.
            </p>
            <div
              class="my-8 inline-block rounded-full bg-[hsl(0,70%,50%)] px-4 py-2 text-white hover:scale-105 dark:bg-[hsl(0,90%,30%)]"
            >
              <p>
                <NuxtLink to="/contact"> Liên hệ ngay </NuxtLink>
                <Icon
                  name="ph:arrow-right-light"
                  color="white"
                  class="icon-a"
                />
              </p>
            </div>
          </div>
        </div>
        <figure class="hidden flex-1 justify-end pt-4 lg:flex">
          <NuxtImg
            loading="lazy"
            format="webp"
            quality="75"
            src="/hero.jpg"
            :placeholder="[50, 25, 75, 5]"
            class="hero-img rounded-md border-8"
          />
        </figure>
      </div>
    </section>
    <section class="mx1 my1 flex flex-col justify-center text-center">
      <small>Cung Cấp</small>
      <h2>Dịch vụ nhà nghỉ <span class="block md:inline">chất lượng</span></h2>
      <div
        class="my3 grid grid-cols-2 gap-8 md:items-start lg:flex lg:h-[20vh] lg:gap-4"
      >
        <div class="my4 w-full flex-1 rounded-lg border-red-900">
          <h4>Vị trí <span class="block md:inline">thuận lợi</span></h4>
          <p class="px4 mx4 my4 hidden md:block">
            Nhà nghỉ tọa lạc tại một trong những vị trí thuận lợi nhất trong
            thành phố.
          </p>
        </div>
        <div class="my4 w-full flex-1 rounded-lg border-red-900">
          <h4>Dịch Vụ <span class="block md:inline">Đầy Đủ</span></h4>
          <p class="px4 mx4 my4 hidden md:block">
            Nhà nghỉ cung cấp dịch vụ đầy đủ cho từng phòng nghỉ.
          </p>
        </div>
        <div class="my4 w-full flex-1 rounded-lg border-red-900">
          <h4>Giá Cả <span class="block md:inline">Bình Dân</span></h4>
          <p class="px4 mx4 my4 hidden md:block">
            Nhà nghỉ đảm bảo mức giá phụ hợp với nhu cầu từng đối tượng thuê
            phòng.
          </p>
        </div>
        <div class="my4 w-full flex-1 rounded-lg border-red-900">
          <h4>Hỗ Trỡ <span class="block md:inline">Nhiệt Tình</span></h4>
          <p class="px4 mx4 my4 hidden md:block">
            Nhà nghỉ sẵn sàng hỗ trợ giải đáp thắc mắc và trợ giúp khách hàng.
          </p>
        </div>
      </div>
      <div
        class="is-golden-border my3 hidden rounded-lg border md:block lg:m-0"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1481.86329964813!2d103.01667285064794!3d21.380069153365977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312d08431baaf323%3A0xa053377a79b097f4!2zTmjDoCBOZ2jhu4kgQsOsbmggTWluaA!5e0!3m2!1svi!2s!4v1717737932996!5m2!1svi!2s"
          class="h-[40vh] w-full rounded-lg dark:contrast-[90%]"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
    <section class="mx2 my2 lg:mx1 lg:my1">
      <h3 class="right-line">Vị Trí Địa Lý</h3>
      <small>Di Chuyển Thuận Tiện Ngay Bên Trong Thành Phố</small>
      <div class="flex flex-col lg:grid lg:grid-cols-4">
        <LocationGroupFirst />
        <LocationGroupSecond />
        <LocationGroupThird />
      </div>
    </section>
    <section class="mx2 my2 lg:mx1 lg:my1">
      <h3 class="right-line">Không gian nhà nghỉ</h3>
      <small>Không gian rộng rãi, ấm cúng</small>
      <div class="my4 lg:my3 flex flex-col gap-8">
        <div>
          <h5 class="my4">Sân Trước</h5>
          <div class="card-container h-[20rem] justify-center lg:h-auto">
            <div
              class="card-display flex h-[20rem] items-end rounded-lg bg-gray-700 lg:h-[40rem] lg:flex-[2_2_0%]"
              id="park-img"
            >
              <h6
                class="m-4 rounded-md border bg-gray-200 px-4 py-2 drop-shadow-2xl dark:bg-[rgb(25,25,25)]"
              >
                Chỗ Để Xe
              </h6>
            </div>
          </div>
        </div>
        <div>
          <h5 class="my4">Phòng Khách</h5>
          <div
            class="card-container flex h-[50rem] flex-col justify-center gap-4 lg:h-auto lg:flex-row"
          >
            <div
              class="card-display flex h-[20rem] items-end rounded-lg bg-gray-700 lg:h-[40rem] lg:flex-[2_2_0%]"
              id="lobby-img"
            >
              <h6
                class="m-4 rounded-md border bg-gray-200 px-4 py-2 drop-shadow-2xl dark:bg-[rgb(25,25,25)]"
              >
                Lễ Tân
              </h6>
            </div>
            <div
              class="card-display flex h-[20rem] flex-1 items-end rounded-lg bg-gray-700 lg:h-[40rem]"
              id="elavator-img"
            >
              <h6
                class="m-4 rounded-md border bg-gray-200 px-4 py-2 drop-shadow-2xl dark:bg-[rgb(25,25,25)]"
              >
                Thang Máy
              </h6>
            </div>
          </div>
        </div>
        <div>
          <h5 class="my4">Phòng Thuê</h5>
          <div
            class="card-container flex h-[50rem] flex-col justify-center gap-4 lg:h-auto lg:flex-row"
          >
            <div
              class="card-display flex h-[20rem] flex-1 items-end rounded-lg bg-gray-700 lg:hover:flex-[2_2_0%]"
              id="one-bed-img"
            >
              <h6
                class="m-4 rounded-md border bg-gray-200 px-4 py-2 drop-shadow-2xl dark:bg-[rgb(25,25,25)]"
              >
                Phòng 1 giường
              </h6>
            </div>
            <div
              class="card-display flex h-[20rem] flex-1 items-end rounded-lg bg-gray-700 lg:hover:flex-[2_2_0%]"
              id="two-bed-img"
            >
              <h6
                class="m-4 rounded-md border bg-gray-200 px-4 py-2 drop-shadow-2xl dark:bg-[rgb(25,25,25)]"
              >
                Phòng 2 giường
              </h6>
            </div>
            <div
              class="card-display flex h-[20rem] flex-1 items-end rounded-lg bg-gray-700 lg:hover:flex-[2_2_0%]"
              id="three-bed-img"
            >
              <h6
                class="m-4 rounded-md border bg-gray-200 px-4 py-2 drop-shadow-2xl dark:bg-[rgb(25,25,25)]"
              >
                Phòng 3 giường
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mx2 my2 lg:mx1 lg:my1">
      <h3 class="right-line">Dịch Vụ Phòng</h3>
      <small>Đảm bảo dịch vụ cung cấp đầy đủ</small>
      <ServiceButton />
      <div class="flex grid-cols-1 flex-col gap-4 lg:grid lg:grid-cols-3">
        <ServiceBox1 />
        <ServiceBox2 />
        <ServiceBox3 />
        <ServiceBox4 />
        <ServiceBox5 />
        <ServiceBox6 />
      </div>
    </section>
  </div>
  <div
    class="fixed bottom-0 right-0 m-2 rounded-full border-2 border-gray-700 px-2 py-2 dark:border-gray-300 md:m-4 lg:m-8"
  >
    <a href="tel:0915587455">
      <Icon name="line-md:phone-call-loop" color="black" class="icon-title"
    /></a>
  </div>
</template>

<script setup>
import LocationGroupSecond from "~/components/Location/LocationGroupSecond.vue";

useHead({
  title: "Nhà Nghỉ Bình Minh | Kính Chào Quý Khách",
  htmlAttrs: {
    lang: "vi",
  },
  meta: [
    {
      name: "description",
      content:
        "Tọa lạc tại vị trí thuận lợi nhất cho quý du khách muốn thăm quan danh lam thắng cảnh và di tích lịch sử Điện Biên Phủ.",
    },
    {
      charset: "utf-8",
    },
  ],
});
</script>

<style></style>
