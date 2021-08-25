<template>
  <div>
    <h2>Draft Countdown:</h2>
    <p class="counter">{{countdown}}.</p>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'DraftTimer',
  data() {
    return {
      draftTime: moment('August 29, 2021 06:00:00 pm'),
      countdown: 0,
      cancelInterval: false
    }
  },
  methods: {
    getDurationString() {
      const now = moment();
      const duration = moment.duration(this.draftTime - now, 'milliseconds');
      return `${duration.days()} Days, ${duration.hours()} Hours; ${duration.minutes()} Minutes; and ${duration.seconds()} Seconds`
    },
    startCountdown() {
     this.cancelInterval = setInterval(() => {
        this.countdown = this.getDurationString();
      }, 1000)
    }
  },
  mounted: function() {
    this.countdown = moment(this.draftTime).fromNow();
    this.startCountdown();
  },
  unmounted: function() {
    if (this.cancelInterval) {
      this.cancelInterval();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .counter {
    font-size: 2em;
  }
</style>
