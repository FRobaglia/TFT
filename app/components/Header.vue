<template>
    <header>
    <button ref="navButton" @click="toggleNav" class="nav-button"> 
      <div class="burger-icon"> </div>
    </button>
    <nav ref="nav">
      <ul>
        <li> TFT Legends </li>
        <li><router-link to="/summoners"> Tracker </router-link></li>
        <li><router-link to="/champions"> Champions </router-link></li>
        <li class="soon" ><router-link to="/items"> Items </router-link></li>
        <li class="soon" ><router-link to="/statistics"> Statistics </router-link></li>
      </ul>

    </nav>
        <form>
      <div class="flex">
      <input autocomplete="off" type="text" class="search-input" name="summonerName" id="summonerName" v-model="summonerName" placeholder="Search...">
      <button class="search-button" @click.stop.prevent="submit()" type="submit">
        <i class="fas fa-search"></i>
     </button>
     </div>
    </form>
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
      document.location.reload();
    },
    toggleNav() {
      this.$refs.nav.classList.toggle('is-open');
      this.$refs.navButton.classList.toggle('close');
    }
  }
}
</script>
