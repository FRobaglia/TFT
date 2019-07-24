<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/champions">Champions</router-link></li>
        <li><router-link to="/summoners">Tracker</router-link></li>
        <li class="soon"><router-link to="/items">Items</router-link></li>
        <li class="soon"><router-link to="/statistics">Statistics</router-link></li>
      </ul>

    <form>
      <div class="flex">
      <input type="text" class="search-input" name="summonerName" id="summonerName" v-model="summonerName" placeholder="Search...">
      <button class="search-button" @click.stop.prevent="submit()" type="submit">
        <i class="fas fa-search"></i>
     </button>
     </div>
    </form>

    </nav>
  </header>
</template>


<script>
export default {
  data() {
    return {
      summonerName: '',
    }
  },
  methods: {
    submit() {
      this.$forceUpdate;
      this.summonerName = this.summonerName.replace(/\s/g, '');
      this.$router.push({name: 'summoner', params: { summonerName: this.summonerName} })
    }
  }
}
</script>
