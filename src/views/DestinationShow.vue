<template>
  <div>
      <h2>{{destination.name}}</h2>
      <h2>{{destination.id}}</h2>
  </div>
</template>

<script>
import sourceData from '/data.json'
export default {
    computed:{
        destinationId(){
            return parseInt(this.$route.params.id)
        },
        destination(){
            return sourceData.destinations.find(destination => destination.id === this.destinationId)
        }
    }

}
</script>

<style>

</style>