<template>
  <article @click="redirectTo(champion)" class="champion">
      <img class="champion-icon" :src="`${icons[champion.key]}`" :alt="champion.name">
      <h2 class="champion-name"> {{ champion.name }} </h2>
  </article>
</template>


<script>

import championIcons from '../assets/img/champions/small_icons/*.png'

export default {
  data() {
    return {
      icons: championIcons
    };
  },
  methods: {
    redirectTo(champion) {
      this.$router.push({ name: 'champion', params: { champion: champion.key }})
    }
  },
  mounted() {
  },
  props: ['champion']
  
};
</script>
