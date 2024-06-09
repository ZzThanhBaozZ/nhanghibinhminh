<template>
  <div class="service-box col-start-1 col-end-3 flex-1">
    <div>
      <h6 class="font-semibold">Loại Phòng</h6>
      <div class="tick-item" v-for="(item, index) in First" :key="index">
        <Icon
          name="icon-park-outline:correct"
          color="#32CD32"
          class="icon-sm"
        />
        <div class="flex w-full justify-between">
          <p>{{ item.attr1 }}</p>
          <p>{{ item.attr2 }}</p>
        </div>
      </div>
    </div>
    <div>
      <h6 class="font-semibold">Tiện Ích</h6>
      <div class="tick-item" v-for="(item, index) in Second" :key="index">
        <Icon
          name="icon-park-outline:correct"
          color="#32CD32"
          class="icon-sm"
        />
        <div class="flex w-full justify-between">
          <p>{{ item.attr1 }}</p>
          <p>{{ item.attr2 }}</p>
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
