<template>
  <div class="service-box col-start-1 col-end-3 flex-1">
    <div>
      <h6 class="font-semibold">Dọn dẹp theo yêu cầu</h6>
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
      <h6 class="font-semibold">Dọn dẹp thường xuyên</h6>
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
  { attr1: "Sạch Sẽ", attr2: "" },
  { attr1: "Đảm Bảo", attr2: "" },
  { attr1: "An Toàn", attr2: "" },
];

const Second = [
  {
    attr1: "Theo Giờ",
    attr2: "",
  },
  {
    attr1: "Theo Ngày",
    attr2: "",
  },
];
</script>

<style></style>
