<template>
<div v-if="champion" class="champion-full">
  
  <div class="informations">

    <div class="idendity">
      <img class="champion-image" :src="`${image[champion.key + '_0']}`" :alt="champion.name">
      <h2 :class="`tier${champion.cost}`"> {{ champion.name }} </h2>
    </div>

    <ul class="classes">
      <li v-for="origin in champion.origin" :key="origin"> {{ origin }} </li>
      <li v-for="championClass in champion.class" :key="championClass"> {{ championClass }} </li>
    </ul>
  </div>

  <div class="ability">

      <h1> {{ champion.ability.name }} </h1>
      <p> {{ champion.ability.description }} </p>

      <ul class="stats">
        <li v-for="stat in champion.ability.stats" :key="stat.type"> {{ stat.type }} : {{ stat.value }} </li>
      </ul>

  </div>

</div>
</template>


<script>

import image from '../assets/img/champions/tiles/*.jpg'

export default {
  data() {
    return {
      champion: null,
      image: image
    };
  },
  mounted() {
    this.axios.get('https://solomid-resources.s3.amazonaws.com/blitz/tft/data/champions.json').then((response) => {
      const champions = response.data
      const entries = Object.entries(champions)

      entries.forEach(champion => {
        if (champion[1].key === this.$route.params.champion) {
          this.champion = champion[1];
        }
      })
    })
  },
};
</script>