<template>
  <div class="service-box flex-1">
    <div>
      <h6 class="font-semibold">Hỗ Trợ Thanh Toán</h6>
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
  { attr1: "Nhanh", attr2: "" },
  { attr1: "Gọn", attr2: "" },
  { attr1: "24/7", attr2: "" },
];

const Second = [
  {
    attr1: "Tiền Mặt",
    attr2: "",
  },
  {
    attr1: "Chuyển Khoản",
    attr2: "Mã QR",
  },
  {
    attr1: "Lập Hóa Đơn",
    attr2: "Doanh Nghiệp",
  },
];
</script>

<style></style>
