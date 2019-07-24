<template>
<div>
  <Header> </Header>

  <div v-if="loading">
        Loading data...
  </div>

<div class="champion-list">
  <form class="sort-champions">
    <label for="champion-sort">Sort by :</label>
    <select name="sortBy" id="sortBy" @change="sortBy(sortType)" v-model="sortType">
        <option v-for="option in sortOptions" :value="option.value" :key="option.value"> {{option.text}} </option>
    </select>
  </form>
  
  <div class="champions">
    <ChampionCard v-bind:champion="champion" v-for="champion in champions" :key="champion.key"> 

    </ChampionCard>
  </div>
</div>
</div>
</template>


<script>
import ChampionCard from './ChampionCard'
import Header from '../Header'
export default {
  data() {
    return {
      loading: false,
      champions: null,
      sortType: 'Alphabetic',
       sortOptions: [
          { text: 'Alphabetic', value: 'Alphabetic' },
          { text: 'Cost', value: 'Cost' }
       ]
    };
  },
  mounted() {
    this.axios.get('https://solomid-resources.s3.amazonaws.com/blitz/tft/data/champions.json').then((response) => {
      const champions = response.data
      let result = [];
      for(var i in champions) {
        const champion = champions[i];
          result.push(champion);
      }
      this.champions = result;
    });
  },
  methods: {
    sortBy(sortType) {
      if (sortType === 'Cost') {
        this.champions.sort(function (a, b) {
          return b.cost - a.cost;
        });
      } else if (sortType === 'Alphabetic') {
        this.champions.sort(function (a, b) {
          return a.key.localeCompare(b.key);
        });
      }
    }
  },
  components: {
    ChampionCard, Header
  }
};
</script>