<template>
<div>
  <Header> </Header>
  <h1 v-if="loading"> Loading data... </h1>

  <div class="summoner" v-else-if="!error && TFT !== null">
    
    <h1 class="summoner-name"> {{ summoner.name }} </h1>
    <img class="summoner-emblem" :src="`${emblems[TFT.tier]}`" alt="">
    <p class="summoner-rank"> {{ TFT.tier }} {{ TFT.rank }}  </p>
    <p class="summoner-points"> <span class="amount">{{ TFT.leaguePoints }}</span> LP </p>


  </div>

  <h1 v-else> {{ error }} </h1>
  </div>
</template>


<script>

import Header from './Header';


import emblems from '../assets/img/emblems/*.png'

export default {
  data() {
    return {
      emblems: emblems,
      loading: true,
      summoner: {},
      queues: [],
      TFT: null,
      error: false,
      config: {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'  
        }
      }
    };
  },
  mounted() {
    this.fetchSummoner();
  },
  methods: {
    fetchSummoner() {
      let url = `../api/end_points`;
      console.log(url + '/summoner.php?s=' + this.$route.params.summonerName);
      this.axios.get(`${url}/summoner.php?s=${this.$route.params.summonerName}`, this.config).then((response) => {
        this.summoner = response.data
        console.log(response.data);

        if (Number.isInteger(this.summoner.summonerLevel)) {
          this.axios.get(`${url}/queues.php?s=${this.summoner.id}`, this.config).then((response) => {
          this.queues = response.data
          if (Array.isArray(this.queues)) {
            this.TFT = this.queues.find(function(queue) {
              return queue.queueType === 'RANKED_TFT';
            });
            if (typeof this.TFT !== 'object' || this.TFT === null) {
              this.error = `Summoner ${this.summoner.name} doesn't have any ranked game on TFT.`
            }
          } else {
            this.error = `Summoner ${this.summoner.name} doesn't have any ranked game on TFT.`
          }
          this.loading = false
          });
        } else {
          this.loading = false
          this.error = `Summoner ${this.$route.params.summonerName} doesn't exist.`
        }
      });
      this.$forceUpdate;
    }
  },
  components: {
    Header
  }
};
</script>
