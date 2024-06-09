<template>
  <div class="service-box col-start-2 col-end-4 flex-1">
    <div>
      <h6 class="font-semibold">Giặt Quần Áo</h6>
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
      <h6 class="font-semibold">Sấy Quần Áo</h6>
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

<script lang="ts" setup>
const First = [
  { attr1: "Số Lượng Ít", attr2: "" },
  { attr1: "Số Lượng Vừa", attr2: "" },
  { attr1: "Số Lượng Lớn", attr2: "" },
];

const Second = [
  {
    attr1: "Số Lượng Ít",
    attr2: "",
  },
  {
    attr1: "Số Lượng Vừa",
    attr2: "",
  },
  {
    attr1: "Số Lượng Lớn",
    attr2: "",
  },
];
</script>

<style></style>
