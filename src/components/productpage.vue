<template>
  <v-content>
    <v-container>
      <v-layout>
        <v-flex>
          <v-col>
            <v-card class="mx-auto" max-width="800" elevation="9" rounded>
              <v-card-title> product_title</v-card-title>
              <v-card-media>
                <v-row justify="center">
                  <v-img
                    max-height="800"
                    max-width="700"
                    :src="'https://picsum.photos/id/11/500/300'"
                  ></v-img>
                </v-row>
                <v-card-title>product_name</v-card-title>

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
        <v-card max-width="350" elevation="9" rounded >
          <v-card-title> You might also like... </v-card-title>
          <v-col   
          sm="900"
          md="700"
          lg="550"
          xl="300"
           v-for="(item, index) in 3" :key="index">
            <v-card class="mx-auto" max-width="300" elevation="9" rounded> 
              <v-card-media>
                <v-row justify="center">
                  <v-img
                    max-width="300"
                    lazy-src="https://picsum.photos/id/11/10"
                    src="https://picsum.photos/id/11/500/300"
                  ></v-img>
                </v-row>
              </v-card-media>
              <v-btn
                flat
                absolute
                right
                color="primary"
                text
                v-on:click="changepage('login')"
                link
                ><v-icon x-large> mdi-dots-horizontal </v-icon>
                Details
              </v-btn>
              <v-card-text>14.99$</v-card-text>
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
      this.$router.push(a).catch(() => {});
    },
  },
};
</script>