<template>
  <article class="champion">
    <img class="champion-icon" :src="images[champion.key]" :alt="champion.name">
    <h2 class="champion-name"> {{ champion.name }} </h2>
  </article>
</template>


<script>

import championsImages from '../assets/img/champions/*.png'

export default {
  data() {
    return {
      images: championsImages
    };
  },
  props: ['champion']
  
};
</script>
