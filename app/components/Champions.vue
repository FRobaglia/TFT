<template>
  <main>
    
  <h1> Champions </h1>

  <div v-if="loading">
        Loading data...
  </div>

  <div class="champions">
    <ChampionCard v-bind:champion="champion" v-for="champion in champions" :key="champion.key"> 

    </ChampionCard>
  </div>

  </main>
</template>


<script>

import ChampionCard from './ChampionCard'

export default {
  data() {
    return {
      loading: false,
      champions: null
    };
  },
  mounted() {
    this.fetchURL('https://solomid-resources.s3.amazonaws.com/blitz/tft/data/champions.json');
  },
  methods: {
    fetchURL(url) {
      this.loading = true
      fetch(url)
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.loading = false
          this.champions = data
        })
        .catch(err => {
          console.error(err)
        })
    }
  },
  components: {
    ChampionCard
  }
};
</script>
