<template>
  <div class="navbar sticky top-0 z-20">
    <div class="nav-container">
      <NuxtLink to="/">
        <svg-icon name="binhminhlogo" class="header-logo" />
      </NuxtLink>
      <nav>
        <ul class="flex gap-10">
          <select
            v-model="$colorMode.preference"
            class="hidden rounded-lg border border-gray-500 bg-white p-1 font-semibold text-black md:block"
          >
            <option value="system"><p>Hệ thống</p></option>
            <option value="light"><p>Sáng</p></option>
            <option value="dark"><p>Tối</p></option>
          </select>
          <!-- <NuxtLink to="/travel">
            <Icon
              name="ph:map-pin-bold"
              color="black"
              class="icon-title is-mobile"
            />
            <p class="nav-link is-desktop">ĐỊA ĐIỂM</p>
          </NuxtLink>
          <NuxtLink to="/service">
            <Icon
              name="ph:map-pin-bold"
              color="black"
              class="icon-title is-mobile"
            />
            <p class="nav-link is-desktop">DỊCH VỤ</p>
          </NuxtLink>
          <NuxtLink to="/rent">
            <Icon
              name="ph:map-pin-bold"
              color="black"
              class="icon-title is-mobile"
            />
            <p class="nav-link is-desktop">THUÊ PHÒNG</p>
          </NuxtLink> -->
          <NuxtLink to="/contact">
            <Icon
              name="hugeicons:contact-02"
              color="black"
              class="icon-title is-mobile"
            />
            <p class="nav-link is-desktop">LIÊN HỆ</p>
          </NuxtLink>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      scrolled: false,
    };
  },
  watch: {
    scrolled() {
      if (this.scrolled) {
        this.$el.classList.add("navbar-active");
      } else {
        this.$el.classList.remove("navbar-active");
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 20;
    },
  },
};
</script>

<style lang="css" scoped>
.header-logo {
  width: calc(3rem + 2vw);
  aspect-ratio: 1/1;
  @media screen(sm) {
    width: calc(3rem + 3vw);
  }
}

.navbar {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
  transition: 0.3s;
}

.navbar-active {
  @apply border-b-2 border-gray-400 py-1;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 0 0 15px 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.03);
}

.dark .navbar-active {
  @apply border-b-2 border-gray-400 py-1;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 0.9);
}
.nuxt-link-active {
  @apply -translate-y-1 scale-110 font-semibold text-red-600 transition delay-150 duration-300 ease-in-out;
}
.nav-container {
  @apply mx1 flex items-center justify-between;
}
</style>
