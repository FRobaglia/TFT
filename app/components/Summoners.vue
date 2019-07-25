<template>
<div>
  <Header> </Header>
      
      <form class="full">
        <h1 class="catch-phrase">Enter your summoner name and track your stats !</h1>
        <div class="flex">
          <input autocomplete="off" type="text" class="search-input" name="summonerName" id="summonerName" v-model="summonerName" placeholder="Search...">
          <button class="search-button" @click.stop.prevent="submit()" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </form>

</div>
  
</template>


<script>

import Header from './Header'

export default {
  data() {
    return {
      summonerName: '',
    };
  },
  methods: {
    submit() {
      this.summonerName = this.summonerName.replace(/\s/g, '');
      this.$router.push({name: 'summoner', params: { summonerName: this.summonerName} })
    }
  },
  components: {
    Header
  }
};
</script>
