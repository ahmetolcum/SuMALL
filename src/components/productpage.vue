<template>
  <v-content>
    <v-container>
      <v-layout>
        <v-flex>
          <v-col>
            <v-card class="mx-auto" max-width="800" elevation="9">
              <v-card-title> Product Overview </v-card-title>
              <v-card-media>
                <v-row justify="center">
                  <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    max-height="350"
                    max-width="550"
                    src="https://picsum.photos/id/11/500/300"
                  ></v-img>
                </v-row>
                <v-card-title>My_Products' Name</v-card-title>

                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <v-card-subtitle class="grey--text ml-4">
                      Rate this product!
                    </v-card-subtitle>
                    <v-rating v-model="rating" hover small></v-rating>
                  </v-row>
                </v-card-text>
              </v-card-media>
              <v-card-text>
                Price my products informations will be found there so that
                clients can easily read and want to buy them :)
              </v-card-text>
              <v-card-actions>
                <v-btn flat color="secondary" text right>
                  <v-icon x-large>mdi-cart</v-icon>Add to Cart!</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-flex>
        <v-spacer/>
        <v-card class="mx-auto" max-width="500" elevation="9">
          <v-card-title> You might also like... </v-card-title>
          <v-col   
          sm="400"
          md="300"
          lg="250"
          xl="200"
           v-for="(item, index) in 3" :key="index">
            <v-card class="mx-auto" max-width="400" elevation="9">
              <v-card-media>
                <v-row justify="center">
                  <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    max-height="300"
                    max-width="200"
                    src="https://picsum.photos/id/11/500/300"
                  ></v-img>
                </v-row>
              </v-card-media>
              <v-btn
                flat
                color="primary"
                text
                v-on:click="changepage('login')"
                link
                ><v-icon x-large> mdi-dots-horizontal </v-icon>
                Details
              </v-btn>
              <v-card-text>Price: 15.99$</v-card-text>
            </v-card>
          </v-col>
        </v-card>
      </v-layout>
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
  methods: {
    changepage(a) {
      //console.log('changepage')
      this.$router.push(a).catch(() => {});
    },
  },
};
</script>