<template>
  <div class="navbar sticky top-0">
    <div class="flex items-center justify-between px-20">
      <NuxtLink to="/">
        <svg-icon name="binhminhlogo" class="header-logo" />
      </NuxtLink>
      <nav>
        <ul class="flex gap-10">
          <NuxtLink to="/travel">
            <h1 class="nav-link">ĐỊA ĐIỂM</h1>
          </NuxtLink>
          <NuxtLink to="/service">
            <h1 class="nav-link">DỊCH VỤ</h1>
          </NuxtLink>
          <NuxtLink to="/rent">
            <h1 class="nav-link">THUÊ PHÒNG</h1>
          </NuxtLink>
          <NuxtLink to="/contact">
            <h1 class="nav-link">LIÊN HỆ</h1>
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
      this.scrolled = window.scrollY > 25;
    },
  },
};
</script>

<style lang="css" scoped>
.header-logo {
  width: 100px;
  height: 100px;
}

.navbar {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
  transition: 0.3s;
}

.navbar-active {
  @apply border-b-2 border-gray-400 py-2;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 0 0 30px 30px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.nuxt-link-active {
  @apply -translate-y-1 scale-110 font-semibold text-red-600 transition delay-150 duration-300 ease-in-out;
}
</style>
