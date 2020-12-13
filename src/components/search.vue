<template>
  <v-form>
    <v-container>
        <template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Regular"
          ></v-text-field>
        </v-col>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field label="Regular"></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mb-4">
        <v-col
          sm="6"
          md="4"
          lg="3"
          xl="2"
          v-for="(item, index) in 200"
          :key="index"
        >
          <v-card>
            <v-img
              height="200px"
              :src="`https://picsum.photos/500/300?image=${index + 1}`"
              :lazy-src="`https://picsum.photos/10/6?image=${index + 1}`"
            />
            <v-card-subtitle class=""> Product ID {{ item }}</v-card-subtitle>
            <v-card-text class="text--primary"
              ><div>product_name</div>
              <div>product_description</div>
              <div>product_unit_price</div></v-card-text
            >
            <v-card-actions>
              <v-btn
                flat
                color="primary"
                text
                v-on:click="changepage('product')"
                link
              >
                Details
              </v-btn>
              <v-spacer />
              <v-btn flat color="secondary" text> Add to Basket </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      
      </v-form>
    </v-container>
  </v-form>
</template>

<script>
import productpage from "../productpage";
import login from "./login";
import signup from "./signup";
import profilepage from "./profilepage";
import searchpage from "./searchpage";
export default {
  name: "App",

  components: {
    productpage,
    login,
    signup,
    profilepage,
    searchpage,
  },
  methods: {
    changepage(a) {
      //console.log('changepage')
      this.$router.push(a).catch(() => {});
    },
  },
};
</script>