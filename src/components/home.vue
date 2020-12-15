<template >
  <v-main>
    <v-carousel v-model="model">
      <v-carousel-item v-for="add in adds" :key="add.color">
        <v-sheet :color="add.color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
              {{ add.text }}
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-container>
      <v-row class="mb-4" >
        <v-col
          sm="6"
          md="4"
          lg="3"
          xl="2"
          v-for="product in products" v-bind:key="product"
        >
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                :class="`elevation-${hover ? 24 : 6}`"
                class="mx-auto pa-6  transition-swing"
                rounded
                color="grey lighten-4"
                max-width="600"
                min-height="550"
              >
                <v-img
                  class="align-end"
                  height="200px"
                  :src="product.image"
                  ><v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out deep-purple darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%"
                    >
                     ₺{{product.unit_price}}
                    </div>
                  </v-expand-transition>
                </v-img>
                <h3 class="pt-6" style="position: relative">
                {{product.name}}
                </h3>
                <v-card-text class="font-weight-light"
                  ><div>{{product.product_id}}</div>
                  <div>{{product.description}}</div>
                  <div>₺{{product.unit_price}}</div>
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
  </v-main>
</template>

<script>
import productpage from "./productpage";
import login from "./User/login";
import signup from "./User/signup";
import profilepage from "./User/profilepage";
import mycart from "@/components/User/cart";

export default {
  name: "App",  

  components: {
    productpage,
    login,
    signup,
    profilepage,
    mycart,
},
  data: () => ({
    products:[],
    model: 0,
    adds: [
        {color:'primary', text:"Promotions"},
        {color:'secondary', text:"will"},
        {color:'yellow darken-2', text:"be"},
        {color:'red', text:"there"},
        {color:'orange', text:"soon!"},
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
      this.$router.push(a).catch(() => {});
    },
    allproducts(){
 
   }
  },
  watch: {
    theme: function (next) {
      this.$vuetify.theme.dark = next;
    },
  },
  created() {
      console.log("this is created")
      const requestOption={
      method:"GET",
      headers: {"Content-Type" : "application/json"},
      };
      fetch("http://localhost:5000/api/product/main", requestOption)
      .then(async response => {const data =await response.json();
      // check for error response
      //console.log(data[0])
      var i;
      for(i=0;i<13;i++){
        this.products[i] = data[i]
        //console.log(this.products[i])
      }
      //this.products = JSON.stringify(data)
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
  beforeCreate() {
      console.log("this is beforeCreate")
        const requestOption={
        method:"GET",
        headers: {"Content-Type" : "application/json"},
      };
      fetch("http://localhost:5000/api/product/main", requestOption)
      .then(async response => {const data =await response.json();
      // check for error response
      //console.log(data[0])
      var i;
      for(i=0;i<13;i++){
        this.products[i] = data[i]
        //console.log(this.products[i])
      }
      //this.products = JSON.stringify(data)
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
  computed: {
    propertycomputed(){
      console.log("this is computed")
      return this.products
    }
  }
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