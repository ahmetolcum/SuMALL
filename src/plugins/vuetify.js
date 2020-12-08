import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: colors.purple.darken4,
          secondary: colors.purple.darken2,
          accent: colors.grey.darken1,
          error: '#b71c1c',
        },
      },
    },
  })

export default new Vuetify({
});
