<template >
  <v-content>
  <v-carousel v-model="model">
    <v-carousel-item
      v-for="(add) in adds"
      :key="add.color"
    >
      <v-sheet
        :color="add.color"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">
            {{add.text}}
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
    <v-container>
      <v-row class="mb-4">
        <v-col
          sm="6"
          md="4"
          lg="3"
          xl="2"
          v-for="(item, index) in 200"
          :key="index"
        >
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                :class="`elevation-${hover ? 24 : 6}`"
                class="mx-auto pa-6 transition-swing"
                shaped
                color="grey lighten-4"
                max-width="600"
              >
                <v-img
                  class="align-end"
                  height="200px"
                  :src="`https://picsum.photos/500/300?image=${index + 1}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${index + 1}`"
                  ><v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out deep-purple darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%"
                    >
                      $14.99
                    </div>
                  </v-expand-transition>
                </v-img>
                <h3 class="pt-6" style="position: relative">
                  Product ID {{ item }}
                </h3>
                <v-card-text class="font-weight-light"
                  ><div>product_name</div>
                  <div>product_description</div>
                  <div>product_unit_price</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn
                    flat
                    color="primary"
                    text
                    v-on:click="changepage('product')"
                    link
                    left
                    absolute
                    fab
                  >
                    <v-icon large>mdi-dots-horizontal</v-icon>
                  </v-btn>
                  <v-spacer />
                  <v-btn flat color="secondary" text absolute fab right
                    ><v-icon large>mdi-cart</v-icon></v-btn
                  >
                </v-card-actions>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import productpage from "./productpage";
import login from "./User/login";
import signup from "./User/signup";
import profilepage from "./User/profilepage";

export default {
  name: "App",  

  components: {
    productpage,
    login,
    signup,
    profilepage,
  },
  data: () => ({
      model: 0,
      adds: [
        {color:'primary', text:"Promotions"},
        {color:'secondary', text:"will"},
        {color:'yellow darken-2', text:"be"},
        {color:'red', text:"there"},
        {color:'orange', text:"soon!"},
      ],
    menuitems: [
      { icon: "mdi-login", title: "Log In" },
      { icon: "mdi-pen", title: "Sign Up" },
      { icon: "mdi-account", title: "My Account" },
    ],
    navlistitems: [
      { icon: "mdi-trending-up", text: "Popular Products" },
      { icon: "mdi-sale", text: "Top Sales" },
      { icon: "mdi-heart", text: "My Favorites" },
      { icon: "mdi-laptop-chromebook", text: "Technology" },
      { icon: "mdi-hanger", text: "Clothing" },
      { icon: "mdi-flower", text: "Decoration" },
      { icon: "mdi-history", text: "History" },
    ],
    drawer: false,
    menu: false,
    menu2: false,
    menu3: false,
    theme: false,
  }),
  methods: {
    changepage(a) {
      //console.log('changepage')
      this.$router.push(a).catch(() => {});
    },
  },
  watch: {
    theme: function (next) {
      this.$vuetify.theme.dark = next;
    },
  },
};
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>