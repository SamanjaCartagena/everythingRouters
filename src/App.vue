<template>
<div>
<div id="nav">
<router-link to="/">Home</router-link><br/><br/>
<router-link to="/about">About</router-link><br/><br/>
<router-link to="/brazil">Brazil</router-link><br/><br/>
<router-link to="/hawaii">Hawaii</router-link><br/><br/>
<router-link to="/panama">Panama</router-link>
</div>
<div class="container">
<router-view></router-view>
</div>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

