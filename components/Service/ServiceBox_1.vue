<template>
  <div class="service-box">
    <div>
      <h1 class="font-semibold">Loại Phòng</h1>
      <div class="tick-item" v-for="(item, index) in First" :key="index">
        <Icon
          name="icon-park-outline:correct"
          color="#32CD32"
          class="icon-sm"
        />
        <div class="flex w-full justify-between">
          <h2>{{ item.attr1 }}</h2>
          <h2>{{ item.attr2 }}</h2>
        </div>
      </div>
    </div>
    <div>
      <h1 class="font-semibold">Tiện Ích</h1>
      <div class="tick-item" v-for="(item, index) in Second" :key="index">
        <Icon
          name="icon-park-outline:correct"
          color="#32CD32"
          class="icon-sm"
        />
        <div class="flex w-full justify-between">
          <h2>{{ item.attr1 }}</h2>
          <h2>{{ item.attr2 }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const First = [
  { attr1: "Phòng Đơn", attr2: "1 Giường" },
  { attr1: "Phòng Đôi", attr2: "2 Giường" },
  { attr1: "Phòng Gia Đình", attr2: "3 Giường" },
];

const Second = [
  {
    attr1: "Chăn",
    attr2: "",
  },
  {
    attr1: "Gối",
    attr2: "",
  },
  {
    attr1: "Tủ Lạnh",
    attr2: "",
  },
  {
    attr1: "TV",
    attr2: "",
  },
  {
    attr1: "Điều Hòa",
    attr2: "",
  },
  {
    attr1: "Nóng Lạnh",
    attr2: "",
  },
  {
    attr1: "WC",
    attr2: "",
  },
];
</script>

<style></style>
