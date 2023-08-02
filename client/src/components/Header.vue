<template>
  <div class="flex p-3 border justify-center">
    <router-link class="text-xl font-medium mx-3" :to="{name:'home'}" >Home</router-link>
    <router-link class="text-xl font-medium mx-3" :to="{name:'category'}" >Category</router-link>
    <router-link class="text-xl font-medium mx-3" :to="{name:'review'}" >Review</router-link>
  </div>
</template>

<script setup>
import {RouterLink} from 'vue-router'

</script>

<style>

</style>