import './assets/scss/styles.scss';
import Vue from 'vue';
import router from './router';

const images = require('../assets/img/champions/*.png'); // this line is here so parcel correctly build all images to the dist folder

new Vue({ router: router }).$mount('#root');
