<template>
  <v-content>
    <v-container>
      <v-layout>
        <v-flex>
          <v-col>
            <v-card class="mx-auto" max-width="800" elevation="9" rounded>
              <v-card-title> {{product.name}} </v-card-title>
              <v-card-media>
                <v-row justify="center">
                  <v-img
                    max-height="800"
                    max-width="700"
                    :src="product.image"
                  ></v-img>
                </v-row>
                <v-card-title>{{product.product_id}}</v-card-title>
                <v-card-text>
                  <v-row align="center" class="mx-auto">
                    <v-card-subtitle class="grey--text ml-4">
                      Rate this product!
                    </v-card-subtitle>
                    <v-rating v-model="rating" hover small></v-rating>
                  </v-row>
                </v-card-text>
              </v-card-media>
              <v-card-text>
               {{product.description}} 
              </v-card-text>
              <v-card-title >
               ₺{{product.unit_price}} 
              </v-card-title>
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
           v-for="(item, index) in 4" :key="index">
            <v-card class="mx-auto" max-width="300" elevation="9" rounded> 
              <v-card-media>
                <v-row justify="center">
                  <v-img
                    max-width="300"
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
              <v-card-text>product.unit_price</v-card-text>
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
import home from "./home"

export default {
  name: "productpage",
  data() {
    return {
      id: this.$route.params.id,
      product:{},
      id1: (this.$route.params.id + 1), product1:{},
      id2: (this.$route.params.id + 2), product2:{},
      id3: (this.$route.params.id + 3), product3:{},
    }
  }, 
  components: {
    productpage,
    home,
    login,
    signup,
    profilepage,
  },
  created () {
      const requestOption={
      method:"GET",
      headers: {"Content-Type" : "application/json"},
      };
      fetch(`http://localhost:5000/api/product/getbyId/${this.id}`, requestOption)
      .then(async response => {const data =await response.json();
      // check for error response
      //console.log(data[0])
      var i;
      this.product = data[0];
      console.log(data);
      console.log(product);
      if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
      }
      })
      .catch(error => {
        this.errorMessage = error;
        console.error('There was an error!', error);
      })
  },
  methods: {
    changepage(a) {
      this.$router.push(a).catch(() => {});
    },
  },
};
</script>