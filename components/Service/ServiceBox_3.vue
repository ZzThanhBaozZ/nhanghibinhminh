<template>
  <div class="service-box">
    <div>
      <h1 class="font-semibold">Gara Xe</h1>
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
      <h1 class="font-semibold">Bãi Đỗ Xe Rộng Rãi</h1>
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
  { attr1: "Xe Đạp", attr2: "" },
  { attr1: "Xe Máy", attr2: "" },
  { attr1: "Xe Phân Khối Lớn", attr2: "" },
];

const Second = [
  {
    attr1: "Xe 4 Chỗ",
    attr2: "",
  },
  {
    attr1: "Xe 7 Chỗ",
    attr2: "",
  },
  {
    attr1: "Xe 29 Chỗ",
    attr2: "",
  },
  {
    attr1: "Xe 36 Chỗ",
    attr2: "",
  },
  {
    attr1: "Xe 45 Chỗ",
    attr2: "",
  },
  {
    attr1: "Xe Bán Tải",
    attr2: "",
  },
];
</script>

<style></style>
