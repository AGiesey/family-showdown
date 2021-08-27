<template>
  <PageLayout>
    <FullColumn>
      <h1>Teams</h1>
      <ul class="list-group">
        <li class="list-group-item" v-for="team in Teams" v-bind:key="team.id">
          <LeagueTeam v-bind:team="team" />
        </li>
      </ul>
    </FullColumn>
  </PageLayout>
</template>

<script>
  import PageLayout from '../_layout/PageLayout.vue';
  import LeagueTeam from '../LeagueTeam.vue';
  import FullColumn from '../_layout/FullColumn.vue';
  import Teams from '../../data/Teams';

  export default {
    name: 'LeaguePage',
    components: {
      PageLayout,
      FullColumn,
      LeagueTeam
    },
    data: function() {
      return {
        Teams
      }
    }
  }
</script>