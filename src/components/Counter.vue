<template>
  <div v-if="loaded" class="hello">
    <h1><span id="days">{{ days }}</span> {{ "Day" | pluralize(days) }} {{ hours }} {{ "Hour" | pluralize(hours) }} {{ minutes }} Min.*</h1>
    <div>
      * Time since:
      <ul>
        <li><b>Workers</b> can't join their companies</li>
        <li><b>Students</b> can't pursue their education</li>
        <li><b>Families</b> are separated</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    since: Object
  },
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      loaded: false
    }
  },
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60
    },
    _hours() {
      return this._minutes * 60
    },
    _days() {
      return this._hours * 24
    },
  },
  mounted() {
    this.timePassed()
  },
  methods: {
    formatNum: num => (num < 10 ? "0" + num : num),
    timePassed() {
      const distance = new Date() - this.since

      this.days = this.formatNum(
        Math.floor(distance / this._days)
      )
      this.hours = this.formatNum(
        Math.floor((distance % this._days) / this._hours)
      )
      this.minutes = this.formatNum(
        Math.floor((distance % this._hours) / this._minutes)
      )
      this.seconds = this.formatNum(
        Math.floor((distance % this._minutes) / this._seconds)
      )

      this.loaded = true
    }
  },
  created() {
    this.interval = setInterval(() => this.timePassed(), this._minutes);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#days {
  font-size: 2em;
}
</style>
