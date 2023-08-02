<template>
  <div>
    <h1>Review details</h1>
    <div 
      v-for="review in reviews"
      :key="review.id"
    >
      <h3>{{ review.attributes.Title }}</h3>
    </div>
  </div>
</template>

<script>
  import fetchData from '../composables/fetchData.js'

  export default {

    setup(){
      const {error,reviews} =  fetchData('http://localhost:1337/api/reviews')
      
      return{error,reviews}
    }
  }
  

</script>

<style>

</style>