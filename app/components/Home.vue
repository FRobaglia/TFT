<template>
  <main>
    
  <h1> TFT </h1>

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
      champions: 'ok'
    };
  },
  mounted() {

    this.fetchURL('https://solomid-resources.s3.amazonaws.com/blitz/tft/data/champions.json');
  },
  methods: {
    fetchURL(url) {
      fetch(url)
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.champions = data
        })
        .catch(err => {
          console.error('error')
        })
    }
  },
  components: {
    ChampionCard
  }
};
</script>
