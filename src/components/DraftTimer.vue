<template>
  <div>
    <!-- <h2>Draft Countdown:</h2> -->
    <!-- <p class="counter">{{countDownTime.toLocaleString('en-US')}}</p> -->
    <p>The Family Showdown draft is set for {{draftTime.toLocaleString('en-US')}}</p>
    <p>The current time is {{currentTime.toLocaleString('en-US')}}</p>
  </div>
</template>

<script>
export default {
  name: 'DraftTimer',
  data() {
    return {
      draftTime: new Date('August 29, 2021 06:00:00 pm'),
      currentTime: new Date(),
    }
  },
  // computed: {
  //   countDownTime: {
  //     get: function() {

  //       return this.draftTime - this.currentTime
  //     },
  //     set: function(now) {
  //       this.currentTime = now;
  //     }
  //   }
  // },
  // methods: {
  //   countDownTimer() {
  //     setTimeout(() => {
  //       this.countDownTime = this.draftTime - Date.now();
  //     }, 1000)
  //   }
  // },
  // mounted: function() {
  //   this.countDownTimer()
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .counter {
    font-size: 5em;
  }
</style>
