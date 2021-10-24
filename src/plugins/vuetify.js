import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import "@fortawesome/fontawesome-free/css/all.css";




Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#211b34',
        secondary: '#403d50',
        accent: '#D1D5Db',
        error: '#b71c1c',
      },
    },

  },
    icons: {
        iconfont: "mdi" || "fa",
      },
});
