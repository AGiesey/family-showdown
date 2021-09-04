<script>
  export default {
    name: 'LeagueTeam',
    props: {
      team: {
        type: Object,
        default: function() {
          return {
            id: 0,
            manager: '',
            team: '',
            wins: 0,
            losses: 0,
            place: 0,
            waiverOrder: 0
          }

        }
      }
    }
  }
</script>

<template>
  <div class="team-container">
    <h3>{{team.team}}</h3>
    <div class="info-container">
      <p><span>Manager: </span>{{team.manager}}</p>
      <p>Wins: {{team.wins}}</p>
      <p>Losses: {{team.losses}}</p>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
  @import '../scss/variables.scss';

  .team-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      color: $secondary
    }

    .info-container{
      display:flex;
      padding: .3em;
      align-items: center;
      justify-content: space-evenly;
      flex-basis: 40%;
    }
  }
</style>