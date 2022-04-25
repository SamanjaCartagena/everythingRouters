<template>
  <div id="nav">
<router-link to="/">Home</router-link><br/><br/>
<router-link to="/about">About</router-link><br/><br/>
<router-link to="/brazil">Brazil</router-link><br/><br/>
<router-link to="/hawaii">Hawaii</router-link><br/><br/>
<router-link to="/panama">Panama</router-link>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
 #nav .vue-school-active-link{
   color:red;
   border-bottom: 2px solid red;
 }
</style>