<template>
  <div class="home">
    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <h1 id="no">NO</h1>
    <Counter :since="since"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/Counter.vue'
import moment from 'moment-timezone'

export default {
  name: 'Home',
  components: {
    Counter,
  },
  data() {
    return {
      since: new Date(moment.tz("2021-01-04", "Asia/Tokyo").utc().format())
    }
  }
}
</script>

<style>
#no {
  font-size: 10em;
  padding-bottom: 0;
  margin-bottom: 0;
  margin-top: .2em;
}
</style>
