<template>
<div>
<TheNavigation/>
<div class="container">
<router-view></router-view>
</div>
</div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue'
export default {
  
  name: 'App',
  components: {
    TheNavigation
  }
}
</script>

