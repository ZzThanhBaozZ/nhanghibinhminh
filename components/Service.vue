<template>
  <div class="contain-box">
    <div class="flex-gap my-4 items-center">
      <div class="flex flex-col gap-1">
        <h1 class="title-one">Dịch Vụ Cung Cấp</h1>
        <h4 class="title-four">
          Đảm bảo dịch vụ hoàn hảo khi dừng chân
          <span class="underline">Điện Biên Phủ</span>
        </h4>
      </div>
    </div>
    <div class="service-list">
      <div class="button-box">
        <Icon name="tabler:bed-filled" color="black" class="icon-title" />
        <h1>Thuê Phòng</h1>
      </div>
      <div class="button-box">
        <Icon name="tabler:wifi" color="black" class="icon-title" />
        <h1>Mạng WIFI</h1>
      </div>
      <div class="button-box">
        <Icon name="tabler:parking-circle" color="black" class="icon-title" />
        <h1>Chỗ Để Xe</h1>
      </div>
      <div class="button-box">
        <Icon
          name="tabler:wash-temperature-3"
          color="black"
          class="icon-title"
        />
        <h1>Giặt Đồ</h1>
      </div>
      <div class="button-box">
        <Icon
          name="healthicons:clean-hands-outline"
          color="black"
          class="icon-title"
        />
        <h1>Dọn Dẹp</h1>
      </div>
      <div class="button-box">
        <Icon
          name="fluent:payment-16-regular"
          color="black"
          class="icon-title"
        />
        <h1>Thanh Toán</h1>
      </div>
    </div>
    <div class="service-grid">
      <div class="service-box">
        <div>
          <h1 class="font-semibold">Loại Phòng</h1>
          <div class="tick-item">
            <Icon
              name="icon-park-outline:correct"
              color="#32CD32"
              class="icon-sm"
            />
            <div class="flex w-full justify-between">
              <h2>Phòng Đơn</h2>
              <h2>1 Giường</h2>
            </div>
          </div>
          <div class="tick-item">
            <Icon
              name="icon-park-outline:correct"
              color="#32CD32"
              class="icon-sm"
            />
            <div class="flex w-full justify-between">
              <h2>Phòng Đôi</h2>
              <h2>2 Giường</h2>
            </div>
          </div>
          <div class="tick-item">
            <Icon
              name="icon-park-outline:correct"
              color="#32CD32"
              class="icon-sm"
            />
            <div class="flex w-full justify-between">
              <h2>Phòng Gia Đình</h2>
              <h2>3 Giường</h2>
            </div>
          </div>
        </div>
        <div>
          <h1 class="font-semibold">Tiện Ích</h1>
          <div class="tick-item">
            <Icon
              name="icon-park-outline:correct"
              color="#32CD32"
              class="icon-sm"
            />
            <h1>Chăn</h1>
          </div>
          <div class="tick-item">
            <Icon
              name="icon-park-outline:correct"
              color="#32CD32"
              class="icon-sm"
            />
            <h2>Gối</h2>
          </div>
          <div class="tick-item">
            <Icon
              name="icon-park-outline:correct"
              color="#32CD32"
              class="icon-sm"
            />
            <h2>Tủ Lạnh</h2>
          </div>
          <div class="tick-item">
            <Icon
              name="icon-park-outline:correct"
              color="#32CD32"
              class="icon-sm"
            />
            <h2>TV</h2>
          </div>
          <div class="tick-item">
            <Icon
              name="icon-park-outline:correct"
              color="#32CD32"
              class="icon-sm"
            />
            <h2>Điều Hòa</h2>
          </div>
          <div class="tick-item">
            <Icon
              name="icon-park-outline:correct"
              color="#32CD32"
              class="icon-sm"
            />
            <h2>Nóng Lạnh</h2>
          </div>
          <div class="tick-item">
            <Icon
              name="icon-park-outline:correct"
              color="#32CD32"
              class="icon-sm"
            />
            <h2>WC</h2>
          </div>
        </div>
      </div>
      <div class="service-box">
        <div>
          <h1 class="font-semibold">Mạng Cung Cấp</h1>
          <div class="tick-item">
            <Icon
              name="icon-park-outline:correct"
              color="#32CD32"
              class="icon-sm"
            />
            <h2>HOÀN TOÀN MIỄN PHÍ</h2>
          </div>
          <div class="tick-item">
            <Icon
              name="icon-park-outline:correct"
              color="#32CD32"
              class="icon-sm"
            />
            <div class="flex w-full justify-between">
              <h2>WIFI Dải Tần</h2>
              <h2>2.4Ghz</h2>
            </div>
          </div>
          <div class="tick-item">
            <Icon
              name="icon-park-outline:correct"
              color="#32CD32"
              class="icon-sm"
            />
            <div class="flex w-full justify-between">
              <h2>WIFI Dải Tần</h2>
              <h2>5Ghz</h2>
            </div>
          </div>
        </div>
        <div>
          <h1 class="font-semibold">Phân Bố</h1>
          <div class="tick-item">
            <Icon
              name="icon-park-outline:correct"
              color="#32CD32"
              class="icon-sm"
            />
            <h1>Mỗi Tầng Nhiều Mạng</h1>
          </div>
          <div class="tick-item">
            <Icon
              name="icon-park-outline:correct"
              color="#32CD32"
              class="icon-sm"
            />
            <h2>Kết Nối Liên Tục</h2>
          </div>
          <div class="tick-item">
            <Icon
              name="icon-park-outline:correct"
              color="#32CD32"
              class="icon-sm"
            />
            <h2>Tốc Độ Ổn Định</h2>
          </div>
        </div>
      </div>
      <div class="service-box">
        <div>
          <h1 class="font-semibold">Gara Xe</h1>
          <div class="tick-item">
            <Icon
              name="icon-park-outline:correct"
              color="#32CD32"
              class="icon-sm"
            />
            <h2>Xe Đạp</h2>
          </div>
          <div class="tick-item">
            <Icon
              name="icon-park-outline:correct"
              color="#32CD32"
              class="icon-sm"
            />
            <h2>Xe Máy</h2>
          </div>
          <div class="tick-item">
            <Icon
              name="icon-park-outline:correct"
              color="#32CD32"
              class="icon-sm"
            />
            <h2>Xe Phân Khối Lớn</h2>
          </div>
        </div>
        <div>
          <h1 class="font-semibold">Bãi Đỗ Xe Rộng Rãi</h1>
          <div class="tick-item">
            <Icon
              name="icon-park-outline:correct"
              color="#32CD32"
              class="icon-sm"
            />
            <h1>Xe 4 Chỗ</h1>
          </div>
          <div class="tick-item">
            <Icon
              name="icon-park-outline:correct"
              color="#32CD32"
              class="icon-sm"
            />
            <h2>Xe 7 Chỗ</h2>
          </div>
          <div class="tick-item">
            <Icon
              name="icon-park-outline:correct"
              color="#32CD32"
              class="icon-sm"
            />
            <h2>Xe Bán Tải</h2>
          </div>
        </div>
      </div>
      <div class="service-box">4</div>
      <div class="service-box">5</div>
      <div class="service-box">6</div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
