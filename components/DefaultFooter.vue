<template>
  <div>
    <h1>Color mode: {{ $colorMode.value }}</h1>
    <select v-model="$colorMode.preference" class="bg-white text-black">
      <option value="light"><p>Sáng</p></option>
      <option value="dark"><p>Tối</p></option>
    </select>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
